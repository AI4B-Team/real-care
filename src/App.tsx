import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Main
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

// Hub pages
import Men from "./pages/Men.tsx";
import Women from "./pages/Women.tsx";

// Info pages
import Pricing from "./pages/Pricing.tsx";
import HowItWorksPage from "./pages/HowItWorksPage.tsx";
import OurDoctors from "./pages/OurDoctors.tsx";
import Contact from "./pages/Contact.tsx";
import Affiliates from "./pages/Affiliates.tsx";
import About from "./pages/About.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import Couples from "./pages/Couples.tsx";
import HealthCheck from "./pages/HealthCheck.tsx";

// Account
import Login from "./pages/Login.tsx";
import PatientPortal from "./pages/PatientPortal.tsx";
import ForgotPassword from "./pages/ForgotPassword.tsx";
import ResetPassword from "./pages/ResetPassword.tsx";
import CheckoutSuccess from "./pages/CheckoutSuccess.tsx";
import CheckoutReturn from "./pages/CheckoutReturn.tsx";
import Intake from "./pages/Intake.tsx";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";

// Products
import WeightLoss from "./pages/WeightLoss.tsx";
import EdTreatment from "./pages/EdTreatment.tsx";
import Testosterone from "./pages/Testosterone.tsx";
import HairLoss from "./pages/HairLoss.tsx";
import Skincare from "./pages/Skincare.tsx";
import MentalHealth from "./pages/MentalHealth.tsx";
import Menopause from "./pages/Menopause.tsx";
import Peptides from "./pages/Peptides.tsx";
import LabTesting from "./pages/LabTesting.tsx";

// Legal
import Terms from "./pages/Terms.tsx";
import Privacy from "./pages/Privacy.tsx";
import Hipaa from "./pages/Hipaa.tsx";
import MedicalConsent from "./pages/MedicalConsent.tsx";
import RefundPolicy from "./pages/RefundPolicy.tsx";
import TelehealthConsent from "./pages/TelehealthConsent.tsx";
import Accessibility from "./pages/Accessibility.tsx";
import Cookies from "./pages/Cookies.tsx";
import ConsumerHealthDataPrivacy from "./pages/ConsumerHealthDataPrivacy.tsx";

// Tools
import Glp1Quiz from "./pages/Glp1Quiz.tsx";
import SupportFAQ from "./pages/SupportFAQ.tsx";
import BMICalculator from "./pages/BMICalculator.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PaymentTestModeBanner />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Index />} />

          {/* Hubs */}
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />

          {/* Info */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/our-doctors" element={<OurDoctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/affiliates" element={<Affiliates />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/couples" element={<Couples />} />
          <Route path="/health-check" element={<HealthCheck />} />

          {/* Account */}
          <Route path="/login" element={<Login />} />
          <Route path="/patient-portal" element={<PatientPortal />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/checkout/return" element={<CheckoutReturn />} />
          <Route path="/intake/:category" element={<Intake />} />

          {/* Products */}
          <Route path="/weight-loss" element={<WeightLoss />} />
          <Route path="/ed-treatment" element={<EdTreatment />} />
          <Route path="/testosterone" element={<Testosterone />} />
          <Route path="/hair-loss" element={<HairLoss />} />
          <Route path="/skincare" element={<Skincare />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/menopause" element={<Menopause />} />
          <Route path="/peptides" element={<Peptides />} />
          <Route path="/lab-testing" element={<LabTesting />} />

          {/* Legal */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/hipaa" element={<Hipaa />} />
          <Route path="/medical-consent" element={<MedicalConsent />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/telehealth-consent" element={<TelehealthConsent />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/consumer-health-data-privacy" element={<ConsumerHealthDataPrivacy />} />

          {/* Tools */}
          <Route path="/glp1-quiz" element={<Glp1Quiz />} />
          <Route path="/support" element={<SupportFAQ />} />
          <Route path="/faq" element={<SupportFAQ />} />
          <Route path="/calculators/bmi" element={<BMICalculator />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
