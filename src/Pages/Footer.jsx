import React from "react";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { NavLink } from "react-router";


const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Blood Bank</h3>
          <p className="text-gray-200 text-sm">
            Our mission is to connect donors with patients in need. Every donation can save up to 3 lives.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/search-request" className="hover:underline">
                Search Donors
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className="hover:underline">
                Join as Donor
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" className="hover:underline">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +880 123 456 789
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> support@bloodbank.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> 123 Red Street, Dhaka, Bangladesh
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-200">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-200">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-200">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Blood Bank. Made By Akash Zain.
      </div>
    </footer>
  );
};

export default Footer;
