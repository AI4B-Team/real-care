import { useEffect, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader2, CheckCircle2, AlertCircle, ChevronLeft } from "lucide-react";
import PageLayout from "@/components/realcare/PageLayout";
import { usePatient } from "@/hooks/usePatient";
import { supabase } from "@/integrations/supabase/client";
import { getIntakeSet, type IntakeField } from "@/lib/intakeQuestions";

const PRETTY: Record<string, string> = {
  weight_loss: "Weight Loss",
  ed_treatment: "ED Treatment",
  testosterone: "Testosterone",
  hair_loss: "Hair Loss",
  menopause: "Menopause / HRT",
  mental_health: "Mental Health",
  skincare: "Skincare",
  peptides: "Peptides",
};

interface ExistingCase {
  id: string;
  status: string;
  treatment_category: string;
  consent_signed: boolean;
}

const Intake = () => {
  const { category = "" } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const { patient, loading: patientLoading } = usePatient();
  const set = useMemo(() => getIntakeSet(category), [category]);

  const [existingCase, setExistingCase] = useState<ExistingCase | null>(null);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [signature, setSignature] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!patientLoading && !patient) navigate("/login");
  }, [patient, patientLoading, navigate]);

  useEffect(() => {
    if (!patient || !category) return;
    (async () => {
      const { data } = await supabase
        .from("cases")
        .select("id,status,treatment_category,consent_signed")
        .eq("patient_id", patient.id)
        .eq("treatment_category", category)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();
      setExistingCase(data as ExistingCase | null);
      setLoading(false);
    })();
  }, [patient, category]);

  if (!set) {
    return (
      <PageLayout title="Intake">
        <div className="max-w-2xl mx-auto px-5 py-20 text-center">
          <AlertCircle className="w-12 h-12 mx-auto text-red mb-4" />
          <h1 className="font-display font-bold text-warm-800 text-2xl mb-2">Unknown treatment category</h1>
          <p className="text-warm-600 mb-6">We couldn't find an intake form for "{category}".</p>
          <button onClick={() => navigate("/patient-portal")} className="text-red font-semibold underline">Back to portal</button>
        </div>
      </PageLayout>
    );
  }

  if (patientLoading || loading) {
    return (
      <PageLayout title={set.title}>
        <div className="min-h-[60vh] flex items-center justify-center">
          <Loader2 className="animate-spin text-red" size={32} />
        </div>
      </PageLayout>
    );
  }

  const handleChange = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const validate = (): string | null => {
    for (const f of set.fields) {
      if (f.required && !(answers[f.id] && answers[f.id].toString().trim())) {
        return `Please answer: ${f.label}`;
      }
    }
    if (!consent) return "You must agree to the medical consent to continue.";
    if (signature.trim().length < 3) return "Please type your full legal name as your signature.";
    if (patient && signature.trim().toLowerCase() !== `${patient.firstName ?? ""} ${patient.lastName ?? ""}`.trim().toLowerCase() && !signature.trim().includes(" ")) {
      // soft check — require at least a first + last name
      return "Please sign with your full legal name (first and last).";
    }
    return null;
  };

  const handleSubmit = async () => {
    if (!patient) return;
    const v = validate();
    if (v) { setError(v); return; }
    setError(null);
    setSubmitting(true);

    try {
      // 1. Upsert the case row directly so we don't depend on OpenLoop key.
      let caseId = existingCase?.id;
      if (!caseId) {
        const { data: newCase, error: caseErr } = await supabase
          .from("cases")
          .insert({
            patient_id: patient.id,
            treatment_category: category,
            status: "provider_review",
            consent_signed: true,
            consent_signed_at: new Date().toISOString(),
            intake_submitted_at: new Date().toISOString(),
            provider_notes: `Signed by: ${signature.trim()}`,
          })
          .select("id")
          .single();
        if (caseErr) throw caseErr;
        caseId = newCase.id;
      } else {
        const { error: updErr } = await supabase
          .from("cases")
          .update({
            status: "provider_review",
            consent_signed: true,
            consent_signed_at: new Date().toISOString(),
            intake_submitted_at: new Date().toISOString(),
            provider_notes: `Signed by: ${signature.trim()}`,
          })
          .eq("id", caseId);
        if (updErr) throw updErr;
      }

      // 2. Best-effort: forward to OpenLoop edge function (will no-op until key is set).
      try {
        await supabase.functions.invoke("openloop", {
          body: {
            action: "submit_intake",
            payload: {
              patientId: patient.id,
              treatmentCategory: category,
              chiefComplaint: set.chiefComplaint,
              intakeAnswers: answers,
              caseId,
              signature: signature.trim(),
            },
          },
        });
      } catch (e) {
        console.warn("[Intake] OpenLoop forward failed (non-fatal):", e);
      }

      setSuccess(true);
    } catch (e) {
      console.error(e);
      setError(e instanceof Error ? e.message : "Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <PageLayout title="Intake Submitted">
        <div className="max-w-2xl mx-auto px-5 py-20 text-center">
          <CheckCircle2 className="w-16 h-16 mx-auto text-green-600 mb-6" />
          <h1 className="font-display font-black text-warm-800 text-3xl mb-3">Submitted for Provider Review</h1>
          <p className="text-warm-600 mb-8 leading-relaxed">
            A licensed provider will review your {PRETTY[category] || set.title} intake within 24 hours. You'll get a message in your portal as soon as a decision is made.
          </p>
          <button
            onClick={() => navigate("/patient-portal")}
            className="bg-red hover:bg-red-dark text-primary-foreground font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Back to Patient Portal →
          </button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={set.title}>
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-10">
        <button onClick={() => navigate("/patient-portal")} className="flex items-center gap-1 text-[0.82rem] text-warm-500 hover:text-warm-800 mb-4">
          <ChevronLeft size={14} /> Back to portal
        </button>
        <div className="mb-6">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-2">Medical Intake</div>
          <h1 className="font-display font-black text-warm-800 text-3xl md:text-4xl mb-2">{set.title}</h1>
          <p className="text-warm-600 text-[0.95rem]">Answer truthfully — your provider uses this to determine if treatment is safe and appropriate. All information is HIPAA-protected.</p>
        </div>

        <div className="bg-card border border-warm-100 rounded-2xl p-6 md:p-8 space-y-5">
          {set.fields.map((field) => (
            <FieldRow key={field.id} field={field} value={answers[field.id] || ""} onChange={(v) => handleChange(field.id, v)} />
          ))}
        </div>

        <div className="mt-6 bg-warm-50 border border-warm-100 rounded-2xl p-6">
          <h2 className="font-display font-bold text-warm-800 text-lg mb-3">Medical Consent & E-Signature</h2>
          <div className="text-[0.82rem] text-warm-600 leading-relaxed space-y-2 mb-4">
            <p>By signing below, I confirm that the information I have provided is accurate and complete to the best of my knowledge. I consent to telehealth evaluation and treatment by a licensed Real Care provider and understand that:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Prescribing decisions are at the sole discretion of my provider.</li>
              <li>I may be asked to provide additional information or lab work.</li>
              <li>I will report side effects promptly through the patient portal.</li>
              <li>I have read the <a href="/medical-consent" target="_blank" className="text-red underline">Informed Medical Consent</a> and <a href="/telehealth-consent" target="_blank" className="text-red underline">Telehealth Consent</a>.</li>
            </ul>
          </div>

          <label className="flex items-start gap-2 mb-4 cursor-pointer">
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 accent-[hsl(var(--primary))]" />
            <span className="text-[0.85rem] text-warm-700">I have read and agree to the medical and telehealth consent terms above.</span>
          </label>

          <label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">Type your full legal name as your e-signature</label>
          <input
            type="text"
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            placeholder="First Last"
            className="w-full border border-warm-200 rounded-lg px-4 py-2.5 text-[0.95rem] font-display italic focus:outline-none focus:border-red transition-colors"
          />
          <div className="text-[0.7rem] text-warm-400 mt-1">Signed: {new Date().toLocaleString()}</div>
        </div>

        {error && (
          <div className="mt-4 bg-red/[0.08] border border-red/30 text-red rounded-lg p-3 text-[0.85rem] flex items-start gap-2">
            <AlertCircle size={16} className="mt-0.5 flex-shrink-0" /> {error}
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="mt-6 w-full bg-red hover:bg-red-dark disabled:opacity-60 text-primary-foreground font-bold py-3.5 rounded-lg text-[0.92rem] transition-colors flex items-center justify-center gap-2"
        >
          {submitting ? <><Loader2 size={18} className="animate-spin" /> Submitting…</> : "Submit Intake & Sign"}
        </button>
        <p className="text-[0.7rem] text-warm-400 text-center mt-3">A licensed provider will review within 24 hours.</p>
      </div>
    </PageLayout>
  );
};

const FieldRow = ({ field, value, onChange }: { field: IntakeField; value: string; onChange: (v: string) => void }) => {
  const labelEl = (
    <label className="block text-[0.82rem] font-semibold text-warm-700 mb-1.5">
      {field.label}{!field.required && <span className="font-normal text-warm-400 ml-1">Optional</span>}
    </label>
  );
  const helpEl = field.help && <p className="text-[0.72rem] text-warm-500 mt-1">{field.help}</p>;

  if (field.type === "textarea") {
    return (
      <div>
        {labelEl}
        <textarea rows={3} value={value} onChange={(e) => onChange(e.target.value)} placeholder={field.placeholder} className="w-full border border-warm-200 rounded-lg px-4 py-2.5 text-[0.88rem] focus:outline-none focus:border-red transition-colors resize-none" />
        {helpEl}
      </div>
    );
  }

  if (field.type === "select") {
    return (
      <div>
        {labelEl}
        <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full border border-warm-200 rounded-lg px-4 py-2.5 text-[0.88rem] focus:outline-none focus:border-red transition-colors bg-white">
          <option value="">Select…</option>
          {field.options?.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        {helpEl}
      </div>
    );
  }

  if (field.type === "radio") {
    return (
      <div>
        {labelEl}
        <div className="flex flex-wrap gap-2">
          {field.options?.map((o) => (
            <button
              key={o}
              type="button"
              onClick={() => onChange(o)}
              className={`px-4 py-2 rounded-lg text-[0.85rem] font-medium border transition-colors ${value === o ? "bg-red text-primary-foreground border-red" : "bg-white border-warm-200 text-warm-700 hover:border-red"}`}
            >
              {o}
            </button>
          ))}
        </div>
        {helpEl}
      </div>
    );
  }

  return (
    <div>
      {labelEl}
      <input
        type={field.type === "number" ? "number" : "text"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholder}
        className="w-full border border-warm-200 rounded-lg px-4 py-2.5 text-[0.88rem] focus:outline-none focus:border-red transition-colors"
      />
      {helpEl}
    </div>
  );
};

export default Intake;
