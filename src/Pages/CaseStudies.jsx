
import React, { useState, useEffect } from 'react';

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Update slides to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const caseStudies = [
    {
      id: 1,
      image: "/pic1.png",
      title: "KIKO MILANO",
      description: "Discover how Pangea 360 Agency optimized KIKO Milano's Amazon shop, leading to a significant increase in sales and improved seller feedback.",
      link: "/case-studies/kiko-milano"
    },
    {
      id: 2,
      image: "/pic3.png",
      title: "GRAVITY TEAM",
      description: "Taking a 360 approach, Pangea 360 team helped the leading crypto market maker to establish a memorable brand and win top Google SEO ranking positions.",
      link: "/case-studies/gravity-team"
    },
    {
      id: 3,
      image: "/pic3.png",
      title: "PROCHILE",
      description: "Discover the successful collaboration between Pangea 360's team and PROChile UK, resulting in an Influencer Marketing campaign that reached over 982,000 audiences and promoted Chilean products.",
      link: "/case-studies/prochile"
    },
    {
      id: 4,
      image: "/cake.jpeg",
      title: "SMASHY",
      description: "Discover how Pangea 360's team helped Smashy and Self-Sovereign to achieve a significant increase in their LinkedIn, and Twitter/X presence.",
      link: "/case-studies/smashy"
    },
    {
      id: 5,
      image: "/pic1.png",
      title: "KIKO MILANO",
      description: "Discover how Pangea 360 Agency optimized KIKO Milano's Amazon shop, leading to a significant increase in sales and improved seller feedback.",
      link: "/case-studies/kiko-milano"
    },
    {
      id: 6,
      image: "/pic3.png",
      title: "GRAVITY TEAM",
      description: "Taking a 360 approach, Pangea 360 team helped the leading crypto market maker to establish a memorable brand and win top Google SEO ranking positions.",
      link: "/case-studies/gravity-team"
    },
    {
      id: 7,
      image: "/pic3.png",
      title: "PROCHILE",
      description: "Discover the successful collaboration between Pangea 360's team and PROChile UK, resulting in an Influencer Marketing campaign that reached over 982,000 audiences and promoted Chilean products.",
      link: "/case-studies/prochile"
    },
    {
      id: 8,
      image: "/cake.jpeg",
      title: "SMASHY",
      description: "Discover how Pangea 360's team helped Smashy and Self-Sovereign to achieve a significant increase in their LinkedIn, and Twitter/X presence.",
      link: "/case-studies/smashy"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === caseStudies.length - slidesToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? caseStudies.length - slidesToShow : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-black text-white pt-12 sm:pt-16 lg:pt-20">
      {/* Title Section */}
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center tracking-wider mb-8 sm:mb-12 lg:mb-20">
          CASE STUDIES BY PANGEA 360
        </h1>

        {/* Slider Section */}
        <div className="relative max-w-[95%] sm:max-w-[90%] mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 sm:-left-8 lg:-left-12 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 lg:p-4 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute -right-4 sm:-right-8 lg:-right-12 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 lg:p-4 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slides */}
          <div className="overflow-hidden  ">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
            >
              {caseStudies.map((study, index) => (
                <div 
                  key={study.id} 
                  className={`w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2`}
                >
                  <div className={`relative group transition-transform duration-300 ${
                    index === currentSlide + Math.floor(slidesToShow/2) ? 'scale-100 sm:scale-105 lg:scale-110 z-10' : 'scale-90 sm:scale-95'
                  }`}>
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-48 sm:h-64 lg:h-[400px] object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 bg-gradient-to-t from-black to-transparent">
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 tracking-wider">{study.title}</h2>
                      <p className="text-xs sm:text-sm mb-2 sm:mb-3 lg:mb-4 line-clamp-2 opacity-70">{study.description}</p>                      <button 
                        className="inline-block border-2 border-white px-4 sm:px-5 lg:px-6 py-1 sm:py-2 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider text-xs sm:text-sm"
                      >
                        LEARN MORE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8 space-x-2 sm:space-x-3 lg:space-x-4">
            {caseStudies.slice(0, caseStudies.length - (slidesToShow - 1)).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-white' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
