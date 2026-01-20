import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";

const activities = ["Science exhibitions", "Quiz competitions", "Talent shows", "Cultural festivals", "Educational field trips", "Guest lectures", "Workshops", "Inter-school events"];

export default function CoCurricular() {
  return (
    <PageLayout>
      <PageHeader title="Co-Curricular Activities" subtitle="Enriching education beyond the classroom" breadcrumbs={[{ label: "Life at School", href: "/life-at-school" }, { label: "Co-Curricular" }]} />
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">Holistic Development</h2>
            <p className="text-muted-foreground text-lg text-center mb-12">Our co-curricular program ensures students develop skills beyond academics through diverse activities and competitions.</p>
            <div className="grid sm:grid-cols-2 gap-4">{activities.map((a) => (<div key={a} className="bg-muted/50 rounded-xl p-5 flex items-center gap-3"><div className="w-3 h-3 bg-secondary rounded-full" /><span className="font-medium text-foreground">{a}</span></div>))}</div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
