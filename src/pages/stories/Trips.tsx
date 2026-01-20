import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { MapPin, Calendar, Users } from "lucide-react";
import eventImage from "@/assets/event.jpg";

const trips = [
  { title: "Hampi Heritage Trip", date: "September 2024", students: "Grade 8-10", description: "Exploring UNESCO World Heritage site" },
  { title: "Goa Marine Biology Camp", date: "November 2024", students: "Grade 6-8", description: "Marine ecosystem study tour" },
  { title: "Coorg Nature Camp", date: "February 2025", students: "Grade 4-6", description: "Wildlife and plantation visit" },
];

export default function Trips() {
  return (
    <PageLayout>
      <PageHeader title="Field & Residential Trips" subtitle="Learning beyond classroom walls" breadcrumbs={[{ label: "Stories", href: "/stories" }, { label: "Trips" }]} />
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {trips.map((t) => (
              <div key={t.title} className="bg-muted/50 rounded-2xl overflow-hidden">
                <img src={eventImage} alt={t.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{t.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{t.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{t.date}</span>
                    <span className="flex items-center gap-1"><Users className="h-4 w-4" />{t.students}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
