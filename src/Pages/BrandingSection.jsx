

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Accordion Item Component
const AccordionItem = ({ title, description, isOpen, onClick }) => {
  return (
    <div className="border-t border-white/20">
      <button
        className="w-full py-4 flex justify-between items-center text-white text-left"
        onClick={onClick}
      >
        <span className="text-xl tracking-wider">{title}</span>
        <span className="text-2xl">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-300 pr-8">
          <p className="text-lg leading-relaxed">{description}</p>
        </div>
      )}
    </div>
  );
};


// Process Slider Component
const ProcessSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const processes = [
    {
      number: "1",
      title: "UNDERSTANDING CLIENT'S BUSINESS",
      description: "Our team starts with getting to know our client and their brand. We understand the client's goals, target audience, and evaluate the client's current branding efforts.",
      image: "/process1.png"
    },
    {
      number: "2",
      title: "RESEARCH AND ANALYSIS",
      description: "Our team will conduct extensive research to gather information about the client's brand, competitors, and target audiences. This information will be used to develop a comprehensive brand strategy.",
      image: "/process2.png"
    },
    {
      number: "3",
      title: "STRATEGY DEVELOPMENT",
      description: "Our branding experts work together to develop a custom strategy that aligns with your brand and your goals. We present our findings and recommendations to you for review and feedback.",
      image: "/process3.png"
    },
    {
      number: "4",
      title: "CREATIVE DEVELOPMENT",
      description: "Our design team will create a range of visual concepts and prototypes based on the agreed-upon strategy. The concepts will be refined until a final design is achieved that meets the client's needs.",
      image: "/process4.png"
    },
    {
      number: "5",
      title: "IMPLEMENTATION",
      description: "Our team will collaborate to implement the branding strategy, from creating new logos, websites, and marketing materials to establishing brand guidelines for internal and external use.",
      image: "/process5.png"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === processes.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? processes.length - 1 : prev - 1));
  };

  return (
    <div className="relative">
      {/* Main Content Container */}
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {processes.map((process, index) => (
            <div key={index} className="min-w-full flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center px-2 sm:px-4">
              <div className="w-full sm:w-2/3 flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
                {/* Number */}
                <div
                  className="text-red-600 text-5xl sm:text-[100px] lg:text-[200px] font-bold leading-none"
                  style={{ textShadow: '0 0 30px rgba(255,0,0,0.2)' }}
                >
                  {process.number}
                </div>

                {/* Content */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-white tracking-wide sm:tracking-wider">
                    {process.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-lg leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows with Background Blur */}
        <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={prevSlide}
            className="bg-white/5 backdrop-blur-lg p-3 sm:p-6 rounded-full hover:bg-white/10 transition-colors border border-white/20"
          >
            <ChevronLeft size={16} className="sm:text-white text-gray-300" />
          </button>
        </div>
        <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={nextSlide}
            className="bg-white/5 backdrop-blur-lg p-3 sm:p-6 rounded-full hover:bg-white/10 transition-colors border border-white/20"
          >
            <ChevronRight size={16} className="sm:text-white text-gray-300" />
          </button>
        </div>
      </div>



      {/* Progress Indicators */}
      <div className="flex justify-center gap-3 mt-12">
        {processes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-14 h-1.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-red-600 w-20' : 'bg-gray-600'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

// Main Branding Section Component
const BrandingSection = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const accordionItems = [
    {
      title: "BRAND LOYAL CUSTOMERS",
      description: "Build a dedicated customer base that sticks with your brand. Our strategies focus on creating emotional connections and delivering consistent value that transforms first-time buyers into lifelong advocates. Through targeted engagement and exceptional brand experiences, we help you cultivate customer loyalty that stands the test of time."
    },
    {
      title: "STRONG BRAND RECALL",
      description: "Make your brand instantly recognizable in your market. We develop distinctive visual identities and messaging that leave a lasting impression on your audience. Our approach combines psychology with creative design to ensure your brand stays top-of-mind when customers make purchasing decisions."
    },
    {
      title: "BOOST BRAND AWARENESS",
      description: "Expand your brand's reach and visibility in the market. Our comprehensive brand awareness strategies utilize multiple channels to increase your brand's exposure to target audiences. We create compelling narratives and visual elements that capture attention and drive engagement across all touchpoints."
    },
    {
      title: "CONSISTENT BRAND DESIGN",
      description: "Maintain a cohesive brand identity across all platforms. Our design team ensures your brand's visual elements, messaging, and tone remain consistent whether customers encounter your brand online, in print, or in person. This consistency builds trust and reinforces your brand's professional image."
    }
  ];
  const formFields = {
    inputs: [
      { label: "Email", type: "email", required: true },
      { label: "Website", type: "url" },
      { label: "Subject", type: "text", required: true }
    ],
    textareas: [
      { label: "Message", required: true },
      { label: "Budget" }
    ]
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A0505] to-[#2A0808] pt-24 overflow-x-hidden relative w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 pt-8 lg:pt-16 text-center lg:text-center" style={{ transform: 'translate(3%, 10%)' }}>
            <div className="max-w-xl mx-auto lg:mx-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                BRANDING
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                FIRST IMPRESSIONS MATTER
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 lg:mb-12">
                Strategy & Designs created by experts from around the globe. We are committed to creating a valuable, innovative & memorable brand for your business.
              </p>
              <Link
                to="/contact"
                className="inline-block border border-white text-white px-6 sm:px-8 md:px-10 py-2 sm:py-3 rounded-full hover:bg-white hover:text-[#2A0808] transition-all duration-300 uppercase tracking-wider"
              >
                BOOK A FREE CONSULTATION
              </Link>
            </div>
          </div>

          {/* Right Content - Aero Illustration */}
          <div className="lg:w-1/2 lg:-mt-24 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -top-10 sm:-top-20 -left-10 sm:-left-20 w-40 sm:w-60 h-40 sm:h-60 bg-red-500/20 rounded-full blur-3xl"></div>

              <div className="hidden lg:block relative h-full min-h-[600px]">
                <img
                  src="/aero.png"
                  alt="Red Curve Design"
                  className=" object-cover w-64 h-auto  md:w-96" style={{ transform: 'translate(-60%, 50%)' }}
                />
              </div>


              <div className="block lg:hidden relative h-64 mt-8">
                <img
                  src="/aero.png"
                  alt="Red Curve Design"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="mt-24 sm:mt-32 mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12">
            A BRAND THEY WON'T FORGET
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-16">
            {/* Left side - Image */}
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-10 sm:-top-20 -left-10 sm:-left-20 w-40 sm:w-60 h-40 sm:h-60 bg-red-500/20 rounded-full blur-3xl"></div>
                <img
                  src="/aero2.png"
                  alt="Brand Strategy"
                  className="w-full h-auto relative z-10"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="lg:w-1/2">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12">
                At Pangea 360, with our data-driven approach to strategy formulation, strong customer focus, and our in-house award-winning design experts, we create a strategy for you that is destined to succeed.
              </p>

              {/* Accordion */}
              <div className="space-y-4">
                {accordionItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    isOpen={openItem === index}
                    onClick={() => toggleItem(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>



        {/* Statistics Quote Section */}
        <div className="py-12 sm:py-16 border-t border-b border-white/10 my-12 sm:my-20">
          <div className="text-center px-4 sm:px-8">
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white tracking-wide mb-4">
              "94% OF CONSUMERS SAY THEY RECOMMEND BRANDS THEY HAVE AN EMOTIONAL CONNECTION WITH."
            </h3>
            <p className="text-sm sm:text-base text-gray-300 uppercase tracking-widest">
              - GENSLER
            </p>
          </div>
        </div>

        {/* What is Branding Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-16 py-12 sm:py-20 px-4 sm:px-8">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6" style={{ transform: 'translate(5%, -5%)' }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
              WHAT IS BRANDING?
            </h2>
            <blockquote className="text-base sm:text-lg md:text-xl text-gray-300 italic mb-6 sm:mb-8">
              "A brand is the set of expectations, memories, stories and relationships that, taken together, account for a consumer's decision to choose one product or service over another" - Seth Godin
            </blockquote>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base">
              <p>
                Businesses that want to grow exponentially know how crucial brand building is in order to attract customers and build a loyal customer base.
              </p>
              <p>
                Brand Building is a marketing strategy that helps brands communicate their value, connect, and build long-term relationships with their audiences.
              </p>
              <p>
                At its elementary stage, brand-building comprises design, logo, naming, and color palettes and grows into more advanced strategies like promotional campaigns, personalized branding, and superior brand experiences.
              </p>
              <p>
                A brand is what differentiates businesses from their competition, connects to their audiences, and is the choice of product when making a purchase decision.
              </p>
            </div>
          </div>

          {/* Right Content - AA Illustration */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-10 sm:-top-20 -left-10 sm:-left-20 w-40 sm:w-60 h-40 sm:h-60 bg-red-500/20 rounded-full blur-3xl"></div>
              <img
                src="/AA.png"
                alt="Branding Concept"
                className="w-full h-auto relative z-10"
              />
            </div>
          </div>
        </div>


        {/* Brand Portfolio Section */}
        <div className="py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 sm:mb-16">
            REPUTABLE BRAND PORTFOLIO
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-16">
            <img
              src="/kiko.png"
              alt="Kiko Milano"
              className="h-auto w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        {/* Our Branding Services Section */}
        <div className="py-16 sm:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 sm:mb-16">
            OUR BRANDING SERVICES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Brand Strategy Card */}
            <div className="text-center px-4">
              <div className="relative mb-6">
                <div className="absolute -top-4 -left-4 w-40 h-40 bg-red-500/20 rounded-full blur-2xl"></div>
                <img
                  src="/brand.png"
                  alt="Brand Strategy"
                  className="w-48 h-48 mx-auto relative z-10"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">BRAND STRATEGY</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                If you're ready today to develop a better branding strategy for your business, we'll meet up with you and help you with brand naming, logo design and brand positioning for your business.
              </p>
            </div>

            {/* Visual Identity Card */}
            <div className="text-center px-4">
              <div className="relative mb-6">
                <div className="absolute -top-4 -left-4 w-40 h-40 bg-red-500/20 rounded-full blur-2xl"></div>
                <img
                  src="/v.png"
                  alt="Visual Identity"
                  className="w-48 h-48 mx-auto relative z-10"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">VISUAL IDENTITY</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                With our in-house award-winning design experts, we will create the most innovative and creative visual identity for your brand - colors, typography, and creative design.
              </p>
            </div>

            {/* Brand Guidelines Card */}
            <div className="text-center px-4">
              <div className="relative mb-6">
                <div className="absolute -top-4 -left-4 w-40 h-40 bg-red-500/20 rounded-full blur-2xl"></div>
                <img
                  src="/guide.png"
                  alt="Brand Guidelines"
                  className="w-48 h-48 mx-auto relative z-10"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">BRAND GUIDELINES</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                We will create research-backed thorough brand guidelines for your business. From Tone of Voice, to brand personas we have got it all covered.
              </p>
            </div>

            {/* Rebranding Card */}
            <div className="text-center px-4">
              <div className="relative mb-6">
                <div className="absolute -top-4 -left-4 w-40 h-40 bg-red-500/20 rounded-full blur-2xl"></div>
                <img
                  src="/rebrand.png"
                  alt="Rebranding"
                  className="w-48 h-48 mx-auto relative z-10"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">REBRANDING</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Make the best of our services with our design services. We have the most creative and innovative designers who come together from across the world to create for you.
              </p>
            </div>






          </div>
        </div>


        <div className="py-6 sm:py-12">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-2 text-white">
              CONNECT WITH YOUR CUSTOMERS.
            </h2>
            <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white pb-12 sm:pb-16">
              TAKE YOUR BUSINESS TO THE NEXT LEVEL WITH PANGEA 360
            </h3>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 sm:mb-20 text-white">
            OUR COLLABORATION PROCESS
          </h2>

          <ProcessSlider />
        </div>

        <div className="py-20 sm:py-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-16 sm:mb-12">
            WHY WORK WITH US
          </h2>

          <div className="px-4 max-w-7xl mx-auto">
            {/* First Row - 3 items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
              {/* Experience & Expertise */}
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-40 h-40 bg-red-500/20 rounded-full blur-2xl"></div>
                  <img
                    src="/puz.png"
                    alt="Experience & Expertise"
                    className="w-32 h-32 mx-auto relative z-10"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">EXPERIENCE & EXPERTISE</h3>
                <p className="text-gray-300 leading-relaxed">
                  At Pangea 360, we are proud to have a talented team of knowledgeable professionals in digital marketing who possess a comprehensive understanding of the industry and a proven success rate in executing impactful strategies.
                </p>
              </div>

              {/* Customized Approach */}
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-40 h-40 bg-red-500/20 rounded-full blur-2xl"></div>
                  <img
                    src="/cust.png"
                    alt="Customized Approach"
                    className="w-32 h-32 mx-auto relative z-10"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">CUSTOMIZED APPROACH</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our approach to branding is highly personalized and tailored to meet the unique needs of each client. We take the time to understand your brand's mission, vision, values, and target audience to create a cohesive and consistent brand identity that resonates with your customers.
                </p>
              </div>

              {/* Experienced Designers */}
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-40 h-40 bg-red-500/20 rounded-full blur-2xl"></div>
                  <img
                    src="/exp.png"
                    alt="Experienced Designers"
                    className="w-32 h-32 mx-auto relative z-10"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">EXPERIENCED DESIGNERS</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our team of talented, award-winning designers bring their expertise to craft designs that embody your brand's unique personality and vision. Expect designs that engage and captivate your audience.
                </p>
              </div>
            </div>

            {/* Second Row - 2 items centered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Collaboration */}
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-40 h-40 bg-red-500/20 rounded-full blur-2xl"></div>
                  <img
                    src="/coll.png"
                    alt="Collaboration"
                    className="w-32 h-32 mx-auto relative z-10"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">COLLABORATION</h3>
                <p className="text-gray-300 leading-relaxed">
                  At our agency, we believe in forming true partnerships with our clients. We take the time to understand your brand, messages, and goals, and ensure that your voice is reflected in every design element.
                </p>
              </div>

              {/* Comprehensive Services */}
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-40 h-40 bg-red-500/20 rounded-full blur-2xl"></div>
                  <img
                    src="/comp.png"
                    alt="Comprehensive Services"
                    className="w-32 h-32 mx-auto relative z-10"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">COMPREHENSIVE SERVICES</h3>
                <p className="text-gray-300 leading-relaxed">
                  We offer a full suite of branding services to help you enhance and maintain a strong, consistent brand image across all platforms and channels. From logos, websites to brand guidelines, we give you the 360-degree services.
                </p>
              </div>
            </div>
          </div>


        </div>





        {/* Mobile View (hidden on laptop) */}
        <div className="lg:hidden w-full px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
              READY TO GROW YOUR BUSINESS?
            </h2>
            <p className="text-gray-300 text-sm">
              Fill out the below form and our team will be in touch to learn more about how we can help your business to accelerate its digital growth
            </p>
          </div>

          <div className="space-y-4 max-w-md mx-auto">
            {/* Name Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-white text-sm mb-1">
                  Name <span className="text-gray-400">[Required]</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white border border-gray-800 rounded focus:outline-none focus:border-red-500 text-black"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-white">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white border border-gray-800 rounded focus:outline-none focus:border-red-500 text-black"
                />
              </div>
            </div>

            {/* Input Fields */}
            {formFields.inputs.map((field, index) => (
              <div key={index}>
                <label className="block text-sm mb-1 text-white">
                  {field.label} {field.required && <span className="text-gray-400">[Required]</span>}
                </label>
                <input
                  type={field.type}
                  className="w-full px-4 py-2 bg-white border border-gray-800 rounded focus:outline-none focus:border-red-500 text-black"
                  required={field.required}
                />
              </div>
            ))}

            {/* Textarea Fields */}
            {formFields.textareas.map((field, index) => (
              <div key={index}>
                <label className="block text-sm mb-1 text-white">
                  {field.label} {field.required && <span className="text-gray-400">[Required]</span>}
                </label>
                <textarea
                  className="w-full px-4 py-2 bg-white border border-gray-800 rounded h-24 focus:outline-none focus:border-red-500 text-black"
                  required={field.required}
                />
              </div>
            ))}

            <div className="text-center pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-red-900 to-red-700 rounded-full hover:from-red-800 hover:to-red-600 transition-all text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Laptop View (hidden on mobile) */}
        <div className="hidden lg:block py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">
              READY TO GROW YOUR BUSINESS?
            </h2>
            <p className="text-gray-300">
              Fill out the below form and our team will be in touch to learn more about how we can help your business to accelerate its digital growth
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 items-start" style={{ transform: 'translate(30%, 10%)' }}>
            <div className="space-y-6 max-w-xl">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm mb-1">
                    Name <span className="text-gray-400">[Required]</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-white border border-gray-800 rounded focus:outline-none focus:border-red-500 text-black"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-white">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-white border border-gray-800 rounded focus:outline-none focus:border-red-500 text-black"
                  />
                </div>
              </div>

              {/* Input Fields */}
              {formFields.inputs.map((field, index) => (
                <div key={index}>
                  <label className="block text-sm mb-1 text-white">
                    {field.label} {field.required && <span className="text-gray-400">[Required]</span>}
                  </label>
                  <input
                    type={field.type}
                    className="w-full px-4 py-2 bg-white border border-gray-800 rounded focus:outline-none focus:border-red-500 text-black"
                    required={field.required}
                  />
                </div>
              ))}

              {/* Textarea Fields */}
              {formFields.textareas.map((field, index) => (
                <div key={index}>
                  <label className="block text-sm mb-1 text-white">
                    {field.label} {field.required && <span className="text-gray-400">[Required]</span>}
                  </label>
                  <textarea
                    className="w-full px-4 py-2 bg-white border border-gray-800 rounded h-32 focus:outline-none focus:border-red-500 text-black"
                    required={field.required}
                  />
                </div>
              ))}

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-red-900 to-red-700 rounded-full hover:from-red-800 hover:to-red-600 transition-all text-white"
                >
                  Submit
                </button>
              </div>
            </div>

            <div className="hidden lg:block relative h-full min-h-[600px]">
              <img
                src="/pipe9.png"
                alt="Red Curve Design"
                className=" object-cover w-[400px] h-[700px] " style={{ transform: 'translate(10%, -30%)' }}
              />
            </div>


            <div className="block lg:hidden relative h-64 mt-8">
              <img
                src="/pipe9.png"
                alt="Red Curve Design"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>



        {/* FAQs Section */}
        <div className="py-20">
          <h2 className="text-4xl font-bold text-white text-left mb-12">FAQS</h2>
          <div className="space-y-4">
            <div className="border-b border-red-900">
              <div
                className="w-full text-left py-4 flex justify-between items-center transition-colors cursor-pointer"
                onClick={() => {
                  const answer = document.getElementById('answer1');
                  answer.classList.toggle('hidden');
                }}
              >
                <span className="font-semibold text-white">
                  HOW DO YOU WORK WITH OUR TEAM TO ENSURE OUR BRAND VOICE AND MESSAGE IS CONSISTENT ACROSS ALL CONTENT?
                </span>
                <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div id="answer1" className="hidden pl-8 py-2 text-white">
                <p>We work closely with your team, ensuring alignment through regular communication, brand guidelines, and feedback loops to maintain consistency across all content.</p>
              </div>
            </div>

            <div className="border-b border-red-900">
              <div
                className="w-full text-left py-4 flex justify-between items-center hover:text-red-400 transition-colors cursor-pointer"
                onClick={() => {
                  const answer = document.getElementById('answer2');
                  answer.classList.toggle('hidden');
                }}
              >
                <span className="font-semibold text-white">
                  HOW DO YOU MEASURE THE SUCCESS OF YOUR CONTENT MARKETING EFFORTS?
                </span>
                <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div id="answer2" className="hidden pl-8 py-2 text-gray-300">
                <p>We use metrics like website traffic, engagement rates, and lead generation to assess the success of our content marketing efforts.</p>
              </div>
            </div>

            <div className="border-b border-red-900">
              <div
                className="w-full text-left py-4 flex justify-between items-center hover:text-red-400 transition-colors cursor-pointer"
                onClick={() => {
                  const answer = document.getElementById('answer3');
                  answer.classList.toggle('hidden');
                }}
              >
                <span className="font-semibold text-white">
                  HOW DO YOU RESEARCH AND CHOOSE THE RIGHT TOPICS FOR OUR AUDIENCE?
                </span>
                <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div id="answer3" className="hidden pl-8 py-2 text-white">
                <p>We research industry trends, analyze audience interests, and leverage SEO tools to ensure we select relevant topics that resonate with your target audience.</p>
              </div>
            </div>

            <div className="border-b border-red-900">
              <div
                className="w-full text-left py-4 flex justify-between items-center hover:text-red-400 transition-colors cursor-pointer"
                onClick={() => {
                  const answer = document.getElementById('answer4');
                  answer.classList.toggle('hidden');
                }}
              >
                <span className="font-semibold text-white">
                  HOW DO YOU DETERMINE WHAT TYPES OF CONTENT TO CREATE?
                </span>
                <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div id="answer4" className="hidden pl-8 py-2 text-white">
                <p>We analyze your business goals, target audience preferences, and market research to decide on content types that will drive engagement and conversions.</p>
              </div>
            </div>

            <div className="border-b border-red-900">
              <div
                className="w-full text-left py-4 flex justify-between items-center hover:text-red-400 transition-colors cursor-pointer"
                onClick={() => {
                  const answer = document.getElementById('answer5');
                  answer.classList.toggle('hidden');
                }}
              >
                <span className="font-semibold text-white">
                  HOW OFTEN WILL WE RECEIVE REPORTS ON THE PERFORMANCE OF OUR CONTENT MARKETING CAMPAIGN?
                </span>
                <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div id="answer5" className="hidden pl-8 py-2 text-gray-300">
                <p>We provide performance reports on a monthly basis, with the option for more frequent updates depending on the campaign's needs and goals.</p>
              </div>
            </div>
          </div>

        </div>


      </div>
    </div>

  );
};

export default BrandingSection;