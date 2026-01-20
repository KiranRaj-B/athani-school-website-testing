import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { BookOpen, Library, Users, Star, Award, Calendar } from "lucide-react";
import libraryImage from "@/assets/library.jpg";

const programFeatures = [
  {
    icon: BookOpen,
    title: "Structured Reading Time",
    description: "Daily dedicated reading periods where students engage with age-appropriate books across various genres.",
  },
  {
    icon: Library,
    title: "Extensive Library",
    description: "Over 15,000 books including fiction, non-fiction, reference materials, and digital resources.",
  },
  {
    icon: Users,
    title: "Reading Circles",
    description: "Weekly book discussion groups where students share insights and develop critical analysis skills.",
  },
  {
    icon: Star,
    title: "Author Visits",
    description: "Regular interactions with authors who share their writing journey and inspire young readers.",
  },
];

const readingLevels = [
  { level: "Early Readers (Grades 1-2)", books: "Picture books, phonics readers, simple stories", goal: "100 books/year" },
  { level: "Developing Readers (Grades 3-5)", books: "Chapter books, graphic novels, early novels", goal: "50 books/year" },
  { level: "Intermediate (Grades 6-8)", books: "Young adult fiction, non-fiction, classics", goal: "25 books/year" },
  { level: "Advanced (Grades 9-12)", books: "Literature, research materials, academic texts", goal: "15 books/year" },
];

const activities = [
  "Annual Reading Marathon",
  "Book Fair (twice yearly)",
  "Story Writing Competition",
  "Reading Ambassador Program",
  "Library Week Celebrations",
  "Parent-Child Reading Sessions",
];

export default function Reading() {
  return (
    <PageLayout>
      <PageHeader
        title="Reading Programme"
        subtitle="Cultivating lifelong readers through comprehensive literacy initiatives"
        breadcrumbs={[{ label: "Learning", href: "/learning" }, { label: "Reading Programme" }]}
      />

      {/* Overview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">The Joy of Reading</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our Reading Programme is designed to instill a love for reading that lasts a lifetime. 
                We believe that reading is the foundation of all learning and the key to unlocking 
                unlimited potential.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through structured programs, engaging activities, and access to diverse reading materials, 
                we ensure every student develops strong reading habits and comprehension skills.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "15,000+", label: "Books in Library" },
                  { value: "500+", label: "Digital Titles" },
                  { value: "30 min", label: "Daily Reading Time" },
                  { value: "98%", label: "Student Participation" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-muted/50 rounded-lg p-4">
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={libraryImage}
                alt="School Library"
                className="rounded-2xl shadow-card-hover w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Program Features</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programFeatures.map((feature) => (
              <div key={feature.title} className="bg-background rounded-2xl p-6 shadow-card">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reading Levels */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Grade-wise Reading Goals</h2>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {readingLevels.map((level) => (
              <div key={level.level} className="bg-muted/50 rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{level.level}</h3>
                  <p className="text-muted-foreground text-sm">{level.books}</p>
                </div>
                <div className="bg-secondary/10 text-secondary font-medium px-4 py-2 rounded-full text-sm">
                  Goal: {level.goal}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Calendar className="h-10 w-10 text-secondary mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                  Reading Activities
                </h2>
                <p className="text-primary-foreground/80">
                  Throughout the year, we organize various activities to celebrate and encourage reading:
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {activities.map((activity) => (
                  <div key={activity} className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg px-4 py-3">
                    <span className="text-primary-foreground text-sm">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
