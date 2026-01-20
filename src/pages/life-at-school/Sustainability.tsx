import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Leaf, Droplets, Sun, Recycle } from "lucide-react";

const initiatives = [
  { icon: Leaf, title: "Green Campus", description: "Tree plantation drives and maintaining lush green spaces" },
  { icon: Droplets, title: "Water Conservation", description: "Rainwater harvesting and water recycling systems" },
  { icon: Sun, title: "Solar Energy", description: "Solar panels powering portions of the campus" },
  { icon: Recycle, title: "Waste Management", description: "Segregation, composting, and recycling programs" },
];

export default function Sustainability() {
  return (
    <PageLayout>
      <PageHeader title="Sustainability Activities" subtitle="Building environmental consciousness and green practices" breadcrumbs={[{ label: "Life at School", href: "/life-at-school" }, { label: "Sustainability" }]} />
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((i) => (
              <div key={i.title} className="bg-muted/50 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4"><i.icon className="h-7 w-7 text-secondary" /></div>
                <h3 className="font-semibold text-foreground mb-2">{i.title}</h3>
                <p className="text-muted-foreground text-sm">{i.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
