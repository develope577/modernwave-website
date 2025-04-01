
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import BusinessSection from "@/components/BusinessSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ContactSection from "@/components/ContactSection";

const Business = () => {
  const solutionsRef = useRef<HTMLDivElement>(null);
  
  const scrollToSolutions = () => {
    if (solutionsRef.current) {
      solutionsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-primary text-white">
                  BUSINESS SOLUTIONS
                </span>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold font-display leading-tight text-balance">
                  Advanced Technology <span className="gradient-text">for Modern Businesses</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                  Tailored technology solutions to help your business grow, optimize operations, and stay competitive in today's rapidly evolving digital landscape.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" onClick={scrollToSolutions}>
                    Explore Solutions
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">Book a Consultation</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="Business technology"
                  className="rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Businesses Trust Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Why Businesses Trust Us
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                For over 15 years, we've been the technology partner of choice for businesses across industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 11 18-5 1 2-18 5-1-2Z"></path>
                    <path d="m5 11 3-8 1 3 3-3 1 4 3-3 1 4 3-3 1 3 3-3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                <p className="text-gray-600">
                  We've delivered measurable results for hundreds of businesses, with an average ROI of 300% on technology investments.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v8"></path>
                    <path d="M8 12h8"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Experienced Team</h3>
                <p className="text-gray-600">
                  Our team of seasoned experts brings decades of combined experience across industries and technology specialties.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovative Approach</h3>
                <p className="text-gray-600">
                  We continuously research and adopt the latest technologies to ensure our clients stay ahead of the competition.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Replace "Our Aim, Process, and Goals" with the third image */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <img 
              src="/lovable-uploads/e268bf8e-bde5-4b0c-959f-76fd4152a418.png" 
              alt="Our aim, process and goals" 
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Comprehensive Business Solutions */}
        <div ref={solutionsRef}>
          <BusinessSection />
        </div>
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Business;
