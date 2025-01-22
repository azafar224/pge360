import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, description, imageSrc, isImageRight, link }) => (
  <div className="w-full bg-gradient-to-br from-[#1A0505] to-[#2A0808] p-4 sm:p-8 lg:p-12 rounded-lg flex flex-col mx-auto max-w-7xl">
    <div
      className={`flex flex-col ${
        isImageRight ? "sm:flex-row" : "sm:flex-row-reverse"
      } justify-between items-center sm:items-start gap-8`}
    >
      <div className="w-full sm:w-2/3 lg:w-1/2">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
          {title}
        </h2>
        <p className="text-gray-200 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-12">
          {description}
        </p>
        <Link to={link}>
          <button className="border-2 text-white border-white rounded-full px-8 py-3 hover:bg-white hover:text-black transition-colors">
            Learn More
          </button>
        </Link>
      </div>
      {imageSrc && (
        <div className="w-2/3 sm:w-1/3 lg:w-1/4">
          <img src={imageSrc} alt={title} className="w-full h-auto" />
        </div>
      )}
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "BRAND BUILDING",
      description:
        "From building a new brand for a recently born idea to helping well-established brands to redefine their brand strategy and image, we've done it all & can help your business too!",
      imageSrc: "s1.png",
      link: "/services/branding",
    },
    {
      title: "CONTENT MARKETING",
      description:
        "How about creating content that your audience will love and find valuable? Providing value is one of the best ways to make a first impression. Combined with latest industry-leading SEO practices, this is one of the most successful long term inbound traffic generating strategies.",
      imageSrc: "s2.png",
      link: "/services/content-marketing",
    },
    {
      title: "COPYWRITING",
      description:
        "Is your copy engaging the audience, keeping their attention, and encouraging them to take the desired action? Is your CVR at or above the industry average? If you need help boosting your CVR with our copywriting services, then you've come to the right place!",
      imageSrc: "s3.png",
      link: "/services/content-marketing",
    },
    {
      title: "CONVERSION RATE OPTIMIZATION",
      description:
        "At Pangea 360, we believe that the key to a successful CRO is to lead your audience down a clear path toward their desired action. Our team uses analytics and tracking tools, UX, UI, and user research to optimize your website for maximum CVR and minimized bounce rate. Turn your website visitors into customers with our help!",
      imageSrc: "s4.png",
      link: "/services/seo",
    },
    {
      title: "DATA ANALYTICS",
      description:
        "Data-driven decisions for maximum impact for your business. We believe in the power of data to drive growth and success. Let our data analytics team guide your brand to improved performance and increased efficiency. Make informed decisions for the future with Pangea 360.",
      imageSrc: "s5.png",
      link: "/services/digital-marketing",
    },
    {
      title: "DESIGN",
      description:
        "The first impressions matter, so do 2nd and 3rd and every encounter after! When your target audience sees your brand or ad, the visual image plays a major role. Our experienced designer team will help you create tasteful, aesthetic and coherent designs that can be used across all 360 degrees of your market channels and activities. From website, app, social media banners, posts and videos, newsletter, online form to print.",
      imageSrc: "s6.png",
      link: "/services/design",
    },
    {
      title: "DIGITAL MARKETING STRATEGY",
      description:
        "Set an effective marketing strategy to achieve maximum results. Only with a well-adjusted marketing strategy will your project be able to grow and produce the best results at every given time.",
      imageSrc: "s7.png",
      link: "/services/digital-marketing",
    },
    {
      title: "EMAIL MARKETING",
      description:
        "Email is a free channel that enables you to get direct access to your audience's eyes, if they open it! Email marketing lets your community know what your business has been up to and segment your customers based on their interactions.",
      imageSrc: "s8.png",
      link: "/services/branding",
    },
    {
      title: "INSTAGRAM MARKETING",
      description:
        "Stand out on Instagram and put a spotlight on your brand. Elevate your brand and engage with your audience like never before. Let us handle your Instagram presence with strategic content planning and management. Watch your brand grow with Pangea 360.",
      imageSrc: "s9.png",
      link: "/services/social-media",
    },
    {
      title: "LINKEDIN MANAGEMENT",
      description:
        "Focus on networking and attract new promising talent and business contacts. We provide effective LinkedIn strategies to set your company on the right track.",
      imageSrc: "s10.png",
      link: "/services/social-media",
    },
    {
      title: "PR & INFLUENCER MARKETING",
      description:
        "Relationships are key when it comes to business. We help you establish beneficial connections with your customers through the spread of relevant information and the association with strong trendsetters that have an impact on your customers and therefore on your business.",
      imageSrc: "s11.png",
      link: "/services/social-media",
    },
    {
      title: "TWITTER MANAGEMENT",
      description:
        "Twitter is all about sharing valuable content and engaging with your target audience. Do it right and you may not only go viral but also will win loyal followers and customers.",
      imageSrc: "s12.png",
      link: "/services/social-media",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A0505] to-[#2A0808] py-12 sm:py-16 lg:py-24 pt-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-12 sm:mb-16 lg:mb-24">
          PANGEA MARKETING SERVICES
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:gap-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              isImageRight={index % 2 === 0}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
