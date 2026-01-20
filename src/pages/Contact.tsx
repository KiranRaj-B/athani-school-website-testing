import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: Mail, label: "Email", value: "info@athanischool.edu", href: "mailto:info@athanischool.edu" },
  { icon: MapPin, label: "Address", value: "Athani, Belagavi – 591304, Karnataka, India", href: "#" },
  { icon: Clock, label: "Office Hours", value: "Mon - Sat: 8:00 AM - 4:00 PM", href: "#" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <PageLayout>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with us for admissions, queries, or to schedule a campus visit"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
                <p className="text-muted-foreground">
                  We're here to help and answer any questions you might have. We look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl hover:shadow-card transition-shadow"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-hero rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary-foreground mb-3">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/admissions" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                      → Admission Enquiry
                    </a>
                  </li>
                  <li>
                    <a href="/careers" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                      → Career Opportunities
                    </a>
                  </li>
                  <li>
                    <a href="/who-we-are" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                      → About Our School
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-muted/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Full Name *</label>
                      <Input
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email *</label>
                      <Input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone Number</label>
                      <Input
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Subject *</label>
                      <Input
                        required
                        placeholder="What is this about?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message *</label>
                    <Textarea
                      required
                      placeholder="Write your message here..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send className="h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="bg-background rounded-2xl overflow-hidden shadow-card">
            <div className="aspect-[16/6] bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Athani School, Athani, Belagavi – 591304
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  (Interactive map can be integrated here)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
