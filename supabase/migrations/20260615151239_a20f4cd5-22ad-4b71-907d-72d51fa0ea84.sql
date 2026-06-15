
-- 1) Replace permissive patient self-update with a column-guarded version
DROP POLICY IF EXISTS "Patients update own record" ON public.patients;

CREATE POLICY "Patients update own record"
ON public.patients
FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Protected-column trigger: block self-changes to sensitive fields
CREATE OR REPLACE FUNCTION public.prevent_patient_protected_field_changes()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF auth.role() = 'service_role' THEN
    RETURN NEW;
  END IF;
  IF NEW.couples_discount_active IS DISTINCT FROM OLD.couples_discount_active
     OR NEW.partner_patient_id IS DISTINCT FROM OLD.partner_patient_id
     OR NEW.user_id IS DISTINCT FROM OLD.user_id
     OR NEW.openloop_patient_id IS DISTINCT FROM OLD.openloop_patient_id
     OR NEW.stripe_customer_id IS DISTINCT FROM OLD.stripe_customer_id
     OR NEW.klaviyo_profile_id IS DISTINCT FROM OLD.klaviyo_profile_id
     OR NEW.status IS DISTINCT FROM OLD.status THEN
    RAISE EXCEPTION 'Cannot modify protected patient fields';
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS patients_protect_fields ON public.patients;
CREATE TRIGGER patients_protect_fields
BEFORE UPDATE ON public.patients
FOR EACH ROW EXECUTE FUNCTION public.prevent_patient_protected_field_changes();

-- 2) Orders: explicit deny-by-default for non-service writes
CREATE POLICY "Block client inserts on orders"
ON public.orders AS RESTRICTIVE
FOR INSERT
TO authenticated, anon
WITH CHECK (false);

CREATE POLICY "Block client updates on orders"
ON public.orders AS RESTRICTIVE
FOR UPDATE
TO authenticated, anon
USING (false)
WITH CHECK (false);

CREATE POLICY "Block client deletes on orders"
ON public.orders AS RESTRICTIVE
FOR DELETE
TO authenticated, anon
USING (false);

-- 3) user_roles: deny any non-admin write paths explicitly
CREATE POLICY "Block non-admin inserts on user_roles"
ON public.user_roles AS RESTRICTIVE
FOR INSERT
TO authenticated, anon
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Block non-admin updates on user_roles"
ON public.user_roles AS RESTRICTIVE
FOR UPDATE
TO authenticated, anon
USING (public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Block non-admin deletes on user_roles"
ON public.user_roles AS RESTRICTIVE
FOR DELETE
TO authenticated, anon
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- 4) Tighten has_role exposure: revoke from anon/PUBLIC, keep for authenticated (needed by RLS)
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, app_role) TO authenticated, service_role;

-- 5) Realtime authorization: deny broadcast/presence subscriptions (we only use postgres_changes which is governed by table RLS)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_tables WHERE schemaname='realtime' AND tablename='messages') THEN
    EXECUTE 'ALTER TABLE realtime.messages ENABLE ROW LEVEL SECURITY';
    EXECUTE 'DROP POLICY IF EXISTS "Deny realtime broadcast/presence" ON realtime.messages';
    EXECUTE 'CREATE POLICY "Deny realtime broadcast/presence" ON realtime.messages FOR SELECT TO authenticated, anon USING (false)';
    EXECUTE 'DROP POLICY IF EXISTS "Deny realtime writes" ON realtime.messages';
    EXECUTE 'CREATE POLICY "Deny realtime writes" ON realtime.messages FOR INSERT TO authenticated, anon WITH CHECK (false)';
  END IF;
END$$;
