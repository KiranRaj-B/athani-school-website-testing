import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Users, Award, BookOpen, Heart } from "lucide-react";
import libraryImage from "@/assets/library.jpg";

const leadership = [
  { name: "Dr. Ramesh Kumar", role: "Principal", description: "Ph.D. in Education, 25+ years of experience in educational leadership." },
  { name: "Mrs. Sunita Patil", role: "Vice Principal", description: "M.Ed., specializing in curriculum development and teacher training." },
  { name: "Mr. Anil Desai", role: "Academic Director", description: "M.Sc., B.Ed., leading academic programs and quality assurance." },
  { name: "Mrs. Priya Sharma", role: "Head of Primary", description: "M.A. in Child Development, passionate about early education." },
];

const milestones = [
  { year: "1999", event: "Athani School founded with 50 students" },
  { year: "2005", event: "CBSE affiliation received" },
  { year: "2010", event: "New campus with modern facilities inaugurated" },
  { year: "2015", event: "Crossed 1000+ student milestone" },
  { year: "2020", event: "Digital learning infrastructure established" },
  { year: "2024", event: "Celebrating 25 years of excellence" },
];

export default function About() {
  return (
    <PageLayout>
      <PageHeader
        title="About Us"
        subtitle="Learn about our journey, leadership, and commitment to excellence"
        breadcrumbs={[{ label: "Who We Are", href: "/who-we-are" }, { label: "About Us" }]}
      />

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Story</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Athani School was founded in 1999 with a vision to provide quality education to the children 
                of Athani and surrounding regions. What started as a small institution with just 50 students 
                has grown into one of the most respected schools in the Belagavi district.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the past 25 years, we have remained committed to our founding principles of academic 
                excellence, character development, and holistic growth. Our alumni have gone on to excel 
                in various fields, from medicine and engineering to arts and entrepreneurship.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we continue to evolve with changing times while staying true to our core values, 
                preparing students not just for examinations, but for life.
              </p>
            </div>
            <div>
              <img
                src={libraryImage}
                alt="Athani School History"
                className="rounded-2xl shadow-card-hover w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && <div className="w-0.5 h-full bg-primary/20 mt-2" />}
                </div>
                <div className="bg-background rounded-xl p-6 shadow-sm flex-1">
                  <p className="text-foreground font-medium">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Leadership</h2>
            <p className="text-muted-foreground">
              Meet the dedicated team guiding Athani School towards excellence
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person) => (
              <div key={person.name} className="bg-muted/50 rounded-2xl p-6 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{person.name}</h3>
                <p className="text-primary font-medium text-sm mb-2">{person.role}</p>
                <p className="text-muted-foreground text-sm">{person.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
