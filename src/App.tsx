import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PipelineTargets from "./pages/PipelineTargets";
import DemandLeadGenStrategy from "./pages/DemandLeadGenStrategy";
import EventsStrategy from "./pages/EventsStrategy";
import AnalystStrategy from "./pages/AnalystStrategy";
import PartnersStrategy from "./pages/PartnersStrategy";
import CapacityPlan from "./pages/CapacityPlan";
import Objectives2026 from "./pages/Objectives2026";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pipeline-targets" element={<PipelineTargets />} />
          <Route path="/demand-lead-gen" element={<DemandLeadGenStrategy />} />
          <Route path="/events-strategy" element={<EventsStrategy />} />
          <Route path="/analyst-strategy" element={<AnalystStrategy />} />
          <Route path="/partners-strategy" element={<PartnersStrategy />} />
          <Route path="/capacity-plan" element={<CapacityPlan />} />
          <Route path="/objectives-2026" element={<Objectives2026 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
