import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    title: "Early Years",
    subtitle: "Nursery to UKG",
  },
  {
    title: "Primary School",
    subtitle: "Class  1 to 5",
  },
  {
    title: "High School",
    subtitle: "Class 6 to 8",
  },
  {
    title: "SSLC",
    subtitle: "Class  9 & 10",
  },
  {
    title: "PUC",
    subtitle: "Class 11 & 12",
  },
];

export default function CurriculumSection() {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-white text-sm font-semibold mb-2">
            Learning Pathways
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Curriculum & Co-Curricular Excellence
          </h2>

          <p className="text-purple-100 text-base leading-relaxed">
            Our curriculum blends strong academics with co-curricular learning,
            helping students grow with confidence, creativity, and global perspective.
          </p>

          <Button
            variant="outline"
            className="mt-6 text-white border-white hover:bg-white hover:text-purple-800"
          >
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Left Visual Cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img
                src="/images/nursery-kids.jpg"
                alt="Early Years"
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-5">
                <h3 className="text-white font-semibold text-lg">
                  Early Years
                </h3>
                <p className="text-white/80 text-sm">
                  Nursery to UKG
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img
                src="/images/class1_5.jpg"
                alt="Primary School"
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-5">
                <h3 className="text-white font-semibold text-lg">
                  Primary School
                </h3>
                <p className="text-white/80 text-sm">
                  Class 1 to 5
                </p>
              </div>
            </div>
          </div>

          {/* Right Program List */}
          <div className="grid grid-cols-2 gap-4">
            {programs.map((item) => (
              <div
                key={item.title}
                className="bg-white/95 rounded-xl p-5 text-center shadow hover:shadow-lg transition"
              >
                <h4 className="text-purple-800 font-semibold text-sm mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-xs">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
