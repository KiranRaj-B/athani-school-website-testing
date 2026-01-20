import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCampus}
          alt="Athani School Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl space-y-8 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-primary-foreground text-sm font-medium">Admissions Open 2025-26</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            Shaping Future-Ready{" "}
            <span className="text-secondary">Learners</span>
          </h1>

          {/* Description */}
          <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed max-w-xl">
            Where academic excellence meets holistic development. Join a community that nurtures 
            curiosity, fosters innovation, and builds leaders of tomorrow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/admissions/enrol">
                Apply for Admission
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/who-we-are">
                <Play className="h-5 w-5" />
                Explore Campus
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20 max-w-lg">
            {[
              { value: "25+", label: "Years of Excellence" },
              { value: "2000+", label: "Happy Students" },
              { value: "100%", label: "Result Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-secondary">{stat.value}</p>
                <p className="text-primary-foreground/70 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
