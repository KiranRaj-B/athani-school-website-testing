import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { BookOpen, Users, Lightbulb, Target, Brain, Heart, Compass, Sparkles } from "lucide-react";

const approaches = [
  {
    icon: Brain,
    title: "Inquiry-Based Learning",
    description: "Students are encouraged to ask questions, explore, and discover knowledge through guided investigation. This approach develops critical thinking and problem-solving skills.",
    features: ["Research projects", "Hypothesis testing", "Discovery learning", "Scientific method"],
  },
  {
    icon: Lightbulb,
    title: "Experiential Learning",
    description: "Learning by doing through hands-on activities, experiments, and real-world applications. Students engage directly with concepts to deepen understanding.",
    features: ["Lab experiments", "Field trips", "Project work", "Simulations"],
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description: "Group activities and peer learning foster teamwork, communication, and social skills while enhancing academic understanding.",
    features: ["Group projects", "Peer tutoring", "Discussion forums", "Team presentations"],
  },
  {
    icon: Target,
    title: "Differentiated Instruction",
    description: "Recognizing that each student learns differently, we adapt teaching methods and materials to meet individual needs and learning styles.",
    features: ["Personalized attention", "Multiple learning paths", "Flexible assessments", "Individual support"],
  },
];

const principles = [
  { icon: Heart, title: "Student-Centered", description: "Every decision puts student growth and well-being first." },
  { icon: Compass, title: "Holistic Development", description: "Academic, physical, emotional, and social growth together." },
  { icon: Sparkles, title: "Innovation", description: "Embracing new methods and technologies to enhance learning." },
  { icon: BookOpen, title: "Lifelong Learning", description: "Instilling curiosity and love for learning that lasts a lifetime." },
];

export default function Approach() {
  return (
    <PageLayout>
      <PageHeader
        title="Our Approach to Learning"
        subtitle="A student-centered philosophy that nurtures curiosity, creativity, and critical thinking"
        breadcrumbs={[{ label: "Learning", href: "/learning" }, { label: "Our Approach" }]}
      />

      {/* Philosophy */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Educational Philosophy</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Athani School, we believe that education is not merely the transfer of knowledge but 
              the ignition of a flame. Our approach combines time-tested pedagogical methods with 
              innovative practices to create a learning environment where every student can thrive.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((item) => (
              <div key={item.title} className="bg-muted/50 rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approaches */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Teaching Methodologies</h2>
            <p className="text-muted-foreground">
              We employ diverse teaching methods to ensure effective learning for all students
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {approaches.map((approach) => (
              <div key={approach.title} className="bg-background rounded-2xl p-8 shadow-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                    <approach.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{approach.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{approach.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {approach.features.map((feature) => (
                    <span key={feature} className="text-sm text-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Continuous Assessment
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Formative", description: "Regular quizzes, class participation, and ongoing feedback", percent: "40%" },
                { title: "Summative", description: "Term exams, projects, and comprehensive assessments", percent: "40%" },
                { title: "Co-Scholastic", description: "Sports, arts, life skills, and character development", percent: "20%" },
              ].map((item) => (
                <div key={item.title} className="bg-muted/50 rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold text-primary mb-2">{item.percent}</p>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
