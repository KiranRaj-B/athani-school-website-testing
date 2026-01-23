import { User } from "lucide-react";

const boardMembers = [
  {
    name: "Your Name Here",
    role: "Chairman / Founder",
    description:
      "Provides overall vision and leadership for the institution, guiding the school towards academic excellence and holistic development.",
    image: "/images/Founder.png",
  },
  {
    name: "Your Name Here",
    role: "Vice Chairperson",
    description:
      "Supports academic planning and school development, working closely with the leadership team to maintain quality education.",
    image: "/images/Founder.png", 
  },
  {
    name: "Your Name Here",
    role: "Secretary",
    description:
      "Oversees administrative operations and ensures smooth coordination between management, staff, and stakeholders.",
    image: "/images/Founder.png", 
  },
];

export default function BoardMembersSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-secondary font-semibold text-sm mb-2">
            Leadership
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Board of Members
          </h2>

          <p className="text-gray-600 text-base">
            Meet the leadership team guiding the school with vision, experience,
            and commitment to quality education.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-lg transition"
            >
              {/* Avatar / Photo */}
              <div className="flex justify-center mb-5">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full object-cover border-4 border-secondary/20"
                  />
                ) : (
                  <div className="w-28 h-28 rounded-full bg-secondary/10 flex items-center justify-center border-4 border-secondary/20">
                    <User className="text-secondary" size={36} />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-primary">
                  {member.name}
                </h3>

                <p className="text-secondary text-sm font-medium mb-3">
                  {member.role}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
