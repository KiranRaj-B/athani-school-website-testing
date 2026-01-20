import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Heart, Users, Leaf } from "lucide-react";

const initiatives = [
  { icon: Heart, title: "Community Service", description: "Students volunteer at local NGOs, orphanages, and old age homes." },
  { icon: Users, title: "Social Awareness", description: "Campaigns on education, health, and environmental issues." },
  { icon: Leaf, title: "Environmental Action", description: "Tree plantation, clean-up drives, and sustainability projects." },
];

export default function Initiatives() {
  return (
    <PageLayout>
      <PageHeader title="CAS & SAP Initiatives" subtitle="Creativity, Activity, Service - Making a difference" breadcrumbs={[{ label: "Stories", href: "/stories" }, { label: "Initiatives" }]} />
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {initiatives.map((i) => (
              <div key={i.title} className="bg-muted/50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4"><i.icon className="h-8 w-8 text-secondary" /></div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{i.title}</h3>
                <p className="text-muted-foreground">{i.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
