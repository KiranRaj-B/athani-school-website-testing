import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ClipboardList, FileText, Calendar, Phone, ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Submit Enquiry",
    description: "Fill out our online enquiry form with your child's details.",
  },
  {
    icon: FileText,
    title: "Application Form",
    description: "Complete the detailed application form and submit required documents.",
  },
  {
    icon: Calendar,
    title: "Assessment & Interview",
    description: "Attend the scheduled assessment and parent-student interaction.",
  },
  {
    icon: CheckCircle,
    title: "Enrollment",
    description: "Complete admission formalities and welcome to Athani School!",
  },
];

export function AdmissionsSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Admissions 2025-26</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
                Begin Your Child's Journey to{" "}
                <span className="text-secondary">Excellence</span>
              </h2>
              <p className="text-primary-foreground/90 text-lg">
                We welcome students who are eager to learn, grow, and make a difference. 
                Our admissions process is designed to be simple and transparent.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="bg-secondary hover:bg-secondary-light" asChild>
                <Link to="/admissions/enrol">
                  Apply Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">
                  <Phone className="h-5 w-5" />
                  Schedule a Visit
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-secondary/30 border-2 border-primary-foreground flex items-center justify-center text-xs font-bold text-primary-foreground"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-primary-foreground/80 text-sm">
                <span className="font-semibold text-primary-foreground">500+</span> families joined last year
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 animate-fade-in">
            <h3 className="font-serif text-xl font-bold text-primary-foreground mb-6">
              Admission Process
            </h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center shrink-0">
                      <step.icon className="h-6 w-6 text-secondary" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-12 left-1/2 w-0.5 h-8 bg-primary-foreground/20 -translate-x-1/2" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground mb-1">{step.title}</h4>
                    <p className="text-primary-foreground/70 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
