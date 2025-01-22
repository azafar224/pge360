import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const MarketingLandingPage = () => {
  const [openSection, setOpenSection] = useState(null);
  const sliderRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);

  const processItems = [
    { number: 1, title: "Introduction & Access", description: "Our expert digital marketer team will meet your business leaders to learn about your digital marketing needs and existing solutions." },
    { number: 2, title: "Discovery", description: "We dive into your business operations to understand priorities and goals, using interviews and surveys." },
    { number: 3, title: "Strategy Development", description: "We build a customized strategy aligned with your company's goals." },
    { number: 4, title: "Delivery", description: "Providing a detailed plan of action for the agreed strategy." },
    { number: 5, title: "Implementation", description: "We deploy the planned digital marketing strategies for your business." },
    { number: 6, title: "Tracking & Analytics", description: "We use advanced tools to track the performance and effectiveness of digital strategies." },
    { number: 7, title: "Ongoing Optimization", description: "We continuously refine the strategy to ensure maximum impact and ROI." }
  ];

  // Create duplicated items for smooth infinite scroll
  const duplicatedItems = [...processItems, ...processItems, ...processItems];

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollInterval;

    const resetScroll = () => {
      if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth) / 2) {
        slider.scrollLeft = 0;
      }
    };

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (isScrolling && slider) {
          slider.scrollLeft += 1;
          resetScroll();
        }
      }, 30);
    };

    startScrolling();

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, [isScrolling]);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const handleMouseEnter = () => setIsScrolling(false);
  const handleMouseLeave = () => setIsScrolling(true);

  const sections = [
    { title: 'INCREASED BRAND AWARENESS', content: 'Build stronger brand recognition through targeted digital campaigns' },
    { title: 'IMPROVED CONVERSION RATES', content: 'Optimize your funnel to increase customer conversion rates' },
    { title: 'STRONGER ROI', content: 'Maximize return on investment through data-driven strategies' },
    { title: 'COMPETITIVE ADVANTAGE', content: 'Stay ahead of competition with innovative digital solutions' }
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
    <div className="min-h-screen overflow-hidden relative py-20 bg-gradient-to-br from-red-950 to-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-24">
          <div className="md:w-1/2 pt-16 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              DIGITAL MARKETING STRATEGY
            </h1>
            <p className="text-lg mb-8">
              UNLOCK DATA-DRIVEN GROWTH
            </p>
            <p className="text-gray-300 mb-8">
              With our data-driven approach & innovative technology approach to digital marketing strategy services, we'll give you the insights to transform the sales.
            </p>
            <button className="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
              BOOK A FREE CONSULTATION
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/Digital1.png"
              alt="Digital Marketing Strategy"
              className="w-96 h-auto"
            />
          </div>
        </div>

        {/* Stay Ahead Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl text-white md:text-4xl font-bold mb-6">
            STAY AHEAD OF THE GAME
          </h2>
          <p className="text-gray-300 mb-12">
            At Digital ROI, with our results-driven approach to every project, we create strategies engineered for success. We have the expertise, we have technology & we're here to win.
          </p>
        </div>

        {/* Content Section with Image */}
        <div className="flex flex-col md:flex-row items-center mb-24">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/Digital2.png"
              alt="Growth Trend"
              className="w-96 h-auto"
            />
          </div>
          <div className="md:w-1/2">
            {/* Accordion Section */}
            {sections.map((section, index) => (
              <div key={index} className="border-b border-gray-700">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full py-4 flex justify-between items-center text-left"
                >
                  <span className="text-lg font-semibold">{section.title}</span>
                  <ChevronDown
                    className={`transform transition-transform ${openSection === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openSection === index && (
                  <div className="pb-4 text-gray-300">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center mb-24">
          <p className="text-xl md:text-2xl font-bold mb-4 underline">
            "Data-driven strategies drive 5-8 times more ROI"
          </p>
          <p className="font-bold text-white">INVESPCRO</p>
        </div>

        {/* What is Digital Marketing Strategy Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-24">
          <div className="md:w-1/2 pr-8">
            <h2 className="text-3xl text-white md:text-4xl font-bold mb-8">
              WHAT IS DIGITAL MARKETING STRATEGY?
            </h2>
            <div className="space-y-6 text-gray-300">
              <p>
                Digital marketing strategy involves identifying and planning the most effective ways to use digital channels to reach and engage with target audiences. It includes researching and analyzing target audiences, identifying goals and objectives, and developing a plan to achieve them through a combination of tactics such as search engine optimization, social media marketing, email marketing, and content marketing.
              </p>
              <p>
                An effective digital marketing strategy considers the customer journey and focuses on creating a seamless experience across all touchpoints. It also takes into account the latest industry trends and technologies to stay ahead of the competition.
              </p>
              <p>
                Without one, a business risks wasting time and resources on ineffective tactics that do not align with its goals. A strategy allows businesses to focus on the most effective tactics, track progress, and make data-driven decisions.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="/Dil3.png"
              alt="Digtal Marketing Concept"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Tailor-made Strategy Section */}
        <div className="text-center mb-24">
          <h2 className="text-xl text-white md:text-3xl font-bold">
            TAILOR-MADE STRATEGY FOR YOUR BUSINESS SUCCESS
          </h2>
        </div>

        {/* Reputable Brand Portfolio Section */}
        <div className="mb-24">
          <h2 className="text-2xl text-white md:text-3xl font-bold text-center mb-12">
            REPUTABLE BRAND PORTFOLIO
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img
              src="/kiko.png"
              alt="Brand Portfolio"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Digital Marketing Services Section */}
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          OUR DIGITAL MARKETING SERVICES
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-4">
            <img src="/Digital4.png" alt="Digital Marketing Assessment" className="mx-auto w-24 h-24" />
            <h3 className="text-xl font-bold text-white uppercase">Digital Marketing Strategy Assessment</h3>
            <p className="text-gray-300 text-sm max-w-xs mx-auto">
              With our advanced tools for analytics, we will assess your company's digital strategy effectiveness and give you a comprehensive report on what is working and what's not, along with suggestions.
            </p>
          </div>

          <div className="text-center space-y-4">
            <img src="/Digital5.png" alt="Competitive Analysis" className="mx-auto w-24 h-24" />
            <h3 className="text-xl font-bold text-white uppercase">Competitive Analysis</h3>
            <p className="text-gray-300 text-sm max-w-xs mx-auto">
              We will use our best-in-class experts to thoroughly analyze your competitors and recommend a strategy that differentiates you from the rest.
            </p>
          </div>

          <div className="text-center space-y-4">
            <img src="/Digital6.png" alt="Strategy Formulation" className="mx-auto w-24 h-24" />
            <h3 className="text-xl font-bold text-white uppercase">Strategy Formulation</h3>
            <p className="text-gray-300 text-sm max-w-xs mx-auto">
              With our data-driven approach and experts, we will create a winning digital strategy for your brand.
            </p>
          </div>

          <div className="text-center space-y-4">
            <img src="/Digital7.png" alt="Roadmap & Plan of Action" className="mx-auto w-24 h-24" />
            <h3 className="text-xl font-bold text-white uppercase">Roadmap & Plan of Action</h3>
            <p className="text-gray-300 text-sm max-w-xs mx-auto">
              We don't leave our clients hanging. Once we do our strategy, we will build a custom roadmap for you.
            </p>
          </div>
        </div>

        {/* Collaboration Process */}
        <div className="relative py-16 px-8 overflow-hidden">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            OUR COLLABORATION PROCESS
          </h2>

          <div
            ref={sliderRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex overflow-x-auto space-x-8 pb-4 no-scrollbar"
            style={{
              scrollBehavior: 'smooth',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {duplicatedItems.map((item, index) => (
              <div
                key={`${item.number}-${index}`}
                className="flex-shrink-0 text-center space-y-4 w-64"
              >
                <h3 className="text-7xl font-extrabold text-red-600">{item.number}</h3>
                <h4 className="text-lg font-bold text-white uppercase">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16 tracking-wider">
            WHY WORK WITH US
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 space-y-4">
              <img
                src="/Digital8.png"
                alt="Experience and Expertise"
                className="w-40 h-40 object-contain"
              />
              <h3 className="text-xl font-bold tracking-wide">EXPERIENCE AND EXPERTISE</h3>
              <p className="text-gray-200 leading-relaxed">
              Pangea 360 has a team of experienced and knowledgeable professionals who have a deep understanding of the digital marketing landscape and a proven track record of delivering results-driven strategies.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 space-y-4">
              <img
                src="/Digital9.png"
                alt="Tailored Approach"
                className="w-40 h-40 object-contain"
              />
              <h3 className="text-xl font-bold tracking-wide">TAILORED APPROACH</h3>
              <p className="text-gray-200 leading-relaxed">
              Pangea 360 offers customized solutions that are tailored to meet the unique needs and goals of each client. We take the time to understand your business, your target audience, and your desired outcomes before developing a strategy that is specifically designed to help you achieve success.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 space-y-4">
              <img
                src="/Digital10.png"
                alt="Data-Driven Insights"
                className="w-40 h-40 object-contain"
              />
              <h3 className="text-xl font-bold tracking-wide">DATA-DRIVEN INSIGHTS</h3>
              <p className="text-gray-200 leading-relaxed">
                our team uses advanced data analytics tools to gather insights about your target audience, competition, and the broader market. This information is then used to inform and refine your marketing strategy, ensuring that your efforts are focused and effective.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 space-y-4">
              <img
                src="/Digital11.png"
                alt="Integration of Multiple Channels"
                className="w-40 h-40 object-contain"
              />
              <h3 className="text-xl font-bold tracking-wide">INTEGRATION OF MULTIPLE CHANNELS</h3>
              <p className="text-gray-200 leading-relaxed">
              Pangea 360 is experienced in integrating a wide range of digital marketing channels, including SEO, social media, email, PPC and content marketing. We understand how to use these channels effectively to reach your target audience and drive results.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 space-y-4">
        <img
          src="/Digital12.png"
          alt="Strong Communication and Collaboration"
          className="w-40 h-40 object-contain"
        />
        <h3 className="text-xl font-bold tracking-wide">STRONG COMMUNICATION AND COLLABORATION</h3>
        <p className="text-gray-200 leading-relaxed">
          We value open and transparent communication and work closely with our clients to ensure that everyone is on the same page and that goals are aligned. We are responsive and easy to work with, making the collaboration process seamless and enjoyable.
        </p>
      </div>

      <div className="flex flex-col items-center text-center p-6 space-y-4">
        <img
          src="/Digital13.png"
          alt="Measurable Results"
          className="w-40 h-40 object-contain"
        />
        <h3 className="text-xl font-bold tracking-wide">MEASURABLE RESULTS</h3>
        <p className="text-gray-200 leading-relaxed">
        Pangea 360 is committed to delivering measurable results that can be tracked and analyzed. We use a variety of metrics and KPIs to measure success, and regularly report on our progress to ensure that your marketing efforts are achieving the desired outcomes.
        </p>
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

        <div className="grid grid-cols-2 gap-8 items-start" style={{ transform: 'translate(20%, 10%)' }}>
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
    className=" object-cover w-[400px] h-[700px] "style={{ transform: 'translate(60%, -30%)' }}
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
            <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    </div>
    </div>
    </div>
  );
};

export default MarketingLandingPage;