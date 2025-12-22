import React, { useState } from "react";
import { Phone, MapPin, Mail } from "lucide-react";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

  
    setTimeout(() => {
      setLoading(false);
      setSuccess("Thank you! Your message has been sent.");
      e.target.reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Have questions or need assistance? Reach out to us and we'll get back to you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div className="bg-white p-6 rounded-xl shadow">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Your message..."
                  required
                  className="textarea textarea-bordered w-full h-32"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-green-600 font-medium text-center mt-2">{success}</p>
              )}
            </form>
          </div>

         
          <div className="bg-white p-6 rounded-xl shadow flex flex-col justify-center gap-6">
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-red-600" />
              <p className="text-gray-700 font-medium">+880 123 456 789</p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-red-600" />
              <p className="text-gray-700 font-medium">support@bloodbank.com</p>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-red-600" />
              <p className="text-gray-700 font-medium">
                123 Red Street, Dhaka, Bangladesh
              </p>
            </div>

            <p className="text-gray-500 mt-4">
              We are here to assist you 24/7. Feel free to contact us anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
