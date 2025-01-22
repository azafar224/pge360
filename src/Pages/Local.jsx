
import React, { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from 'react-router-dom';


const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/20">
      <button
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={onClick}
      >
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        <ChevronDown
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          size={20}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-48 pb-4" : "max-h-0"}`}
      >
        <p className="text-gray-200 text-sm md:text-base">{content}</p>
      </div>
    </div>
  );
};

const ProcessSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const processes = [
    {
      number: "1",
      title: "COMPREHENSIVE SEO AUDIT",
      description:
        "We begin with a thorough analysis of your website's current SEO performance, technical health, and competitive landscape to identify opportunities for improvement.",
    },
    {
      number: "2",
      title: "STRATEGY DEVELOPMENT",
      description:
        "Based on our audit findings, we develop a customized SEO strategy aligned with your business goals, target audience, and industry requirements.",
    },
    {
      number: "3",
      title: "IMPLEMENTATION",
      description:
        "Our team executes the strategy through technical optimization, content creation, link building, and other proven SEO techniques.",
    },
    {
      number: "4",
      title: "MONITORING & OPTIMIZATION",
      description:
        "We continuously monitor your website's performance and make data-driven adjustments to optimize results and maintain rankings.",
    },
    {
      number: "5",
      title: "REPORTING & ANALYSIS",
      description:
        "Regular reporting keeps you informed of progress, ROI, and strategic recommendations for ongoing improvement.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === processes.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? processes.length - 1 : prev - 1));
  };
  

  return (
    <div className="relative">
  <div className="overflow-hidden w-full relative">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {processes.map((process, index) => (
            <div
              key={index}
              className="min-w-full flex flex-col md:flex-row gap-8 items-center justify-center px-4"
            >
              <div className="md:w-2/3 flex items-center gap-12">
                <div
                  className="text-red-600 text-[100px] md:text-[200px] font-bold leading-none"
                  style={{ textShadow: "0 0 30px rgba(255,0,0,0.2)" }}
                >
                  {process.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white tracking-wider">
                    {process.title}
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={prevSlide}
            className="bg-white/5 backdrop-blur-lg p-4 md:p-6 rounded-full hover:bg-white/10 transition-colors border border-white/20"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={nextSlide}
            className="bg-white/5 backdrop-blur-lg p-4 md:p-6 rounded-full hover:bg-white/10 transition-colors border border-white/20"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-12">
        {processes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-10 md:w-14 h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-red-600 w-16 md:w-20" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Local = () => {
  const [openSection, setOpenSection] = useState(null);

  const accordionData = [
    {
      title: "INCREASED VISIBILITY",
      content: "Our SEO strategies will boost your website's visibility and attract more traffic, leading to increased brand awareness and recognition. We employ cutting-edge techniques to ensure your site appears prominently in search results."
    },
    {
      title: "HIGHER RANKINGS",
      content: "Achieve top positions in search engine results pages through our proven optimization methods. We focus on sustainable, long-term ranking improvements that drive organic traffic to your website."
    },
    {
      title: "BETTER USER EXPERIENCE",
      content: "We optimize your website's structure, navigation, and content to provide an exceptional user experience. This includes improving page load speeds, mobile responsiveness, and overall site accessibility."
    },
    {
      title: "BETTER ROI",
      content: "Get measurable results and superior return on investment through our data-driven SEO strategies. We track key metrics and continuously optimize our approach to maximize your marketing budget."
    }
  ];

  const handleClick = (index) => {
    setOpenSection(openSection === index ? null : index);
  };
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
    <div className="min-h-screen relative overflow-x-hidden w-full py-4 bg-gradient-to-br from-red-950 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto pr-10 px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8"style={{ transform: 'translate(5%, 10%)' }}>
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wider">
              PROFESSIONAL FULL-SERVICE SEO AGENCY
            </h1>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              BOOST YOUR SEARCH RANKINGS AND DRIVE TRAFFIC
            </h2>
            <p className="text-gray-200">
              Trust our full-service SEO agency experts to outrank your competitors and drive more traffic to your website. Our team will help you achieve organic optimization to the next level with our data-driven strategy and state-of-the-art tools.
            </p>
         <Link to="/contact">
                    <button className="border-2 border-white rounded-full px-8 py-3 hover:bg-white hover:text-black transition-colors mt-3">
                      CONTACT US
                    </button>
                  </Link>




          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/S.png"
              alt="SEO Stats"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
            />
          </div>
        </div>
      </div>

      {/* Industry Lead Section */}
      <div className="container mx-auto px-8 py-16">
        <h2 className="text-3xl md:text-4xl text-white font-bold text-center mb-16">
          TAKE THE LEAD IN YOUR INDUSTRY
        </h2>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/speaker.png"
              alt="SEO Performance"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
            />
          </div>
          <div className="lg:w-1/2 space-y-6">
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openSection === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* What is SEO Section */}
      <div className="container mx-auto px-4 py-16">
        {/* HubSpot Quote */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-3xl text-white font-bold mb-4 underline">
            "75% OF USERS NEVER SCROLL PAST THE FIRST PAGE OF SEARCH RESULTS."
          </h2>
          <p className="text-2xl text-white font-bold pt-12">HUBSPOT</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-6">WHAT IS SEO?</h2>
            <p className="text-gray-200">
              SEO, or search engine optimization, is the process of optimizing a website and its content to improve its ranking and visibility on search engine results pages. This includes keyword research, on-page optimization, technical SEO, content strategy, building quality backlinks, and monitoring performance. By implementing effective SEO strategies, websites can achieve higher rankings leading to increased reach and sales. In addition, a strong SEO strategy increases a website's usability and improves the user experience, making it easier for users to find the information they need.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/lap.png"
              alt="SEO Concept"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
            />
          </div>
        </div>
      </div>

      {/* Outrank Your Competitors Section */}
      <div className="container mx-auto px-4 py-4 text-center">
        <h2 className="text-2xl pb-12 text-white md:text-2xl font-bold">
          OUTRANK YOUR COMPETITORS
        </h2>
      </div>

      {/* Brand Portfolio Section */}
      <div className="py-20 bg-black">
        <h2 className="text-center text-2xl text-white font-bold mb-12">REPUTABLE BRAND PORTFOLIO</h2>
        <div className="flex justify-center items-center">
          <img
            src="/kiko.png"
            alt="Reputable Brand Portfolio"
            className="w-full max-w-5xl object-contain px-4"
          />
        </div>
      </div>
    
{/* Process Slider Section */}
<div className="py-20">
  <div className="text-center mb-20">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">ACHIEVE SEO SUCCESS</h2>
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">OUR PROVEN PROCESS FOR RESULTS</h3>
  </div>
  
  <ProcessSlider />
</div>

{/* Services Section */}
<div className="container mx-auto px-4 py-16">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-white">
    OUR SEO AGENCY SERVICES
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      { title: "SEO AUDIT", image: "/l1.png", description: "A comprehensive analysis of your website to identify technical issues, on-page optimization opportunities, and areas for improvement." },
      { title: "KEYWORD RESEARCH", image: "/l2.png", description: "We use cutting-edge tools and techniques to research and identify the most relevant and valuable keywords for your business." },
      { title: "ON-PAGE OPTIMIZATION", image: "/l3.png", description: "We optimize your website's pages, including title tags, meta descriptions, and content, to improve its relevancy to search engines and users." },
      { title: "TECHNICAL SEO", image: "/c1.png", description: "We ensure your website is technically sound, with fast loading times, mobile responsiveness, and error-free coding." },
      { title: "CONTENT STRATEGY", image: "/c2.png", description: "We develop a content strategy aligned with your business goals and target audience, ensuring valuable and relevant information." },
      { title: "BACKLINK BUILDING", image: "/c3.png", description: "We build high-quality backlinks to your website, improving its authority and ranking on search engines." }
    ].map((service, index) => (
      <div key={index} className="flex flex-col items-center text-center space-y-4">
        <img src={service.image} alt={service.title} className="w-24 sm:w-32 md:w-48 h-auto object-contain" />
        <h3 className="text-lg sm:text-xl font-bold tracking-wider text-white">{service.title}</h3>
        <p className="text-gray-300 text-sm">{service.description}</p>
      </div>
    ))}
  </div>
</div>

{/* Why Work With Us Section */}
<div className="container mx-auto px-4 py-16">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-white">
    WHY WORK WITH US
  </h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      { title: "PROVEN EXPERTISE", icon: "/puz.png", description: "Our team of SEO specialists brings years of experience and a track record of successful campaigns across various industries." },
      { title: "DATA-DRIVEN APPROACH", icon: "/cust.png", description: "We base our strategies on comprehensive data analysis and industry best practices to deliver measurable results." },
      { title: "TRANSPARENT REPORTING", icon: "/exp.png", description: "Regular, detailed reports keep you informed of your campaign's progress and ROI at every step." }
    ].map((item, index) => (
      <div key={index} className="text-center space-y-6">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 bg-red-500/20 rounded-full blur-2xl"></div>
          <img src={item.icon} alt={item.title} className="w-16 sm:w-24 lg:w-32 h-auto mx-auto relative z-10" />
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{item.title}</h3>
        <p className="text-gray-300 leading-relaxed text-sm">{item.description}</p>
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
{/* Neil Patel Quote Section */}
<div className="container mx-auto px-4 py-16">
  <div className="max-w-4xl mx-auto text-center space-y-4">
    <p className="text-xl md:text-xl font-bold leading-relaxed pb-8">
      "SEO IS NOT A ONE-TIME TASK OR PROJECT; IT'S A CONTINUOUS PROCESS OF MAKING SURE YOUR WEBSITE PROVIDES VALUE TO BOTH USERS AND SEARCH ENGINES."
    </p>
    <p className="text-2xl font-bold">
      NEIL PATEL
    </p>
  </div>
</div>


   {/* FAQs Section */}
<div className="py-20 px-8">
  <h2 className="text-4xl font-bold text-white text-center md:text-left mb-12">FAQS</h2>
  <div className="space-y-4">
    {/* FAQ Item 1 */}
    <div className="border-b border-red-900">
      <div className="w-full text-left py-4 flex justify-between items-center transition-colors cursor-pointer" onClick={() => document.getElementById('answer1').classList.toggle('hidden')}>
        <span className="font-semibold text-white text-sm sm:text-base md:text-lg">HOW DO YOU WORK WITH OUR TEAM TO ENSURE OUR BRAND VOICE AND MESSAGE IS CONSISTENT ACROSS ALL CONTENT?</span>
        <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div id="answer1" className="hidden pl-8 py-2 text-white text-sm sm:text-base md:text-lg">
        <p>We work closely with your team, ensuring alignment through regular communication, brand guidelines, and feedback loops to maintain consistency across all content.</p>
      </div>
    </div>

    {/* FAQ Item 2 */}
    <div className="border-b border-red-900">
      <div className="w-full text-left py-4 flex justify-between items-center hover:text-red-400 transition-colors cursor-pointer" onClick={() => document.getElementById('answer2').classList.toggle('hidden')}>
        <span className="font-semibold text-white text-sm sm:text-base md:text-lg">HOW DO YOU MEASURE THE SUCCESS OF YOUR CONTENT MARKETING EFFORTS?</span>
        <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div id="answer2" className="hidden pl-8 py-2 text-gray-300 text-sm sm:text-base md:text-lg">
        <p>We use metrics like website traffic, engagement rates, and lead generation to assess the success of our content marketing efforts.</p>
      </div>
    </div>

    {/* FAQ Item 3 */}
    <div className="border-b border-red-900">
      <div className="w-full text-left py-4 flex justify-between items-center hover:text-red-400 transition-colors cursor-pointer" onClick={() => document.getElementById('answer3').classList.toggle('hidden')}>
        <span className="font-semibold text-white text-sm sm:text-base md:text-lg">HOW DO YOU RESEARCH AND CHOOSE THE RIGHT TOPICS FOR OUR AUDIENCE?</span>
        <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div id="answer3" className="hidden pl-8 py-2 text-white text-sm sm:text-base md:text-lg">
        <p>We research industry trends, analyze audience interests, and leverage SEO tools to ensure we select relevant topics that resonate with your target audience.</p>
      </div>
    </div>

    {/* FAQ Item 4 */}
    <div className="border-b border-red-900">
      <div className="w-full text-left py-4 flex justify-between items-center hover:text-red-400 transition-colors cursor-pointer" onClick={() => document.getElementById('answer4').classList.toggle('hidden')}>
        <span className="font-semibold text-white text-sm sm:text-base md:text-lg">HOW DO YOU DETERMINE WHAT TYPES OF CONTENT TO CREATE?</span>
        <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div id="answer4" className="hidden pl-8 py-2 text-white text-sm sm:text-base md:text-lg">
        <p>We analyze your business goals, target audience preferences, and market research to decide on content types that will drive engagement and conversions.</p>
      </div>
    </div>

    {/* FAQ Item 5 */}
    <div className="border-b border-red-900">
      <div className="w-full text-left py-4 flex justify-between items-center hover:text-red-400 transition-colors cursor-pointer" onClick={() => document.getElementById('answer5').classList.toggle('hidden')}>
        <span className="font-semibold text-white text-sm sm:text-base md:text-lg">HOW OFTEN WILL WE RECEIVE REPORTS ON THE PERFORMANCE OF OUR CONTENT MARKETING CAMPAIGN?</span>
        <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div id="answer5" className="hidden pl-8 py-2 text-gray-300 text-sm sm:text-base md:text-lg">
        <p>We provide performance reports on a monthly basis, with the option for more frequent updates depending on the campaign's needs and goals.</p>
      </div>
    </div>
  </div>
</div>


      </div>
  
  );
};

export default Local;