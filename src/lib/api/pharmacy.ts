/**
 * Pharmacy routing — chooses the best pharmacy partner for a given
 * treatment category. Server-side calls live in the `pharmacy` edge function.
 */

export type TreatmentCategory =
  | "weight_loss"
  | "ed"
  | "trt"
  | "hair"
  | "skincare"
  | "mental_health"
  | "menopause"
  | "peptides"
  | "lab_testing"
  | "sleep"
  | "supplements"
  | "birth_control"
  | "libido";

export type PharmacyId = "empower" | "redrock" | "healthwarehouse" | "precision" | "triadrx";

export const routeToPharmacy = (treatment: TreatmentCategory): PharmacyId => {
  switch (treatment) {
    case "weight_loss":
    case "trt":
    case "peptides":
    case "menopause":
      return "empower"; // compounding
    case "ed":
    case "hair":
    case "birth_control":
    case "libido":
      return "healthwarehouse"; // generics
    case "skincare":
      return "precision";
    case "mental_health":
      return "triadrx";
    default:
      return "redrock";
  }
};
