import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Monitor, Wifi, Laptop, Bot, Video, Cloud, Shield, Lightbulb } from "lucide-react";

const techFeatures = [
  {
    icon: Monitor,
    title: "Smart Classrooms",
    description: "Interactive whiteboards, projectors, and audio systems in every classroom enable dynamic, multimedia-rich lessons that engage students effectively.",
  },
  {
    icon: Laptop,
    title: "1:1 Device Program",
    description: "Senior students have access to personal devices for learning, enabling anytime, anywhere access to educational resources.",
  },
  {
    icon: Bot,
    title: "Robotics & Coding Lab",
    description: "State-of-the-art robotics lab with LEGO Mindstorms, Arduino kits, and coding platforms for hands-on STEM learning.",
  },
  {
    icon: Cloud,
    title: "Learning Management System",
    description: "Digital platform for assignments, resources, assessments, and parent-teacher communication accessible 24/7.",
  },
  {
    icon: Video,
    title: "Virtual Learning",
    description: "Integrated video conferencing and virtual classroom capabilities for hybrid learning and guest lectures.",
  },
  {
    icon: Shield,
    title: "Digital Safety",
    description: "Comprehensive internet safety measures, content filtering, and digital citizenship education for all students.",
  },
];

const innovations = [
  { title: "AI-Assisted Learning", description: "Personalized learning paths using AI-powered adaptive platforms" },
  { title: "Virtual Reality Labs", description: "Immersive VR experiences for science, history, and geography" },
  { title: "3D Printing Studio", description: "Design and prototyping capabilities for student projects" },
  { title: "Digital Library", description: "Access to thousands of e-books, journals, and research papers" },
];

const programs = [
  "Computer Science from Grade 1",
  "Coding bootcamps (Scratch, Python, Java)",
  "Web development workshops",
  "App development for seniors",
  "Data science introduction",
  "Cybersecurity awareness",
];

export default function Technology() {
  return (
    <PageLayout>
      <PageHeader
        title="Technology & Innovation"
        subtitle="Preparing students for the digital future with cutting-edge technology integration"
        breadcrumbs={[{ label: "Learning", href: "/learning" }, { label: "Technology & Innovation" }]}
      />

      {/* Overview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Digital-First Learning</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Athani School, technology is seamlessly integrated into every aspect of education. 
              Our digital infrastructure and innovative programs prepare students to thrive in an 
              increasingly technology-driven world.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techFeatures.map((feature) => (
              <div key={feature.title} className="bg-muted/50 rounded-2xl p-6 hover:shadow-card transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Hub */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Innovation Hub</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our dedicated Innovation Hub is where creativity meets technology. Students work on 
                real-world projects, participate in hackathons, and develop solutions to local challenges.
              </p>
              <div className="space-y-4">
                {innovations.map((item) => (
                  <div key={item.title} className="bg-background rounded-xl p-5">
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12">
              <Lightbulb className="h-12 w-12 text-secondary mb-6" />
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">Tech Curriculum</h3>
              <p className="text-primary-foreground/80 mb-6">
                Our comprehensive technology education program spans all grades:
              </p>
              <ul className="space-y-3">
                {programs.map((program) => (
                  <li key={program} className="flex items-center gap-3 text-primary-foreground">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    {program}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tech Infrastructure</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "200+", label: "Computers" },
              { value: "100%", label: "Wi-Fi Coverage" },
              { value: "50+", label: "Smart Classrooms" },
              { value: "3", label: "Computer Labs" },
            ].map((stat) => (
              <div key={stat.label} className="bg-muted/50 rounded-xl p-6 text-center">
                <Wifi className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
