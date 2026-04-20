import PageLayout from "@/components/realcare/PageLayout";
import { CheckCircle, Package, MessageCircle, ChevronRight } from "lucide-react";

const CheckoutSuccess = () => {
  const params = new URLSearchParams(window.location.search);
  const firstName = params.get("name") || "there";

  return (
    <PageLayout title="Payment Successful">
      <div className="min-h-[80vh] bg-warm-50 flex items-center justify-center px-5 py-14">
        <div className="max-w-[540px] text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Payment Successful</div>
          <h1 className="font-display font-black text-warm-800 text-3xl mb-3">
            You're all set, {firstName}!
          </h1>
          <p className="text-[0.9rem] text-warm-600 leading-[1.75] mb-8">
            Your payment has been processed. A board-certified provider will review
            your health assessment within <strong>24–48 hours</strong> and reach out with your
            personalized treatment plan.
          </p>

          <div className="bg-card border border-warm-100 rounded-2xl p-6 text-left mb-6 space-y-4">
            <h3 className="font-display font-bold text-warm-800 text-lg mb-4">What Happens Next</h3>
            {[
              { icon: <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" />, text: "Check your email — confirmation sent" },
              { icon: <MessageCircle size={16} className="text-red flex-shrink-0 mt-0.5" />, text: "Provider reviews your intake within 24–48 hours" },
              { icon: <Package size={16} className="text-red flex-shrink-0 mt-0.5" />, text: "If approved — medication ships within 2 business days" },
              { icon: <ChevronRight size={16} className="text-warm-400 flex-shrink-0 mt-0.5" />, text: "First delivery arrives in 7–10 business days" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-[0.85rem] text-warm-700">
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/patient-portal" className="bg-red hover:bg-red-dark text-primary-foreground font-bold px-7 py-3 rounded-lg text-[0.88rem] transition-colors">
              Go to Patient Portal →
            </a>
            <a href="/how-it-works" className="border border-warm-200 hover:border-warm-600 text-warm-800 font-medium px-6 py-3 rounded-lg text-[0.88rem] transition-colors">
              How It Works
            </a>
          </div>

          <p className="text-[0.72rem] text-warm-400 mt-6">
            Questions? Email us at{" "}
            <a href="mailto:support@realcare.com" className="text-red underline">support@realcare.com</a>
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default CheckoutSuccess;
