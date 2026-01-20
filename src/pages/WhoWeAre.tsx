import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { CheckCircle, Award, Users, Target, Heart, Globe } from "lucide-react";
import libraryImage from "@/assets/library.jpg";

const values = [
  { icon: Target, title: "Excellence", description: "Striving for the highest standards in everything we do." },
  { icon: Heart, title: "Integrity", description: "Acting with honesty and strong moral principles." },
  { icon: Users, title: "Collaboration", description: "Working together to achieve common goals." },
  { icon: Globe, title: "Global Mindset", description: "Preparing students for a connected world." },
];

export default function WhoWeAre() {
  return (
    <PageLayout>
      <PageHeader
        title="Who We Are"
        subtitle="Discover the legacy, vision, and values that define Athani School"
        breadcrumbs={[{ label: "Who We Are" }]}
      />

      {/* Overview Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                A Legacy of Excellence Since 1999
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Athani School has been a beacon of educational excellence in the Belagavi region for over two decades. 
                Founded with a vision to provide world-class education while staying rooted in Indian values, we have 
                grown into one of the most respected educational institutions in Karnataka.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our journey began with a simple belief: every child has unique potential that deserves to be nurtured. 
                Today, we continue to uphold this belief through our comprehensive educational programs, dedicated 
                faculty, and state-of-the-art facilities.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { value: "25+", label: "Years of Excellence" },
                  { value: "2000+", label: "Students" },
                  { value: "150+", label: "Educators" },
                  { value: "100%", label: "Board Results" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-muted/50 rounded-xl p-4">
                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={libraryImage}
                alt="Athani School Campus"
                className="rounded-2xl shadow-card-hover w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a world-class educational institution that nurtures future leaders, innovators, and 
                responsible global citizens who will make a positive impact on society.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide holistic education that develops intellectual curiosity, critical thinking, 
                creativity, and strong moral values, preparing students to thrive in an ever-changing world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">
              These principles guide everything we do at Athani School
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-muted/50 rounded-2xl p-6 text-center hover:shadow-card transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Affiliations & Accreditations</h2>
            <p className="text-muted-foreground">
              We are proud to be affiliated with leading educational bodies
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Central Board of Secondary Education (CBSE)",
              "National Accreditation Board",
              "International Schools Association",
              "Council for Indian School Certificate Examinations",
              "Microsoft Showcase School",
              "Green School Programme",
            ].map((affiliation) => (
              <div key={affiliation} className="bg-background rounded-xl p-6 flex items-center gap-4 shadow-sm">
                <CheckCircle className="h-6 w-6 text-secondary shrink-0" />
                <span className="text-foreground font-medium">{affiliation}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
