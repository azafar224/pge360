// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// // Page Imports
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Blog from './Pages/Blog';
// import CaseStudies from './Pages/CaseStudies';
// import Careers from './Pages/Careers';
// import Contact from './Pages/Contact';

// // Service Page Imports
// import Service from './Pages/Service';
// import BrandingSection from './Pages/BrandingSection';
// import ContentMarketingPage from './Pages/ContentMarketingPage';
// import DesignLanding from './Pages/DesignLanding';
// import SeoAgencyLanding from './Pages/SeoAgencyLanding';
// import Social from './Pages/Social';
// import MarketingLandingPage from './Pages/MarketingLandingPage';
// import Local from './Pages/Local';

// const App = () => {
  
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
//             {/* Main Routes */}
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/case-studies" element={<CaseStudies />} />
//             <Route path="/careers" element={<Careers />} />
//             <Route path="/contact" element={<Contact />} />

//             {/* Services Routes */}
//             <Route path="/services" element={<Service />} />
//             <Route path="/services/branding" element={<BrandingSection />} />
//             <Route path="/services/digital-marketing" element={<MarketingLandingPage />} />
//             <Route path="/services/content-marketing" element={<ContentMarketingPage />} />
//             <Route path="/services/design" element={<DesignLanding />} />
//             <Route path="/services/seo" element={<SeoAgencyLanding />} />
//             <Route path="/services/local" element={<Local/>} />
//             <Route path="/services/social-media" element={<Social />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Imports
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import CaseStudies from './Pages/CaseStudies';
import Careers from './Pages/Careers';
import Contact from './Pages/Contact';

// Service Page Imports
import Service from './Pages/Service';
import BrandingSection from './Pages/BrandingSection';
import ContentMarketingPage from './Pages/ContentMarketingPage';
import DesignLanding from './Pages/DesignLanding';
import SeoAgencyLanding from './Pages/SeoAgencyLanding';
import Social from './Pages/Social';
import MarketingLandingPage from './Pages/MarketingLandingPage';
import Local from './Pages/Local';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the route changes
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <ScrollToTop /> {/* Add this to ensure scrolls to top on route change */}
        <main className="flex-grow">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />

            {/* Services Routes */}
            <Route path="/services" element={<Service />} />
            <Route path="/services/branding" element={<BrandingSection />} />
            <Route path="/services/digital-marketing" element={<MarketingLandingPage />} />
            <Route path="/services/content-marketing" element={<ContentMarketingPage />} />
            <Route path="/services/design" element={<DesignLanding />} />
            <Route path="/services/seo" element={<SeoAgencyLanding />} />
            <Route path="/services/local" element={<Local />} />
            <Route path="/services/social-media" element={<Social />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
