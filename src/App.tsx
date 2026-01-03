import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import RecruitmentManagement from "./pages/features/RecruitmentManagement";
import AttendanceAndLeave from "./pages/features/AttendanceAndLeave";
import PayrollAndCompliance from "./pages/features/PayrollAndCompliance";
import PerformanceAppraisal from "./pages/features/PerformanceAppraisal";
import SelfServicePortal from "./pages/features/SelfServicePortal";
import ExitManagement from "./pages/features/ExitManagement";
import MobileApp from "./pages/features/MobileApp";
import Employeemanagment from "./pages/features/EmployementManagment"
import OkaiLens from "./pages/face-lens"
import Chatbot from "./pages/AiPilot"

import Blog from "./pages/resources/Blog";
import UseCases from "./pages/resources/UseCases";
import Community from "./pages/resources/Community";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndCondition from "./pages/TermsandConditions";
import Blog1 from './pages/Blogpages/HrStrategies'
import NewPerfomenceBlog from './pages/Blogpages/NewPerfomenceBlog'
import StreamliningPayroll from './pages/Blogpages/StreamliningPayroll'
import MobileAppUpdates from './pages/Blogpages/MobileAppUpdates'
// import { DemoPopup } from "@/components/DemoPopup"
import NavigateHybrid from "./pages/Blogpages/NavigateHybrid";
import QualityQuatity from "./pages/Blogpages/QualityQuatity";
import WhyHrms from "./pages/Blogpages/WhyHrms";
import AIPoweredFeatures from "./pages/Blogpages/AIPoweredFeatures";
import HRMSSystem from "./pages/Blogpages/HRMSSystem";
import RealWorldDEI from "./pages/Blogpages/RealWorldDEI";
import BlogDetail from "./pages/Blogpages/BlogDetails";
import GoogleAdsWrapper from "./GoogleAdsWrapper";
// import WhatsAppButton from "./hooks/WhatsAppButton";
import ChatModal from "./AiAgent";
import UaeLandingpage from './UaeLandingPage';


// import Text from './pages/test'

// import BotButton from "./components/BotButton";

const queryClient = new QueryClient();

// Component to determine region based on route
const AppRoutes = () => {
  const location = useLocation();
  const isUaeRoute = location.pathname.includes('/ae') || location.pathname.startsWith('/uae');
  
  return (
    <LanguageProvider defaultLanguage="en" defaultRegion={isUaeRoute ? 'uae' : 'india'}>
      <GoogleAdsWrapper /> 
      <ChatModal />
      <ScrollToTop />
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />

          {/* Feature Pages */}
          <Route path="/features/recruitment-management" element={<RecruitmentManagement />} />
          <Route path="/features/attendance-and-leave" element={<AttendanceAndLeave />} />
          <Route path="/features/payroll-and-compliance" element={<PayrollAndCompliance />} />
          <Route path="/features/performance-appraisal" element={<PerformanceAppraisal />} />
          <Route path="/features/self-service-portal" element={<SelfServicePortal />} />
          <Route path="/features/exit-management" element={<ExitManagement />} />
          <Route path="/features/mobile-app" element={<MobileApp />} />
          <Route path="/features/employe-managment" element={<Employeemanagment />} />
          <Route path="/features/face-kit" element={<OkaiLens />} />
          <Route path="/features/ai-pilot" element={<Chatbot />} />


          {/* Resource Pages */}
          <Route path="/resources/blogs" element={<Blog />} />
          <Route path="/resources/use-cases" element={<UseCases />} />
          <Route path="/resources/community" element={<Community />} />

          {/* policies */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-condition" element={<TermsAndCondition />} />

          {/* blogs */}
          <Route path="/resources/blogs/hrblogs" element={<Blog1 />} />
          <Route path="/resources/blogs/newperfomenceblog" element={<NewPerfomenceBlog />} />
          <Route path="/resources/blogs/streamliningpayroll" element={<StreamliningPayroll />} />
          <Route path="/resources/blogs/mobileappupdates" element={<MobileAppUpdates />} />
          <Route path="/resources/blogs/navigatehybrid" element={<NavigateHybrid />} />
          <Route path="/resources/blogs/qualityvsquatity" element={<QualityQuatity />} />
          <Route path="/resources/blogs/whyhrms" element={<WhyHrms />} />
          <Route path="/resources/blogs/aipowered" element={<AIPoweredFeatures />} />
          <Route path="/resources/blogs/hrmssystem" element={<HRMSSystem />} />
          <Route path="/resources/blogs/realworld-dei" element={<RealWorldDEI />} />


          {/* uae page */}
          <Route path="/ae" element={<UaeLandingpage />} />



          {/* <Route path="/test" element={<Text />} /> */}


          {/* blogs  */}
          <Route path="/blog/:slug" element={<BlogDetail />} />



          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LanguageProvider>
    );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
