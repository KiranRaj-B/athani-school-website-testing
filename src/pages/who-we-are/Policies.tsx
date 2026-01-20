import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { FileText, Shield, Users, Clock, BookOpen, Heart, AlertTriangle, CheckCircle } from "lucide-react";

const policies = [
  {
    icon: Shield,
    title: "Child Safety Policy",
    description: "We are committed to safeguarding and promoting the welfare of all children. Our comprehensive child protection policy ensures a safe environment for every student.",
    points: ["Background verification for all staff", "CCTV surveillance on campus", "Regular safety drills", "Anti-bullying measures"],
  },
  {
    icon: BookOpen,
    title: "Academic Integrity Policy",
    description: "We uphold the highest standards of academic honesty and expect all students to demonstrate integrity in their work.",
    points: ["Zero tolerance for plagiarism", "Fair examination practices", "Original work emphasis", "Citation guidelines"],
  },
  {
    icon: Users,
    title: "Code of Conduct",
    description: "Our code of conduct outlines expected behavior for students, staff, and parents to maintain a respectful school community.",
    points: ["Respect for all individuals", "Punctuality and discipline", "Proper uniform adherence", "Positive communication"],
  },
  {
    icon: Clock,
    title: "Attendance Policy",
    description: "Regular attendance is crucial for academic success. Our policy ensures students maintain consistent presence.",
    points: ["Minimum 85% attendance required", "Medical leave provisions", "Parent notification system", "Make-up class options"],
  },
  {
    icon: Heart,
    title: "Health & Wellness Policy",
    description: "We prioritize the physical and mental well-being of our students through comprehensive health policies.",
    points: ["On-campus medical facility", "Mental health support", "Healthy canteen food", "Physical activity requirements"],
  },
  {
    icon: AlertTriangle,
    title: "Grievance Redressal Policy",
    description: "We have a structured process to address concerns and complaints from students, parents, and staff.",
    points: ["Confidential reporting", "Quick resolution timeline", "Multiple reporting channels", "Fair investigation process"],
  },
];

export default function Policies() {
  return (
    <PageLayout>
      <PageHeader
        title="School Policies"
        subtitle="Our policies ensure a safe, fair, and nurturing environment for all"
        breadcrumbs={[{ label: "Who We Are", href: "/who-we-are" }, { label: "Policies" }]}
      />

      {/* Introduction */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground text-lg">
              At Athani School, our policies are designed to create a supportive and structured environment 
              where students can learn, grow, and thrive. We regularly review and update our policies to 
              ensure they reflect best practices in education.
            </p>
          </div>
        </div>
      </section>

      {/* Policies Grid */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {policies.map((policy) => (
              <div key={policy.title} className="bg-background rounded-2xl p-8 shadow-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <policy.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{policy.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{policy.description}</p>
                <ul className="space-y-2">
                  {policy.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center">
            <FileText className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Complete Policy Handbook
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6">
              For detailed information about all school policies, you can download our comprehensive 
              policy handbook or contact the administration office.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Contact: policies@athanischool.edu | +91 98765 43210
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
