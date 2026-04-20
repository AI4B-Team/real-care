/**
 * Per-treatment-category intake question sets.
 * Sent with the case to OpenLoop as `intake_answers`.
 */

export type FieldType = "text" | "textarea" | "number" | "select" | "radio" | "checkbox";

export interface IntakeField {
  id: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
  placeholder?: string;
  help?: string;
}

export interface IntakeQuestionSet {
  category: string;
  title: string;
  chiefComplaint: string;
  fields: IntakeField[];
}

const SHARED_HEALTH_HISTORY: IntakeField[] = [
  { id: "current_medications", label: "Current Medications", type: "textarea", placeholder: "List all medications, supplements, vitamins (or 'None')", required: true },
  { id: "allergies", label: "Drug Allergies", type: "textarea", placeholder: "e.g. penicillin, sulfa, none", required: true },
  { id: "medical_conditions", label: "Existing Medical Conditions", type: "textarea", placeholder: "Diabetes, hypertension, thyroid, etc. (or 'None')", required: true },
  { id: "surgeries", label: "Past Surgeries", type: "textarea", placeholder: "Year + procedure (or 'None')" },
  { id: "primary_care_provider", label: "Primary Care Provider Name", type: "text", placeholder: "Optional" },
];

export const INTAKE_SETS: Record<string, IntakeQuestionSet> = {
  weight_loss: {
    category: "weight_loss",
    title: "Weight Loss Intake",
    chiefComplaint: "Patient seeking GLP-1 weight loss treatment",
    fields: [
      { id: "height_ft", label: "Height (feet)", type: "number", required: true },
      { id: "height_in", label: "Height (inches)", type: "number", required: true },
      { id: "weight_lbs", label: "Current Weight (lbs)", type: "number", required: true },
      { id: "goal_weight_lbs", label: "Goal Weight (lbs)", type: "number", required: true },
      { id: "weight_loss_history", label: "Previous Weight Loss Attempts", type: "textarea", placeholder: "Diets, programs, medications you've tried" },
      { id: "diabetes_status", label: "Diabetes Status", type: "select", options: ["None", "Type 1", "Type 2", "Pre-diabetic"], required: true },
      { id: "thyroid_history", label: "Personal/Family History of Thyroid Cancer or MEN2?", type: "radio", options: ["No", "Yes"], required: true, help: "GLP-1 medications carry a boxed warning for these conditions." },
      { id: "pancreatitis_history", label: "History of Pancreatitis?", type: "radio", options: ["No", "Yes"], required: true },
      ...SHARED_HEALTH_HISTORY,
    ],
  },
  ed_treatment: {
    category: "ed_treatment",
    title: "ED Treatment Intake",
    chiefComplaint: "Patient seeking treatment for erectile dysfunction",
    fields: [
      { id: "symptom_duration", label: "How long have you experienced symptoms?", type: "select", options: ["< 3 months", "3–12 months", "1–3 years", "3+ years"], required: true },
      { id: "severity", label: "Symptom Severity", type: "radio", options: ["Mild", "Moderate", "Severe"], required: true },
      { id: "preferred_med", label: "Preferred Medication", type: "select", options: ["No preference", "Sildenafil (generic Viagra)", "Tadalafil (generic Cialis)"], required: true },
      { id: "heart_disease", label: "History of heart disease, chest pain, or stroke?", type: "radio", options: ["No", "Yes"], required: true },
      { id: "nitrates", label: "Currently taking nitrates (nitroglycerin)?", type: "radio", options: ["No", "Yes"], required: true, help: "Combining nitrates with ED medication can be life-threatening." },
      { id: "blood_pressure_meds", label: "Taking blood pressure medication?", type: "radio", options: ["No", "Yes"], required: true },
      ...SHARED_HEALTH_HISTORY,
    ],
  },
  testosterone: {
    category: "testosterone",
    title: "Testosterone Therapy Intake",
    chiefComplaint: "Patient seeking testosterone replacement therapy evaluation",
    fields: [
      { id: "symptoms", label: "Which symptoms apply?", type: "textarea", required: true, placeholder: "Low energy, low libido, brain fog, mood changes, etc." },
      { id: "recent_lab_t", label: "Most recent total testosterone (ng/dL), if known", type: "number", placeholder: "Optional" },
      { id: "fertility_plans", label: "Are you trying to have children in the next 12 months?", type: "radio", options: ["No", "Yes"], required: true, help: "TRT can suppress fertility." },
      { id: "prostate_history", label: "Personal or family history of prostate cancer?", type: "radio", options: ["No", "Yes"], required: true },
      { id: "sleep_apnea", label: "Diagnosed with sleep apnea?", type: "radio", options: ["No", "Yes"], required: true },
      ...SHARED_HEALTH_HISTORY,
    ],
  },
  hair_loss: {
    category: "hair_loss",
    title: "Hair Loss Intake",
    chiefComplaint: "Patient seeking treatment for hair loss",
    fields: [
      { id: "pattern", label: "Where is hair thinning?", type: "select", options: ["Hairline / temples", "Crown", "All over", "Patchy"], required: true },
      { id: "duration", label: "How long has hair been thinning?", type: "select", options: ["< 1 year", "1–3 years", "3+ years"], required: true },
      { id: "family_history", label: "Family history of hair loss?", type: "radio", options: ["No", "Yes"], required: true },
      { id: "previous_treatment", label: "Previous treatments tried", type: "textarea", placeholder: "Minoxidil, finasteride, PRP, etc." },
      { id: "liver_disease", label: "History of liver disease?", type: "radio", options: ["No", "Yes"], required: true },
      ...SHARED_HEALTH_HISTORY,
    ],
  },
  menopause: {
    category: "menopause",
    title: "Menopause / HRT Intake",
    chiefComplaint: "Patient seeking hormone replacement therapy evaluation",
    fields: [
      { id: "menopause_stage", label: "Stage", type: "select", options: ["Perimenopause", "Menopause", "Post-menopause", "Not sure"], required: true },
      { id: "last_period", label: "Date of last menstrual period", type: "text", placeholder: "Approximate (e.g. June 2024)", required: true },
      { id: "symptoms", label: "Current symptoms", type: "textarea", required: true, placeholder: "Hot flashes, night sweats, mood, sleep, libido, vaginal dryness, etc." },
      { id: "breast_cancer_history", label: "Personal or family history of breast cancer?", type: "radio", options: ["No", "Yes"], required: true },
      { id: "blood_clot_history", label: "History of blood clots, stroke, or DVT?", type: "radio", options: ["No", "Yes"], required: true },
      { id: "hysterectomy", label: "Have you had a hysterectomy?", type: "radio", options: ["No", "Yes"], required: true },
      ...SHARED_HEALTH_HISTORY,
    ],
  },
  mental_health: {
    category: "mental_health",
    title: "Mental Health Intake",
    chiefComplaint: "Patient seeking mental health evaluation and treatment",
    fields: [
      { id: "primary_concern", label: "Primary concern", type: "select", options: ["Anxiety", "Depression", "Sleep", "Stress / burnout", "Other"], required: true },
      { id: "symptom_duration", label: "How long have you felt this way?", type: "select", options: ["< 1 month", "1–6 months", "6–12 months", "1+ year"], required: true },
      { id: "severity", label: "Severity", type: "radio", options: ["Mild", "Moderate", "Severe"], required: true },
      { id: "suicidal_ideation", label: "Thoughts of harming yourself or others?", type: "radio", options: ["No", "Yes"], required: true, help: "If yes, please call 988 (Suicide & Crisis Lifeline) or go to the nearest ER. Real Care does not treat acute crises." },
      { id: "previous_treatment", label: "Previous mental health treatment", type: "textarea", placeholder: "Therapy, medications, hospitalizations" },
      { id: "bipolar_psychosis", label: "History of bipolar disorder or psychosis?", type: "radio", options: ["No", "Yes"], required: true },
      ...SHARED_HEALTH_HISTORY,
    ],
  },
  skincare: {
    category: "skincare",
    title: "Skincare Intake",
    chiefComplaint: "Patient seeking dermatology / skincare treatment",
    fields: [
      { id: "skin_concern", label: "Primary skin concern", type: "select", options: ["Acne", "Anti-aging / wrinkles", "Melasma / pigmentation", "Rosacea", "Other"], required: true },
      { id: "skin_type", label: "Skin type", type: "select", options: ["Dry", "Oily", "Combination", "Sensitive", "Normal"], required: true },
      { id: "current_routine", label: "Current skincare routine", type: "textarea", placeholder: "Cleansers, actives, prescriptions you currently use" },
      { id: "pregnancy", label: "Pregnant, nursing, or trying to become pregnant?", type: "radio", options: ["No", "Yes", "N/A"], required: true },
      ...SHARED_HEALTH_HISTORY,
    ],
  },
  peptides: {
    category: "peptides",
    title: "Peptide Therapy Intake",
    chiefComplaint: "Patient seeking peptide therapy evaluation",
    fields: [
      { id: "goals", label: "Primary goals", type: "textarea", required: true, placeholder: "Recovery, sleep, body composition, longevity, etc." },
      { id: "exercise", label: "Current exercise routine", type: "textarea", required: true },
      { id: "cancer_history", label: "Personal history of cancer?", type: "radio", options: ["No", "Yes"], required: true },
      ...SHARED_HEALTH_HISTORY,
    ],
  },
};

export const getIntakeSet = (category: string): IntakeQuestionSet | null =>
  INTAKE_SETS[category] || null;
