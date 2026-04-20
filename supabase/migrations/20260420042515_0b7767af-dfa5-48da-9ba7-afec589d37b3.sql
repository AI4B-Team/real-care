-- ============================================================
-- Real Care — Full backend schema with proper auth + RLS
-- ============================================================

-- 1. Roles enum + table + has_role() helper (security-definer to avoid RLS recursion)
CREATE TYPE public.app_role AS ENUM ('admin', 'staff', 'patient');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE POLICY "Users can view own roles"
  ON public.user_roles FOR SELECT
  USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins manage roles"
  ON public.user_roles FOR ALL
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 2. Generic updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- 3. PATIENTS (linked to auth.users via user_id)
CREATE TABLE public.patients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

  email TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  date_of_birth DATE,
  gender TEXT CHECK (gender IN ('male', 'female', 'other')),
  state TEXT,

  address_line1 TEXT,
  address_line2 TEXT,
  address_city TEXT,
  address_state TEXT,
  address_zip TEXT,

  openloop_patient_id TEXT UNIQUE,
  stripe_customer_id TEXT UNIQUE,
  klaviyo_profile_id TEXT,

  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','active','paused','cancelled')),
  hsa_fsa_on_file BOOLEAN NOT NULL DEFAULT FALSE,

  partner_patient_id UUID REFERENCES public.patients(id),
  couples_discount_active BOOLEAN NOT NULL DEFAULT FALSE
);

ALTER TABLE public.patients ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Patients view own record"
  ON public.patients FOR SELECT
  USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'staff') OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Patients update own record"
  ON public.patients FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Patients insert own record"
  ON public.patients FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE TRIGGER trg_patients_updated_at
  BEFORE UPDATE ON public.patients
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 4. Auto-create patient row + assign 'patient' role on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.patients (user_id, email, first_name, last_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'first_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'last_name', '')
  )
  ON CONFLICT (user_id) DO NOTHING;

  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'patient')
  ON CONFLICT (user_id, role) DO NOTHING;

  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 5. CASES
CREATE TABLE public.cases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES public.patients(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

  openloop_case_id TEXT UNIQUE,
  treatment_category TEXT NOT NULL,
  provider_id TEXT,
  provider_name TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (
    status IN ('pending','in_review','approved','denied','prescription_sent','completed')
  ),
  denial_reason TEXT,
  provider_notes TEXT,
  intake_submitted_at TIMESTAMPTZ,
  consent_signed BOOLEAN NOT NULL DEFAULT FALSE,
  consent_signed_at TIMESTAMPTZ
);

ALTER TABLE public.cases ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Patients view own cases"
  ON public.cases FOR SELECT
  USING (
    patient_id IN (SELECT id FROM public.patients WHERE user_id = auth.uid())
    OR public.has_role(auth.uid(), 'staff')
    OR public.has_role(auth.uid(), 'admin')
  );

CREATE TRIGGER trg_cases_updated_at
  BEFORE UPDATE ON public.cases
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 6. PRESCRIPTIONS
CREATE TABLE public.prescriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id UUID NOT NULL REFERENCES public.cases(id) ON DELETE CASCADE,
  patient_id UUID NOT NULL REFERENCES public.patients(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

  openloop_prescription_id TEXT UNIQUE,
  medication TEXT NOT NULL,
  dosage TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  refills_remaining INTEGER NOT NULL DEFAULT 11,
  pharmacy_id TEXT NOT NULL CHECK (
    pharmacy_id IN ('empower','redrock','healthwarehouse','precision','triadrx')
  ),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (
    status IN ('pending','sent_to_pharmacy','processing','shipped','delivered','expired')
  )
);

ALTER TABLE public.prescriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Patients view own prescriptions"
  ON public.prescriptions FOR SELECT
  USING (
    patient_id IN (SELECT id FROM public.patients WHERE user_id = auth.uid())
    OR public.has_role(auth.uid(), 'staff')
    OR public.has_role(auth.uid(), 'admin')
  );

CREATE TRIGGER trg_prescriptions_updated_at
  BEFORE UPDATE ON public.prescriptions
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 7. ORDERS
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES public.patients(id) ON DELETE CASCADE,
  prescription_id UUID NOT NULL REFERENCES public.prescriptions(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

  stripe_payment_intent_id TEXT UNIQUE,
  pharmacy_id TEXT NOT NULL,
  pharmacy_order_id TEXT,
  tracking_number TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (
    status IN ('pending','paid','sent_to_pharmacy','processing','shipped','delivered','failed','refunded')
  ),

  amount_cents INTEGER NOT NULL,
  currency TEXT NOT NULL DEFAULT 'usd',
  hsa_fsa BOOLEAN NOT NULL DEFAULT FALSE,
  discount_code TEXT,
  discount_amount_cents INTEGER NOT NULL DEFAULT 0,

  ship_to_name TEXT,
  ship_to_line1 TEXT,
  ship_to_line2 TEXT,
  ship_to_city TEXT,
  ship_to_state TEXT,
  ship_to_zip TEXT,
  requires_cold_chain BOOLEAN NOT NULL DEFAULT FALSE,

  estimated_delivery DATE,
  delivered_at TIMESTAMPTZ
);

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Patients view own orders"
  ON public.orders FOR SELECT
  USING (
    patient_id IN (SELECT id FROM public.patients WHERE user_id = auth.uid())
    OR public.has_role(auth.uid(), 'staff')
    OR public.has_role(auth.uid(), 'admin')
  );

CREATE TRIGGER trg_orders_updated_at
  BEFORE UPDATE ON public.orders
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 8. SUBSCRIPTIONS
CREATE TABLE public.subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES public.patients(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

  stripe_subscription_id TEXT UNIQUE NOT NULL,
  stripe_price_id TEXT NOT NULL,
  treatment_category TEXT NOT NULL,
  product_name TEXT NOT NULL,
  amount_cents INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'active' CHECK (
    status IN ('active','past_due','paused','cancelled','unpaid')
  ),
  current_period_start TIMESTAMPTZ,
  current_period_end TIMESTAMPTZ,
  cancelled_at TIMESTAMPTZ,
  cancellation_reason TEXT,
  couples_discount BOOLEAN NOT NULL DEFAULT FALSE,
  discount_percent INTEGER NOT NULL DEFAULT 0
);

ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Patients view own subscriptions"
  ON public.subscriptions FOR SELECT
  USING (
    patient_id IN (SELECT id FROM public.patients WHERE user_id = auth.uid())
    OR public.has_role(auth.uid(), 'staff')
    OR public.has_role(auth.uid(), 'admin')
  );

CREATE TRIGGER trg_subscriptions_updated_at
  BEFORE UPDATE ON public.subscriptions
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- 9. REFILL CHECKINS
CREATE TABLE public.refill_checkins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES public.patients(id) ON DELETE CASCADE,
  prescription_id UUID REFERENCES public.prescriptions(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

  weight_lbs NUMERIC,
  side_effects TEXT,
  notes TEXT,
  approved_for_refill BOOLEAN NOT NULL DEFAULT FALSE
);

ALTER TABLE public.refill_checkins ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Patients view own checkins"
  ON public.refill_checkins FOR SELECT
  USING (
    patient_id IN (SELECT id FROM public.patients WHERE user_id = auth.uid())
    OR public.has_role(auth.uid(), 'staff')
    OR public.has_role(auth.uid(), 'admin')
  );

CREATE POLICY "Patients create own checkins"
  ON public.refill_checkins FOR INSERT
  WITH CHECK (
    patient_id IN (SELECT id FROM public.patients WHERE user_id = auth.uid())
  );

-- 10. CONTACT MESSAGES (anonymous form)
CREATE TABLE public.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  handled BOOLEAN NOT NULL DEFAULT FALSE
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact"
  ON public.contact_messages FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Staff view contact messages"
  ON public.contact_messages FOR SELECT
  USING (public.has_role(auth.uid(), 'staff') OR public.has_role(auth.uid(), 'admin'));

-- Indexes
CREATE INDEX idx_patients_user_id ON public.patients(user_id);
CREATE INDEX idx_cases_patient_id ON public.cases(patient_id);
CREATE INDEX idx_prescriptions_patient_id ON public.prescriptions(patient_id);
CREATE INDEX idx_orders_patient_id ON public.orders(patient_id);
CREATE INDEX idx_subscriptions_patient_id ON public.subscriptions(patient_id);
CREATE INDEX idx_refill_checkins_patient_id ON public.refill_checkins(patient_id);