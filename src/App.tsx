import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PipelineConversion from "./pages/PipelineConversion";
import AnalystStrategy from "./pages/AnalystStrategy";
import PartnersStrategy from "./pages/PartnersStrategy";
import CapacityPlan from "./pages/CapacityPlan";
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
          <Route path="/pipeline-conversion" element={<PipelineConversion />} />
          <Route path="/analyst-strategy" element={<AnalystStrategy />} />
          <Route path="/partners-strategy" element={<PartnersStrategy />} />
          <Route path="/capacity-plan" element={<CapacityPlan />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
