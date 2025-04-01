
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Server } from "lucide-react";
import { Link } from "react-router-dom";
import ContactSection from "@/components/ContactSection";

const CyberSecurity = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-red-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-red-100 text-red-600 mb-6">
                  <Shield size={32} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight text-balance">
                  Enterprise-Grade
                  <span className="gradient-text block">Security Solutions</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                  Protect your business with comprehensive security solutions, vulnerability assessments, and training programs.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2 group" asChild>
                    <Link to="/contact">Get Security Assessment</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 group" asChild>
                    <Link to="/business">
                      Explore Solutions
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div>
                <img
                  src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="Cybersecurity"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Replaced "Why It Matters" section with the first image */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <img 
              src="/lovable-uploads/6f01ccef-f419-4df9-be67-68b3357174bf.png" 
              alt="Cybersecurity importance" 
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Comprehensive Security Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Comprehensive Security Solutions
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Layered security approaches tailored to your organization's specific needs and risk profile.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-100 text-red-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Vulnerability Assessment</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive evaluation of your systems to identify security weaknesses before they can be exploited.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Network security scanning
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Application penetration testing
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Risk assessment & remediation
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-100 text-red-600 mb-6">
                  <Lock size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Endpoint Security</h3>
                <p className="text-gray-600 mb-6">
                  Protect your devices and network access points with advanced threat detection and prevention solutions.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Next-gen antivirus protection
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Device encryption & management
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Data loss prevention
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-100 text-red-600 mb-6">
                  <Server size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Network Security</h3>
                <p className="text-gray-600 mb-6">
                  Secure your critical infrastructure with advanced monitoring and protection systems.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Firewall configuration & maintenance
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Intrusion detection & prevention
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Secure access solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Protect Your Business Today</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Don't wait until after a breach. Take proactive steps to secure your business now.
            </p>
            <Button size="lg" className="gap-2 group" asChild>
              <Link to="/contact">
                Request Security Assessment
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </section>
        
        {/* Added second image at the bottom of the page */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <img 
              src="/lovable-uploads/31d85718-793a-48aa-b954-319f6747d7e9.png" 
              alt="Cybersecurity protection" 
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </section>
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default CyberSecurity;
