import React from "react";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-red-900 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-red-500 text-4xl font-bold">
              <img
                src="/pangea360logo.png"
                alt="Digital 360 Logo"
                className="h-16 sm:h-20 lg:h-24 w-auto transition-all"
              />
            </div>
            <h2 className="text-2xl font-bold text-white">
              FULL SERVICE
              <br />
              DIGITAL MARKETING
              <br />
              AGENCY
            </h2>
            <p className="text-lg">Accelerate your digital growth!</p>
          </div>

          {/* Services Column 1 */}
          <div className="space-y-3">
            <h3 className="text-xl lg:pt-12 font-bold mb-4">
              OUR 360 MARKETING SERVICES
            </h3>
            <div className="space-y-2">
              <Link
                to="/services/branding"
                className="block hover:text-red-400 underline"
              >
                BRAND BUILDING
              </Link>
              <Link
                to="/services/content-marketing"
                className="block hover:text-red-400 underline"
              >
                CONTENT MARKETING
              </Link>
              <Link
                to="/services/content-marketing"
                className="block hover:text-red-400 underline"
              >
                COPYWRITING
              </Link>
              <Link
                to="/services/design"
                className="block hover:text-red-400 underline"
              >
                DESIGN
              </Link>
              <Link
                to="/services/digital-marketing"
                className="block hover:text-red-400 underline"
              >
                DIGITAL MARKETING STRATEGY
              </Link>
            </div>
          </div>

          {/* Services Column 2 */}
          <div className="space-y-3 pt-12">
            <div className="space-y-2">
              <Link
                to="/services/social-media"
                className="block hover:text-red-400 underline"
              >
                INSTAGRAM MARKETING
              </Link>
              <Link
                to="/services/social-media"
                className="block hover:text-red-400 underline"
              >
                LINKEDIN MANAGEMENT
              </Link>
              <Link
                to="/services/seo"
                className="block hover:text-red-400 underline"
              >
                SEARCH ENGINE OPTIMIZATION
              </Link>
              <Link
                to="/services/social-media"
                className="block hover:text-red-400 underline"
              >
                SOCIAL MEDIA MARKETING
              </Link>
              <Link
                to="/services/social-media"
                className="block hover:text-red-400 underline"
              >
                TWITTER MANAGEMENT
              </Link>
            </div>
          </div>

          {/* Contact & Social Media */}
          <div className="space-y-6">
            <Link to="/contact">
              <button className="border-2 lg:mt-12 border-white rounded-full px-8 py-3 hover:bg-white hover:text-black transition-colors">
                CONTACT US
              </button>
            </Link>
            <div className="flex space-x-4 px-7">
              <a
                href="https://linkedin.com"
                className="hover:text-red-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-red-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-red-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
