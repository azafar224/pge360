
import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: "WHY OUTSOURCING YOUR DIGITAL MARKETING CAN BE A GAME-CHANGER FOR YOUR BUSINESS",
      image: "/b1.jpeg",
      link: "/blog/outsourcing-digital-marketing"
    },
    {
      title: "IN-HOUSE VS. AGENCY: MAKING THE RIGHT CHOICE FOR YOUR MARKETING NEEDS",
      image: "/bb2.jpeg",
      link: "/blog/in-house-vs-agency"
    },
    {
      title: "THE HIDDEN COSTS OF DIY DIGITAL MARKETING",
      image: "/bb3.jpeg",
      link: "/blog/hidden-costs-diy-marketing"
    },
    {
      title: "5 DIGITAL MARKETING TRENDS TO WATCH IN 2024",
      image: "/bb4.jpeg",
      link: "/blog/digital-marketing-trends"
    },
    {
      title: "MAXIMIZING ROI WITH DATA-DRIVEN MARKETING STRATEGIES",
      image: "/bb5.png",
      link: "/blog/data-driven-marketing"
    },
    {
      title: "THE IMPORTANCE OF BRAND CONSISTENCY IN DIGITAL MARKETING",
      image: "/bb6.jpg",
      link: "/blog/brand-consistency"
    },
    {
      title: "SOCIAL MEDIA MARKETING: BEYOND THE BASICS",
      image: "/bb7.png",
      link: "/blog/social-media-marketing"
    },
    {
      title: "EMAIL MARKETING BEST PRACTICES FOR 2024",
      image: "/bb8.png",
      link: "/blog/email-marketing"
    },
    {
      title: "SEO STRATEGIES THAT ACTUALLY WORK",
      image: "/bb9.jpg",
      link: "/blog/seo-strategies"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#360000] from-10% via-[#1a0000] via-40% to-black to-90% pb-24 sm:pb-32">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Blur Effects */}
        <div className="absolute top-0 -left-24 sm:-left-32 lg:-left-48 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] rounded-full bg-gradient-to-br from-[#360000]/30 to-[#000000]/30 blur-3xl" />
        <div className="absolute top-0 -right-24 sm:-right-32 lg:-right-48 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] rounded-full bg-gradient-to-bl from-[#360000]/30 to-[#000000]/30 blur-3xl" />

        {/* Decorative Pipes */}
        <div className="absolute top-0 left-0 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px]" 
             style={{ transform: 'translate(-30%, 20%)' }}>
          <img 
            src="/pipe5.png" 
            alt="Decorative left pipe"
            className="w-full h-full object-contain opacity-50"
          />
        </div>
        <div className="absolute top-0 right-0 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px]" 
             style={{ transform: 'translate(29%, 30%)' }}>
          <img 
            src="/pipe6.png" 
            alt="Decorative right pipe"
            className="w-full h-full object-contain opacity-50"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-[120px] sm:pt-[180px] lg:pt-[240px] pb-12 sm:pb-16 lg:pb-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
              {/* Left Side - Blog Illustration */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="w-[280px] sm:w-[400px] lg:w-[500px] h-[280px] sm:h-[400px] lg:h-[500px] relative">
                  <img 
                    src="/blog.png"
                    alt="Blog illustration with icons"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Right Side - Text Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white tracking-wide mb-6 sm:mb-8 lg:mb-12 drop-shadow-lg">
                  PANGEA 360 BLOG
                </h1>
                
                <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                  <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed drop-shadow">
                    Welcome to our digital marketing blog - where we keep you informed, inspired, 
                    and ahead of the curve with the latest news, trends, and educational content in 
                    the world of digital marketing.
                  </p>
                  
                  <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed drop-shadow">
                    Discover insightful tips and strategies to optimize your online presence and 
                    elevate your brand's success in the digital sphere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {blogPosts.map((post, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-xl bg-black/20">
              {/* Blog Post Card */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                
                {/* Post Content */}
                <div className="absolute inset-0 p-3 sm:p-4 lg:p-6 flex flex-col justify-end">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 leading-tight">
                    {post.title}
                  </h3>
                  <a 
                    href={post.link}
                    className="text-sm sm:text-base text-white underline hover:no-underline inline-block transition-all duration-300"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
