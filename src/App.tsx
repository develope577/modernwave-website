
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import useScrollToTop from "./hooks/useScrollToTop";

import Index from "./pages/Index";
import Business from "./pages/Business";
import Consumer from "./pages/Consumer";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BusinessIntelligence from "./pages/BusinessIntelligence";
import CustomSoftware from "./pages/CustomSoftware";
import CyberSecurity from "./pages/CyberSecurity";
import ITConsulting from "./pages/ITConsulting";
import Consultation from "./pages/Consultation";

// Cybersecurity detail pages
import VulnerabilityAssessment from "./pages/business/VulnerabilityAssessment";
import NetworkSecurity from "./pages/business/NetworkSecurity";
import ThreatMonitoring from "./pages/business/ThreatMonitoring";
import ComprehensiveCybersecurity from "./pages/business/ComprehensiveCybersecurity";

// Consumer services pages
import AppDevelopment from "./pages/consumer/AppDevelopment";
import AIIntegration from "./pages/consumer/AIIntegration";
import UXDesign from "./pages/consumer/UXDesign";
import CrossPlatform from "./pages/consumer/CrossPlatform";
import CloudSolutions from "./pages/consumer/CloudSolutions";
import EcommerceIntegration from "./pages/consumer/EcommerceIntegration";

const queryClient = new QueryClient();

// Wrapper component that uses the scroll hook
const ScrollToTop = ({ children }: { children: React.ReactNode }) => {
  useScrollToTop();
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/business" element={<Business />} />
            <Route path="/consumer" element={<Consumer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/business/intelligence" element={<BusinessIntelligence />} />
            <Route path="/business/software" element={<CustomSoftware />} />
            <Route path="/business/cybersecurity" element={<CyberSecurity />} />
            <Route path="/business/consulting" element={<ITConsulting />} />
            <Route path="/consultation" element={<Consultation />} />
            
            {/* Cybersecurity detail pages */}
            <Route path="/business/cybersecurity/vulnerability-assessment" element={<VulnerabilityAssessment />} />
            <Route path="/business/cybersecurity/network-security" element={<NetworkSecurity />} />
            <Route path="/business/cybersecurity/threat-monitoring" element={<ThreatMonitoring />} />
            <Route path="/business/cybersecurity/comprehensive" element={<ComprehensiveCybersecurity />} />
            
            {/* Consumer service detail pages */}
            <Route path="/consumer/app-development" element={<AppDevelopment />} />
            <Route path="/consumer/ai-integration" element={<AIIntegration />} />
            <Route path="/consumer/ux-design" element={<UXDesign />} />
            <Route path="/consumer/cross-platform" element={<CrossPlatform />} />
            <Route path="/consumer/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/consumer/ecommerce-integration" element={<EcommerceIntegration />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="/NotFound" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
