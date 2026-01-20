import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { BookOpen, Lightbulb, Monitor, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import academicsImage from "@/assets/academics.jpg";

const programs = [
  {
    title: "Primary School (Grades 1-5)",
    description: "Building strong foundations with emphasis on literacy, numeracy, and curiosity-driven learning.",
    features: ["Activity-based learning", "Language development", "Basic sciences", "Arts integration"],
  },
  {
    title: "Middle School (Grades 6-8)",
    description: "Developing critical thinking and deeper subject understanding through interactive methods.",
    features: ["Subject specialization", "Project-based learning", "Research skills", "Technology integration"],
  },
  {
    title: "High School (Grades 9-10)",
    description: "Comprehensive CBSE curriculum preparing students for board examinations and beyond.",
    features: ["Board exam preparation", "Career counseling", "Practical labs", "Competitive exam coaching"],
  },
  {
    title: "Senior Secondary (Grades 11-12)",
    description: "Specialized streams with focus on college readiness and career preparation.",
    features: ["Science, Commerce, Arts streams", "University guidance", "Internship opportunities", "Entrance exam prep"],
  },
];

const approaches = [
  { icon: BookOpen, title: "Inquiry-Based Learning", description: "Students explore concepts through questioning and investigation." },
  { icon: Lightbulb, title: "Experiential Learning", description: "Learning by doing through hands-on activities and projects." },
  { icon: Monitor, title: "Technology Integration", description: "Smart classrooms and digital tools enhance learning." },
  { icon: Users, title: "Collaborative Learning", description: "Group projects foster teamwork and communication skills." },
];

export default function Learning() {
  return (
    <PageLayout>
      <PageHeader
        title="Learning at Athani School"
        subtitle="Discover our innovative approach to education that prepares students for success"
        breadcrumbs={[{ label: "Learning" }]}
      />

      {/* Our Approach */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Teaching Approach</h2>
            <p className="text-muted-foreground">
              We combine traditional academic rigor with modern pedagogical methods
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approaches.map((approach) => (
              <div key={approach.title} className="bg-muted/50 rounded-2xl p-6 hover:shadow-card transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <approach.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{approach.title}</h3>
                <p className="text-muted-foreground text-sm">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Academic Programs</h2>
            <p className="text-muted-foreground">
              Comprehensive curriculum designed for each stage of development
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div key={program.title} className="bg-background rounded-2xl p-8 shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={academicsImage}
                alt="Technology in Learning"
                className="rounded-2xl shadow-card-hover w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Technology & Innovation
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We integrate cutting-edge technology into our teaching methodology to create engaging 
                and interactive learning experiences.
              </p>
              <ul className="space-y-3">
                {[
                  "Smart classrooms with interactive whiteboards",
                  "1:1 device program for senior students",
                  "Robotics and coding labs",
                  "Virtual reality learning experiences",
                  "Online learning management system",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link to="/learning/technology">
                  Learn More <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
