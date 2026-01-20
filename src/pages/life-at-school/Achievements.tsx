import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Trophy, Award, Star, Medal } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "100% Board Results", description: "All students passed with flying colors in 2024 board exams" },
  { icon: Award, title: "State Science Fair Winners", description: "First place in Karnataka State Science Exhibition" },
  { icon: Star, title: "National Debate Finalists", description: "Reached finals in National Level Debate Competition" },
  { icon: Medal, title: "Sports Champions", description: "District level champions in cricket and athletics" },
];

export default function Achievements() {
  return (
    <PageLayout>
      <PageHeader title="Student Achievements" subtitle="Celebrating excellence across academics, sports, and arts" breadcrumbs={[{ label: "Life at School", href: "/life-at-school" }, { label: "Achievements" }]} />
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((a) => (
              <div key={a.title} className="bg-muted/50 rounded-2xl p-6 text-center hover:shadow-card transition-shadow">
                <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4"><a.icon className="h-7 w-7 text-accent-foreground" /></div>
                <h3 className="font-semibold text-foreground mb-2">{a.title}</h3>
                <p className="text-muted-foreground text-sm">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
