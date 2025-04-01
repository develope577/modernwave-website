
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Server, Braces, FileEdit, FileCode } from "lucide-react";
import { Link } from "react-router-dom";
import ContactSection from "@/components/ContactSection";
import { useRef } from "react";

const ITConsulting = () => {
  const approachRef = useRef<HTMLDivElement>(null);
  
  const scrollToApproach = () => {
    if (approachRef.current) {
      approachRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-blue-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-6">
                  <Server size={32} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight text-balance">
                  IT Consulting & 
                  <span className="gradient-text block">Strategic Planning</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                  Strategic IT consulting to align your technology investments with business goals and create a roadmap for success.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2 group" asChild>
                    <Link to="/contact">Book a Strategy Session</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 group" onClick={scrollToApproach}>
                    Our Consulting Approach
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
              
              <div>
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="IT consulting"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Our Consulting Services
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We provide strategic guidance and practical solutions to optimize your technology investments and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-6">
                  <FileEdit size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">IT Strategy Development</h3>
                <p className="text-gray-600 mb-6">
                  Create a comprehensive technology roadmap aligned with your business objectives to guide your IT investments and initiatives.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Business-IT alignment assessment
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Technology roadmap development
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    IT investment planning & prioritization
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-6">
                  <Braces size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Digital Transformation</h3>
                <p className="text-gray-600 mb-6">
                  Guide your organization through technology-driven change to improve business processes, customer experiences, and competitive positioning.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Process optimization & automation
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Legacy system modernization
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Change management & adoption
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-6">
                  <FileCode size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Technology Selection</h3>
                <p className="text-gray-600 mb-6">
                  Objective guidance to help you select the right software, systems, and platforms to meet your specific business requirements.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Requirements analysis & documentation
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Vendor evaluation & selection
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Implementation planning & oversight
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m2 9 3-3 3 3" />
                    <path d="M13 18H7a2 2 0 0 1-2-2V6" />
                    <path d="m22 15-3 3-3-3" />
                    <path d="M11 6h6a2 2 0 0 1 2 2v10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">IT Cost Optimization</h3>
                <p className="text-gray-600 mb-6">
                  Identify opportunities to reduce IT costs while maintaining or improving technology capabilities and services.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    IT spend analysis & benchmarking
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    License optimization & consolidation
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Cloud & infrastructure optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Consulting Approach Section */}
        <section ref={approachRef} id="our-consulting-approach" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Our Consulting Approach
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                A proven methodology that delivers practical solutions to complex business technology challenges.
              </p>
            </div>
            
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
              
              <div className="space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                  <div className="md:text-right p-6 md:pr-12">
                    <div className="hidden md:block absolute right-0 top-6 w-4 h-4 rounded-full bg-blue-500 border-4 border-blue-100 transform translate-x-2"></div>
                    <h3 className="text-xl font-semibold mb-3">Assess</h3>
                    <p className="text-gray-600">
                      We begin by thoroughly understanding your business goals, current technology landscape, and specific challenges through interviews, workshops, and analysis of your systems and processes.
                    </p>
                  </div>
                  <div></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                  <div></div>
                  <div className="p-6 md:pl-12">
                    <div className="hidden md:block absolute left-0 top-6 w-4 h-4 rounded-full bg-blue-500 border-4 border-blue-100 transform -translate-x-2"></div>
                    <h3 className="text-xl font-semibold mb-3">Analyze</h3>
                    <p className="text-gray-600">
                      Our experts analyze the gathered information to identify inefficiencies, opportunities for improvement, and potential technology solutions that align with your strategic objectives.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                  <div className="md:text-right p-6 md:pr-12">
                    <div className="hidden md:block absolute right-0 top-6 w-4 h-4 rounded-full bg-blue-500 border-4 border-blue-100 transform translate-x-2"></div>
                    <h3 className="text-xl font-semibold mb-3">Advise</h3>
                    <p className="text-gray-600">
                      We develop detailed recommendations, technology roadmaps, and implementation plans tailored to your specific needs, considering your resources, timeline, and budget constraints.
                    </p>
                  </div>
                  <div></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                  <div></div>
                  <div className="p-6 md:pl-12">
                    <div className="hidden md:block absolute left-0 top-6 w-4 h-4 rounded-full bg-blue-500 border-4 border-blue-100 transform -translate-x-2"></div>
                    <h3 className="text-xl font-semibold mb-3">Assist</h3>
                    <p className="text-gray-600">
                      Beyond recommendations, we provide ongoing guidance and support throughout implementation, helping you navigate challenges, adapt to changing requirements, and ensuring successful outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Ready to Transform Your IT Strategy?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Schedule a consultation with our expert team to discuss your business challenges and how our IT consulting services can help.
            </p>
            <Button size="lg" className="gap-2 group" asChild>
              <Link to="/contact">
                Book a Strategy Session
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
