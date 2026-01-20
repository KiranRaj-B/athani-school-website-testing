import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhoWeAre from "./pages/WhoWeAre";
import Learning from "./pages/Learning";
import LifeAtSchool from "./pages/LifeAtSchool";
import Admissions from "./pages/Admissions";
import Stories from "./pages/Stories";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/who-we-are/*" element={<WhoWeAre />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/learning/*" element={<Learning />} />
          <Route path="/life-at-school" element={<LifeAtSchool />} />
          <Route path="/life-at-school/*" element={<LifeAtSchool />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/admissions/*" element={<Admissions />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/*" element={<Stories />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
