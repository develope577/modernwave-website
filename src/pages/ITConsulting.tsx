import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import { Link } from "react-router-dom";

const ITConsulting = () => {
  // Scroll function to scroll to a specific section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-amber-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-amber-100 text-amber-600 mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight text-balance">
                  IT Consulting &
                  <span className="gradient-text block">Strategy</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                  Strategic IT consulting to align your technology investments with business goals and create a roadmap for success. We help you make informed decisions about your technology future.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild size="lg" className="gap-2 group">
                    <Link to="/consultation">
                      Book a Strategy Session
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 group" onClick={() => scrollToSection('consulting-approach')}>
                    Our Consulting Approach
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
              
              <div>
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="IT consulting meeting"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Strategic Technology Consulting
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our IT consulting services provide expert guidance to help you leverage technology as a strategic asset for business growth and competitive advantage.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-amber-100 text-amber-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Technology Assessment</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive evaluation of your current IT infrastructure, systems, and processes to identify strengths, weaknesses, and opportunities for improvement.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-amber-100 text-amber-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategic Planning</h3>
                <p className="text-gray-600 mb-6">
                  Development of a comprehensive IT roadmap aligned with your business objectives, providing a clear path for technology investments and implementations.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-amber-100 text-amber-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 21H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M15 3h5c1.1 0 2 .9 2 2v14a2 2 0 0 1-2 2h-5"/><path d="M14 12H8"/><path d="m11 9-3 3 3 3"/><path d="M22 12h-6"/><path d="m17 9 3 3-3 3"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Digital Transformation</h3>
                <p className="text-gray-600 mb-6">
                  Expert guidance on leveraging digital technologies to transform your business processes, customer experiences, and operational models.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-amber-100 text-amber-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Vendor Selection</h3>
                <p className="text-gray-600 mb-6">
                  Assistance with identifying, evaluating, and selecting the right technology vendors and solutions for your specific business requirements.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-amber-100 text-amber-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Security & Compliance</h3>
                <p className="text-gray-600 mb-6">
                  Strategic advice on cybersecurity best practices, risk management, and regulatory compliance to protect your business and maintain customer trust.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-amber-100 text-amber-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">IT Leadership Advisory</h3>
                <p className="text-gray-600 mb-6">
                  Ongoing CIO/CTO advisory services providing strategic guidance, industry insights, and technology leadership to drive innovation and growth.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Approach Section */}
        <section id="consulting-approach" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Our Consulting Approach
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We follow a structured, collaborative approach to understand your business needs and develop tailored technology strategies that deliver measurable results.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline connector */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200 hidden md:block"></div>
              
              <div className="space-y-12">
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                  <div className="md:text-right">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-600 mb-4 md:ml-auto">
                      1
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Discovery & Assessment</h3>
                    <p className="text-gray-600">
                      We begin by understanding your business goals, challenges, and current technology environment through interviews, workshops, and detailed assessments.
                    </p>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-amber-500 rounded-full hidden md:block"></div>
                  
                  <div className="md:pl-8">
                    <img
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                      alt="Discovery phase"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
                
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                  <div className="md:order-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-600 mb-4">
                      2
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Strategy Development</h3>
                    <p className="text-gray-600">
                      Based on our findings, we develop a tailored IT strategy that aligns with your business objectives, prioritizes initiatives, and defines clear success metrics.
                    </p>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-amber-500 rounded-full hidden md:block"></div>
                  
                  <div className="md:order-1 md:text-right md:pr-8">
                    <img
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                      alt="Strategy development"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
                
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                  <div className="md:text-right">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-600 mb-4 md:ml-auto">
                      3
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Roadmap Creation</h3>
                    <p className="text-gray-600">
                      We create a detailed implementation roadmap with clear timelines, resource requirements, budget considerations, and risk mitigation strategies.
                    </p>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-amber-500 rounded-full hidden md:block"></div>
                  
                  <div className="md:pl-8">
                    <img
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                      alt="Roadmap creation"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
                
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                  <div className="md:order-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-600 mb-4">
                      4
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Implementation Support</h3>
                    <p className="text-gray-600">
                      We provide guidance and support throughout the implementation process, ensuring projects stay on track and deliver expected outcomes.
                    </p>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-amber-500 rounded-full hidden md:block"></div>
                  
                  <div className="md:order-1 md:text-right md:pr-8">
                    <img
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                      alt="Implementation support"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
                
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                  <div className="md:text-right">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-600 mb-4 md:ml-auto">
                      5
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Ongoing Advisory</h3>
                    <p className="text-gray-600">
                      We provide continued strategic guidance, helping you adapt to changing business conditions and leverage emerging technologies for competitive advantage.
                    </p>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-amber-500 rounded-full hidden md:block"></div>
                  
                  <div className="md:pl-8">
                    <img
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                      alt="Ongoing advisory"
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Let's Build a Smarter IT Strategy
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Take the first step toward aligning your technology with your business goals.
            </p>
            <Button 
              size="lg" 
              className="gap-2 group bg-amber-600 hover:bg-amber-700" 
              asChild
            >
              <Link to="/consultation">
                Schedule Your Consultation
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </section>
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default ITConsulting;
