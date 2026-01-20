import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Bot, Users, Mic, Camera, Book, Globe } from "lucide-react";

const clubs = [
  { icon: Bot, title: "Robotics Club", description: "Build and program robots, participate in competitions" },
  { icon: Mic, title: "Debate & MUN", description: "Public speaking, Model United Nations, and debate tournaments" },
  { icon: Camera, title: "Photography Club", description: "Learn photography skills and showcase your work" },
  { icon: Book, title: "Literary Club", description: "Creative writing, poetry, and book discussions" },
  { icon: Globe, title: "Environment Club", description: "Sustainability initiatives and nature conservation" },
  { icon: Users, title: "Social Service Club", description: "Community outreach and volunteer programs" },
];

export default function Clubs() {
  return (
    <PageLayout>
      <PageHeader title="Clubs & Activities" subtitle="Explore your passions through diverse student clubs" breadcrumbs={[{ label: "Life at School", href: "/life-at-school" }, { label: "Clubs & Activities" }]} />
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Find Your Community</h2>
            <p className="text-muted-foreground">Our diverse range of clubs cater to every interest, helping students discover passions and develop leadership skills.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((c) => (
              <div key={c.title} className="bg-muted/50 rounded-2xl p-6 hover:shadow-card transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4"><c.icon className="h-6 w-6 text-primary" /></div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
