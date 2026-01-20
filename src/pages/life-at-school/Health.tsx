import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Heart, Shield, Stethoscope, Apple } from "lucide-react";

const features = [
  { icon: Stethoscope, title: "Medical Facility", description: "On-campus infirmary with qualified nurse and visiting doctor" },
  { icon: Heart, title: "Counseling Services", description: "Professional counselors for mental health and emotional support" },
  { icon: Shield, title: "Safety Measures", description: "CCTV surveillance, security personnel, and emergency protocols" },
  { icon: Apple, title: "Healthy Nutrition", description: "Nutritious meals in canteen with strict hygiene standards" },
];

export default function Health() {
  return (
    <PageLayout>
      <PageHeader title="Health & Safety" subtitle="Prioritizing student well-being and campus security" breadcrumbs={[{ label: "Life at School", href: "/life-at-school" }, { label: "Health & Safety" }]} />
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-muted/50 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4"><f.icon className="h-7 w-7 text-primary" /></div>
                <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
