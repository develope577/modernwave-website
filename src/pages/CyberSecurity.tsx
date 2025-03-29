
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, LockKeyhole, Server, Shield, AlertTriangle } from "lucide-react";
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
                  <Button size="lg" className="gap-2 group bg-red-600 hover:bg-red-700" asChild>
                    <Link to="/contact">
                      Get Security Assessment
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 group" asChild>
                    <Link to="/business">
                      Explore Solutions
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
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
        
        {/* Why It Matters Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Why It Matters
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                In today's digital landscape, robust cybersecurity isn't optional—it's essential for business survival.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-red-600">The Growing Threat Landscape</h3>
                <p className="text-gray-700 mb-6">
                  The digital transformation accelerating across industries brings unprecedented opportunities—and equally significant risks. Cybercriminals continue to develop increasingly sophisticated attack methods, targeting organizations of all sizes. No business is too small to be targeted, with 43% of cyberattacks now aimed at small businesses while only 14% consider themselves prepared to defend against these threats.
                </p>
                <p className="text-gray-700">
                  Today's threat landscape encompasses ransomware, phishing campaigns, zero-day exploits, and supply chain attacks that can bypass traditional security measures. The stakes are higher than ever, with the average cost of a data breach reaching $4.35 million in 2022—and that doesn't account for the immeasurable damage to customer trust and brand reputation.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold mb-4 text-red-600">Beyond Compliance: Security as Business Enabler</h3>
                <p className="text-gray-700 mb-6">
                  Forward-thinking organizations recognize that strong cybersecurity goes beyond mere regulatory compliance—it's a business differentiator. Customers increasingly choose partners with proven security practices, investors examine security posture before funding decisions, and robust security enables innovation rather than hindering it.
                </p>
                <div className="bg-red-50 p-6 rounded-lg border border-red-100 mt-6">
                  <h4 className="text-lg font-semibold mb-3">Critical Statistics</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-red-600 mt-1 shrink-0" />
                      <span className="text-gray-700">60% of small companies go out of business within 6 months of a cyber attack</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-red-600 mt-1 shrink-0" />
                      <span className="text-gray-700">95% of cybersecurity breaches are caused by human error</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-red-600 mt-1 shrink-0" />
                      <span className="text-gray-700">Ransomware attacks occur every 11 seconds, up from every 40 seconds in 2016</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-red-600 mt-1 shrink-0" />
                      <span className="text-gray-700">Organizations with comprehensive security programs experience 53% fewer attacks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-red-600 mt-1 shrink-0" />
                      <span className="text-gray-700">43% of all data breaches target small and medium businesses</span>
                    </li>
                  </ul>
                </div>
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
                    <Link to="/contact">
                      Request Security Assessment
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
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default CyberSecurity;
