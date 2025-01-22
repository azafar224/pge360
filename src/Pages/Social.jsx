import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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

const Social = () => {
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
    <div className="min-h-screen overflow-hidden relative  bg-gradient-to-br from-red-950  via-red-900 to-black">
   <section className="w-full min-h-screen">
  <div className="max-w-[1440px] mx-auto pt-24 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-12">
    {/* Left Content */}
    <div className="flex flex-col space-y-4 sm:space-y-6 pt-4 sm:pt-8 lg:pt-12 text-center lg:text-left">
      <div className="space-y-2">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-wider leading-tight">
          SOCIAL MEDIA<br />
          MARKETING<br />
          SERVICES
        </h1>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-white text-xl sm:text-2xl font-bold tracking-wide mt-4 sm:mt-6 lg:mt-8 mb-2 sm:mb-4">
          REACH YOUR AUDIENCE WHERE THEY ARE
        </h2>
        
        <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
          Maximize your online presence and reach your target audience where they 
          spend the most time with our social media marketing services. Let us help 
          your brand in crafting a winning social media marketing strategy.
        </p>
      </div>
      
      <button className="mx-auto lg:mx-0 mt-4 sm:mt-6 lg:mt-8 text-white border border-white rounded-full px-6 sm:px-8 py-3 sm:py-4 w-fit hover:bg-white hover:text-red-900 transition-colors duration-300 font-medium tracking-wide">
        BOOK A FREE CONSULTATION
      </button>
    </div>

    {/* Right Content - Hero Image */}
    <div className="flex-shrink-0 w-full sm:w-3/4 lg:w-1/2 flex justify-center lg:justify-end">
      <img 
        src="/m1.png" 
        alt="Design Tools" 
        className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-auto object-contain"
      />
    </div>
  </div>
</section>

     {/* Services Section */}
<section className="w-full min-h-screen">
  <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
    {/* Main Heading */}
    <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 lg:mb-8 tracking-wider">
      TURN FOLLOWERS INTO CUSTOMERS
    </h2>
    
    {/* Description Text */}
    <p className="text-white/90 text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16 text-base sm:text-lg leading-relaxed px-4">
      A coherent, 360-degree strategy for your business. Leverage the power of social media with Pangea 360's expert social media marketing services that are personalized, data-driven, and customer-focused.
    </p>

    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start">
      {/* Left Side - Image */}
      <div className="w-full lg:flex-1">
        <img
          src="/m2.png"
          alt="Design Tools Illustration"
          className="w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto"
        />
      </div>

      {/* Right Side - Custom Accordion */}
      <div className="w-full lg:flex-1 mt-8 lg:mt-0">
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
      
      
<section className="w-full py-24 bg-gradient-to-r from-black to-red-950">
  <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
    {/* Quote */}
    <div className="text-center space-y-8">
      <blockquote className="text-white text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider leading-tight max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto">
        "PRODUCT RESEARCH IS ONE REASON WHY 76% OF INTERNET USERS ACCESS SOCIAL MEDIA"
      </blockquote>

      <div className="flex flex-col items-center gap-4">
        <div className="w-20 md:w-28 lg:w-32 h-px bg-white/20"></div>
        <cite className="text-white text-base md:text-lg lg:text-xl font-bold tracking-widest">
          HOOTSUITE
        </cite>
      </div>
    </div>

    {/* Section Title */}
    <div className="mt-16 md:mt-20 lg:mt-24 text-center">
      <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider leading-tight max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto">
        WHAT IS SOCIAL MEDIA MARKETING & MANAGEMENT?
      </h2>
    </div>
  </div>
</section>

{/* Social Media Marketing Content Section */}
<section className="w-full py-12 md:py-14 lg:py-16 bg-black">
  <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
      {/* Left Content - Text */}
      <div className="flex-1 space-y-3">
        <p className="text-white/90 text-sm md:text-base lg:text-sml leading-relaxed">
          As of 2022, there are over 4 billion social media users worldwide. Social media marketing provides access to this global market. Making it a massive opportunity and responsibility of doing it right.
        </p>

        <p className="text-white/90 text-sm md:text-base lg:text-sml leading-relaxed">
          Social media marketing is a means for brands to use social media platforms like Instagram, Facebook, TikTok, LinkedIn, Twitter, and many more to connect with their audiences, tell a brand story, and promote their products or services.
        </p>

        <p className="text-white/90 text-sm md:text-base lg:text-sml leading-relaxed">
          Social media marketing includes tactics such as creating and sharing content, running social media ads and engaging with customers. Key features include the ability to target specific demographics, measure engagement and conversions, and analyze the effectiveness of campaigns.
        </p>

        <p className="text-white/90 text-sm md:text-base lg:text-sml leading-relaxed">
          One of the key challenges brands face is delivering a consistent and effective strategy and having the time and resources to do it effectively.
        </p>

        <p className="text-white/90 text-sm md:text-base lg:text-sml leading-relaxed">
          For sustainable business growth and brand presence, it is important to stay on top of major trends and have a strong presence on social media. This helps brands attract new customers, increase visibility, build customer loyalty, boost sales, and ultimately generate revenue.
        </p>

        <p className="text-white/90 text-sm md:text-base lg:text-sml leading-relaxed">
          It is of utmost importance to use best practices and stay updated for algorithm updates for every social media platform to stay relevant and trendy, attract the right audience and be on brand throughout. Therefore, a coherent 360-degree strategy that connects with all your social media marketing efforts will help you generate maximum ROI.
        </p>
      </div>

      {/* Right Content - Phone Mockup */}
      <div className="flex-1 relative">
        <div className="relative w-[300px] md:w-[400px] lg:w-[500px] mx-auto">
          <img
            src="/m3.png"
            alt="Social Media App Interface with Icons"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</section>

    
 <section className="bg-black text-white py-16">
      {/* Header Section */}
      <div className="text-center mb-10">
    <h2 className="text-3xl font-bold text-white">MAKE THE SOCIAL MEDIA ALGORITHMS WORK FOR YOU</h2>
  </div>

  {/* Brand Portfolio Section */}
  <div className="text-center p-4 sm:p-6 md:p-8 lg:p-10 mb-6 sm:mb-8 md:mb-10">
  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
    Reputable Brand Portfolio
  </h3>
  <div className="flex flex-col sm:flex-row justify-center items-center mt-4 sm:mt-5 md:mt-6 gap-4 sm:gap-6 md:gap-8">
    <img 
      src="/kiko.png" 
      alt="Kiko Brand"
      className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto object-contain"
    />
  </div>
</div>

  {/* Design Services Section */}
  <div className="text-center">
    <h3 className="text-5xl font-bold">OUR SOCIAL MEDIA MARKETING SERVICES</h3>
  </div>

      {/* Services Grid Section */}
<section className="w-full min-h-screen bg-gradient-to-br from-red-950 to-black py-16">
<div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
    <div className="flex flex-col items-center text-center p-4 sm:p-6 transition-all duration-300 hover:transform hover:scale-105">
      <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 mb-4 sm:mb-6">
        <img 
          src="/current.png"
          alt="Performance Assessment"
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-white text-lg sm:text-xl font-bold tracking-wider mb-3 sm:mb-4">
        CURRENT PERFORMANCE ASSESSMENT
      </h3>
      <p className="text-white/80 text-sm sm:text-base leading-relaxed">
        Our team conducts a thorough analysis of your current social media performance to identify growth opportunities
      </p>
    </div>

    <div className="flex flex-col items-center text-center p-4 sm:p-6 transition-all duration-300 hover:transform hover:scale-105">
      <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 mb-4 sm:mb-6">
        <img 
          src="/media.png"
          alt="Social Media Strategy"
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-white text-lg sm:text-xl font-bold tracking-wider mb-3 sm:mb-4">
        SOCIAL MEDIA STRATEGY
      </h3>
      <p className="text-white/80 text-sm sm:text-base leading-relaxed">
        Customized strategy tailored to your business goals, target audience, competitive and industry landscape
      </p>
    </div>

    <div className="flex flex-col items-center text-center p-4 sm:p-6 transition-all duration-300 hover:transform hover:scale-105">
      <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 mb-4 sm:mb-6">
        <img 
          src="/calender.png"
          alt="Content Calendar"
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-white text-lg sm:text-xl font-bold tracking-wider mb-3 sm:mb-4">
        SOCIAL MEDIA CONTENT CALENDAR
      </h3>
      <p className="text-white/80 text-sm sm:text-base leading-relaxed">
        Expertly planned content ideas and calendar, incorporating industry, cultural, and business events and key topics.
      </p>
    </div>

    <div className="flex flex-col items-center text-center p-4 sm:p-6 transition-all duration-300 hover:transform hover:scale-105">
      <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 mb-4 sm:mb-6">
        <img 
          src="/content.png"
          alt="Content Creation"
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-white text-lg sm:text-xl font-bold tracking-wider mb-3 sm:mb-4">
        SOCIAL MEDIA CONTENT CREATION
      </h3>
      <p className="text-white/80 text-sm sm:text-base leading-relaxed">
        Professional and high-quality content production to increase brand awareness, engagement, and followers.
      </p>
    </div>



      {/* Second Row */}
      <div className="flex flex-col items-center text-center">
        <img 
          src="/pub.png"
          alt="Content Publishing"
          className="w-48 h-48 object-contain mb-6"
        />
        <h3 className="text-white text-xl font-bold tracking-wider mb-4">
          CONTENT PUBLISHING
        </h3>
        <p className="text-white/80 text-sm leading-relaxed">
          Successful launch and execution of campaigns at optimal delivery times to drive engagement and reach.
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <img 
          src="/ssoc.png"
          alt="Social Engagement"
          className="w-48 h-48 object-contain mb-6"
        />
        <h3 className="text-white text-xl font-bold tracking-wider mb-4">
          SOCIAL ENGAGEMENT
        </h3>
        <p className="text-white/80 text-sm leading-relaxed">
          Active management and engagement with followers to build a strong community.
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <img 
          src="/ana.png"
          alt="Analytics"
          className="w-48 h-48 object-contain mb-6"
        />
        <h3 className="text-white text-xl font-bold tracking-wider mb-4">
          SOCIAL MEDIA ANALYTICS
        </h3>
        <p className="text-white/80 text-sm leading-relaxed">
          Detailed reporting and analytics to measure success and make data-driven decisions
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <img 
          src="/prof.png"
          alt="Profile Optimization"
          className="w-48 h-48 object-contain mb-6"
        />
        <h3 className="text-white text-xl font-bold tracking-wider mb-4">
          PROFILE OPTIMIZATION
        </h3>
        <p className="text-white/80 text-sm leading-relaxed">
          Optimize your account for optimal conversion rate, taking into account each platform's search engines, algorithms, and user expectations
        </p>
      </div>
    </div>
  </div>
</section>

<section className="w-full min-h-screen bg-black py-24">
  <div className="max-w-[1440px] mx-auto px-8">
    {/* Quote */}
    <div className="text-center space-y-8">
      <h1 className="text-white text-2xl font-bold tracking-wider leading-tight max-w-6xl mx-auto font-['Times_New_Roman']">
        "THE BEST SOCIAL MEDIA CAMPAIGNS ARE BUILT ON A FOUNDATION OF<br />
        RESEARCH, TESTING, AND DATA-DRIVEN DECISION MAKING. WITHOUT<br />
        THESE KEY ELEMENTS, YOUR SOCIAL MEDIA EFFORTS ARE UNLIKELY TO<br />
        SUCCEED."
      </h1>
      
      <div className="flex flex-col items-center gap-8">
        <div className="w-full h-px bg-white/20 max-w-2xl"></div>
        <cite className="text-white text-2xl font-bold tracking-widest font-['Times_New_Roman']">
          MICHAEL STELZNER
        </cite>
      </div>
    </div>

    {/* Section Title */}
    <div className="mt-48 text-center">
      <h2 className="text-white text-5xl font-bold tracking-wider leading-tight font-['Times_New_Roman']">
        OUR SOCIAL MEDIA<br />
        MARKETING CHANNELS
      </h2>
    </div>
  </div>
</section>

<section className="w-full min-h-screen py-8 sm:py-12 md:py-16">
  <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center md:items-start">
      {/* Left Side - Image */}
      <div className="w-full md:flex-1 mb-8 md:mb-0">
        <img 
          src="/tik.png"
          alt="Design Tools Illustration"
          className="w-full max-w-md lg:max-w-xl mx-auto"
        />
      </div>

      {/* Right Side - Custom Accordion */}
      <div className="w-full md:flex-1">
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

      <div className="py-20">
  <h2 className="text-5xl font-bold text-white text-center mb-16">
    WHY WORK WITH US
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-[10%]">
    {/* Experience & Expertise */}
    <div className="text-center space-y-6">
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-40 h-40 bg-red-500/20 rounded-full blur-2xl"></div>
        <img 
          src="/i1.png" 
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
          src="/i2.png" 
          alt="Customized Approach" 
          className="w-32 h-32 mx-auto relative z-10"
        />
      </div>
      <h3 className="text-2xl font-bold text-white">CUSTOMIZED APPROACH</h3>
      <p className="text-gray-300 leading-relaxed">
        Our approach to branding is highly personalized and tailored to meet the unique needs of each client. We take the time to understand your brand's mission, vision, values, and target audience to create a cohesive and consistent brand identity that resonates with your customers.
      </p>
    </div>

    {/* Collaboration */}
    <div className="text-center space-y-6">
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-40 h-40 bg-red-500/20 rounded-full blur-2xl"></div>
        <img 
          src="/i3.png" 
          alt="Collaboration" 
          className="w-32 h-32 mx-auto relative z-10"
        />
      </div>
      <h3 className="text-2xl font-bold text-white">COLLABORATION</h3>
      <p className="text-gray-300 leading-relaxed">
        At our agency, we believe in forming true partnerships with our clients. We take the time to understand your brand, messages, and goals, and ensure that your voice is reflected in every design element.
      </p>
    </div>

    {/* Experienced Designers */}
    <div className="text-center space-y-6">
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-40 h-40 bg-red-500/20 rounded-full blur-2xl"></div>
        <img 
          src="/i4.png" 
          alt="Experienced Designers" 
          className="w-32 h-32 mx-auto relative z-10"
        />
      </div>
      <h3 className="text-2xl font-bold text-white">EXPERIENCED DESIGNERS</h3>
      <p className="text-gray-300 leading-relaxed">
        Our team of talented, award-winning designers bring their expertise to craft designs that embody your brand's unique personality and vision. Expect designs that engage and captivate your audience.
      </p>
    </div>

    {/* Collaboration (Repeated) */}
    <div className="text-center space-y-6">
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-40 h-40 bg-red-500/20 rounded-full blur-2xl"></div>
        <img 
          src="/i3.png" 
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
    <div className="text-center space-y-6 md:col-span-2 lg:col-span-1">
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-40 h-40 bg-red-500/20 rounded-full blur-2xl"></div>
        <img 
          src="/i2.png" 
          alt="Comprehensive Services" 
          className="w-32 h-32 mx-auto relative z-10" 
        />
      </div>
      <h3 className="text-2xl font-bold text-white">COMPREHENSIVE SERVICES</h3>
      <p className="text-gray-300 leading-relaxed">
        We offer a full suite of branding services to help you enhance and maintain a strong, consistent brand image across all platforms and channels. From logos, websites to brand guidelines, we give you the 360 degrees services.
      </p>
    </div>
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
<div className="py-20 px-8">
  <h2 className="text-4xl font-bold text-white text-left mb-12">FAQS</h2>
  <div className="space-y-4">
    <div className="border-b border-red-900">
      <div className="w-full text-left py-4 flex justify-between items-center transition-colors cursor-pointer" onClick={() => document.getElementById('answer1').classList.toggle('hidden')}>
        <span className="font-semibold text-white ">HOW DO YOU WORK WITH OUR TEAM TO ENSURE OUR BRAND VOICE AND MESSAGE IS CONSISTENT ACROSS ALL CONTENT?</span>
        <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div id="answer1" className="hidden pl-8 py-2 text-white  ">
        <p>We work closely with your team, ensuring alignment through regular communication, brand guidelines, and feedback loops to maintain consistency across all content.</p>
      </div>
    </div>

    <div className="border-b border-red-900">
      <div className="w-full text-left py-4 flex justify-between items-center hover:text-red-400 transition-colors cursor-pointer" onClick={() => document.getElementById('answer2').classList.toggle('hidden')}>
        <span className="font-semibold text-white ">HOW DO YOU MEASURE THE SUCCESS OF YOUR CONTENT MARKETING EFFORTS?</span>
        <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div id="answer2" className="hidden pl-8 py-2 text-gray-300">
        <p>We use metrics like website traffic, engagement rates, and lead generation to assess the success of our content marketing efforts.</p>
      </div>
    </div>

    <div className="border-b border-red-900">
      <div className="w-full text-left py-4 flex justify-between items-center hover:text-red-400 transition-colors cursor-pointer" onClick={() => document.getElementById('answer3').classList.toggle('hidden')}>
        <span className="font-semibold text-white ">HOW DO YOU RESEARCH AND CHOOSE THE RIGHT TOPICS FOR OUR AUDIENCE?</span>
        <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div id="answer3" className="hidden pl-8 py-2 text-white  ">
        <p>We research industry trends, analyze audience interests, and leverage SEO tools to ensure we select relevant topics that resonate with your target audience.</p>
      </div>
    </div>

    <div className="border-b border-red-900">
      <div className="w-full text-left py-4 flex justify-between items-center hover:text-red-400 transition-colors cursor-pointer" onClick={() => document.getElementById('answer4').classList.toggle('hidden')}>
        <span className="font-semibold text-white ">HOW DO YOU DETERMINE WHAT TYPES OF CONTENT TO CREATE?</span>
        <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div id="answer4" className="hidden pl-8 py-2 text-white ">
        <p>We analyze your business goals, target audience preferences, and market research to decide on content types that will drive engagement and conversions.</p>
      </div>
    </div>

    <div className="border-b border-red-900">
      <div className="w-full text-left py-4 flex justify-between items-center hover:text-red-400 transition-colors cursor-pointer" onClick={() => document.getElementById('answer5').classList.toggle('hidden')}>
        <span className="font-semibold text-white ">HOW OFTEN WILL WE RECEIVE REPORTS ON THE PERFORMANCE OF OUR CONTENT MARKETING CAMPAIGN?</span>
        <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div id="answer5" className="hidden pl-8 py-2 text-gray-300">
        <p>We provide performance reports on a monthly basis, with the option for more frequent updates depending on the campaign's needs and goals.</p>
      </div>
    </div>
  </div>
</div>
    
    </section>
    </div>
  );
};
export default Social;