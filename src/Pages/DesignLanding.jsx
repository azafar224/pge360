
import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-t border-white/20">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="text-white text-2xl font-bold tracking-wider">{title}</span>
        <ChevronDown 
          className={`text-white transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-32 mb-4' : 'max-h-0'
        }`}
      >
        <p className="text-white/80 text-lg">{content}</p>
      </div>
    </div>
  );
};

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
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {processes.map((process, index) => (
          <div key={index} className="min-w-full">
            {/* Mobile View (hidden on laptop) */}
            <div className="lg:hidden flex flex-col items-center px-4 text-center">
              <div className="text-red-600 text-[120px] font-bold leading-none mb-6" 
                style={{ textShadow: '0 0 30px rgba(255,0,0,0.2)' }}>
                {process.number}
              </div>
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold mb-4 text-white tracking-wider">
                  {process.title}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  {process.description}
                </p>
              </div>
            </div>

            {/* Laptop View (hidden on mobile) */}
            <div className="hidden lg:flex gap-8 items-center justify-center px-4">
              <div className="w-2/3 flex items-center gap-12">
                {/* Number */}
                <div className="text-red-600 text-[100px] font-bold leading-none" 
                  style={{ textShadow: '0 0 30px rgba(255,0,0,0.2)' }}>
                  {process.number}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-6 text-white tracking-wider">
                    {process.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows with Background Blur */}
      <div className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-10">
        <button 
          onClick={prevSlide}
          className="bg-white/5 backdrop-blur-lg p-4 lg:p-6 rounded-full hover:bg-white/10 transition-colors border border-white/20"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
      </div>
      <div className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-10">
        <button 
          onClick={nextSlide}
          className="bg-white/5 backdrop-blur-lg p-4 lg:p-6 rounded-full hover:bg-white/10 transition-colors border border-white/20"
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>
    </div>

    {/* Progress Indicators */}
    <div className="flex justify-center gap-3 mt-8 lg:mt-12">
      {processes.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`w-10 lg:w-14 h-1.5 rounded-full transition-all duration-300 ${
            currentSlide === index ? 'bg-red-600 w-16 lg:w-20' : 'bg-gray-600'
          }`}
        />
      ))}
    </div>
  </div>
  );
};

const DesignLanding = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const services = [
    {
      id: 'branding',
      title: 'UNIQUE AND MEMORABLE BRANDING',
      content: 'Our branding expertise helps you stand out in the market.'
    },
    {
      id: 'website',
      title: 'HIGH-CONVERTING WEBSITE DESIGN',
      content: 'Our web designers specialize in creating user-friendly and visually appealing websites that drive conversions and help your business grow.'
    },
    {
      id: 'social',
      title: 'PROFESSIONAL AND ENGAGING SOCIAL MEDIA DESIGNS',
      content: 'Engaging social media content that connects with your audience.'
    },
    {
      id: 'custom',
      title: 'CUSTOMIZED SOLUTIONS',
      content: 'Tailored design solutions to meet your specific needs.'
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
    <div className="bg-gradient-to-br pt-14 from-[#750C11] to-[#070001] overflow-x-hidden relative w-full">
      {/* Hero Section */}
      <section className="w-full min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        {/* Flex container that changes to column on mobile */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex flex-col space-y-6 pt-12 lg:pt-12">
            <div className="space-y-2">
              <h1 className="text-white text-center lg:text-left text-3xl sm:text-4xl font-extrabold tracking-wider leading-tight">
                GRAPHIC<br />
                DESIGN<br />
                SERVICES
              </h1>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-white text-xl sm:text-2xl font-bold tracking-wide mt-4 sm:mt-8 text-center lg:text-left">
                THAT MAKE YOUR BRAND STAND OUT
              </h2>
              
              <p className="text-white/90 text-base sm:text-lg text-center lg:text-left">
                Stand Out with Stunning Digital and Graphic Design Services
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <button className="mt-4 sm:mt-8 text-white border border-white rounded-full px-6 sm:px-8 py-3 sm:py-4 w-fit hover:bg-white hover:text-red-900 transition-colors duration-300 font-medium tracking-wide text-sm sm:text-base">
                BOOK A FREE CONSULTATION
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img 
              src="/AA.png"
              alt="Design Tools" 
              className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>

      {/* Services Section */}
      <section className="w-full min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Heading */}
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 tracking-wider">
          DESIGNED FOR YOUR SUCCESS
        </h2>
        
        {/* Description Text */}
        <p className="text-white/90 text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16 text-base sm:text-lg leading-relaxed px-4">
          At Pangea 360, our goal is to create designs that are not only visually stunning but also align with your business goals. Whether it's a new website, logo, or social media campaign, we take a strategic approach to ensure that your designs drive results.
        </p>

        {/* Flex container that stacks on mobile */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left Side - Image */}
          <div className="w-full lg:flex-1">
            <img 
              src="/t.png"
              alt="Design Tools Illustration"
              className="w-full max-w-lg mx-auto"
            />
          </div>

          {/* Right Side - Custom Accordion */}
          <div className="w-full lg:flex-1">
            {services.map((service) => (
              <AccordionItem
                key={service.id}
                title={service.title}
                content={service.content}
                isOpen={openSection === service.id}
                onClick={() => toggleSection(service.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
      
      {/* What is Design Section */}
      <section className="bg-black text-white font-sans p-4 sm:p-6 lg:p-10 min-h-screen flex items-center">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto gap-8 lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 lg:pr-10 space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <h1 className="text-lg sm:text-xl pt-8 lg:text-3xl font-bold leading-tight">
              "94% OF FIRST IMPRESSIONS ARE DESIGN-RELATED."
            </h1>
            <h2 className="text-base sm:text-lg font-light text-white/90">
              THE DESIGN COUNCIL
            </h2>
          </div>

          <div className="space-y-4 pt-4">
            <h3 className="text-2xl sm:text-3xl font-bold">
              WHAT IS DESIGN?
            </h3>
            
            <div className="space-y-4 text-white/80 text-base sm:text-lg leading-relaxed">
              <p>
                Design is vital to any business as it visually represents your
                brand and helps communicate your message to your audience. Our
                graphic design services cover a wide range of digital design needs,
                from web design and logos to brand identity and social media
                designs.
              </p>
              
              <p>
                We understand the importance of having a cohesive and captivating
                design across all touchpoints to create a seamless experience for
                the customer. Our team of experts uses the latest design trends and
                technologies to create designs that stand out and effectively
                communicate your brand's message.
              </p>
              
              <p>
                Whether creating a new website or revamping your brand identity,
                our design services will help elevate your business to the next
                level.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/log.png"
            alt="Design Illustration"
            className="w-full max-w-md lg:max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>   

      <section className="bg-black text-white py-16">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">YOUR VISION, OUR CREATIVITY</h2>
        </div>

        {/* Brand Portfolio Section */}
        <div className="text-center mb-10 p-10">
          <h3 className="text-4xl font-bold">REPUTABLE BRAND PORTFOLIO</h3>
          <div className="flex justify-center items-center mt-6 gap-8">
            <img src="/kiko.png" alt="Brand 1" />
          </div>
        </div>

        {/* Process Slider Section */}
        <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
          CONNECT WITH YOUR CUSTOMERS.
        </h2>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight max-w-3xl mx-auto">
          TAKE YOUR BUSINESS TO THE NEXT LEVEL WITH PANGEA 360
        </h3>
      </div>

      {/* Process Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-12 sm:mb-16 lg:mb-20 text-white max-w-3xl mx-auto leading-tight">
        OUR COLLABORATION PROCESS
      </h2>

      {/* Process Slider */}
      <div className="max-w-7xl mx-auto">
        <ProcessSlider />
      </div>
    </div>
        {/* Design Services Section */}
        <div className="text-center">
          <h3 className="text-6xl font-bold">OUR DESIGN SERVICES</h3>
        </div>

        {/* Design Services Grid */}
        <div className="bg-black text-white py-10 px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Web Design */}
            <div className="text-center">
              <img 
                src="/t.png"
                alt="Web Design 3D Icon"
                className="mx-auto mb-6 h-32"
              />
              <h3 className="text-2xl font-bold tracking-wider mb-4">WEB DESIGN</h3>
              <p className="text-sm text-white/80">
                Our team of experts will create a visually appealing and user-friendly website, page layouts, and web pages that communicate your brand's message effectively.
              </p>
            </div>

            {/* Logo Design */}
            <div className="text-center">
              <img 
                src="/log.png"
                alt="Logo Design 3D Icon"
                className="mx-auto mb-6 h-32"
              />
              <h3 className="text-2xl font-bold tracking-wider mb-4">LOGO DESIGN</h3>
              <p className="text-sm text-white/80">
                Our logo design service will create a unique and memorable logo representing your brand and its values.
              </p>
            </div>
            {/* Brand Identity Continued */}
            <div className="text-center">
              <img 
                src="/br.png"
                alt="Brand Identity 3D Icon"
                className="mx-auto mb-6 h-32"
              />
              <h3 className="text-2xl font-bold tracking-wider mb-4">BRAND IDENTITY</h3>
              <p className="text-sm text-white/80">
                Our team will create a cohesive and consistent visual representation of your brand across all touchpoints, including 3d visual elements, asset packs, business cards, and more.
              </p>
            </div>

            {/* Social Media Design */}
            <div className="text-center">
              <img 
                src="/soc.png"
                alt="Social Media Design 3D Icon"
                className="mx-auto mb-6 h-32"
              />
              <h3 className="text-2xl font-bold tracking-wider mb-4">SOCIAL MEDIA DESIGN</h3>
              <p className="text-sm text-white/80">
                Our social media design service will create eye-catching designs for your social media platforms to increase engagement and reach.
              </p>
            </div>

            {/* Blog Posts Design */}
            <div className="text-center">
              <img 
                src="/bl.png"
                alt="Blog Posts Design 3D Icon"
                className="mx-auto mb-6 h-32"
              />
              <h3 className="text-2xl font-bold tracking-wider mb-4">BLOG POSTS DESIGN</h3>
              <p className="text-sm text-white/80">
                We will create custom designs for your blog posts to make your blog more engaging and exciting to read.
              </p>
            </div>

            {/* Infographics Design */}
            <div className="text-center">
              <img 
                src="/info.png"
                alt="Infographics Design 3D Icon"
                className="mx-auto mb-6 h-32"
              />
              <h3 className="text-2xl font-bold tracking-wider mb-4">INFOGRAPHICS DESIGN</h3>
              <p className="text-sm text-white/80">
                We create high-quality infographics to help you present your data and deliver valuable insights to your target audience.
              </p>
            </div>

            {/* Presentations Design */}
            <div className="text-center">
              <img 
                src="/pres.png"
                alt="Presentations Design 3D Icon"
                className="mx-auto mb-6 h-32"
              />
              <h3 className="text-2xl font-bold tracking-wider mb-4">PRESENTATIONS DESIGN</h3>
              <p className="text-sm text-white/80">
                Our team will create stunning, memorable, and professional presentations to convey your brand's story and drive the desired business actions.
              </p>
            </div>

            {/* E-Book Design */}
            <div className="text-center">
              <img 
                src="/ebo.png"
                alt="E-Book Design 3D Icon"
                className="mx-auto mb-6 h-32"
              />
              <h3 className="text-2xl font-bold tracking-wider mb-4">E-BOOK DESIGN</h3>
              <p className="text-sm text-white/80">
                Our team will create an e-book design that will capture your audience's attention and keep them curious to read the next chapter.
              </p>
            </div>
          </div>
        </div>

        {/* Why Work With Us Section */}
        <div className="py-20">
          <h2 className="text-5xl font-bold text-white text-center mb-16">
            WHY WORK WITH US
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
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

            {/* Two Comprehensive Services sections */}
            {[1, 2].map((index) => (
              <div key={index} className="text-center space-y-6 md:col-span-2 lg:col-span-1">
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
                  We offer a full suite of branding services to help you enhance and maintain a strong, consistent brand image across all platforms and channels. From logos, websites to brand guidelines, we give you the 360 degrees services.
                </p>
              </div>
            ))}
          </div>
        </div>

         {/* Mobile View (hidden on laptop) */}
      <div className="block lg:hidden w-full px-4 py-8">
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
    className=" object-cover w-[400px] h-[700px] "style={{ transform: 'translate(10%, -30%)' }}
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
        <div className="py-12 px-8">
          <h2 className="text-6xl font-bold text-white text-left mb-12">FAQS</h2>
          <div className="space-y-8">
            {/* FAQ Items */}
            {[
              {
                question: "HOW DO YOU WORK WITH OUR TEAM TO ENSURE OUR BRAND VOICE AND MESSAGE IS CONSISTENT ACROSS ALL CONTENT?",
                answer: "We work closely with your team, ensuring alignment through regular communication, brand guidelines, and feedback loops to maintain consistency across all content."
              },
              {
                question: "HOW DO YOU MEASURE THE SUCCESS OF YOUR CONTENT MARKETING EFFORTS?",
                answer: "We use metrics like website traffic, engagement rates, and lead generation to assess the success of our content marketing efforts."
              },
              {
                question: "HOW DO YOU RESEARCH AND CHOOSE THE RIGHT TOPICS FOR OUR AUDIENCE?",
                answer: "We research industry trends, analyze audience interests, and leverage SEO tools to ensure we select relevant topics that resonate with your target audience."
              },
              {
                question: "HOW DO YOU DETERMINE WHAT TYPES OF CONTENT TO CREATE?",
                answer: "We analyze your business goals, target audience preferences, and market research to decide on content types that will drive engagement and conversions."
              },
              {
                question: "HOW OFTEN WILL WE RECEIVE REPORTS ON THE PERFORMANCE OF OUR CONTENT MARKETING CAMPAIGN?",
                answer: "We provide performance reports on a monthly basis, with the option for more frequent updates depending on the campaign's needs and goals."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-red-900">
                <div 
                  className="w-full text-left py-4 flex justify-between items-center transition-colors cursor-pointer" 
                  onClick={() => document.getElementById(`answer${index + 1}`).classList.toggle('hidden')}
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div id={`answer${index + 1}`} className="hidden pl-8 py-2 text-gray-300">
                  <p>{faq.answer}</p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignLanding;