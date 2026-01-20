import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Users, Calendar, FileText, MessageCircle, Bell, BookOpen, CreditCard, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const portalFeatures = [
  {
    icon: FileText,
    title: "Academic Progress",
    description: "View real-time grades, assessment results, report cards, and detailed academic performance analytics.",
  },
  {
    icon: Calendar,
    title: "Attendance Tracking",
    description: "Monitor your child's daily attendance, view patterns, and receive instant notifications for absences.",
  },
  {
    icon: MessageCircle,
    title: "Teacher Communication",
    description: "Direct messaging with teachers, schedule parent-teacher meetings, and receive class updates.",
  },
  {
    icon: Bell,
    title: "Notifications & Alerts",
    description: "Important announcements, event reminders, fee due dates, and emergency notifications.",
  },
  {
    icon: BookOpen,
    title: "Homework & Assignments",
    description: "View assigned homework, download worksheets, and track submission status.",
  },
  {
    icon: CreditCard,
    title: "Fee Management",
    description: "View fee structure, pay fees online, download receipts, and track payment history.",
  },
];

const benefits = [
  "24/7 access to student information",
  "Paperless communication",
  "Real-time updates and alerts",
  "Secure and private access",
  "Mobile app available",
  "Multi-language support",
];

export default function Parents() {
  return (
    <PageLayout>
      <PageHeader
        title="Parents Portal"
        subtitle="Stay connected with your child's education journey through our digital platform"
        breadcrumbs={[{ label: "Learning", href: "/learning" }, { label: "Parents Portal" }]}
      />

      {/* Overview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Gateway to Your Child's Education
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our Parents Portal provides a comprehensive platform for parents to stay informed and 
              engaged with their child's academic journey. Access grades, attendance, communicate 
              with teachers, and manage fees all in one place.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portalFeatures.map((feature) => (
              <div key={feature.title} className="bg-muted/50 rounded-2xl p-6 hover:shadow-card transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Access the Portal</h2>
              <p className="text-muted-foreground text-lg mb-6">
                All parents receive login credentials at the time of admission. Use your registered 
                mobile number or email to access the portal.
              </p>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Login to Portal</Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Need Help?</Link>
                </Button>
              </div>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card">
              <Shield className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">Secure Access</h3>
              <p className="text-muted-foreground mb-6">
                Our portal uses industry-standard encryption to protect your data. Your information 
                is secure and accessible only to authorized users.
              </p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p><strong>Forgot Password?</strong> Click on "Forgot Password" on the login page</p>
                <p><strong>First Time User?</strong> Use the credentials provided at admission</p>
                <p><strong>Technical Issues?</strong> Contact IT support at portal@athanischool.edu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Download Our Mobile App
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Access all portal features on the go with our mobile app. Available for Android and iOS devices.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="lg">Download for Android</Button>
              <Button variant="heroOutline" size="lg">Download for iOS</Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
