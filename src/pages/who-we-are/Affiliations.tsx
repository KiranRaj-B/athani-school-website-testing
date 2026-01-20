import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Award, CheckCircle, Globe, Shield } from "lucide-react";

const affiliations = [
  {
    name: "Central Board of Secondary Education (CBSE)",
    type: "Primary Affiliation",
    description: "Athani School is affiliated with CBSE, New Delhi, ensuring our curriculum meets national standards and our students receive recognized certifications.",
    affCode: "830XXX",
    since: "2005",
  },
  {
    name: "National Accreditation Board for Education",
    type: "Quality Accreditation",
    description: "Our school is accredited for maintaining high standards in educational delivery, infrastructure, and student outcomes.",
    since: "2015",
  },
  {
    name: "International Schools Association",
    type: "Membership",
    description: "As a member of ISA, we participate in global educational initiatives and exchange programs.",
    since: "2018",
  },
];

const certifications = [
  { name: "ISO 9001:2015 Certified", description: "Quality management systems certification" },
  { name: "Green School Certification", description: "Environmental sustainability practices" },
  { name: "Digital School of Distinction", description: "Excellence in technology integration" },
  { name: "Safe School Award", description: "Comprehensive safety and security measures" },
];

const partnerships = [
  "Microsoft Showcase School",
  "Cambridge English Partner School",
  "STEM.org Accredited School",
  "National Geographic Education Partner",
  "British Council Partner School",
  "Science Olympiad Foundation",
];

export default function Affiliations() {
  return (
    <PageLayout>
      <PageHeader
        title="Affiliations & Accreditations"
        subtitle="Our partnerships and certifications that validate our commitment to excellence"
        breadcrumbs={[{ label: "Who We Are", href: "/who-we-are" }, { label: "Affiliations" }]}
      />

      {/* Main Affiliations */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Affiliations</h2>
            <p className="text-muted-foreground">
              We are proud to be affiliated with leading educational bodies
            </p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {affiliations.map((aff) => (
              <div key={aff.name} className="bg-muted/50 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shrink-0">
                    <Award className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{aff.name}</h3>
                      <span className="bg-secondary/10 text-secondary text-xs font-medium px-3 py-1 rounded-full">
                        {aff.type}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{aff.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      {aff.affCode && (
                        <span className="text-foreground">
                          <strong>Affiliation Code:</strong> {aff.affCode}
                        </span>
                      )}
                      <span className="text-foreground">
                        <strong>Since:</strong> {aff.since}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Certifications</h2>
            <p className="text-muted-foreground">
              Recognized for our standards and practices
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-background rounded-xl p-6 shadow-sm text-center">
                <Shield className="h-10 w-10 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{cert.name}</h3>
                <p className="text-muted-foreground text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Educational Partnerships</h2>
            <p className="text-muted-foreground">
              Collaborating with leading organizations to enhance learning
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {partnerships.map((partner) => (
              <div key={partner} className="bg-muted/50 rounded-full px-6 py-3 flex items-center gap-3">
                <Globe className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
