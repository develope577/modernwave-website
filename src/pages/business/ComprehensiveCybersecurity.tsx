
import { useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Server, AlertTriangle, CheckCircle, Search, FileSearch, ArrowLeft } from "lucide-react";

const ComprehensiveCybersecurity = () => {
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
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-red-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Complete Cybersecurity Solutions to Protect Your Business
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-8">
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
                  <ArrowLeft size={16} />
                  Back to Cybersecurity Page
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 bg-white" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-6">
              Cybersecurity Services We Offer
            </h2>
          </div>
          
          {/* Vulnerability Assessment */}
          <div className="mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-red-100 rounded-lg text-red-600 flex items-center justify-center mr-6">
                  <Shield size={28} />
                </div>
                <h3 className="text-2xl font-semibold">1. Vulnerability Assessment</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2">Objective:</h4>
                <p className="text-gray-700">
                  Our vulnerability assessment service focuses on identifying weaknesses within your organization's digital infrastructure. The goal is to proactively discover and fix vulnerabilities that could be exploited by cybercriminals, preventing data breaches and reducing the attack surface.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-4">Process:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex">
                    <div className="shrink-0 h-10 w-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                      <Search size={20} />
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Initial Scanning & Discovery</h5>
                      <p className="text-gray-600">
                        We begin by scanning your systems, networks, and applications using cutting-edge tools and techniques. This allows us to identify weak points, such as outdated software, misconfigured systems, and unpatched vulnerabilities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="shrink-0 h-10 w-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                      <FileSearch size={20} />
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Risk Identification & Prioritization</h5>
                      <p className="text-gray-600">
                        After vulnerabilities are discovered, they are assessed based on severity. We prioritize high-risk vulnerabilities that could have a significant impact on your business if exploited.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="shrink-0 h-10 w-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Remediation & Fixing</h5>
                      <p className="text-gray-600">
                        Once risks are identified, we provide actionable steps to fix vulnerabilities. Our experts patch software, update configurations, and install security upgrades to eliminate risks.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="shrink-0 h-10 w-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                      <ArrowRight size={20} />
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Re-Testing & Ongoing Monitoring</h5>
                      <p className="text-gray-600">
                        After the fixes are applied, we re-test the systems to ensure vulnerabilities are properly resolved. We then offer ongoing monitoring to detect emerging threats and ensure your systems stay secure over time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <Link to="/business/cybersecurity/vulnerability-assessment">
                    Learn More About Vulnerability Assessment
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Network Security */}
          <div className="mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-red-100 rounded-lg text-red-600 flex items-center justify-center mr-6">
                  <Server size={28} />
                </div>
                <h3 className="text-2xl font-semibold">2. Network Security</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2">Objective:</h4>
                <p className="text-gray-700">
                  Network security ensures the integrity, confidentiality, and availability of your organization's network infrastructure. By implementing strong network security measures, we help protect your business from unauthorized access, data breaches, and cyberattacks.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-4">Process:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex">
                    <div className="shrink-0 h-10 w-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Firewall Configuration & Management</h5>
                      <p className="text-gray-600">
                        A firewall acts as the first line of defense against unauthorized access. We configure and manage firewalls to protect your network from inbound and outbound threats.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="shrink-0 h-10 w-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                      <AlertTriangle size={20} />
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Intrusion Detection & Prevention Systems</h5>
                      <p className="text-gray-600">
                        We implement IDS/IPS systems that monitor network traffic for suspicious activity and can automatically block malicious activity in real-time. This provides immediate threat mitigation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="shrink-0 h-10 w-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                      <LockKeyhole size={20} />
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Virtual Private Network (VPN) Setup</h5>
                      <p className="text-gray-600">
                        Secure remote access is vital in today's work environment. We set up VPNs to provide encrypted communication for your remote workers and ensure secure access to your internal network.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="shrink-0 h-10 w-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                      <Server size={20} />
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Network Segmentation & Security</h5>
                      <p className="text-gray-600">
                        We divide your network into isolated segments to prevent the lateral movement of threats. Critical systems are secured with additional layers of protection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <Link to="/business/cybersecurity/network-security">
                    Learn More About Network Security
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Threat Monitoring */}
          <div className="mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-red-100 rounded-lg text-red-600 flex items-center justify-center mr-6">
                  <AlertTriangle size={28} />
                </div>
                <h3 className="text-2xl font-semibold">3. Threat Monitoring & Ongoing Support</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2">Objective:</h4>
                <p className="text-gray-700">
                  Threat monitoring is essential for identifying and responding to security incidents in real-time. Our service ensures that your systems are actively monitored 24/7 for potential threats, allowing us to mitigate attacks before they cause significant damage.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-4">Process:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex">
                    <div className="shrink-0 h-10 w-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                      <AlertTriangle size={20} />
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">24/7 Threat Monitoring</h5>
                      <p className="text-gray-600">
                        We monitor all systems and networks continuously using state-of-the-art tools to detect vulnerabilities and threats. Whether it's a cyberattack or a system breach, our team identifies it in real-time.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="shrink-0 h-10 w-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Incident Response & Mitigation</h5>
                      <p className="text-gray-600">
                        Our team is ready to respond to threats at any time. Once a threat is detected, we investigate the issue, contain the threat, and work to mitigate any damage.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="shrink-0 h-10 w-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                      <FileSearch size={20} />
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Regular Security Audits</h5>
                      <p className="text-gray-600">
                        We conduct regular security audits to assess the overall health of your cybersecurity infrastructure. This ensures that systems are continuously updated and that no new vulnerabilities have emerged.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="shrink-0 h-10 w-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                      <ArrowRight size={20} />
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Ongoing Support & Maintenance</h5>
                      <p className="text-gray-600">
                        Security is not a one-time effort. We offer ongoing support to ensure your systems are always up-to-date, with patches, updates, and configurations regularly maintained to prevent future vulnerabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <Link to="/business/cybersecurity/threat-monitoring">
                    Learn More About Threat Monitoring
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What We Aim to Achieve */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-6">
              What We Aim to Achieve with Our Cybersecurity Services
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Our goal is to provide businesses with complete protection against cyber threats. We work with you to strengthen your digital infrastructure, ensuring that your network, data, and assets remain secure.
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
              <p className="text-gray-700">
                By assessing vulnerabilities and securing networks, we reduce the risk of unauthorized access and data theft.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="shrink-0 h-10 w-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                  <ArrowRight size={20} />
                </div>
                <h3 className="text-xl font-semibold">Ensure Business Continuity</h3>
              </div>
              <p className="text-gray-700">
                Our proactive monitoring and incident response services ensure your business is resilient, with minimal downtime in case of a breach.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="shrink-0 h-10 w-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                  <LockKeyhole size={20} />
                </div>
                <h3 className="text-xl font-semibold">Protect Sensitive Information</h3>
              </div>
              <p className="text-gray-700">
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
              <p className="text-gray-700">
                We help you meet cybersecurity compliance requirements by implementing industry-standard security protocols, reducing legal and financial risks.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-6">
              Cybersecurity Service Process
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Here's a step-by-step breakdown of the entire process from assessment to ongoing support:
            </p>
          </div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="flex items-start">
              <div className="shrink-0 flex flex-col items-center mr-6">
                <div className="h-10 w-10 bg-red-600 rounded-full flex items-center justify-center text-white font-medium">1</div>
                <div className="w-0.5 h-full bg-red-200 mt-2"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Vulnerability Scanning</h3>
                <p className="text-gray-700">
                  We begin by scanning your entire system to identify weaknesses that can be exploited by hackers.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="shrink-0 flex flex-col items-center mr-6">
                <div className="h-10 w-10 bg-red-600 rounded-full flex items-center justify-center text-white font-medium">2</div>
                <div className="w-0.5 h-full bg-red-200 mt-2"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">In-Depth Risk Analysis & Reporting</h3>
                <p className="text-gray-700">
                  After identifying vulnerabilities, we conduct a thorough risk analysis and provide actionable recommendations.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="shrink-0 flex flex-col items-center mr-6">
                <div className="h-10 w-10 bg-red-600 rounded-full flex items-center justify-center text-white font-medium">3</div>
                <div className="w-0.5 h-full bg-red-200 mt-2"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Security Remediation & Patching</h3>
                <p className="text-gray-700">
                  Our experts quickly apply patches, configure systems, and implement necessary security measures to address identified risks.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="shrink-0 flex flex-col items-center mr-6">
                <div className="h-10 w-10 bg-red-600 rounded-full flex items-center justify-center text-white font-medium">4</div>
                <div className="w-0.5 h-full bg-red-200 mt-2"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Real-Time Threat Monitoring</h3>
                <p className="text-gray-700">
                  Once systems are secured, we continuously monitor network traffic and system activity to detect potential security threats in real-time.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="shrink-0 flex flex-col items-center mr-6">
                <div className="h-10 w-10 bg-red-600 rounded-full flex items-center justify-center text-white font-medium">5</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Incident Response & Ongoing Support</h3>
                <p className="text-gray-700">
                  In case of a detected threat, we immediately respond, contain, and mitigate the issue, ensuring business continuity. Ongoing support ensures that your system stays secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display mb-6">
              Why Choose Our Cybersecurity Services?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Tailored Solutions</h3>
              <p className="text-gray-700">
                We offer customized cybersecurity services based on your business needs and security risk profile.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
                <AlertTriangle size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Protection</h3>
              <p className="text-gray-700">
                Our continuous monitoring ensures that your systems are safeguarded around the clock.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Expertise</h3>
              <p className="text-gray-700">
                Our team of cybersecurity experts has years of experience in protecting businesses from evolving threats.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
                <Server size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Comprehensive Coverage</h3>
              <p className="text-gray-700">
                From vulnerability assessments to ongoing monitoring, we provide a complete suite of services to secure your infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-display mb-6">
            Ready to Protect Your Business?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
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
      
      <Footer />
    </div>
  );
};

export default ComprehensiveCybersecurity;
