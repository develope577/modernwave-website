
import { useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Server, AlertTriangle, CheckCircle, Search, FileSearch, ArrowLeft, Lock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import useScrollToTop from "@/hooks/useScrollToTop";

const ComprehensiveCybersecurity = () => {
  // Apply the scroll to top hook
  useScrollToTop();
  
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
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Complete Cybersecurity Solutions to Protect Your Business
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                We provide end-to-end cybersecurity services to safeguard your systems, data, and network infrastructure from evolving cyber threats.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="gap-2 group bg-red-600 hover:bg-red-700" asChild>
                  <Link to="/consultation">
                    Get Security Assessment
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 group" asChild>
                  <Link to="/business/cybersecurity">
                    <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
                    Back to Cybersecurity Page
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Overview Section - Updated to Flowchart Style */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-display mb-4">
                Cybersecurity Services We Offer
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our interconnected cybersecurity services provide comprehensive protection for your digital assets
              </p>
            </div>
            
            {/* Flowchart-style layout */}
            <div className="relative">
              {/* Connecting lines */}
              <div className="absolute left-1/2 top-28 bottom-28 w-0.5 bg-gradient-to-b from-red-500 to-red-600 hidden md:block"></div>
              
              <div className="grid grid-cols-1 gap-16 max-w-3xl mx-auto">
                {/* Service 1: Vulnerability Assessment */}
                <div className="relative group">
                  <div className="bg-slate-900 text-white rounded-xl p-6 shadow-md border border-slate-800 transition-all duration-300 group-hover:border-red-500 group-hover:shadow-red-500/20 group-hover:shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 bg-red-900/30 rounded-full flex items-center justify-center text-red-500 mr-4">
                        <Shield size={20} />
                      </div>
                      <h3 className="text-2xl font-bold">Vulnerability Assessment</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4">
                      We identify and remediate security weaknesses before they can be exploited by malicious actors.
                    </p>
                    
                    <div className="hidden group-hover:block mt-4 p-4 bg-slate-800 rounded-lg border-l-2 border-red-500">
                      <h4 className="text-lg font-semibold mb-2 text-red-400">Key Components:</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <Search size={16} className="text-red-500 mr-2 mt-1 shrink-0" />
                          <span>Comprehensive system scanning and penetration testing</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle size={16} className="text-red-500 mr-2 mt-1 shrink-0" />
                          <span>Risk assessment and prioritization</span>
                        </li>
                        <li className="flex items-start">
                          <FileSearch size={16} className="text-red-500 mr-2 mt-1 shrink-0" />
                          <span>Detailed remediation planning</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-red-500 mr-2 mt-1 shrink-0" />
                          <span>Verification and validation testing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Connection circle and arrow */}
                  <div className="absolute left-1/2 -bottom-8 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full hidden md:block"></div>
                  <div className="absolute left-1/2 -bottom-16 transform -translate-x-1/2 text-red-600 hidden md:block">↓</div>
                </div>
                
                {/* Service 2: Network Security */}
                <div className="relative group">
                  <div className="bg-slate-900 text-white rounded-xl p-6 shadow-md border border-slate-800 transition-all duration-300 group-hover:border-red-500 group-hover:shadow-red-500/20 group-hover:shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 bg-red-900/30 rounded-full flex items-center justify-center text-red-500 mr-4">
                        <Server size={20} />
                      </div>
                      <h3 className="text-2xl font-bold">Network Security</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4">
                      We protect your network infrastructure with advanced monitoring and protection systems.
                    </p>
                    
                    <div className="hidden group-hover:block mt-4 p-4 bg-slate-800 rounded-lg border-l-2 border-red-500">
                      <h4 className="text-lg font-semibold mb-2 text-red-400">Key Components:</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <Shield size={16} className="text-red-500 mr-2 mt-1 shrink-0" />
                          <span>Advanced firewall configuration and management</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle size={16} className="text-red-500 mr-2 mt-1 shrink-0" />
                          <span>Intrusion detection and prevention systems</span>
                        </li>
                        <li className="flex items-start">
                          <Lock size={16} className="text-red-500 mr-2 mt-1 shrink-0" />
                          <span>VPN and secure remote access solutions</span>
                        </li>
                        <li className="flex items-start">
                          <Server size={16} className="text-red-500 mr-2 mt-1 shrink-0" />
                          <span>Network segmentation and secure communication</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Connection circle and arrow */}
                  <div className="absolute left-1/2 -bottom-8 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full hidden md:block"></div>
                  <div className="absolute left-1/2 -bottom-16 transform -translate-x-1/2 text-red-600 hidden md:block">↓</div>
                </div>
                
                {/* Service 3: Threat Monitoring */}
                <div className="relative group">
                  <div className="bg-slate-900 text-white rounded-xl p-6 shadow-md border border-slate-800 transition-all duration-300 group-hover:border-red-500 group-hover:shadow-red-500/20 group-hover:shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 bg-red-900/30 rounded-full flex items-center justify-center text-red-500 mr-4">
                        <AlertTriangle size={20} />
                      </div>
                      <h3 className="text-2xl font-bold">Threat Monitoring & Ongoing Support</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-4">
                      We continuously monitor your systems for threats and provide immediate response to security incidents.
                    </p>
                    
                    <div className="hidden group-hover:block mt-4 p-4 bg-slate-800 rounded-lg border-l-2 border-red-500">
                      <h4 className="text-lg font-semibold mb-2 text-red-400">Key Components:</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <Search size={16} className="text-red-500 mr-2 mt-1 shrink-0" />
                          <span>24/7 real-time threat monitoring</span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle size={16} className="text-red-500 mr-2 mt-1 shrink-0" />
                          <span>Incident response and rapid mitigation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-red-500 mr-2 mt-1 shrink-0" />
                          <span>Regular security audits and assessments</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle size={16} className="text-red-500 mr-2 mt-1 shrink-0" />
                          <span>Proactive maintenance and updates</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-display mb-4">
                What We Aim to Achieve with Our Cybersecurity Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our comprehensive approach to cybersecurity helps protect your business and ensures operational continuity
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="shrink-0 h-10 w-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                    <Shield size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">Prevent Data Breaches</h3>
                </div>
                <p className="text-gray-600">
                  By assessing vulnerabilities and securing networks, we reduce the risk of unauthorized access and data theft.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="shrink-0 h-10 w-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                    <CheckCircle size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">Ensure Business Continuity</h3>
                </div>
                <p className="text-gray-600">
                  Our proactive monitoring and incident response services ensure your business is resilient, with minimal downtime in case of a breach.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="shrink-0 h-10 w-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                    <Lock size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">Protect Sensitive Information</h3>
                </div>
                <p className="text-gray-600">
                  Our network security services keep sensitive data encrypted and protected, ensuring privacy and compliance with industry standards.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="shrink-0 h-10 w-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                    <CheckCircle size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">Strengthen Compliance</h3>
                </div>
                <p className="text-gray-600">
                  We help you meet cybersecurity compliance requirements by implementing industry-standard security protocols, reducing legal and financial risks.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-display mb-4">
                Cybersecurity Service Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A comprehensive, step-by-step approach to ensuring your security
              </p>
            </div>
            
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-red-100 hidden md:block"></div>
              
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-32 flex-shrink-0 flex flex-col items-center md:mr-8">
                    <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-2 z-10">
                      <span className="text-lg font-bold">1</span>
                    </div>
                    <div className="hidden md:block h-full w-0.5 bg-red-100"></div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm flex-grow md:ml-4">
                    <h3 className="text-xl font-bold mb-3">Comprehensive Vulnerability Scanning</h3>
                    <p className="text-gray-600">
                      We begin by scanning your entire system to identify weaknesses that can be exploited by hackers.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-32 flex-shrink-0 flex flex-col items-center md:mr-8">
                    <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-2 z-10">
                      <span className="text-lg font-bold">2</span>
                    </div>
                    <div className="hidden md:block h-full w-0.5 bg-red-100"></div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm flex-grow md:ml-4">
                    <h3 className="text-xl font-bold mb-3">In-Depth Risk Analysis & Reporting</h3>
                    <p className="text-gray-600">
                      After identifying vulnerabilities, we conduct a thorough risk analysis and provide actionable recommendations.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-32 flex-shrink-0 flex flex-col items-center md:mr-8">
                    <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-2 z-10">
                      <span className="text-lg font-bold">3</span>
                    </div>
                    <div className="hidden md:block h-full w-0.5 bg-red-100"></div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm flex-grow md:ml-4">
                    <h3 className="text-xl font-bold mb-3">Security Remediation & Patching</h3>
                    <p className="text-gray-600">
                      Our experts quickly apply patches, configure systems, and implement necessary security measures to address identified risks.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-32 flex-shrink-0 flex flex-col items-center md:mr-8">
                    <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-2 z-10">
                      <span className="text-lg font-bold">4</span>
                    </div>
                    <div className="hidden md:block h-full w-0.5 bg-red-100"></div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm flex-grow md:ml-4">
                    <h3 className="text-xl font-bold mb-3">Real-Time Threat Monitoring</h3>
                    <p className="text-gray-600">
                      Once systems are secured, we continuously monitor network traffic and system activity to detect potential security threats in real-time.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-32 flex-shrink-0 flex flex-col items-center md:mr-8">
                    <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-2 z-10">
                      <span className="text-lg font-bold">5</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm flex-grow md:ml-4">
                    <h3 className="text-xl font-bold mb-3">Incident Response & Ongoing Support</h3>
                    <p className="text-gray-600">
                      In case of a detected threat, we immediately respond, contain, and mitigate the issue, ensuring business continuity. Ongoing support ensures that your system stays secure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-display mb-4">
                Why Choose Our Cybersecurity Services?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              <div className="flex items-start">
                <div className="shrink-0 h-12 w-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tailored Solutions</h3>
                  <p className="text-gray-600">
                    We offer customized cybersecurity services based on your business needs and security risk profile.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="shrink-0 h-12 w-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Protection</h3>
                  <p className="text-gray-600">
                    Our continuous monitoring ensures that your systems are safeguarded around the clock.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="shrink-0 h-12 w-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proven Expertise</h3>
                  <p className="text-gray-600">
                    Our team of cybersecurity experts has years of experience in protecting businesses from evolving threats.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="shrink-0 h-12 w-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Comprehensive Coverage</h3>
                  <p className="text-gray-600">
                    From vulnerability assessments to ongoing monitoring, we provide a complete suite of services to secure your infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold font-display mb-6">
              Get a Personalized Security Assessment
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Schedule a personalized security assessment to understand your vulnerabilities and get a clear action plan.
            </p>
            <Button size="lg" className="gap-2 group bg-red-600 hover:bg-red-700" asChild>
              <Link to="/consultation">
                Get Security Assessment
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ComprehensiveCybersecurity;
