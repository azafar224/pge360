import React, { useState } from 'react';

const ContentMarketingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: 'What is content marketing?',
      answer: 'Content marketing is a strategic approach focused on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience.',
    },
    {
      question: 'Why is content marketing important?',
      answer: 'Content marketing helps build trust, generate leads, and establish authority, which are essential for long-term business success.',
    },
    {
      question: 'What types of content are included?',
      answer: 'Content marketing includes blogs, videos, infographics, social media posts, white papers, and more.',
    },
    {
      question: 'How can content marketing benefit my business?',
      answer: 'It can help you increase brand awareness, drive website traffic, improve SEO rankings, and generate higher conversion rates.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
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
    <div className="min-h-screen bg-gradient-to-br from-red-950 to-black text-white overflow-x-hidden relative w-full px-4 sm:px-6 lg:px-6 pt-36 sm:pt-26 pb-8">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wider lg:pt-24 md:pt-14 sm:pt-24">
              CONTENT MARKETING
            </h1>
            <h2 className="text-lg sm:text-xl font-bold text-white leading-relaxed max-w-lg mx-auto lg:mx-0">
              GET MORE THAN JUST LEADS, BUILD TRUST IN YOUR BRAND & GAIN CUSTOMER LOYALTY
            </h2>
            <p className="text-gray-300 text-sm max-w-lg mx-auto lg:mx-0">
              Accelerate your business growth with Digital SEO data-driven and research-based Content Marketing services.
            </p>
            <button className="px-6 sm:px-8 py-3 border border-white rounded-full hover:bg-white hover:text-red-900 transition-all text-sm">
              BOOK A FREE CONSULTATION
            </button>
          </div>
          <div className="relative h-64 sm:h-80 lg:h-96 mt-8 lg:mt-0">
            <img
              src="/a.png"
              alt="Content Marketing Illustration"
              className="absolute right-0 top-0 w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Middle Section */}
        <div className="text-center my-12 sm:my-16 lg:my-20 max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl text-white font-bold px-4">
            ELEVATE YOUR BRAND WITH ENGAGING
            <br className="hidden sm:block" />
            HIGH-QUALITY CONTENT
          </h2>
          <p className="text-sm text-gray-300 px-4">
            At Digital SEO, we create content with passion. We understand that creating high-quality, engaging content is about more than just generating words. That's why we use a combination of marketing research, persona, tone of voice and customer voice guidelines, and a deep understanding of the customer journey to create unique, impactful marketing content.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-12 sm:mt-16 lg:mt-20">
          <div className="relative h-64 sm:h-80 lg:h-96 order-2 lg:order-1">
            <img
              src="/plane.png"
              alt="Paper Plane Illustration"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-4 order-1 lg:order-2">
            {[
              "INCREASE BRAND AWARENESS",
              "BRAND AUTHORITY",
              "GAIN CUSTOMER LOYALTY",
              "IMPROVE CONVERSION RATE"
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 border-b border-red-800 hover:bg-red-900/30 transition-all cursor-pointer"
              >
                <h3 className="text-base sm:text-lg font-semibold flex justify-between items-center">
                  {item}
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* What is Content Marketing Section */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-300 mb-4 px-4">
              "CONTENT MARKETING CAN GENERATE OVER 3X AS MANY LEADS AS OUTBOUND MARKETING AND COSTS 62% LESS!"
            </p>
            <p className="text-sm font-semibold">DEMAND METRIC</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 px-4">
              <h2 className="text-2xl sm:text-3xl text-white font-bold">WHAT IS CONTENT MARKETING?</h2>
              <div className="space-y-4 text-sm text-gray-300">
                <p>
                  When done properly, content marketing may spread and return a bigger audience, increased brand awareness, and ultimately lead to more sales. Direct advertising, emails, and video are all boosted by the crucial component of digital marketing. Businesses can gain credibility as industry leaders and win the trust of their target audience by providing valuable information on relevant topics.
                </p>
                <p>
                  As the digital world evolves, content marketing has become an indispensable component of digital marketing strategies to reach teens at various community sites their target audience. It is also less expensive than more conventional types of marketing.
                </p>
                <p>
                  Its generally means that how much that messages be and ads to be reach the exact client, email, and blogs. Furthermore, content marketing can optimize to stay on top marketing platform statistics, which in turn help to higher lead, and ultimately increase sales.
                </p>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-96 mt-8 lg:mt-0">
              <img
                src="/speak.png"
                alt="Social Media Marketing Icons"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-xl font-light">TAKE YOUR BUSINESS TO THE NEXT LEVEL</h3>
          </div>
        </div>

        {/* Brand Portfolio Section */}
        <div className="py-12 sm:py-16 lg:py-20">
          <h2 className="text-center text-xl sm:text-2xl text-white font-bold mb-8 sm:mb-12">REPUTABLE BRAND PORTFOLIO</h2>
          <div className="flex justify-center items-center px-4">
            <img
              src="/kiko.png"
              alt="Reputable Brand Portfolio"
              className="w-full object-contain"
            />
          </div>
        </div>

       

        {/* Services Section */}
        <div className="py-12 sm:py-16 lg:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 sm:mb-16 lg:mb-20">OUR CONTENT MARKETING SERVICES</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Service items */}
            {[
              {
                image: "/s1.png",
                title: "CONTENT MARKETING STRATEGY & CALENDAR",
                description: "An effective content strategy begins with understanding your brand's goals and tone of voice, the target audience's buyer persona, pains, and gains, as well as trends & keyword research."
              },
              {
                image: "/s2.png",
                title: "CONTENT WRITING",
                description: "Content created by copywriting experts who will perform research, analyze and write value-adding content, whether it is email, blog, or social media."
              },
              {
                image: "/s3.png",
                title: "CONTENT OPTIMIZATION",
                description: "Content that converts is optimized for it. Relevant keywords, EAT-friendly, metatags, and links, we optimize our content to drive the best results for you."
              },
              {
                image: "/s4.png",
                title: "CONTENT DISTRIBUTION",
                description: "A crucial part of a content strategy is its distribution. At Digital SEO, we do it all for you - sharing, publishing, and promotion."
              },
              {
                image: "/s5.png",
                title: "CONTENT REPORTING: ANALYTICS & TRACKING METRICS",
                description: "Your content performance is at your fingertips. Our team builds tailor-made interactive dashboards to showcase your content's performance."
              }
            ].map((service, index) => (
              <div key={index} className="text-center space-y-4 px-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-24 sm:h-32 w-auto mx-auto"
                />
                <h3 className="text-lg sm:text-xl font-bold">{service.title}</h3>
                <p className="text-sm text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Work With Us Section */}
        <div className="py-12 sm:py-16 lg:py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 sm:mb-16">WHY WORK WITH US</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                image: "/p1.png",
                title: "CONTINUOUS MONITORING AND REPORTING:",
                description: "We continuously monitor the performance of our client's campaigns and provide regular reports to keep them informed of the progress."
              },
              {
                image: "/p2.png",
                title: "ONGOING SUPPORT:",
                description: "We provide ongoing support and make adjustments as needed to ensure our clients are getting the most out of their analytics and data."
              },
              {
                image: "/p3.png",
                title: "COLLABORATION:",
                description: "We use tools like Usability Hub to conduct usability testing on our client's website and identify any issues that may be impacting the user experience."
              },
              {
                image: "/p4.png",
                title: "USABILITY TESTING:",
                description: "We work closely with our clients to ensure their needs are being met and that we are delivering results that align with their business goals."
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start gap-6 px-4">
                <div className="w-16 h-16 flex-shrink-0">
                  <img src={item.image} alt={item.title} className="w-16 h-16" />
                </div>
                <div>
                  <h3 className="text-white text-lg sm:text-xl font-semibold mb-2 text-center sm:text-left">{item.title}</h3>
                  <p className="text-gray-300 text-center sm:text-left">{item.description}</p>
                </div>
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

      <div className="py-24 sm:py-16 px-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12">FAQS</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-red-900">
                <button
                  className="w-full text-left py-4 flex justify-between items-center transition-colors hover:text-red-400"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 flex-shrink-0 transform transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`pl-4 sm:pl-8 py-2 text-gray-300 transition-all duration-200 ${
                    openFaq === index ? 'block' : 'hidden'
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="py-12 sm:py-16 lg:py-20 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl text-white font-bold">"CONTENT IS KING."</h2>
          <p className="text-lg sm:text-xl">BILL GATES</p>
        </div>
      </div>
    </div>
  );
};

export default ContentMarketingPage;