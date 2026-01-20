import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Palette, Music, Drama, Camera } from "lucide-react";
import artsImage from "@/assets/arts.jpg";

const programs = [
  { icon: Palette, title: "Visual Arts", description: "Painting, sketching, sculpture, and digital art programs for all grades." },
  { icon: Music, title: "Music", description: "Vocal and instrumental training including keyboard, guitar, drums, and Indian classical." },
  { icon: Drama, title: "Drama & Theatre", description: "Acting, stagecraft, and annual productions developing confidence and creativity." },
  { icon: Camera, title: "Photography", description: "Digital photography and videography club with professional equipment." },
];

export default function Arts() {
  return (
    <PageLayout>
      <PageHeader title="Arts & Performing" subtitle="Nurturing creativity through visual and performing arts" breadcrumbs={[{ label: "Life at School", href: "/life-at-school" }, { label: "Arts" }]} />
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <img src={artsImage} alt="Arts Program" className="rounded-2xl shadow-card-hover w-full h-[400px] object-cover" />
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Express Your Creativity</h2>
              <p className="text-muted-foreground text-lg">Our comprehensive arts program provides students with opportunities to explore and develop their creative talents across visual arts, music, drama, and dance.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p) => (
              <div key={p.title} className="bg-muted/50 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4"><p.icon className="h-7 w-7 text-primary" /></div>
                <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
