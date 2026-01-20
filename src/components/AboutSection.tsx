import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import libraryImage from "@/assets/library.jpg";

const values = [
  "Academic Excellence",
  "Character Development",
  "Innovation & Creativity",
  "Global Perspective",
  "Community Engagement",
  "Lifelong Learning",
];

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src={libraryImage}
                alt="Athani School Library"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-background rounded-2xl shadow-xl p-6 border border-border max-w-[200px] animate-float">
              <p className="font-serif text-4xl font-bold text-primary">CBSE</p>
              <p className="text-muted-foreground text-sm mt-1">Affiliated Curriculum</p>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">About Athani School</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Nurturing Minds,{" "}
                <span className="text-gradient-primary">Building Futures</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              For over two decades, Athani School has been at the forefront of educational excellence 
              in the Belagavi region. Our holistic approach combines rigorous academics with 
              comprehensive co-curricular programs, preparing students to thrive in an ever-changing world.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We believe every child has unique potential. Our dedicated faculty, state-of-the-art 
              facilities, and nurturing environment work together to unlock this potential, fostering 
              intellectual curiosity, critical thinking, and strong moral values.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-3">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                  <span className="text-foreground text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>

            <Button size="lg" asChild>
              <Link to="/who-we-are">
                Learn More About Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
