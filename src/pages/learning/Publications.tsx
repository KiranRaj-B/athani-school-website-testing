import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { FileText, Download, Calendar, BookOpen, Award, Newspaper } from "lucide-react";

const publications = [
  {
    category: "Annual Reports",
    items: [
      { title: "Annual Report 2023-24", date: "April 2024", type: "PDF" },
      { title: "Annual Report 2022-23", date: "April 2023", type: "PDF" },
      { title: "Annual Report 2021-22", date: "April 2022", type: "PDF" },
    ],
  },
  {
    category: "School Magazine",
    items: [
      { title: "Athani Insights - Volume 12", date: "December 2024", type: "PDF" },
      { title: "Athani Insights - Volume 11", date: "June 2024", type: "PDF" },
      { title: "Athani Insights - Volume 10", date: "December 2023", type: "PDF" },
    ],
  },
  {
    category: "Newsletters",
    items: [
      { title: "Newsletter - January 2025", date: "January 2025", type: "PDF" },
      { title: "Newsletter - December 2024", date: "December 2024", type: "PDF" },
      { title: "Newsletter - November 2024", date: "November 2024", type: "PDF" },
    ],
  },
  {
    category: "Academic Resources",
    items: [
      { title: "Student Handbook 2024-25", date: "July 2024", type: "PDF" },
      { title: "Curriculum Guide", date: "June 2024", type: "PDF" },
      { title: "Examination Guidelines", date: "August 2024", type: "PDF" },
    ],
  },
];

const studentPublications = [
  { title: "Young Writers Anthology 2024", description: "Collection of best student writings", icon: BookOpen },
  { title: "Science Journal - Issue 5", description: "Student research and experiments", icon: Award },
  { title: "Art & Photography Folio", description: "Showcase of student artwork", icon: Newspaper },
];

export default function Publications() {
  return (
    <PageLayout>
      <PageHeader
        title="Publications"
        subtitle="Access our school publications, newsletters, magazines, and resources"
        breadcrumbs={[{ label: "Learning", href: "/learning" }, { label: "Publications" }]}
      />

      {/* Main Publications */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {publications.map((category) => (
              <div key={category.category}>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <FileText className="h-6 w-6 text-primary" />
                  {category.category}
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {category.items.map((item) => (
                    <div key={item.title} className="bg-muted/50 rounded-xl p-5 flex items-center justify-between hover:shadow-card transition-shadow group">
                      <div>
                        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{item.date}</span>
                        </div>
                      </div>
                      <button className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Download className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Publications */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Student Publications</h2>
            <p className="text-muted-foreground">
              Celebrating student creativity and achievement through published works
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {studentPublications.map((pub) => (
              <div key={pub.title} className="bg-background rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow text-center">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <pub.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{pub.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{pub.description}</p>
                <button className="text-primary font-medium text-sm hover:underline flex items-center gap-2 mx-auto">
                  <Download className="h-4 w-4" /> Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center">
            <Newspaper className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6">
              Subscribe to receive our publications and newsletters directly in your inbox.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Contact: publications@athanischool.edu
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
