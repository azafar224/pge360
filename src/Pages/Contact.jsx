import React, { useState, useEffect } from "react";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [statusMessage, setStatusMessage] = useState(""); // Status message state

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    // Collect form data
    const formData = {
      company_name: form.company_name.value,
      first_name: form.first_name.value,
      last_name: form.last_name.value,
      email: form.email.value,
      phone: form.phone.value || "Not provided",
      message: form.message.value,
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_7ql3cg9", // Replace with your EmailJS Service ID
        "template_l9mw668", // Replace with your EmailJS Template ID
        formData, // Form data object
        "uN8K-QMFNhza9gwnv" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          setStatusMessage("Message sent successfully!"); // Update success message
          form.reset(); // Clear the form after successful submission
        },
        (error) => {
          setStatusMessage("Failed to send message. Please try again later."); // Update error message
        }
      );
  };

  // Mobile Layout
  const MobileLayout = () => (
    <div className="min-h-screen relative bg-gradient-to-br from-red-950 to-black overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-br from-red-950 to-black" />
      <div className="relative z-10 flex flex-col p-6 pt-36">
        <h1 className="text-2xl font-white mb-8 text-center">CONTACT US.</h1>
        <div className="flex gap-4 mb-8 justify-center">
          <Linkedin className="w-6 h-6 text-white cursor-pointer hover:text-[#FFD0D0] transition-colors" />
          <Instagram className="w-6 h-6 text-white cursor-pointer hover:text-[#FFD0D0] transition-colors" />
          <Twitter className="w-6 h-6 text-white cursor-pointer hover:text-[#FFD0D0] transition-colors" />
        </div>
        <div className="w-full">
          <form
            onSubmit={handleFormSubmit}
            className="space-y-6 bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg border border-white"
          >
            <div className="space-y-1">
              <label className="block text-sm font-medium text-white">
                Company name
              </label>
              <input
                type="text"
                name="company_name"
                placeholder="Company name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFD0D0] focus:border-[#FFD0D0] bg-white"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-white">
                Name <span className="text-white">(required)</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFD0D0] focus:border-[#FFD0D0] bg-white"
                  required
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFD0D0] focus:border-[#FFD0D0] bg-white"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-white">
                  Email <span className="text-white">(required)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFD0D0] focus:border-[#FFD0D0] bg-white"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-white">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFD0D0] focus:border-[#FFD0D0] bg-white"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-white">
                Message <span className="text-white">(required)</span>
              </label>
              <textarea
                name="message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFD0D0] focus:border-[#FFD0D0] bg-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-2 bg-white border-2 border-black rounded-full hover:bg-[#FFD0D0] hover:border-[#FFD0D0] hover:text-white transition-all duration-200"
            >
              Send
            </button>
            {statusMessage && (
              <p className="mt-4 text-center text-white bg-blacks rounded-md py-2 px-4">
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );

  // Desktop Layout
  const DesktopLayout = () => (
    <div className="min-h-screen relative bg-gradient-to-br from-red-950 to-black overflow-hidden pb-24">
      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-br from-red-950 to-black" />
      <div className="px-8 relative z-10 flex h-full">
        <div className="w-1/2 p-12 flex flex-col text-white">
          <h1
            className="text-6xl text:white mb-8"
            style={{ transform: "translate(-0%, 200%)" }}
          >
            CONTACT US.
          </h1>
          <div
            className="flex pl-12 gap-4 mb-8"
            style={{ transform: "translate(10%, 700%)" }}
          >
            <Linkedin className="w-6 h-6 text-white cursor-pointer hover:text-[#FFD0D0] transition-colors" />
            <Instagram className="w-6 h-6 text-white cursor-pointer hover:text-[#FFD0D0] transition-colors" />
            <Twitter className="w-6 h-6 text-white cursor-pointer hover:text-[#FFD0D0] transition-colors" />
          </div>
          <div className="relative">
            <div
              className="absolute top-0 left-0 w-[500px] h-[400px]"
              style={{ transform: "translate(-30%, 10%)" }}
            >
              <img
                src="/curve.png"
                alt="Curved pipe"
                className="w-full h-full object-contain"
              />
            </div>
            <div
              className="relative z-10 ml-48 mt-12"
              style={{ transform: "translate(-10%, 30%)" }}
            >
              <img
                src="/mob.png"
                alt="Contact illustration"
                className="w-64 h-64 object-contain"
              />
            </div>
          </div>
        </div>
        <div
          className="w-1/2 p-10 flex items-start mb-16"
          style={{ transform: "translate(-20%, 20%)" }}
        >
          <form
            onSubmit={handleFormSubmit}
            className="space-y-6 bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg border border-white"
          >
            <div className="space-y-1">
              <label className="block text-sm font-medium text-white">
                Company name
              </label>
              <input
                type="text"
                name="company_name"
                placeholder="Company name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFD0D0] focus:border-[#FFD0D0] bg-white"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-white">
                Name <span className="text-white">(required)</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFD0D0] focus:border-[#FFD0D0] bg-white"
                  required
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFD0D0] focus:border-[#FFD0D0] bg-white"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-white">
                  Email <span className="text-white">(required)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFD0D0] focus:border-[#FFD0D0] bg-white"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-white">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFD0D0] focus:border-[#FFD0D0] bg-white"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-white">
                Message <span className="text-white">(required)</span>
              </label>
              <textarea
                name="message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FFD0D0] focus:border-[#FFD0D0] bg-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-2 bg-white border-2 border-black rounded-full hover:bg-[#FFD0D0] hover:border-[#FFD0D0] hover:text-white transition-all duration-200"
            >
              Send
            </button>
            {statusMessage && (
              <p className="mt-4 text-center text-white bg-blacks rounded-md py-2 px-4">
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
};

export default ContactPage;
