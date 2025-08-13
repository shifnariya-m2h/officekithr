import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Blog from "./pages/resources/Blog";
import UseCases from "./pages/resources/UseCases";
import Community from "./pages/resources/Community";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          
          {/* Resource Pages */}
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/use-cases" element={<UseCases />} />
          <Route path="/resources/community" element={<Community />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
