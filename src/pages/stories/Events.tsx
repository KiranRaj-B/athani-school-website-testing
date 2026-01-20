import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Calendar } from "lucide-react";
import eventImage from "@/assets/event.jpg";

const events = [
  { title: "Annual Day 2024", date: "February 15, 2024", category: "Cultural" },
  { title: "Science Exhibition", date: "December 10, 2024", category: "Academic" },
  { title: "Sports Day", date: "November 28, 2024", category: "Sports" },
  { title: "Diwali Celebrations", date: "October 30, 2024", category: "Cultural" },
  { title: "Independence Day", date: "August 15, 2024", category: "National" },
  { title: "Teacher's Day", date: "September 5, 2024", category: "Special" },
];

export default function Events() {
  return (
    <PageLayout>
      <PageHeader title="Events & Activities" subtitle="Celebrating moments that make school life memorable" breadcrumbs={[{ label: "Stories", href: "/stories" }, { label: "Events" }]} />
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((e) => (
              <div key={e.title} className="bg-muted/50 rounded-xl overflow-hidden hover:shadow-card transition-shadow">
                <img src={eventImage} alt={e.title} className="w-full h-40 object-cover" />
                <div className="p-5">
                  <span className="bg-secondary/10 text-secondary text-xs px-2 py-1 rounded-full">{e.category}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-2">{e.title}</h3>
                  <p className="text-muted-foreground text-sm flex items-center gap-1 mt-1"><Calendar className="h-4 w-4" />{e.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
