import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import PageLayout from "@/components/realcare/PageLayout";

export default function CheckoutReturn() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <PageLayout title="Payment Complete">
      <div className="max-w-2xl mx-auto px-5 py-20 text-center">
        <CheckCircle2 className="w-16 h-16 mx-auto text-red mb-6" />
        <h1 className="font-display font-black text-warm-800 text-3xl md:text-4xl mb-4">
          You're In.
        </h1>
        <p className="text-warm-600 mb-8 leading-relaxed">
          {sessionId
            ? "Your payment was successful. Next step: complete your medical intake so a licensed provider can review your case and prescribe your treatment."
            : "We couldn't find your session details. If you completed payment, check your email for confirmation."}
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            to="/health-check"
            className="bg-red hover:bg-red-dark text-primary-foreground font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Complete Health Check →
          </Link>
          <Link
            to="/portal"
            className="border border-warm-200 hover:border-warm-600 text-warm-800 font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Patient Portal
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
