import React, { useState } from 'react';

const Careers = () => {
  // State to track which sections are expanded
  const [expandedSections, setExpandedSections] = useState({
    remoteWork: false,
    learningDevelopment: false,
    flexibility: false,
    teamBuilding: false,
    workFromAnywhere: false,
    workLifeBalance: false,
  });

  // State for testimonial slider
  const [currentSlide, setCurrentSlide] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      name: "DEEPAK",
      role: "DIGITAL ANALYST 📊",
      location: "IN",
      image: "/test.jpeg",
      content: [
        "Hello, my name is Deepak, and I am from India.",
        "My journey at Pangea 360 has been a joyous ride. Having valued experiential learning and social networks throughout my life, Pangea 360 was the perfect place for my all-around growth.",
        "My educational background is Master's in Management at HEC Paris and my Bachelor's in Engineering at IIT Bombay.",
        "My colleagues at Pangea 360 originate from diverse cultural and professional backgrounds and have helped create an environment of encouragement, nurturing, and knowledge sharing. I was able to quickly expand my knowledge in aspects of Crypto and Digital Marketing thanks to their support."
      ]
    },
    {
      name: "VIBHUTI",
      role: "COPYWRITING SPECIALIST 🦄",
      location: "IN",
      image: "/test.jpeg",
      content: [
        "Hi, I am Vibhuti, I am from India! 👋",
        "I am IE Business School in Madrid's graduate with a degree in Master's in Management, specializing in Digital Business. Therefore, it made perfect sense for me to develop my skills further by joining a marketing agency such as Pangea 360.",
        "Apart from the learning opportunities and growth, the company also boasts a diverse team of high-caliber employees joining from different parts of the world to come together and collaborate on exciting projects.",
        "Despite being a remote-work company, Pangea 360 has easy processes and systems for smooth collaboration and multiple opportunities to explore areas of interest and growth."
      ]
    },
    {
      name: "VIBHUTI",
      role: "COPYWRITING SPECIALIST 🦄",
      location: "IN",
      image: "/test.jpeg",
      content: [
        "Hi, I am Vibhuti, I am from India! 👋",
        "I am IE Business School in Madrid's graduate with a degree in Master's in Management, specializing in Digital Business. Therefore, it made perfect sense for me to develop my skills further by joining a marketing agency such as Pangea 360.",
        "Apart from the learning opportunities and growth, the company also boasts a diverse team of high-caliber employees joining from different parts of the world to come together and collaborate on exciting projects.",
        "Despite being a remote-work company, Pangea 360 has easy processes and systems for smooth collaboration and multiple opportunities to explore areas of interest and growth."
      ]
    },
    {
      name: "VIBHUTI",
      role: "COPYWRITING SPECIALIST 🦄",
      location: "IN",
      image: "/test.jpeg",
      content: [
        "Hi, I am Vibhuti, I am from India! 👋",
        "I am IE Business School in Madrid's graduate with a degree in Master's in Management, specializing in Digital Business. Therefore, it made perfect sense for me to develop my skills further by joining a marketing agency such as Pangea 360.",
        "Apart from the learning opportunities and growth, the company also boasts a diverse team of high-caliber employees joining from different parts of the world to come together and collaborate on exciting projects.",
        "Despite being a remote-work company, Pangea 360 has easy processes and systems for smooth collaboration and multiple opportunities to explore areas of interest and growth."
      ]
    }
  ];
// Navigation functions for testimonial slider
const prevSlide = () => {
  setCurrentSlide((prev) => 
    prev === 0 ? testimonials.length - 1 : prev - 1
  );
};

const nextSlide = () => {
  setCurrentSlide((prev) => 
    prev === testimonials.length - 1 ? 0 : prev + 1
  );
};
  // Toggle function for expanding/collapsing sections
 // Toggle function for expanding/collapsing sections

 const toggleSection = (section) => {
  setExpandedSections(prev => ({
    ...prev,
    [section]: !prev[section]
  }));
};

// Content for each section
const sectionContent = {
  remoteWork:
    "Being a global firm, remote working allows us to hire the best talent, no matter where you are!",
  learningDevelopment:
    "We invest heavily in our team's growth through continuous learning programs, workshops.",
  flexibility:
    "We understand the importance of work-life integration and offer flexible working hours to accommodate different schedules and time zones.",
  teamBuilding:
    "Regular virtual and in-person team building activities to foster collaboration, strengthen relationships, and create a fun work environment.",
  workFromAnywhere:
    "Our digital-first approach means you can work from any location, giving you the freedom to choose your ideal work environment.",
  workLifeBalance:
    "We promote a healthy work-life balance through reasonable working hours, flexible schedules, and respect for personal time.",
};

const renderExpandableSection = (title, section) => (
  <div className="border-b border-white/10 pb-8">
    <button
      className="flex items-center justify-between w-full text-left cursor-pointer hover:opacity-80 transition-opacity"
      onClick={() => toggleSection(section)}
      aria-expanded={!!expandedSections[section]}
      aria-controls={`section-${section}`}
      style={{ width: "100%" }}
    >
      <h3 className="text-white text-2xl font-bold tracking-wider">{title}</h3>
      <span className="text-white/70 text-2xl">
        {expandedSections[section] ? "−" : "+"}
      </span>
    </button>
    <div
      id={`section-${section}`}
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        expandedSections[section] ? "max-h-[500px]" : "max-h-0"
      }`}
      style={{
        transition: "max-height 0.3s ease-in-out",
      }}
    >
      <p className="text-white/90 mt-4 leading-relaxed">
        {sectionContent[section]}
      </p>
    </div>
  </div>
);
  
  

  return (
    <div className="relative min-h-screen bg-[#1A1A1A] overflow-hidden">
 <div className="relative">
  {/* Gradient blob */}
  <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-red-600/30 to-transparent rounded-full blur-3xl" />
  
  {/* Pipe curve */}
  <div className="absolute top-0 right-0 w-[400px] h-[400px]" style={{ transform: 'translate(29%, 0%)' }}>
    <img src="/pipe6.png" alt="Decorative pipe curve" className="w-full h-full object-contain opacity-50" />
  </div>

  {/* Content container */}
  <div className="relative z-10 container mx-auto px-4 pt-36 pb-20">
    <div className="flex flex-col lg:flex-row items-start gap-4">
      {/* Left side - Text content */}
      <div className="w-full lg:w-1/2 transform lg:translate-x-20 lg:translate-y-10">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-12 leading-tight tracking-wider">
          WE'RE<br />GROWING,<br />JOIN US!
        </h1>
        <p className="text-white/90 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-lg">
          At Pangea 360, growth is one of our core values. Every day we help businesses accelerate their online growth together with our global team made up of 7 nationalities. If you are passionate about high-performance marketing & technology just like us, you've come to the right place.
        </p>
      </div>

      {/* Right side - Image grid */}
      <div className="w-full lg:w-1/2 lg:pt-44 sm:pt-6" >
  <div className="relative rounded-[40px] overflow-hidden" >
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-2">
      <div className="relative h-32 overflow-hidden rounded-xl">
        <img
          src="/b1.jpeg"
          alt="Team member 1"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
      </div>
      <div className="relative h-32 overflow-hidden rounded-xl">
        <img
          src="/bb2.jpeg"
          alt="Team member 2"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
      </div>
      <div className="relative h-32 overflow-hidden rounded-xl">
        <img
          src="/bb3.jpeg"
          alt="Team member 3"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
      </div>
      <div className="relative h-32 overflow-hidden rounded-xl">
        <img
          src="/c4.jpeg"
          alt="Team member 4"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
      </div>
      <div className="relative h-32 overflow-hidden rounded-xl">
        <img
          src="/c5.jpeg"
          alt="Team member 5"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
      </div>
      <div className="relative h-32 overflow-hidden rounded-xl">
        <img
          src="/c6.jpeg"
          alt="Team member 6"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
      </div>
    </div>
    <div className="absolute inset-0 -z-10 bg-gray-800/20 backdrop-blur-sm" />
  </div>
</div>


    </div>
  </div>
</div>


<div className="relative py-32">
  {/* Cylinder image */}
  <div className="absolute left-0 w-[400px] h-[400px]" style={{ transform: 'translate(-30%, -50%)' }}>
    <img src="/cylinder.png" alt="Decorative cylinder" className="w-full h-full object-contain opacity-70" />
  </div>

  <div className="relative z-10 container mx-auto px-4">
  <div className="max-w-4xl mx-auto text-center">
    {/* Title */}
    <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 tracking-wider">
      OUR CULTURE & VALUES
    </h2>
    
    {/* Subtitle */}
    <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 tracking-wide">
      HIGH PRODUCTIVITY, HIGH GROWTH, HIGH-PERFORMING TEAMS.
    </h3>
    
    {/* Paragraph */}
    <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
      At Pangea 360, we are building the best-in-class digital marketing agency. We do that by adopting 
      the latest technological innovations and constantly adapting to the ever-evolving marketing landscape 
      for faster, better, quality results.
    </p>
  </div>
</div>



<div className="relative py-24 bg-gradient-to-b from-[#1A1A1A] to-[#360000]/20">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Impact */}
      <div className="text-center">
        <div className="h-32 flex items-center justify-center mb-6">
          <img
            src="/impact.png"
            alt="Impact icon"
            className="h-20 w-auto md:h-24 lg:h-28"
          />
        </div>
        <h3 className="text-white text-xl md:text-2xl font-bold mb-4 tracking-wider">
          IMPACT
        </h3>
        <p className="text-white/90 text-sm md:text-base leading-relaxed">
          At our core, we deeply care about delivering value and making an
          impact on our clients' businesses and their customers. We approach
          every project, every task, and every business with the goal to make an
          impact, to make a difference, and to leave a mark.
        </p>
      </div>

      {/* Creativity */}
      <div className="text-center">
        <div className="h-32 flex items-center justify-center mb-6">
          <img
            src="/creativity.png"
            alt="Creativity icon"
            className="h-20 w-auto md:h-24 lg:h-28"
          />
        </div>
        <h3 className="text-white text-xl md:text-2xl font-bold mb-4 tracking-wider">
          CREATIVITY
        </h3>
        <p className="text-white/90 text-sm md:text-base leading-relaxed">
          We value creativity in our work. We want our clients' businesses to
          stand out, to differentiate from the rest. That's why we pay attention
          to uniqueness and creativity in every detail, from crafting a copy to
          designing a marketing campaign.
        </p>
      </div>

      {/* Growth */}
      <div className="text-center">
        <div className="h-32 flex items-center justify-center mb-6">
          <img
            src="/growth.png"
            alt="Growth icon"
            className="h-20 w-auto md:h-24 lg:h-28"
          />
        </div>
        <h3 className="text-white text-xl md:text-2xl font-bold mb-4 tracking-wider">
          GROWTH
        </h3>
        <p className="text-white/90 text-sm md:text-base leading-relaxed">
          We are extremely results-oriented at Pangea 360. In everything we do,
          we strive to gain maximum output with the best strategies available.
        </p>
      </div>

      {/* Innovation */}
      <div className="text-center">
        <div className="h-32 flex items-center justify-center mb-6">
          <img
            src="/innovation.png"
            alt="Innovation icon"
            className="h-20 w-auto md:h-24 lg:h-28"
          />
        </div>
        <h3 className="text-white text-xl md:text-2xl font-bold mb-4 tracking-wider">
          INNOVATION
        </h3>
        <p className="text-white/90 text-sm md:text-base leading-relaxed">
        Pangea 360 is always on top of the latest innovations and trends. We
          use state-of-the-art technologies and approaches to get the maximum
          results in the least time.
        </p>
      </div>
    </div>
  </div>
</div>

<div className="relative py-8 md:py-16 lg:py-32 bg-gradient-to-b from-[#1A1A1A] to-[#360000]/20">
  {/* Cuboid Decoration */}
  <div
    className="hidden md:block absolute right-0 top-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px]"
    style={{ transform: "translate(40%, -100%)" }}
    aria-hidden="true"
  >
    <img
      src="/cuboid.png"
      alt=""
      className="w-full h-full object-contain opacity-70"
    />
  </div>

  {/* Main Content */}
  <div className="container mx-auto px-4 md:px-6 lg:px-8">
    {/* Section Heading */}
    <h2 className="text-white text-3xl md:text-4xl lg:text-6xl font-black mb-8 md:mb-12 lg:mb-16 text-center tracking-wider">
      WHAT WE OFFER
    </h2>

    {/* Content Grid */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto first-letter:">
  {/* Left Column */}
  <div className="space-y-4">
    {/* Work From Anywhere Section */}
    <div className="border-b border-white/10 pb-4">
      <button
        onClick={() => toggleSection("workFromAnywhere")}
        className="w-full flex items-center justify-between py-3 px-2 hover:bg-white/5 rounded transition-colors"
      >
        <h3 className="text-white text-base md:text-xl font-bold tracking-wider">WORK FROM ANYWHERE</h3>
        <span className="text-white/70 text-xl font-bold ml-2">{expandedSections.workFromAnywhere ? '−' : '+'}</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections.workFromAnywhere ? 'max-h-[1000px] py-4' : 'max-h-0'}`}>
        <p className="text-white/90 px-2 text-sm md:text-base">
          {sectionContent.workFromAnywhere}
        </p>
      </div>
    </div>

    {/* Work-Life Balance Section */}
    <div className="border-b border-white/10 pb-4">
      <button
        onClick={() => toggleSection("workLifeBalance")}
        className="w-full flex items-center justify-between py-3 px-2 hover:bg-white/5 rounded transition-colors"
      >
        <h3 className="text-white text-base md:text-xl font-bold tracking-wider">WORK-LIFE BALANCE</h3>
        <span className="text-white/70 text-xl font-bold ml-2">{expandedSections.workLifeBalance ? '−' : '+'}</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections.workLifeBalance ? 'max-h-[1000px] py-4' : 'max-h-0'}`}>
        <p className="text-white/90 px-2 text-sm md:text-base">
          {sectionContent.workLifeBalance}
        </p>
      </div>
    </div>

    {/* Flexibility Section */}
    <div className="border-b border-white/10 pb-4">
      <button
        onClick={() => toggleSection("flexibility")}
        className="w-full flex items-center justify-between py-3 px-2 hover:bg-white/5 rounded transition-colors"
      >
        <h3 className="text-white text-base md:text-xl font-bold tracking-wider">FLEXIBILITY</h3>
        <span className="text-white/70 text-xl font-bold ml-2">{expandedSections.flexibility ? '−' : '+'}</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections.flexibility ? 'max-h-[1000px] py-4' : 'max-h-0'}`}>
        <p className="text-white/90 px-2 text-sm md:text-base">
          {sectionContent.flexibility}
        </p>
      </div>
    </div>
  </div>

  {/* Right Column */}
  <div className="space-y-4">
    {/* Remote Work Section */}
    <div className="border-b border-white/10 pb-4">
      <button
        onClick={() => toggleSection("remoteWork")}
        className="w-full flex items-center justify-between py-3 px-2 hover:bg-white/5 rounded transition-colors"
      >
        <h3 className="text-white text-base md:text-xl font-bold tracking-wider">REMOTE WORK</h3>
        <span className="text-white/70 text-xl font-bold ml-2">{expandedSections.remoteWork ? '−' : '+'}</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections.remoteWork ? 'max-h-[1000px] py-4' : 'max-h-0'}`}>
        <p className="text-white/90 px-2 text-sm md:text-base">
          {sectionContent.remoteWork}
        </p>
      </div>
    </div>

    {/* Learning & Development Section */}
    <div className="border-b border-white/10 pb-4">
      <button
        onClick={() => toggleSection("learningDevelopment")}
        className="w-full flex items-center justify-between py-3 px-2 hover:bg-white/5 rounded transition-colors"
      >
        <h3 className="text-white text-base md:text-xl font-bold tracking-wider">LEARNING & DEVELOPMENT</h3>
        <span className="text-white/70 text-xl font-bold ml-2">{expandedSections.learningDevelopment ? '−' : '+'}</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections.learningDevelopment ? 'max-h-[1000px] py-4' : 'max-h-0'}`}>
        <p className="text-white/90 px-2 text-sm md:text-base">
          {sectionContent.learningDevelopment}
        </p>
      </div>
    </div>
  </div>
</div>
  </div>
</div>


<div className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#1A1A1A] to-[#360000]/20">
  {/* Pipe Decoration */}
  <div 
    className="absolute left-0 bottom-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px]" 
    style={{ transform: 'translate(-10%, 53%)' }}
  >
    <img 
      src="/pipe8.png" 
      alt="Decorative pipe"
      className="w-full h-full object-contain opacity-50"
    />
  </div>

  <div className="container mx-auto px-4">
    <h2 className="text-white text-4xl sm:text-5xl font-black mb-16 sm:mb-32 text-center tracking-widest">
      OUR PARTNER UNIVERSITIES
    </h2>

    <div className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center">
      <img 
        src="/rsm.png"
        alt="Our Partner Universities"
        className="w-4/5 sm:w-3/5 object-contain filter brightness-100 hover:brightness-125 transition-all"
      />
    </div>
  </div>
</div>
</div></div>

     
   
  );
};


export default Careers;
