import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Calendar } from "lucide-react";

const terms = [
  { term: "Term 1", period: "June - September 2024", events: ["School Reopens: June 10", "Independence Day: Aug 15", "Term 1 Exams: September"] },
  { term: "Term 2", period: "October - December 2024", events: ["Diwali Break: October", "Sports Day: November", "Term 2 Exams: December"] },
  { term: "Term 3", period: "January - March 2025", events: ["Annual Day: February", "Board Exams: March", "Session Ends: March 31"] },
];

export default function AcademicCalendar() {
  return (
    <PageLayout>
      <PageHeader title="Academic Calendar" subtitle="Important dates and events for the academic year 2024-25" breadcrumbs={[{ label: "Life at School", href: "/life-at-school" }, { label: "Academic Calendar" }]} />
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-6 max-w-4xl mx-auto">
            {terms.map((t) => (
              <div key={t.term} className="bg-muted/50 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center"><Calendar className="h-6 w-6 text-primary-foreground" /></div>
                  <div><h3 className="text-xl font-bold text-foreground">{t.term}</h3><p className="text-muted-foreground text-sm">{t.period}</p></div>
                </div>
                <div className="grid sm:grid-cols-3 gap-3">{t.events.map((e) => (<div key={e} className="bg-background rounded-lg p-3 text-sm text-foreground">{e}</div>))}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
