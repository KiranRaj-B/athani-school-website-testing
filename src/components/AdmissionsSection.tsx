import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Submit Application",
    description:
      "Complete the online application form with required documents and information.",
  },
  {
    step: "02",
    title: "Entrance Assessment",
    description:
      "Age-appropriate assessment to understand the child's learning level and readiness.",
  },
  {
    step: "03",
    title: "Parent Interaction",
    description:
      "Meet with our admissions team and principal to discuss the school philosophy.",
  },
  {
    step: "04",
    title: "Enrollment Confirmation",
    description:
      "Receive admission decision and complete the enrollment process with fee payment.",
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
              <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
                Admissions 2025-26
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
                Begin Your Child&apos;s Journey to{" "}
                <span className="text-secondary">Excellence</span>
              </h2>

              <p className="text-primary-foreground/90 text-lg">
                We welcome students who are eager to learn, grow, and make a difference.
                Our admissions process is designed to be simple and transparent.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="xl"
                className="bg-secondary hover:bg-secondary-light"
                asChild
              >
                <Link to="/admissions/enrol">
                  Apply Now
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>

              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">
                  <Phone className="h-5 w-5 mr-2" />
                  Schedule a Visit
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-secondary/30 border-2 border-primary-foreground flex items-center justify-center text-xs font-bold text-primary-foreground"
                  >
                    {i}
                  </div>
                ))}
              </div>

              <p className="text-primary-foreground/80 text-sm">
                <span className="font-semibold text-primary-foreground">1000+</span>{" "}
                families joined last year
              </p>
            </div>
          </div>

          {/* Admission Process (UPDATED DESIGN) */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold text-primary-foreground mb-8">
              Admission Process
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {steps.map((step) => (
                <div
                  key={step.step}
                  className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>

                  <h4 className="mt-6 text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h4>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
