import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Target, Eye, Heart, Star, Users, Globe, Lightbulb, Shield } from "lucide-react";

const values = [
  { icon: Star, title: "Excellence", description: "We strive for the highest standards in teaching, learning, and all our endeavors." },
  { icon: Heart, title: "Integrity", description: "We act with honesty, transparency, and strong moral principles in everything we do." },
  { icon: Users, title: "Respect", description: "We value diversity and treat every individual with dignity and compassion." },
  { icon: Globe, title: "Responsibility", description: "We are committed to our community and environment, nurturing responsible citizens." },
  { icon: Lightbulb, title: "Innovation", description: "We embrace new ideas and technologies to enhance learning experiences." },
  { icon: Shield, title: "Safety", description: "We provide a secure, nurturing environment where students can thrive." },
];

export default function Vision() {
  return (
    <PageLayout>
      <PageHeader
        title="Vision, Mission & Values"
        subtitle="The guiding principles that define who we are and what we aspire to achieve"
        breadcrumbs={[{ label: "Who We Are", href: "/who-we-are" }, { label: "Vision, Mission & Values" }]}
      />

      {/* Vision & Mission */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12">
              <div className="w-16 h-16 bg-secondary/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Our Vision</h2>
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                To be a world-class educational institution that nurtures future leaders, innovators, and 
                responsible global citizens who will make a positive and lasting impact on society.
              </p>
              <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                <p className="text-primary-foreground/70 italic">
                  "Empowering minds, shaping futures, building a better world."
                </p>
              </div>
            </div>
            <div className="bg-muted/50 rounded-2xl p-8 lg:p-12">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To provide holistic education that develops intellectual curiosity, critical thinking, 
                creativity, and strong moral values, preparing students to thrive and lead in an 
                ever-changing world.
              </p>
              <ul className="mt-6 space-y-3">
                {["Foster academic excellence", "Develop character and values", "Encourage innovation", "Build global perspectives"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">
              These fundamental principles guide our actions and decisions every day
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-background rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Commitment</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Athani School, we are committed to creating an environment where every student feels 
              valued, challenged, and supported. We believe in the potential of every child and work 
              tirelessly to help them discover and develop their unique talents and abilities.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { value: "100%", label: "Dedicated to Students" },
                { value: "24/7", label: "Safety & Security" },
                { value: "∞", label: "Possibilities for Growth" },
              ].map((stat) => (
                <div key={stat.label} className="bg-muted/50 rounded-xl p-6">
                  <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
