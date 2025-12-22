import React from "react";
import { Heart, Users, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: <Heart className="w-8 h-8 text-red-600" />,
    title: "Save Lives",
    description:
      "Every blood donation can save up to 3 lives. Join our mission and be a hero.",
  },
  {
    icon: <Users className="w-8 h-8 text-red-600" />,
    title: "Community Support",
    description:
      "Become part of a community of donors who care about their neighbors and society.",
  },
  {
    icon: <Clock className="w-8 h-8 text-red-600" />,
    title: "Quick & Easy",
    description:
      "Donating blood is fast, safe, and simple. Most donors are in and out within an hour.",
  },
  {
    icon: <Shield className="w-8 h-8 text-red-600" />,
    title: "Safe & Secure",
    description:
      "We follow strict safety protocols to ensure donors and recipients are always protected.",
  },
];

const FeaturedSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
          Why Donate Blood?
        </h2>
        <p className="text-gray-600 text-lg">
          Donating blood is simple, safe, and can save lives. Here’s why you
          should consider becoming a donor today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
