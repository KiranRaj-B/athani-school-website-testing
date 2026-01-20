import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Lightbulb, Users, Globe, ArrowRight } from "lucide-react";
import academicsImage from "@/assets/academics.jpg";

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "CBSE-aligned curriculum with focus on conceptual understanding and application.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Teaching",
    description: "Modern pedagogical methods including project-based and experiential learning.",
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    description: "Personalized attention with optimal student-teacher ratios for better learning.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "International exposure through exchange programs and global partnerships.",
  },
];

export function LearningSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Our Learning Philosophy</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Education That{" "}
            <span className="text-gradient-primary">Transforms</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine traditional academic rigor with innovative teaching methods to create 
            an engaging, student-centered learning experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-in-left">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-background rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Image and CTA */}
          <div className="relative animate-fade-in">
            <div className="rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src={academicsImage}
                alt="Students in Science Lab"
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Overlay Card */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 via-foreground/60 to-transparent p-8 rounded-b-2xl">
              <p className="text-primary-foreground text-xl font-semibold mb-2">
                Discover Our Academic Programs
              </p>
              <p className="text-primary-foreground/80 text-sm mb-4">
                From foundational learning to advanced studies, explore our comprehensive curriculum.
              </p>
              <Button variant="heroOutline" size="sm" asChild>
                <Link to="/learning/academics">
                  View Academics
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
