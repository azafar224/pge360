import React, { useState, useEffect } from "react"; // Added useEffect here
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Set text color based on the page
  const isDarkTextPage =
    location.pathname === "/about" || location.pathname === "/contact";
  const textColor = isDarkTextPage ? "text-white" : "text-white";
  const borderColor = isDarkTextPage ? "border-black" : "border-white";

  const navItems = {
    services: {
      title: "Services",
      items: [
        { name: "All Services", path: "/services" },
        { name: "Branding", path: "/services/branding" },
        { name: "Content Marketing", path: "/services/content-marketing" },
        { name: "Design", path: "/services/design" },
        { name: "SEO", path: "/services/seo" },
        { name: "Social Media", path: "/services/social-media" },
        { name: "Digital Marketing", path: "/services/digital-marketing" },
        { name: "Local SEO", path: "/services/local" },
      ],
    },
  };

  const handleServiceClick = (e) => {
    e.preventDefault();
    setServicesOpen(!servicesOpen);
  };

  return (
    <nav
      className={`fixed w-full  h-24 z-50 px-0  lg:px-8 py-4 lg:py-2 transition-all duration-300 ${
        isSticky ? "bg-black shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/pangea360logo.png"
                alt="Pangea 360 Logo"
                className="h-16 sm:h-20 lg:h-24 w-auto transition-all"
              />
            </Link>
          </div>

          {/* Navigation Links with Dropdowns */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-12">
            {/* Regular nav links */}
            <Link
              to="/"
              className={`${textColor} hover:text-red-500 transition-colors font-medium tracking-wider text-sm lg:text-base`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`${textColor} hover:text-red-500 transition-colors font-medium tracking-wider text-sm lg:text-base`}
            >
              About Us
            </Link>

            {/* Services dropdown */}
            <div className="relative group">
              <Link
                to="/services"
                className={`${textColor} hover:text-red-500 transition-colors font-medium tracking-wider text-sm lg:text-base`}
                onClick={handleServiceClick} // Add onClick to toggle dropdown
              >
                Services
              </Link>
              <div className="absolute left-0 mt-2 py-2 w-48 bg-black border border-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {navItems.services.items.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-white hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Additional nav links */}

            {/* <Link to="/blog" className={`${textColor} hover:text-red-500 transition-colors font-medium tracking-wider text-sm lg:text-base`}>
              Blog
            </Link> */}

            <Link
              to="/careers"
              className={`${textColor} hover:text-red-500 transition-colors font-medium tracking-wider text-sm lg:text-base`}
            >
              Careers
            </Link>
          </div>

          {/* Social Media Icons and Contact */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-6">
            <div className="flex items-center space-x-2 lg:space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${textColor} hover:text-red-500 transition-colors`}
              >
                <svg
                  className="w-4 h-4 lg:w-5 lg:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${textColor} hover:text-red-500 transition-colors`}
              >
                <svg
                  className="w-4 h-4 lg:w-5 lg:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${textColor} hover:text-red-500 transition-colors`}
              >
                <svg
                  className="w-4 h-4 lg:w-5 lg:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
            <Link
              to="/contact"
              className={`bg-transparent border ${borderColor} ${textColor} px-4 lg:px-6 py-2 rounded-full transition-all duration-300 tracking-wider text-sm lg:text-base hover:bg-${
                isDarkTextPage ? "white" : "black"
              } hover:text-${
                isDarkTextPage ? "black" : "white"
              } hover:border-${borderColor}`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={textColor}
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white text-black fixed inset-0 z-50 flex flex-col items-center pt-32">
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Close Menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col items-center space-y-8 text-2xl font-normal">
            <Link
              to="/"
              className="border-b-2 border-black pb-1"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="flex items-center hover:opacity-70"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            {/* Services dropdown for mobile */}
            <div className="flex flex-col items-center">
              <button
                onClick={handleServiceClick}
                className="flex items-center hover:opacity-70"
              >
                Services
                <svg
                  className={`w-4 h-4 ml-2 transform transition-transform ${
                    servicesOpen ? "rotate-90" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {servicesOpen && (
                <div className="flex flex-col items-center space-y-4 mt-4">
                  {navItems.services.items.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="text-lg hover:text-red-500 transition-colors"
                      onClick={() => {
                        setServicesOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* <Link to="/case-studies" className="hover:opacity-70" onClick={() => setMenuOpen(false)}>
              Case Studies
            </Link> */}
            {/* <Link to="/blog" className="hover:opacity-70" onClick={() => setMenuOpen(false)}>
              Blog
            </Link> */}
            <Link
              to="/careers"
              className="hover:opacity-70"
              onClick={() => setMenuOpen(false)}
            >
              Careers
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-8 mt-16">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
          {/* Contact Us Button for mobile */}
          <Link
            to="/contact"
            className="mt-8 bg-transparent border border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 tracking-wider text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
