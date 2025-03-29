
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Server, Database } from "lucide-react";
import { Link } from "react-router-dom";
import ContactSection from "@/components/ContactSection";

const CustomSoftware = () => {
  const processRef = useRef<HTMLDivElement>(null);
  
  const scrollToProcess = () => {
    if (processRef.current) {
      processRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-purple-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 mb-6">
                  <Code size={32} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight text-balance">
                  Custom Software
                  <span className="gradient-text block">Development</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                  Tailor-made software solutions designed specifically for your unique business requirements and industry challenges.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2 group" asChild>
                    <Link to="/contact">Start Your Project</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 group" onClick={scrollToProcess}>
                    Explore Our Process
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
              
              <div>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Custom software development"
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
                Custom Software Services
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                From concept to deployment, we develop software that perfectly aligns with your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 mb-6">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Web Applications</h3>
                <p className="text-gray-600 mb-6">
                  Responsive, scalable web applications built with modern frameworks that deliver exceptional user experiences.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Mobile Applications</h3>
                <p className="text-gray-600 mb-6">
                  Native and cross-platform mobile apps for iOS and Android that provide seamless experiences across devices.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 mb-6">
                  <Server size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">API Development</h3>
                <p className="text-gray-600 mb-6">
                  Robust, secure APIs that enable seamless integration between systems and extend your software capabilities.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* New Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Tailored Solutions for Your Business
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our custom software development service is designed to address the specific challenges your business faces.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-4">Why Custom Software?</h3>
                  <p className="text-gray-600 mb-4">
                    Off-the-shelf software often requires businesses to adapt their processes to the software's capabilities. Custom software is built around your specific needs and workflows, enhancing efficiency and eliminating unnecessary features.
                  </p>
                  <p className="text-gray-600">
                    Our team specializes in creating solutions that grow with your business, providing ongoing support and adding new features as your requirements evolve, ensuring your technology investments deliver long-term value.
                  </p>
                </div>
                <div className="order-first md:order-last">
                  <img 
                    src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt="Custom software development"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section ref={processRef} id="our-development-process" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Our Development Process
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                A systematic approach to custom software development that ensures quality, efficiency, and alignment with your business goals.
              </p>
            </div>
            
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold">1</div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-semibold">Discovery & Analysis</h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-gray-600">
                    We start by understanding your business objectives, user needs, and technical requirements through interviews, workshops, and research to build a comprehensive project foundation.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold">2</div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-semibold">Design & Planning</h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-gray-600">
                    We create detailed technical specifications, architectural designs, and user experience prototypes to visualize the solution before development begins.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold">3</div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-semibold">Development</h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-gray-600">
                    Our skilled developers build your solution using the latest technologies and best practices, with regular code reviews and continuous integration to ensure quality.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold">4</div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-semibold">Testing & QA</h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-gray-600">
                    Comprehensive testing including functional, performance, security, and user acceptance testing ensures your software works flawlessly before deployment.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold">5</div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-semibold">Deployment & Support</h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-gray-600">
                    We manage the deployment process to minimize disruption and provide ongoing maintenance, support, and updates to keep your software running optimally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Ready to Build Your Custom Solution?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Let's discuss your project requirements and create a roadmap for your custom software solution.
            </p>
            <Button size="lg" className="gap-2 group" asChild>
              <Link to="/contact">
                Start Your Project
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

export default CustomSoftware;
