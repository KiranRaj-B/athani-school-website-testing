import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Trophy, Users, Target, Medal } from "lucide-react";
import sportsImage from "@/assets/sports.jpg";

const sports = ["Cricket", "Football", "Basketball", "Volleyball", "Badminton", "Table Tennis", "Athletics", "Swimming", "Chess", "Yoga"];

export default function Sports() {
  return (
    <PageLayout>
      <PageHeader title="Sports & Athletics" subtitle="Building champions through comprehensive sports programs" breadcrumbs={[{ label: "Life at School", href: "/life-at-school" }, { label: "Sports" }]} />
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Excellence in Sports</h2>
              <p className="text-muted-foreground text-lg">Our state-of-the-art sports facilities and professional coaching staff help students achieve their athletic potential while learning teamwork, discipline, and perseverance.</p>
              <div className="grid grid-cols-2 gap-4">
                {[{ icon: Trophy, label: "State Champions" }, { icon: Users, label: "Professional Coaches" }, { icon: Target, label: "Training Programs" }, { icon: Medal, label: "75+ Medals Yearly" }].map((i) => (
                  <div key={i.label} className="bg-muted/50 rounded-lg p-4 flex items-center gap-3"><i.icon className="h-6 w-6 text-primary" /><span className="font-medium text-foreground">{i.label}</span></div>
                ))}
              </div>
            </div>
            <img src={sportsImage} alt="Sports" className="rounded-2xl shadow-card-hover w-full h-[400px] object-cover" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-6">Sports Offered</h3>
          <div className="flex flex-wrap gap-3">{sports.map((s) => (<span key={s} className="bg-muted/50 px-4 py-2 rounded-full text-foreground">{s}</span>))}</div>
        </div>
      </section>
    </PageLayout>
  );
}
