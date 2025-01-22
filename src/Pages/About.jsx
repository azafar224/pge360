import React, { useState } from "react";
import { Plus, Minus, ChevronDown, ChevronUp } from "lucide-react";

const AboutUs = () => {
  const [openSection, setOpenSection] = useState("03");
  const [openQuestion, setOpenQuestion] = useState(0);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  const sections = [
    {
      id: "01",
      title: "Our History",
      content:
        "Founded with the belief that the digital world thrives on connection and innovation, Pangea360 draws its inspiration from the supercontinent Pangea, where everything was unified.",
    },
    {
      id: "02",
      title: "Our Mission",
      content:
        "To empower businesses by delivering innovative, seamless, and integrated digital solutions that unlock their full potential. At Pangea360, we aim to connect people, ideas.",
    },
    {
      id: "03",
      title: "Our Vision",
      content:
        "To be the global leader in digital excellence, known for transforming businesses with 360-degree strategies that unite innovation, creativity, and technology.",
    },
  ];

  const faqData = [
    {
      question:
        "How do you determine the effective marketing plan for my business?",
      answer:
        "We conduct a thorough analysis of your business goals, target audience, and market trends to design a customized marketing plan that effectively aligns with your business.",
    },
    {
      question: "What is your strategy for starting a new project?",
      answer:
        "Our strategy involves understanding your objectives, analyzing market conditions, and developing a tailored approach that meets your specific needs.",
    },
    {
      question: "How do you measure the success of your campaigns?",
      answer:
        "We track key performance indicators, ROI metrics, and engagement rates to measure campaign effectiveness.",
    },
    {
      question: "What is the pricing structure of your services?",
      answer:
        "Our pricing is customized based on project scope, requirements, and objectives.",
    },
    {
      question: "What makes Pangea360 different from other agencies?",
      answer:
        "Our unique combination of innovative strategies, dedicated team, and proven track record sets us apart.",
    },
    {
      question:
        "How long does it take to see valuable results from your marketing efforts?",
      answer:
        "Results timeline varies by project, but we focus on delivering measurable outcomes.",
    },
    {
      question: "What happens if I don't like the direction of a project?",
      answer:
        "We maintain open communication and adjust strategies based on your feedback.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-red-950 to-black min-h-screen">
      {/* Space for navigation bar */}
      <div className="h-20"></div>

      {/* About Us Section */}
      <div className="max-w-6xl mx-auto p-8 pt-16">
        <h1 className="text-white text-5xl font-bold mb-12 text-center">
          About Us
        </h1>
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          {/* Left side - Image with word cloud */}
          <div className="relative h-full">
            <div className="rounded-lg overflow-hidden h-[600px] sticky top-24">
              <img
                src="bb2.jpeg"
                alt="Team collaboration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Right side - Vision and Mission */}
          <div className="space-y-8">
            <div>
              <h2 className="text-white text-base tracking-wider font-semibold mb-4">
                OUR VISION
              </h2>
              <h3 className="text-4xl font-bold text-white mb-4">
                Illuminating Pathways to{" "}
                <span className="text-white">Progress</span>
              </h3>
              <p className="text-white text-lg">
                Through visionary innovation and purposeful solutions, we're
                shaping the future of digital transformation.
              </p>
            </div>

            <div>
              <h2 className="text-white text-base tracking-wider font-semibold mb-6">
                OUR MISSION
              </h2>
              <div className="space-y-4">
                <div className="bg-black bg-opacity-80 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <span className="text-red-500 text-lg">›</span>
                    <p className="text-white text-lg">
                      Reshaping industry standards through dynamic strategies
                    </p>
                  </div>
                </div>
                <div className="bg-black bg-opacity-80 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <span className="text-red-500 text-lg">›</span>
                    <p className="text-white text-lg">
                      Crafting unparalleled brand experiences
                    </p>
                  </div>
                </div>
                <div className="bg-black bg-opacity-80 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <span className="text-red-500 text-lg">›</span>
                    <p className="text-white text-lg">
                      Leveraging extensive experience for optimal solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Section */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-white">
              Your Partner in <span className="text-white">Digital</span>{" "}
              Excellence
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              At Pangea360, we are your comprehensive solution for all things
              digital. Inspired by the interconnectedness of the ancient
              supercontinent Pangea, our mission is to bring seamless
              integration and holistic strategies to your digital landscape.
              From cutting-edge web development and innovative marketing
              solutions to robust analytics and technology consulting, we ensure
              every aspect of your digital presence works in harmony.
            </p>
          </div>

          {/* Right Column - Accordion */}
          <div className="space-y-3">
            {sections.map((section) => (
              <div key={section.id} className="rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-5 bg-black flex items-center justify-between text-white hover:bg-slate-700 transition-colors duration-200"
                >
                  <span className="text-lg font-medium">
                    {section.id}. {section.title}
                  </span>
                  {openSection === section.id ? (
                    <Minus size={20} className="text-white" />
                  ) : (
                    <Plus size={20} className="text-white" />
                  )}
                </button>

                {openSection === section.id && (
                  <div className="bg-black bg-opacity-80 p-5 text-gray-300">
                    <p className="text-gray-300 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-white mb-16">
            Frequently <span className="text-white">Asked</span> Questions
          </h2>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border-l-4 border-red-500 bg-black/50 rounded-r-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenQuestion(openQuestion === index ? null : index)
                  }
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-black/40 transition-colors duration-300"
                >
                  <span className="text-white text-lg font-medium">
                    {faq.question}
                  </span>
                  <span className="text-white">
                    {openQuestion === index ? (
                      <ChevronUp size={24} />
                    ) : (
                      <ChevronDown size={24} />
                    )}
                  </span>
                </button>

                {openQuestion === index && (
                  <div className="bg-black bg-opacity-80 p-6 pt-0 text-gray-300">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
