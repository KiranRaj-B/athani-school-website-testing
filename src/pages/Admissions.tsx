import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ClipboardList, FileText, Calendar, CheckCircle, Bus, Phone, Mail, ArrowRight } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Submit Enquiry", description: "Fill out our online enquiry form with your child's details and preferred grade." },
  { icon: FileText, title: "Application Form", description: "Complete the detailed application form and submit required documents including birth certificate and previous school records." },
  { icon: Calendar, title: "Assessment & Interview", description: "Attend the scheduled assessment test and participate in a parent-student interaction session." },
  { icon: CheckCircle, title: "Admission Confirmation", description: "Receive admission offer, complete fee payment, and welcome to the Athani School family!" },
];

const documents = [
  "Birth Certificate (original and copy)",
  "Previous School Transfer Certificate",
  "Report Cards (last 2 years)",
  "Passport Size Photographs (6 copies)",
  "Aadhar Card (student and parents)",
  "Address Proof",
  "Medical Fitness Certificate",
  "Caste Certificate (if applicable)",
];

const faqs = [
  {
    question: "What is the admission timeline?",
    answer: "Admissions typically open in January for the upcoming academic year. Early applications are encouraged as seats are limited.",
  },
  {
    question: "Is there an entrance test?",
    answer: "Yes, students applying for Grades 2 and above need to take an assessment test in English, Mathematics, and General Awareness.",
  },
  {
    question: "What are the fee payment options?",
    answer: "Fees can be paid annually, semi-annually, or quarterly. We accept bank transfers, cheques, and online payments.",
  },
  {
    question: "Do you provide transportation?",
    answer: "Yes, we have a fleet of GPS-enabled buses covering all major areas of Athani and surrounding regions.",
  },
];

export default function Admissions() {
  return (
    <PageLayout>
      <PageHeader
        title="Admissions"
        subtitle="Join the Athani School family and begin your child's journey to excellence"
        breadcrumbs={[{ label: "Admissions" }]}
      />

      {/* Admission Process */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Admission Process</h2>
            <p className="text-muted-foreground">
              Our straightforward admission process ensures a smooth experience for families
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="bg-muted/50 rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 text-primary-foreground font-bold text-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/admissions/enrol">
                Apply Now <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Documents Required</h2>
              <p className="text-muted-foreground mb-8">
                Please keep the following documents ready when applying for admission
              </p>
              <ul className="space-y-3">
                {documents.map((doc) => (
                  <li key={doc} className="flex items-center gap-3 bg-background rounded-lg p-4">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-foreground">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-card h-fit">
              <h3 className="text-xl font-bold text-foreground mb-6">Need Help?</h3>
              <p className="text-muted-foreground mb-6">
                Our admissions team is here to assist you with any questions about the admission process.
              </p>
              <div className="space-y-4">
                <a href="tel:+919876543210" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+91 98765 43210</span>
                </a>
                <a href="mailto:admissions@athanischool.edu" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>admissions@athanischool.edu</span>
                </a>
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contact">Schedule a Campus Visit</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-secondary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0">
              <Bus className="h-10 w-10 text-secondary" />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">Transportation Facilities</h3>
              <p className="text-primary-foreground/80">
                Safe, GPS-enabled buses with trained drivers and attendants, covering all major routes in Athani and neighboring areas.
              </p>
            </div>
            <Button variant="hero" asChild>
              <Link to="/admissions/transportation">
                View Routes <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-background rounded-xl p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h4>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
