import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Bus, MapPin, Shield, Clock } from "lucide-react";

const routes = ["Athani Town Center", "Kagwad Road", "Ainapur", "Raibag Road", "Gokak Road", "Chikodi"];
const features = [
  { icon: Bus, title: "GPS Tracking", description: "Real-time tracking for parent peace of mind" },
  { icon: Shield, title: "Trained Staff", description: "Experienced drivers and attendants" },
  { icon: Clock, title: "Timely Service", description: "Punctual pickup and drop schedules" },
  { icon: MapPin, title: "Wide Coverage", description: "Routes covering 25+ km radius" },
];

export default function Transportation() {
  return (
    <PageLayout>
      <PageHeader title="Transportation" subtitle="Safe and reliable transport for our students" breadcrumbs={[{ label: "Admissions", href: "/admissions" }, { label: "Transportation" }]} />
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((f) => (
              <div key={f.title} className="bg-muted/50 rounded-xl p-6 text-center">
                <f.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.description}</p>
              </div>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-6">Routes Covered</h3>
          <div className="flex flex-wrap gap-3">{routes.map((r) => (<span key={r} className="bg-muted/50 px-4 py-2 rounded-full text-foreground">{r}</span>))}</div>
        </div>
      </section>
    </PageLayout>
  );
}
