
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Business from "./pages/Business";
import Consumer from "./pages/Consumer";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BusinessIntelligence from "./pages/BusinessIntelligence";
import CustomSoftware from "./pages/CustomSoftware";
import CyberSecurity from "./pages/CyberSecurity";
import ITConsulting from "./pages/ITConsulting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/business" element={<Business />} />
          <Route path="/consumer" element={<Consumer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/business/intelligence" element={<BusinessIntelligence />} />
          <Route path="/business/software" element={<CustomSoftware />} />
          <Route path="/business/cybersecurity" element={<CyberSecurity />} />
          <Route path="/business/consulting" element={<ITConsulting />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
