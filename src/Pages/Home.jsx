import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center bg-black">
          <div className="container mx-auto px-0 pt-16 sm:px-6 lg:px-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Left side - Text Content */}
              <div className="w-full md:w-1/2 text-white text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-7 leading-snug sm:leading-tight">
                  YOUR PARTNER IN
                  <br />
                  DIGITAL EXCELLENCE
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-300">
                  Accelerate your digital growth journey
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-none font-bold hover:bg-red-500 hover:text-white transition-colors"
                >
                  Get Started
                </Link>
              </div>
              {/* Right side - 3D Funnel with Social Icons */}
              <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
                <div className="relative">
                  <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] relative">
                    <img
                      src="/herosec.png"
                      alt="Digital Marketing Funnel"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Background gradient effect from right */}
          <div className="absolute top-0 right-0 w-1/3 h-screen bg-gradient-to-l from-[#3B0003] to-transparent" />
        </section>
      </div>

      {/* Section 1 - Brand Portfolio */}
      <section className="relative w-full bg-black py-20">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold text-white text-center mb-16 sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ fontFamily: "Arial", letterSpacing: "2px" }}
          >
            OUR PORTFOLIO
          </h2>
          <div className="flex justify-center items-center px-4 md:px-12">
            <img
              src="kiko.png"
              alt="Brand Portfolio including Kiko Milano, Calzedonia, Intimissimi, Polaroid, Gravity Team, and Ibiza Boat Club"
              className="w-full max-w-[1500px] h-auto object-contain"
            />
          </div>
        </div>
        {/* Red gradient overlay on the right */}
        <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-red-900/30 to-transparent" />
      </section>

      {/* Section 2 - Marketing Services */}
      <section className="relative w-full bg-black py-16 overflow-hidden">
        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 md:mb-12 lg:mb-16"
            style={{ fontFamily: "Arial", letterSpacing: "4px" }}
          >
            OUR MARKETING SERVICES
          </h2>

          <div className="max-w-4xl mx-auto text-center text-white space-y-4 md:space-y-6 mb-12">
            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
              As a digital marketing agency, we specialize in providing
              personalized services tailored to your unique business needs. By
              leveraging cutting-edge technology and tools, we deliver
              high-quality work with exceptional speed.
            </p>
            <p className="text-base pb-8 md:text-lg lg:text-xl leading-relaxed">
              Our focused range of services includes{" "}
              <span className="font-bold">
                Branding & Design, Content Marketing, Digital Marketing
                Strategy, Search Engine Optimization (SEO)
              </span>
              , and <span className="font-bold">Social Media Marketing</span>
              —key areas essential for driving your online success.
            </p>
          </div>

          {/* Services Grid */}
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-1 md:gap-y-4 md:gap-x-0 max-w-5xl mx-auto">
              {/* Branding */}
              <div className="flex flex-col items-center">
                <div className="mb-6 w-48 h-48 flex items-center justify-center">
                  <img
                    src="/s1.png"
                    alt="Branding"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3
                  className="text-white text-xl tracking-wider font-bold"
                  style={{ fontFamily: "Arial" }}
                >
                  BRANDING
                </h3>
              </div>

              {/* Content Marketing */}
              <div className="flex flex-col items-center">
                <div className="mb-6 w-48 h-48 flex items-center justify-center">
                  <img
                    src="/a.png"
                    alt="Content Marketing"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3
                  className="text-white text-xl tracking-wider font-bold"
                  style={{ fontFamily: "Arial" }}
                >
                  CONTENT MARKETING
                </h3>
              </div>

              {/* Design */}
              <div className="flex flex-col items-center">
                <div className="mb-6 w-48 h-48 flex items-center justify-center">
                  <img
                    src="/creativity.png"
                    alt="Design"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3
                  className="text-white text-xl tracking-wider font-bold"
                  style={{ fontFamily: "Arial" }}
                >
                  DESIGN
                </h3>
              </div>

              {/* Digital Marketing Strategy */}
              <div className="flex flex-col items-center">
                <div className="mb-6 w-48 h-48 flex items-center justify-center">
                  <img
                    src="/d1.png"
                    alt="Digital Marketing Strategy"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3
                  className="text-white text-xl tracking-wider font-bold text-center"
                  style={{ fontFamily: "Arial" }}
                >
                  DIGITAL MARKETING
                  <br />
                  STRATEGY
                </h3>
              </div>

              {/* SEO */}
              <div className="flex flex-col items-center">
                <div className="mb-6 w-48 h-48 flex items-center justify-center">
                  <img
                    src="/s12.png"
                    alt="Search Engine Optimization"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3
                  className="text-white text-xl tracking-wider font-bold text-center"
                  style={{ fontFamily: "Arial" }}
                >
                  SEARCH ENGINE
                  <br />
                  OPTIMIZATION
                </h3>
              </div>

              {/* Social Media Marketing */}
              <div className="flex flex-col items-center">
                <div className="mb-6 w-48 h-48 flex items-center justify-center">
                  <img
                    src="/i7.png"
                    alt="Social Media Marketing"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3
                  className="text-white text-xl tracking-wider font-bold text-center"
                  style={{ fontFamily: "Arial" }}
                >
                  SOCIAL MEDIA
                  <br />
                  MARKETING
                </h3>
              </div>
            </div>

            {/* View All Services Button */}
            <div className="text-center mt-12 md:mt-16">
              <Link to="/services" className="inline-block">
                <button
                  className="border-2 text-white border-white rounded-full 
                px-6 sm:px-8 py-2 sm:py-3 
                text-sm sm:text-base uppercase tracking-wider
                hover:bg-white hover:text-black transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50
                active:transform active:scale-95"
                >
                  view all services
                </button>
              </Link>
            </div>
          </div>

          {/* Curved red pipe gradient */}
          <div className="absolute top-0 right-0 w-[60px] h-[120px] sm:w-[50px] sm:h-[100px] md:w-[150px] md:h-[300px] lg:w-[200px] lg:h-[500px]">
            <img
              src="/pipe1.png"
              alt=""
              className="absolute w-full h-full object-contain"
              style={{ objectPosition: "top right" }}
            />
          </div>
        </div>

        {/* Decorative Gradient */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] bg-gradient-to-br from-red-500 to-transparent blur-3xl opacity-20" />
      </section>

      <section className="relative w-full bg-black py-8 md:py-12 lg:py-16 text-white">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-3xl text-white pb-8 md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-12">
            WHY PARTNER WITH US?
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* 10 Years of Experience */}
            <div className="flex flex-row gap-4 p-4">
              <img
                src="/10.png"
                alt="10+ Years of Experience"
                className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain flex-shrink-0"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  10 YEARS OF EXPERIENCE
                </h3>
                <p className="text-sm md:text-base">
                  With over 10+ years of experience in the industry, helping
                  brands of various multitudes, we know a thing or two about our
                  trade.
                </p>
              </div>
            </div>

            {/* Global Team */}
            <div className="flex flex-row gap-4 p-4">
              <img
                src="/global.png"
                alt="Global Team"
                className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain flex-shrink-0"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  GLOBAL TEAM
                </h3>
                <p className="text-sm md:text-base">
                  Our team of talented specialists from over 7 countries come
                  together to create and deliver results for our partners, every
                  day.
                </p>
              </div>
            </div>

            {/* Personalized Services */}
            <div className="flex flex-row gap-4 p-4">
              <img
                src="/person.png"
                alt="Personalized Services"
                className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain flex-shrink-0"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  PERSONALIZED SERVICES
                </h3>
                <p className="text-sm md:text-base">
                  We understand every business is unique. We believe in
                  customizing our offerings to suit the businesses we partner
                  with for maximum results.
                </p>
              </div>
            </div>

            {/* All-in-One Services */}
            <div className="flex flex-row gap-4 p-4">
              <img
                src="/infinity.png"
                alt="All-in-One Services"
                className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain flex-shrink-0"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  ALL IN ONE SERVICES
                </h3>
                <p className="text-sm md:text-base">
                  Our team specializes in a wide range of services, which is why
                  at Pangea 360, we provide our clients a one-stop-shop solution
                  under one roof.
                </p>
              </div>
            </div>

            {/* Stellar Track Record */}
            <div className="flex flex-row gap-4 p-4">
              <img
                src="/stell.png"
                alt="Stellar Track Record"
                className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain flex-shrink-0"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  STELLAR TRACK RECORD
                </h3>
                <p className="text-sm md:text-base">
                  Our experience and success helping brands reach their goals
                  have made renowned brands put their trust in us, and we are
                  forever grateful for the opportunity.
                </p>
              </div>
            </div>

            {/* Innovation & Technology */}
            <div className="flex flex-row gap-4 p-4">
              <img
                src="/chip.png"
                alt="Innovation & Technology"
                className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain flex-shrink-0"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  INNOVATION & TECHNOLOGY
                </h3>
                <p className="text-sm md:text-base">
                  At Pangea 360, we are early adopters of new tech and we test
                  all things it can do. So, we use cutting-edge tech in our
                  processes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Background Gradient */}
        <div className="absolute top-0 left-0 w-64 md:w-72 lg:w-80 h-64 md:h-72 lg:h-80 bg-gradient-to-br from-red-500 to-transparent blur-3xl opacity-20" />
      </section>

      {/* About Section */}
      <section className="relative w-full bg-black py-8 md:py-16 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Main Title */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 md:mb-12 lg:mb-16"
            style={{ fontFamily: "Arial", letterSpacing: "2px" }}
          >
            ABOUT PANGEA 360
          </h2>

          {/* Content Container - First Part */}
          <div className="max-w-4xl mx-auto text-center text-white space-y-6 md:space-y-8 mb-8 md:mb-12">
            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
              Pangea 360 is a London-based 360-degree marketing agency. We
              empower businesses in their online journey by being their go-to
              partner for each and any of their marketing needs.
            </p>
          </div>

          {/* Stats Points */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 my-8 md:my-12 lg:my-16">
            <div className="text-center text-white p-4">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">10+</h3>
              <p className="text-base md:text-lg">Years of Experience</p>
            </div>
            <div className="text-center text-white p-4">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">60+</h3>
              <p className="text-base md:text-lg">Brands & SMEs</p>
            </div>
            <div className="text-center text-white p-4">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">7+</h3>
              <p className="text-base md:text-lg">Countries</p>
            </div>
          </div>

          {/* Content Container - Second Part */}
          <div className="max-w-4xl mx-auto text-center text-white space-y-6 md:space-y-8 mb-8 md:mb-12">
            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
              With 10+ years of experience in the industry, Pangea 360 team has
              been part of the digital growth journey for 60+ brands and SMEs.
            </p>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
              We have a global, creative, diverse & growth-oriented top team to
              help you wherever you are, with whatever you need.
            </p>
          </div>

          {/* Learn More Button */}
          <div className="text-center mb-8 md:mb-12">
            <Link
              to="/about"
              className="inline-block border border-white text-white px-6 md:px-8 lg:px-10 py-2 md:py-3 rounded-full hover:bg-white hover:text-[#2A0808] transition-all duration-300 uppercase tracking-wider text-sm md:text-base"
            >
              Learn More
            </Link>
          </div>

          {/* Additional Text Section */}
          <div className="max-w-4xl mx-auto text-center text-white mt-12 md:mt-16 lg:mt-24">
            <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8">
              If you are a growing business that wants faster, better results in
              their marketing without having to deal with multiple marketing
              agencies, Pangea 360 is the one-stop solution for all your
              marketing needs.
            </p>
            <h3
              className="text-2xl md:text-3xl font-bold"
              style={{ letterSpacing: "2px" }}
            >
              360 MARKETING NEEDS, ONE PARTNER - PANGEA 360
            </h3>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 md:w-1/4 lg:w-1/5 h-full">
          <img
            src="/pipe3.png"
            alt=""
            className="absolute right-0 top-0 w-full h-4/5 object-contain transform translate-x-1/4 translate-y-1/10"
          />
        </div>

        {/* Red gradient overlay */}
        <div className="absolute top-0 right-0 w-1/6 md:w-1/5 h-full bg-gradient-to-l from-red-900/30 to-transparent" />
      </section>
    </div>
  );
};

export default Home;
