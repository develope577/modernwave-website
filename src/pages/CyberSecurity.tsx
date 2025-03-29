
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, LockKeyhole, Server, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const CyberSecurity = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up", "opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-red-50 to-white py-24" ref={sectionRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
                <span className="text-sm font-medium text-red-600 bg-red-100 px-4 py-1.5 rounded-full">CYBERSECURITY</span>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold font-display leading-tight text-balance">
                  Enterprise-Grade 
                  <span className="text-red-600 block">Security Solutions</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                  Protect your business with comprehensive cybersecurity strategies designed to safeguard your critical data, systems, and reputation.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2 group bg-red-600 hover:bg-red-700">
                    Get Security Assessment
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 group">
                    Explore Solutions
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
              
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Cybersecurity protection"
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
                Comprehensive Security Solutions
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                From threat assessment to incident response, our cybersecurity services provide end-to-end protection for your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-100 text-red-600 mb-6">
                    <Shield size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Vulnerability Assessment</h3>
                  <p className="text-gray-600 mb-6">
                    Comprehensive scanning and evaluation of your infrastructure to identify security gaps before they can be exploited.
                  </p>
                  <Link 
                    to="#" 
                    className="text-red-600 font-medium flex items-center gap-1 group"
                  >
                    Learn more
                    <ArrowRight 
                      size={16} 
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-100 text-red-600 mb-6">
                    <LockKeyhole size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Data Encryption</h3>
                  <p className="text-gray-600 mb-6">
                    Protect sensitive information with enterprise-grade encryption solutions for data at rest and in transit.
                  </p>
                  <Link 
                    to="#" 
                    className="text-red-600 font-medium flex items-center gap-1 group"
                  >
                    Learn more
                    <ArrowRight 
                      size={16} 
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-100 text-red-600 mb-6">
                    <Server size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Network Security</h3>
                  <p className="text-gray-600 mb-6">
                    Advanced firewall configuration, intrusion detection, and network monitoring to prevent unauthorized access.
                  </p>
                  <Link 
                    to="#" 
                    className="text-red-600 font-medium flex items-center gap-1 group"
                  >
                    Learn more
                    <ArrowRight 
                      size={16} 
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Protecting Against Modern Threats Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Protecting Against Modern Threats
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our comprehensive security approach addresses the most common and sophisticated cyber threats facing businesses today.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold mb-4">Advanced Threat Detection</h3>
                <p className="text-gray-600 mb-6">
                  Our cutting-edge threat detection systems use machine learning and behavioral analytics to identify suspicious activities and potential breaches before they cause damage. We continuously monitor your network, endpoints, and cloud infrastructure, providing real-time alerts and proactive response to emerging threats.
                </p>
                <p className="text-gray-600">
                  With our managed security operations center (SOC), your business benefits from 24/7 monitoring by security experts who can quickly respond to incidents and implement containment measures to minimize impact.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold mb-4">Data Protection & Compliance</h3>
                <p className="text-gray-600 mb-6">
                  Safeguard sensitive information with our comprehensive data protection solutions, including data classification, encryption, and access controls. Our experts help you implement proper data governance practices that align with industry regulations such as GDPR, HIPAA, and PCI DSS.
                </p>
                <p className="text-gray-600">
                  We also provide regular compliance assessments and documentation to help you maintain regulatory requirements and demonstrate due diligence to stakeholders, customers, and partners.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                to="#" 
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "gap-2 group border-red-600 text-red-600 hover:bg-red-50"
                })}
              >
                Learn More About Our Security Approach
                <ArrowRight 
                  size={16} 
                  className="transition-transform duration-300 group-hover:translate-x-1" 
                />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Security Assessment Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                  Comprehensive Security Assessment
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our thorough security assessment helps identify vulnerabilities and develop a tailored security strategy for your organization.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle size={24} className="text-red-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Infrastructure Evaluation</h3>
                      <p className="text-gray-600">
                        We analyze your network architecture, systems, and applications to identify security gaps and potential entry points for attackers.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle size={24} className="text-red-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Penetration Testing</h3>
                      <p className="text-gray-600">
                        Our ethical hackers simulate real-world attacks to test your defenses and identify vulnerabilities before malicious actors can exploit them.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle size={24} className="text-red-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Security Policy Review</h3>
                      <p className="text-gray-600">
                        We evaluate your existing security policies and procedures to ensure they align with industry best practices and compliance requirements.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle size={24} className="text-red-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Risk Assessment</h3>
                      <p className="text-gray-600">
                        We help you understand your security risk profile and prioritize mitigation efforts based on potential impact and likelihood.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button size="lg" className="gap-2 group bg-red-600 hover:bg-red-700">
                    Request Security Assessment
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Security assessment"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default CyberSecurity;
