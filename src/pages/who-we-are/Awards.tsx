import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Trophy, Star, Award, Medal } from "lucide-react";

const majorAwards = [
  {
    year: "2024",
    title: "Best CBSE School Award",
    organization: "Karnataka State Education Board",
    description: "Recognized for outstanding academic performance and innovative teaching practices.",
  },
  {
    year: "2023",
    title: "Excellence in Education Award",
    organization: "National Education Foundation",
    description: "Awarded for comprehensive educational programs and student development initiatives.",
  },
  {
    year: "2023",
    title: "Green School of the Year",
    organization: "Environmental Education Council",
    description: "Recognized for sustainability initiatives and environmental education programs.",
  },
  {
    year: "2022",
    title: "Digital Innovation Award",
    organization: "EdTech India",
    description: "Awarded for successful integration of technology in education during and post-pandemic.",
  },
  {
    year: "2021",
    title: "Community Service Excellence",
    organization: "District Administration, Belagavi",
    description: "Recognized for outstanding contribution to community development and social initiatives.",
  },
  {
    year: "2020",
    title: "Best Sports Infrastructure",
    organization: "Karnataka Sports Authority",
    description: "Awarded for world-class sports facilities and athlete development programs.",
  },
];

const studentAchievements = [
  { category: "Academics", count: "150+", description: "Board exam toppers and distinction holders" },
  { category: "Sports", count: "75+", description: "State and national level medals" },
  { category: "Arts", count: "50+", description: "Competition winners in music, dance, and art" },
  { category: "Science", count: "30+", description: "Olympiad qualifiers and science fair winners" },
];

const recentRecognitions = [
  "100% Board Exam Pass Rate - 2024",
  "State Science Fair - 1st Place",
  "Inter-School Sports Championship - Overall Winners",
  "National Debate Competition - Runners Up",
  "District Level Art Exhibition - Best School",
  "Environmental Quiz - State Champions",
];

export default function Awards() {
  return (
    <PageLayout>
      <PageHeader
        title="Awards & Recognitions"
        subtitle="Celebrating excellence and achievements of our school and students"
        breadcrumbs={[{ label: "Who We Are", href: "/who-we-are" }, { label: "Awards" }]}
      />

      {/* Stats */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentAchievements.map((item) => (
              <div key={item.category} className="bg-muted/50 rounded-xl p-6 text-center">
                <p className="text-4xl font-bold text-primary mb-2">{item.count}</p>
                <h3 className="font-semibold text-foreground mb-1">{item.category}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Awards */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Institutional Awards</h2>
            <p className="text-muted-foreground">
              Recognition of our commitment to educational excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majorAwards.map((award) => (
              <div key={award.title} className="bg-background rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                    <Trophy className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                    {award.year}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{award.title}</h3>
                <p className="text-primary text-sm mb-2">{award.organization}</p>
                <p className="text-muted-foreground text-sm">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Recognitions */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Recent Recognitions</h2>
              <p className="text-muted-foreground">
                Latest achievements from the 2023-24 academic year
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {recentRecognitions.map((item) => (
                <div key={item} className="flex items-center gap-4 bg-muted/50 rounded-xl p-4">
                  <Star className="h-5 w-5 text-secondary shrink-0" />
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <Medal className="h-12 w-12 text-secondary mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Be Part of Our Success Story
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Join Athani School and be part of a community that celebrates excellence, 
            nurtures talent, and achieves greatness together.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
