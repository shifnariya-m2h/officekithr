import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import {
  HR_POPUP_SESSION_KEY,
  useHrPopupTrigger,
} from "@/hooks/useHrPopupTrigger";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import { BackToTopButton } from "@/components/BackToTopButton";
import GoogleAdsWrapper from "./GoogleAdsWrapper";
import { SeoProvider } from "@/seo/SeoContext";
import { SeoHead } from "@/seo/SeoHead";
import { AskMyBotLoader } from "@/components/AskMyBotLoader";
import { CookieConsent } from "@/components/CookieConsent";
import { SkipLink } from "@/components/SkipLink";
import { LegacyRedirect } from "@/components/LegacyRedirect";
import { MARKETING_PAGES } from "@/data/marketing-pages";

const Toaster = lazy(() =>
  import("@/components/ui/toaster").then((m) => ({ default: m.Toaster }))
);
const TooltipProvider = lazy(() =>
  import("@/components/ui/tooltip").then((m) => ({ default: m.TooltipProvider }))
);

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));
const RecruitmentManagement = lazy(() => import("./pages/features/RecruitmentManagement"));
const AttendanceAndLeave = lazy(() => import("./pages/features/AttendanceAndLeave"));
const PayrollAndCompliance = lazy(() => import("./pages/features/PayrollAndCompliance"));
const PerformanceAppraisal = lazy(() => import("./pages/features/PerformanceAppraisal"));
const SelfServicePortal = lazy(() => import("./pages/features/SelfServicePortal"));
const ExitManagement = lazy(() => import("./pages/features/ExitManagement"));
const MobileApp = lazy(() => import("./pages/features/MobileApp"));
const Employeemanagment = lazy(() => import("./pages/features/EmployementManagment"));
const OkaiLens = lazy(() => import("./pages/face-lens"));
const Chatbot = lazy(() => import("./pages/AiPilot"));
const Blog = lazy(() => import("./pages/resources/Blog"));
const UseCases = lazy(() => import("./pages/resources/UseCases"));
const Community = lazy(() => import("./pages/resources/Community"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndCondition = lazy(() => import("./pages/TermsandConditions"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const Blog1 = lazy(() => import("./pages/Blogpages/HrStrategies"));
const NewPerfomenceBlog = lazy(() => import("./pages/Blogpages/NewPerfomenceBlog"));
const StreamliningPayroll = lazy(() => import("./pages/Blogpages/StreamliningPayroll"));
const MobileAppUpdates = lazy(() => import("./pages/Blogpages/MobileAppUpdates"));
const NavigateHybrid = lazy(() => import("./pages/Blogpages/NavigateHybrid"));
const QualityQuatity = lazy(() => import("./pages/Blogpages/QualityQuatity"));
const WhyHrms = lazy(() => import("./pages/Blogpages/WhyHrms"));
const AIPoweredFeatures = lazy(() => import("./pages/Blogpages/AIPoweredFeatures"));
const HRMSSystem = lazy(() => import("./pages/Blogpages/HRMSSystem"));
const RealWorldDEI = lazy(() => import("./pages/Blogpages/RealWorldDEI"));
const BlogDetail = lazy(() => import("./pages/Blogpages/BlogDetails"));
const UaeLandingpage = lazy(() => import("./UaeLandingPage"));
const SolutionsHub = lazy(() => import("./pages/geo/SolutionsHub"));
const GeoLandingPage = lazy(() => import("./pages/geo/GeoLandingPage"));
const CompareHub = lazy(() => import("./pages/compare/CompareHub"));
const ComparisonPage = lazy(() => import("./pages/compare/ComparisonPage"));
const MarketingLandingPage = lazy(
  () => import("./pages/marketing/MarketingLandingPage")
);
const HRPopup = lazy(() =>
  import("./components/HRPopup").then((m) => ({ default: m.HRPopup }))
);

function PageLoader() {
  return (
    <div
      className="min-h-[40vh] flex items-center justify-center text-muted-foreground"
      role="status"
      aria-live="polite"
    >
      Loading…
    </div>
  );
}

const AppRoutes = () => {
  const location = useLocation();
  const isUaeRoute =
    location.pathname.includes("/ae") ||
    location.pathname.startsWith("/uae");
  const isHome = location.pathname === "/";
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openHrPopup = useCallback(() => setIsPopupOpen(true), []);

  useHrPopupTrigger(isHome, isPopupOpen, openHrPopup);

  useEffect(() => {
    if (isPopupOpen) {
      sessionStorage.setItem(HR_POPUP_SESSION_KEY, "true");
    }
  }, [isPopupOpen]);

  return (
    <LanguageProvider
      defaultLanguage="en"
      defaultRegion={isUaeRoute ? "uae" : "india"}
    >
      <SkipLink />
      <SeoHead />
      <CookieConsent />
      <AskMyBotLoader />
      <DeferredAnalytics />
      {isPopupOpen && (
        <Suspense fallback={null}>
          <HRPopup onClose={() => setIsPopupOpen(false)} />
        </Suspense>
      )}
      <ScrollToTop />
      <BackToTopButton />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/features/recruitment-management"
            element={<RecruitmentManagement />}
          />
          <Route
            path="/features/attendance-and-leave"
            element={<AttendanceAndLeave />}
          />
          <Route
            path="/features/payroll-and-compliance"
            element={<PayrollAndCompliance />}
          />
          <Route
            path="/features/performance-appraisal"
            element={<PerformanceAppraisal />}
          />
          <Route
            path="/features/self-service-portal"
            element={<SelfServicePortal />}
          />
          <Route path="/features/exit-management" element={<ExitManagement />} />
          <Route path="/features/mobile-app" element={<MobileApp />} />
          <Route
            path="/features/employee-management"
            element={<Employeemanagment />}
          />
          <Route
            path="/features/employe-managment"
            element={
              <LegacyRedirect to="/features/employee-management" />
            }
          />
          <Route path="/features/face-kit" element={<OkaiLens />} />
          <Route path="/features/ai-pilot" element={<Chatbot />} />

          <Route path="/resources/blogs" element={<Blog />} />
          <Route path="/resources/use-cases" element={<UseCases />} />
          <Route path="/resources/community" element={<Community />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-condition" element={<TermsAndCondition />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />

          <Route path="/resources/blogs/hrblogs" element={<Blog1 />} />
          <Route
            path="/resources/blogs/performance-management-tools"
            element={<NewPerfomenceBlog />}
          />
          <Route
            path="/resources/blogs/newperfomenceblog"
            element={
              <LegacyRedirect to="/resources/blogs/performance-management-tools" />
            }
          />
          <Route
            path="/resources/blogs/streamliningpayroll"
            element={<StreamliningPayroll />}
          />
          <Route
            path="/resources/blogs/mobileappupdates"
            element={<MobileAppUpdates />}
          />
          <Route
            path="/resources/blogs/navigatehybrid"
            element={<NavigateHybrid />}
          />
          <Route
            path="/resources/blogs/quality-vs-quantity-hiring"
            element={<QualityQuatity />}
          />
          <Route
            path="/resources/blogs/qualityvsquatity"
            element={
              <LegacyRedirect to="/resources/blogs/quality-vs-quantity-hiring" />
            }
          />
          <Route path="/resources/blogs/whyhrms" element={<WhyHrms />} />
          <Route path="/resources/blogs/aipowered" element={<AIPoweredFeatures />} />
          <Route path="/resources/blogs/hrmssystem" element={<HRMSSystem />} />
          <Route path="/resources/blogs/realworld-dei" element={<RealWorldDEI />} />

          {Object.keys(MARKETING_PAGES).map((slug) => (
            <Route
              key={slug}
              path={`/${slug}`}
              element={<MarketingLandingPage />}
            />
          ))}

          <Route path="/solutions" element={<SolutionsHub />} />
          <Route path="/solutions/:slug" element={<GeoLandingPage />} />
          <Route path="/compare" element={<CompareHub />} />
          <Route path="/compare/:slug" element={<ComparisonPage />} />

          <Route path="/ae" element={<UaeLandingpage />} />
          <Route path="/uae" element={<LegacyRedirect to="/ae" />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </LanguageProvider>
  );
};

function DeferredAnalytics() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const run = () => setOn(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(run, { timeout: 5000 });
      return () => window.cancelIdleCallback(id);
    }
    const t = setTimeout(run, 4000);
    return () => clearTimeout(t);
  }, []);
  return on ? <GoogleAdsWrapper /> : null;
}

const App = () => (
  <Suspense fallback={null}>
    <TooltipProvider>
      <Toaster />
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <SeoProvider>
        <AppRoutes />
      </SeoProvider>
    </BrowserRouter>
    </TooltipProvider>
  </Suspense>
);

export default App;
