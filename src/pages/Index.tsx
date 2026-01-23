import LeadPopup from "@/components/marketing/LeadPopup";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { LearningSection } from "@/components/LearningSection";
import { LifeAtSchoolSection } from "@/components/LifeAtSchoolSection";
import { StoriesSection } from "@/components/StoriesSection";
import { AdmissionsSection } from "@/components/AdmissionsSection";
import CurriculumSection from "@/components/CurriculumSection";
import BoardMembersSection from "@/components/BoardMembersSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <LeadPopup />
        <HeroSection />
        <AboutSection />
        {/* <LearningSection /> */}
        <CurriculumSection />
        <BoardMembersSection />
        <LifeAtSchoolSection />
        {/* <StoriesSection /> */}
        <AdmissionsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
