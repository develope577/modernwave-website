
import { useRef, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, AlertTriangle, Clock, Shield, Zap, RefreshCw } from "lucide-react";

const ThreatMonitoring = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const [expandedSubsection, setExpandedSubsection] = useState<{section: number, subsection: number} | null>(null);
  
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
  
  const monitoringProcesses = [
    {
      icon: Clock,
      title: "24/7 Threat Monitoring",
      description: "Continuous monitoring of your network, systems, and applications to detect potential security threats in real-time.",
      subItems: [
        {
          title: "Real-Time Threat Detection",
          description: "Using advanced threat intelligence tools, we continuously monitor all your systems for unusual activity, security breaches, or any signs of cyberattacks, such as unauthorized access, malware, ransomware, or data exfiltration."
        },
        {
          title: "Threat Intelligence Feeds",
          description: "We integrate up-to-date threat intelligence feeds into our monitoring process to identify emerging threats and vulnerabilities that could affect your business, ensuring we're always a step ahead."
        },
        {
          title: "Centralized Monitoring Dashboard",
          description: "Our security experts use a centralized monitoring dashboard that aggregates data from all systems, providing a real-time overview of the security status of your organization's infrastructure."
        }
      ]
    },
    {
      icon: AlertTriangle,
      title: "Incident Detection & Response",
      description: "Rapid identification and response to security incidents, including threat containment, root cause analysis, and comprehensive resolution.",
      subItems: [
        {
          title: "Instant Alerting",
          description: "When a threat is detected, our team is immediately alerted, allowing us to assess the situation and begin an incident response protocol in real time."
        },
        {
          title: "Threat Containment",
          description: "Once a threat is detected, we quickly isolate affected systems to prevent the attack from spreading throughout your network. This could involve shutting down compromised systems, blocking malicious traffic, or applying security patches to contain the threat."
        },
        {
          title: "Root Cause Analysis",
          description: "After containment, we perform a thorough investigation to determine how the attack occurred, the impact it had, and the vulnerabilities exploited. This analysis helps us prevent future attacks and improve your overall security posture."
        },
        {
          title: "Resolution & Recovery",
          description: "Once we have contained and analyzed the threat, we work to restore your systems and services to normal operations. This includes removing malicious software, patching vulnerabilities, and reinforcing security measures."
        }
      ]
    },
    {
      icon: Shield,
      title: "Ongoing Support & Maintenance",
      description: "Regular security audits, system health checks, patching, and continuous improvement of security measures.",
      subItems: [
        {
          title: "Regular Security Audits & Vulnerability Scans",
          description: "We conduct ongoing security audits and regular vulnerability scans to identify and fix any gaps in your cybersecurity defenses before they can be exploited."
        },
        {
          title: "System Health Checks & Patching",
          description: "Our team routinely checks the health of your systems, ensuring that all software and hardware are updated with the latest security patches. This reduces the risk of attacks targeting unpatched vulnerabilities."
        },
        {
          title: "Security Awareness Training",
          description: "We provide your team with regular security awareness training to ensure that your employees can identify phishing attempts, social engineering tactics, and other common cyber threats."
        },
        {
          title: "Continuous Improvement",
          description: "Cybersecurity is a constantly evolving field, and so is our approach. We continually improve and adapt our security measures based on emerging threats, attack trends, and feedback from our monitoring systems."
        }
      ]
    }
  ];

  const handleSectionHover = (index: number | null) => {
    setExpandedSection(index);
    setExpandedSubsection(null);
  };

  const handleSubsectionHover = (sectionIndex: number, subsectionIndex: number) => {
    setExpandedSubsection({section: sectionIndex, subsection: subsectionIndex});
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-red-900/40 to-black py-24" ref={sectionRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Continuous Threat Monitoring & Support
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Stay one step ahead of cyber threats with our 24/7 threat monitoring, real-time detection, and ongoing support
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="gap-2 group bg-red-600 hover:bg-red-700" asChild>
                  <Link to="/consultation">
                    Get Security Assessment
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 group border-red-500 text-red-500 hover:bg-red-950/30" asChild>
                  <Link to="/business/cybersecurity">
                    <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
                    Back to Cybersecurity Page
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Introduction Section */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-300 text-center">
                Our Threat Monitoring & Support service is designed to ensure continuous protection against cyber threats. Cyber threats evolve constantly, and staying ahead of them requires real-time detection, immediate response, and continuous system health monitoring. We provide a comprehensive service to monitor, detect, and respond to security incidents as they occur, ensuring your business stays protected from both internal and external threats.
              </p>
            </div>
          </div>
        </section>
        
        {/* Interactive Process Sections */}
        <section className="py-16 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-display mb-4">
                Our Threat Monitoring & Support Approach
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                A comprehensive strategy to keep your business protected around the clock
              </p>
            </div>
            
            <div className="space-y-8">
              {monitoringProcesses.map((process, sectionIndex) => (
                <div 
                  key={sectionIndex}
                  className={`bg-black border border-gray-800 rounded-xl shadow-md transition-all duration-300 ${
                    expandedSection === sectionIndex ? 'border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]' : 'hover:border-red-500/50'
                  }`}
                  onMouseEnter={() => handleSectionHover(sectionIndex)}
                  onMouseLeave={() => handleSectionHover(null)}
                >
                  <div className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="w-14 h-14 rounded-lg bg-red-900/30 text-red-500 flex items-center justify-center mr-4 flex-shrink-0">
                        <process.icon size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-red-400">{process.title}</h3>
                        <p className="text-gray-300 mt-1">{process.description}</p>
                      </div>
                    </div>
                    
                    {/* Sub-items (visible when section is expanded) */}
                    <div className={`mt-4 overflow-hidden transition-all duration-500 ${
                      expandedSection === sectionIndex ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="border-t border-gray-800 pt-4">
                        <div className="grid gap-4">
                          {process.subItems.map((subItem, subIndex) => (
                            <div 
                              key={subIndex}
                              className={`bg-gray-900 p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                                expandedSubsection?.section === sectionIndex && expandedSubsection?.subsection === subIndex 
                                  ? 'border-l-4 border-red-500 pl-5' 
                                  : 'border-l-4 border-transparent pl-5 hover:border-red-400'
                              }`}
                              onMouseEnter={() => handleSubsectionHover(sectionIndex, subIndex)}
                              onMouseLeave={() => setExpandedSubsection(null)}
                            >
                              <h4 className="font-medium text-white">{subItem.title}</h4>
                              <div className={`overflow-hidden transition-all duration-300 ${
                                expandedSubsection?.section === sectionIndex && expandedSubsection?.subsection === subIndex 
                                  ? 'max-h-96 opacity-100 mt-2' 
                                  : 'max-h-0 opacity-0'
                              }`}>
                                <p className="text-gray-300 text-sm">{subItem.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-display mb-4">
                Key Benefits of Our Threat Monitoring & Support
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-800 hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all duration-300">
                <div className="w-12 h-12 bg-red-900/30 rounded-lg text-red-500 flex items-center justify-center mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">Real-Time Protection</h3>
                <p className="text-gray-300">
                  Ensure that your organization is actively protected from potential threats by monitoring and responding to incidents in real time.
                </p>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-800 hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all duration-300">
                <div className="w-12 h-12 bg-red-900/30 rounded-lg text-red-500 flex items-center justify-center mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">Minimize Downtime</h3>
                <p className="text-gray-300">
                  By detecting and resolving security incidents early, we minimize downtime and prevent significant disruptions to your business operations.
                </p>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-800 hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all duration-300">
                <div className="w-12 h-12 bg-red-900/30 rounded-lg text-red-500 flex items-center justify-center mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">Proactive Risk Management</h3>
                <p className="text-gray-300">
                  By continuously monitoring your systems, we proactively manage and mitigate risks before they turn into serious security breaches.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-black to-red-950/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold font-display mb-6">
              Strengthen Your Security Posture Today
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Take the first step towards continuous threat monitoring and ongoing support for your business.
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

export default ThreatMonitoring;
