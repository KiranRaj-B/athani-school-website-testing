import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { BookOpen, GraduationCap, FlaskConical, Calculator, Globe, Palette, Dumbbell, Code } from "lucide-react";
import academicsImage from "@/assets/academics.jpg";

const programs = [
  {
    level: "Primary School",
    grades: "Grades 1-5",
    description: "Building strong foundations through engaging, activity-based learning.",
    subjects: ["English", "Hindi", "Mathematics", "EVS", "Computer Science", "Art & Craft", "Physical Education", "Value Education"],
  },
  {
    level: "Middle School",
    grades: "Grades 6-8",
    description: "Deepening understanding through structured curriculum and critical thinking.",
    subjects: ["English", "Hindi", "Mathematics", "Science", "Social Studies", "Computer Science", "Sanskrit/French", "Art & Music"],
  },
  {
    level: "Secondary School",
    grades: "Grades 9-10",
    description: "Comprehensive CBSE curriculum with focus on board examination preparation.",
    subjects: ["English", "Hindi", "Mathematics", "Science", "Social Science", "Computer Applications", "Physical Education", "Art/Music (optional)"],
  },
  {
    level: "Senior Secondary",
    grades: "Grades 11-12",
    description: "Specialized streams preparing students for higher education and careers.",
    subjects: ["Science Stream: Physics, Chemistry, Mathematics/Biology", "Commerce Stream: Accounts, Economics, Business Studies", "Arts Stream: History, Geography, Political Science", "Common: English, Physical Education"],
  },
];

const facilities = [
  { icon: FlaskConical, title: "Science Labs", description: "Fully equipped Physics, Chemistry, and Biology laboratories" },
  { icon: Calculator, title: "Math Lab", description: "Interactive mathematics learning with manipulatives" },
  { icon: Code, title: "Computer Lab", description: "Modern computers with latest software and internet" },
  { icon: Globe, title: "Language Lab", description: "Audio-visual aids for language learning" },
  { icon: BookOpen, title: "Library", description: "Extensive collection of books, journals, and digital resources" },
  { icon: Palette, title: "Art Room", description: "Dedicated space for visual arts and crafts" },
];

export default function Academics() {
  return (
    <PageLayout>
      <PageHeader
        title="Academics"
        subtitle="A comprehensive CBSE curriculum designed for holistic development"
        breadcrumbs={[{ label: "Learning", href: "/learning" }, { label: "Academics" }]}
      />

      {/* Overview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Academic Excellence</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our CBSE-affiliated curriculum is designed to provide students with a strong academic 
                foundation while fostering creativity, critical thinking, and a love for learning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We follow the National Education Policy 2020 framework, integrating competency-based 
                learning, experiential education, and 21st-century skills development into our teaching.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "100%", label: "Board Pass Rate" },
                  { value: "85%+", label: "Distinction Rate" },
                  { value: "15:1", label: "Student-Teacher Ratio" },
                  { value: "40+", label: "Subjects Offered" },
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
                src={academicsImage}
                alt="Academic Programs"
                className="rounded-2xl shadow-card-hover w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Academic Programs</h2>
            <p className="text-muted-foreground">
              Structured programs for each stage of educational development
            </p>
          </div>
          <div className="space-y-6">
            {programs.map((program) => (
              <div key={program.level} className="bg-background rounded-2xl p-8 shadow-card">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shrink-0">
                    <GraduationCap className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{program.level}</h3>
                      <span className="bg-secondary/10 text-secondary text-sm font-medium px-3 py-1 rounded-full">
                        {program.grades}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {program.subjects.map((subject) => (
                        <span key={subject} className="bg-muted text-muted-foreground text-sm px-3 py-1 rounded-full">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Academic Facilities</h2>
            <p className="text-muted-foreground">
              State-of-the-art infrastructure supporting quality education
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility) => (
              <div key={facility.title} className="bg-muted/50 rounded-xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <facility.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{facility.title}</h3>
                <p className="text-muted-foreground text-sm">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
