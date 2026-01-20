import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Heart, TrendingUp, Mail, MapPin, Clock } from "lucide-react";

const benefits = [
  { icon: Heart, title: "Health Insurance", description: "Comprehensive medical coverage for you and your family" },
  { icon: TrendingUp, title: "Career Growth", description: "Regular training programs and advancement opportunities" },
  { icon: Users, title: "Collaborative Culture", description: "Work with passionate educators and support staff" },
  { icon: Briefcase, title: "Competitive Salary", description: "Industry-standard compensation with annual increments" },
];

const openings = [
  {
    title: "Primary School Teacher (English)",
    department: "Academics",
    type: "Full-time",
    experience: "2-5 years",
    description: "Looking for an enthusiastic English teacher for primary grades with excellent communication skills.",
  },
  {
    title: "Mathematics Teacher (High School)",
    department: "Academics",
    type: "Full-time",
    experience: "3-7 years",
    description: "Seeking a dedicated Mathematics teacher for grades 9-12 with strong subject knowledge.",
  },
  {
    title: "Physical Education Instructor",
    department: "Sports",
    type: "Full-time",
    experience: "2-4 years",
    description: "Join our sports department to train students in various sports and physical activities.",
  },
  {
    title: "Administrative Assistant",
    department: "Administration",
    type: "Full-time",
    experience: "1-3 years",
    description: "Support the administrative team with day-to-day office operations and coordination.",
  },
  {
    title: "School Counselor",
    department: "Student Services",
    type: "Full-time",
    experience: "3-5 years",
    description: "Provide academic and personal counseling to students and conduct career guidance sessions.",
  },
];

export default function Careers() {
  return (
    <PageLayout>
      <PageHeader
        title="Careers at Athani School"
        subtitle="Join our team of dedicated educators and make a difference in students' lives"
        breadcrumbs={[{ label: "Careers" }]}
      />

      {/* Why Join Us */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Join Athani School?</h2>
            <p className="text-muted-foreground">
              Be part of an institution that values excellence, innovation, and personal growth
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-muted/50 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Current Openings</h2>
            <p className="text-muted-foreground">
              Explore our current job opportunities and find your perfect role
            </p>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {openings.map((job) => (
              <div key={job.title} className="bg-background rounded-xl p-6 shadow-sm hover:shadow-card transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{job.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1.5 text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        <Briefcase className="h-3 w-3" /> {job.department}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                        <Clock className="h-3 w-3" /> {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <Button className="shrink-0">Apply Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">How to Apply</h2>
            <p className="text-muted-foreground mb-8">
              Send your resume along with a cover letter to our HR department. Please mention the position 
              you're applying for in the subject line.
            </p>
            <div className="bg-muted/50 rounded-2xl p-8 space-y-4">
              <a href="mailto:careers@athanischool.edu" className="flex items-center justify-center gap-3 text-lg text-primary font-medium">
                <Mail className="h-5 w-5" />
                careers@athanischool.edu
              </a>
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                Athani School, Athani, Belagavi – 591304
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
