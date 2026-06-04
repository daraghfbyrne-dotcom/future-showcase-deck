import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduction from "./pages/Introduction";
import Index from "./pages/Index";
import PipelineTargets from "./pages/PipelineTargets";
import DemandLeadGenStrategy from "./pages/DemandLeadGenStrategy";
import EventsStrategy from "./pages/EventsStrategy";
import AnalystStrategy from "./pages/AnalystStrategy";
import PartnersStrategy from "./pages/PartnersStrategy";
import Objectives2026 from "./pages/Objectives2026";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<ProtectedRoute><Introduction /></ProtectedRoute>} />
            <Route path="/strategy" element={<ProtectedRoute><Index /></ProtectedRoute>} />
            <Route path="/pipeline-targets" element={<ProtectedRoute><PipelineTargets /></ProtectedRoute>} />
            <Route path="/demand-lead-gen" element={<ProtectedRoute><DemandLeadGenStrategy /></ProtectedRoute>} />
            <Route path="/events-strategy" element={<ProtectedRoute><EventsStrategy /></ProtectedRoute>} />
            <Route path="/analyst-strategy" element={<ProtectedRoute><AnalystStrategy /></ProtectedRoute>} />
            <Route path="/partners-strategy" element={<ProtectedRoute><PartnersStrategy /></ProtectedRoute>} />
            <Route path="/objectives-2026" element={<ProtectedRoute><Objectives2026 /></ProtectedRoute>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
