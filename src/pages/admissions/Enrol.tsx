import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Enrol() {
  const [formData, setFormData] = useState({ studentName: "", dob: "", grade: "", parentName: "", email: "", phone: "", address: "", message: "" });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); toast.success("Application submitted! We will contact you soon."); setFormData({ studentName: "", dob: "", grade: "", parentName: "", email: "", phone: "", address: "", message: "" }); };
  
  return (
    <PageLayout>
      <PageHeader title="Enrol Now" subtitle="Begin your child's journey at Athani School" breadcrumbs={[{ label: "Admissions", href: "/admissions" }, { label: "Enrol Now" }]} />
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-muted/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Admission Enquiry Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-sm font-medium">Student Name *</label><Input required value={formData.studentName} onChange={(e) => setFormData({...formData, studentName: e.target.value})} /></div>
                <div><label className="text-sm font-medium">Date of Birth *</label><Input type="date" required value={formData.dob} onChange={(e) => setFormData({...formData, dob: e.target.value})} /></div>
              </div>
              <div><label className="text-sm font-medium">Grade Applying For *</label><Input required placeholder="e.g., Grade 5" value={formData.grade} onChange={(e) => setFormData({...formData, grade: e.target.value})} /></div>
              <div><label className="text-sm font-medium">Parent/Guardian Name *</label><Input required value={formData.parentName} onChange={(e) => setFormData({...formData, parentName: e.target.value})} /></div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-sm font-medium">Email *</label><Input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} /></div>
                <div><label className="text-sm font-medium">Phone *</label><Input required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} /></div>
              </div>
              <div><label className="text-sm font-medium">Address</label><Textarea value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} /></div>
              <div><label className="text-sm font-medium">Additional Message</label><Textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} /></div>
              <Button type="submit" size="lg" className="w-full">Submit Application</Button>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
