import { useState } from "react";
import PageLayout from "@/components/realcare/PageLayout";
import { Mail, MessageCircle, Clock, Loader2, CheckCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", topic: "General Question", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!formData.email || !formData.message) return;
    setSending(true);
    setError(null);
    try {
      const { supabase } = await import("@/integrations/supabase/client");
      const { error: fnError } = await supabase.functions.invoke("contact-form", {
        body: {
          name: `${formData.firstName} ${formData.lastName}`.trim() || "Anonymous",
          email: formData.email,
          subject: formData.topic,
          message: formData.message,
        },
      });
      if (fnError) throw fnError;
      setSent(true);
    } catch {
      setError("Something went wrong. Please email us directly at support@realcare.com");
    } finally {
      setSending(false);
    }
  };

  return (
  <PageLayout title="Contact Us">
    {/* Hero */}
    <div className="bg-warm-50 border-b border-warm-100 px-5 md:px-12 py-14">
      <div className="max-w-[860px] mx-auto text-center fade-up">
        <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3.5">We're Here For You</div>
        <h1 className="font-display font-black leading-[1.05] text-warm-800 text-[clamp(2rem,4vw,3rem)] mb-4">
          Get In Touch
        </h1>
        <p className="text-[0.9rem] text-warm-600 leading-[1.75] max-w-[480px] mx-auto">
          Our care team is available 24/7 to answer your questions. Real humans, real answers — no chatbot runaround.
        </p>
      </div>
    </div>

    <div className="bg-background px-5 md:px-12 pt-14 pb-24">
      <div className="max-w-[1080px] mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-10 fade-up">

        {/* Contact options */}
        <div className="space-y-5">
          <div className="bg-card border border-warm-100 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-red/[0.1] flex items-center justify-center flex-shrink-0">
                <MessageCircle size={20} className="text-red" />
              </div>
              <div>
                <h3 className="font-semibold text-warm-800 mb-1">Secure Patient Messaging</h3>
                <p className="text-[0.82rem] text-warm-600 leading-[1.7] mb-2">For existing patients — message your care team directly through your patient portal for the fastest response.</p>
                <a href="/patient-portal" className="text-[0.8rem] font-semibold text-red hover:underline">Go to Patient Portal →</a>
              </div>
            </div>
          </div>

          <div className="bg-card border border-warm-100 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-red/[0.1] flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-red" />
              </div>
              <div>
                <h3 className="font-semibold text-warm-800 mb-1">Email Support</h3>
                <p className="text-[0.82rem] text-warm-600 leading-[1.7] mb-2">For general inquiries, billing questions, and non-urgent support.</p>
                <a href="mailto:support@realcare.com" className="text-[0.8rem] font-semibold text-red hover:underline">support@realcare.com</a>
              </div>
            </div>
          </div>

          <div className="bg-card border border-warm-100 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-red/[0.1] flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-red" />
              </div>
              <div>
                <h3 className="font-semibold text-warm-800 mb-1">Response Times</h3>
                <div className="space-y-1 mt-2">
                  {[
                    { label: "Patient Portal messages", time: "Within 2 hours" },
                    { label: "Email support", time: "Within 1 business day" },
                    { label: "Cancellation requests", time: "Within 1 business day" },
                    { label: "Medical questions", time: "Provider responds within 24 hrs" },
                  ].map((r) => (
                    <div key={r.label} className="flex justify-between text-[0.78rem]">
                      <span className="text-warm-600">{r.label}</span>
                      <span className="text-warm-800 font-semibold">{r.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-warm-800 rounded-2xl p-6">
            <h3 className="font-semibold text-white mb-2">Emergencies</h3>
            <p className="text-[0.82rem] text-white/70 leading-[1.7]">
              If you are experiencing a medical emergency, call <strong className="text-white">911</strong> or go to your nearest emergency room immediately. Real Care is not an emergency service.
            </p>
          </div>
        </div>

        {/* Contact form */}
        <div className="bg-card border border-warm-100 rounded-2xl p-7 md:p-8">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Send Us A Message</div>
          <h2 className="font-display font-bold text-warm-800 text-xl mb-6">We'll get back to you within 1 business day</h2>

          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">First Name</label>
                <input type="text" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} placeholder="First name" className="w-full border border-warm-200 rounded-lg px-4 py-2.5 text-[0.85rem] text-warm-800 placeholder:text-warm-400 focus:outline-none focus:border-red transition-colors" />
              </div>
              <div>
                <label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">Last Name</label>
                <input type="text" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} placeholder="Last name" className="w-full border border-warm-200 rounded-lg px-4 py-2.5 text-[0.85rem] text-warm-800 placeholder:text-warm-400 focus:outline-none focus:border-red transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">Email Address</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="you@email.com" className="w-full border border-warm-200 rounded-lg px-4 py-2.5 text-[0.85rem] text-warm-800 placeholder:text-warm-400 focus:outline-none focus:border-red transition-colors" />
            </div>
            <div>
              <label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">Topic</label>
              <select value={formData.topic} onChange={(e) => setFormData({...formData, topic: e.target.value})} className="w-full border border-warm-200 rounded-lg px-4 py-2.5 text-[0.85rem] text-warm-600 focus:outline-none focus:border-red transition-colors bg-white">
                <option>General Question</option>
                <option>Billing / Refund</option>
                <option>Cancellation Request</option>
                <option>Medical Question</option>
                <option>Shipping / Delivery</option>
                <option>Technical Support</option>
                <option>Partnership / Affiliate</option>
                <option>Media / Press</option>
              </select>
            </div>
            <div>
              <label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">Message</label>
              <textarea
                rows={5}
                placeholder="How can we help you?"
                className="w-full border border-warm-200 rounded-lg px-4 py-2.5 text-[0.85rem] text-warm-800 placeholder:text-warm-400 focus:outline-none focus:border-red transition-colors resize-none"
              />
            </div>
            {sent ? (
              <div className="flex items-center gap-2 text-green-600 font-semibold text-[0.88rem]">
                <CheckCircle size={18} /> Message sent! We'll reply within 1 business day.
              </div>
            ) : (
              <>
                {error && <div className="text-[0.8rem] text-red mb-2">{error}</div>}
                <button onClick={handleSubmit} disabled={sending || !formData.email || !formData.message} className="w-full bg-red hover:bg-red-dark disabled:opacity-50 text-primary-foreground font-bold py-3 rounded-lg text-[0.88rem] transition-colors flex items-center justify-center gap-2">
                  {sending ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : "Send Message →"}
                </button>
              </>
            )}
            <p className="text-[0.7rem] text-warm-400 text-center leading-[1.6]">
              For clinical questions about your treatment, please use your patient portal for HIPAA-compliant messaging.
            </p>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
  );
};

export default Contact;
