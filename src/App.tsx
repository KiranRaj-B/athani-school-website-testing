import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhoWeAre from "./pages/WhoWeAre";
import Learning from "./pages/Learning";
import LifeAtSchool from "./pages/LifeAtSchool";
import Admissions from "./pages/Admissions";
import Stories from "./pages/Stories";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

// Who We Are sub-pages
import About from "./pages/who-we-are/About";
import Vision from "./pages/who-we-are/Vision";
import Policies from "./pages/who-we-are/Policies";
import Affiliations from "./pages/who-we-are/Affiliations";
import Awards from "./pages/who-we-are/Awards";

// Learning sub-pages
import Approach from "./pages/learning/Approach";
import Academics from "./pages/learning/Academics";
import Technology from "./pages/learning/Technology";
import Reading from "./pages/learning/Reading";
import Parents from "./pages/learning/Parents";
import Publications from "./pages/learning/Publications";

// Life at School sub-pages
import Arts from "./pages/life-at-school/Arts";
import Sports from "./pages/life-at-school/Sports";
import Clubs from "./pages/life-at-school/Clubs";
import CoCurricular from "./pages/life-at-school/CoCurricular";
import Health from "./pages/life-at-school/Health";
import Sustainability from "./pages/life-at-school/Sustainability";
import AcademicCalendar from "./pages/life-at-school/Calendar";
import Achievements from "./pages/life-at-school/Achievements";

// Admissions sub-pages
import Enrol from "./pages/admissions/Enrol";
import Transportation from "./pages/admissions/Transportation";

// Stories sub-pages
import Trips from "./pages/stories/Trips";
import Events from "./pages/stories/Events";
import Initiatives from "./pages/stories/Initiatives";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Index />} />
          
          {/* Gallery */}
          <Route path="/gallery" element={<Gallery />} />
          
          {/* Who We Are */}
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/who-we-are/about" element={<About />} />
          <Route path="/who-we-are/vision" element={<Vision />} />
          <Route path="/who-we-are/policies" element={<Policies />} />
          <Route path="/who-we-are/affiliations" element={<Affiliations />} />
          <Route path="/who-we-are/awards" element={<Awards />} />
          
          {/* Learning */}
          <Route path="/learning" element={<Learning />} />
          <Route path="/learning/approach" element={<Approach />} />
          <Route path="/learning/academics" element={<Academics />} />
          <Route path="/learning/technology" element={<Technology />} />
          <Route path="/learning/reading" element={<Reading />} />
          <Route path="/learning/parents" element={<Parents />} />
          <Route path="/learning/publications" element={<Publications />} />
          
          {/* Life at School */}
          <Route path="/life-at-school" element={<LifeAtSchool />} />
          <Route path="/life-at-school/arts" element={<Arts />} />
          <Route path="/life-at-school/sports" element={<Sports />} />
          <Route path="/life-at-school/clubs" element={<Clubs />} />
          <Route path="/life-at-school/co-curricular" element={<CoCurricular />} />
          <Route path="/life-at-school/health" element={<Health />} />
          <Route path="/life-at-school/sustainability" element={<Sustainability />} />
          <Route path="/life-at-school/calendar" element={<AcademicCalendar />} />
          <Route path="/life-at-school/achievements" element={<Achievements />} />
          
          {/* Admissions */}
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/admissions/enrol" element={<Enrol />} />
          <Route path="/admissions/transportation" element={<Transportation />} />
          
          {/* Stories */}
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/trips" element={<Trips />} />
          <Route path="/stories/events" element={<Events />} />
          <Route path="/stories/initiatives" element={<Initiatives />} />
          
          {/* Careers & Contact */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
