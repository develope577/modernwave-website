
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, LockKeyhole, Server, Shield, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import useScrollToTop from "@/hooks/useScrollToTop";

const CyberSecurity = () => {
  // Apply the scroll to top hook
  useScrollToTop();
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const securitySolutionsRef = useRef<HTMLDivElement>(null);
  
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
                  <Button size="lg" className="gap-2 group bg-red-600 hover:bg-red-700" asChild>
                    <Link to="/consultation">
                      Get Security Assessment
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 group" onClick={() => scrollToSection('security-solutions')}>
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
        
        {/* Why It Matters Section - Modified layout with cards on the right */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Why It Matters
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="md:col-span-2">
                <div className="space-y-8">
                  <p className="text-lg text-gray-600">
                    In today's interconnected digital landscape, cybersecurity is not just an IT concern but a fundamental business risk that affects organizations of all sizes. As cyber threats continue to evolve in sophistication and scale, businesses must adopt comprehensive security strategies to protect their critical assets, maintain customer trust, and ensure operational continuity.
                  </p>
                  
                  <p className="text-lg text-gray-600">
                    The cost of cybersecurity breaches extends far beyond immediate financial losses, affecting brand reputation, customer relationships, and competitive positioning. By implementing robust security measures, organizations can not only defend against current threats but also build resilience against emerging risks in an increasingly complex threat landscape.
                  </p>
                </div>
              </div>
              
              <div className="md:col-span-1">
                <div className="grid grid-cols-1 gap-4 h-full">
                  <div className="bg-red-50 rounded-lg p-4 text-center aspect-square flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-red-600 mb-2">60%</h3>
                    <p className="text-gray-700 text-sm">
                      of small businesses close within 6 months of a significant cyber attack
                    </p>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-4 text-center aspect-square flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-red-600 mb-2">$4.35M</h3>
                    <p className="text-gray-700 text-sm">
                      average cost of a data breach in 2022, a record high
                    </p>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-4 text-center aspect-square flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-red-600 mb-2">300%</h3>
                    <p className="text-gray-700 text-sm">
                      increase in reported cybercrimes since the beginning of the pandemic
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="security-solutions" className="py-20">
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
                </CardContent>
              </Card>
              
              {/* Swapped position - Now shows Network Security in the middle */}
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-100 text-red-600 mb-6">
                    <Server size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Network Security</h3>
                  <p className="text-gray-600 mb-6">
                    Advanced firewall configuration, intrusion detection, and network monitoring to prevent unauthorized access.
                  </p>
                </CardContent>
              </Card>
              
              {/* Swapped position - Now shows Threat Monitoring at the end */}
              <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-100 text-red-600 mb-6">
                    <AlertTriangle size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Threat Monitoring & Support</h3>
                  <p className="text-gray-600 mb-6">
                    24/7 monitoring and rapid response to security threats with ongoing support to maintain system integrity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Security Assessment Section */}
        <section className="py-20 bg-gray-50">
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
                  <Button size="lg" className="gap-2 group bg-red-600 hover:bg-red-700" asChild>
                    <Link to="/business/cybersecurity/comprehensive">
                      Explore Full Security Process
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
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
        
        {/* Protect Your Business Section */}
        <section className="py-16 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Protect Your Business Today
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Don't wait until after a breach. Take proactive steps to secure your business now.
            </p>
            <Button 
              size="lg" 
              className="gap-2 group bg-blue-600 hover:bg-blue-700" 
              asChild
            >
              <Link to="/consultation">
                Request Security Assessment
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </section>
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default CyberSecurity;
