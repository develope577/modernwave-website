
import { useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, AlertTriangle, Clock, Shield, Zap, RefreshCw } from "lucide-react";

const ThreatMonitoring = () => {
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
                Continuous Threat Monitoring & Support to Safeguard Your Business
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Stay one step ahead of cyber threats with our 24/7 threat monitoring, real-time detection, and ongoing support
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
        
        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">What is Threat Monitoring & Ongoing Support?</h2>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Objective:</h3>
                <p className="text-gray-600 mb-6">
                  Our Threat Monitoring & Support service is designed to ensure continuous protection against cyber threats. Cyber threats evolve constantly, and staying ahead of them requires real-time detection, immediate response, and continuous system health monitoring. We provide a comprehensive service to monitor, detect, and respond to security incidents as they occur, ensuring your business stays protected from both internal and external threats.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Process Overview Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-display mb-4">
                The Threat Monitoring & Support Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our approach to Threat Monitoring & Support involves a combination of proactive detection, rapid response, and continuous support to maintain the integrity of your network.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-200">
                <div className="w-14 h-14 bg-red-100 rounded-lg text-red-600 flex items-center justify-center mb-4 mx-auto">
                  <Clock size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">24/7 Threat Monitoring</h3>
                <p className="text-gray-600">
                  Continuous monitoring of your network, systems, and applications to detect potential security threats in real-time, providing round-the-clock protection against evolving cyber threats.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-200">
                <div className="w-14 h-14 bg-red-100 rounded-lg text-red-600 flex items-center justify-center mb-4 mx-auto">
                  <AlertTriangle size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Incident Detection & Response</h3>
                <p className="text-gray-600">
                  Rapid identification and response to security incidents, including threat containment, root cause analysis, and comprehensive resolution to minimize potential damage.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-200">
                <div className="w-14 h-14 bg-red-100 rounded-lg text-red-600 flex items-center justify-center mb-4 mx-auto">
                  <Shield size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Ongoing Support & Maintenance</h3>
                <p className="text-gray-600">
                  Regular security audits, system health checks, patching, and continuous improvement of security measures to ensure long-term protection against evolving threats.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Detailed Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-bold font-display mb-4 text-center">
                Our Detailed Process
              </h2>
            </div>
            
            <div className="space-y-16">
              {/* 24/7 Threat Monitoring */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg text-red-600 flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold">1. 24/7 Threat Monitoring</h3>
                </div>
                
                <p className="text-lg text-gray-600 mb-6">
                  <strong>Objective:</strong> Monitor your network, systems, and applications for potential security incidents round the clock.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="font-semibold mb-3">Real-Time Threat Detection</h4>
                    <p className="text-gray-600">
                      Using advanced threat intelligence tools, we continuously monitor all your systems for unusual activity, security breaches, or any signs of cyberattacks, such as unauthorized access, malware, ransomware, or data exfiltration.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="font-semibold mb-3">Threat Intelligence Feeds</h4>
                    <p className="text-gray-600">
                      We integrate up-to-date threat intelligence feeds into our monitoring process to identify emerging threats and vulnerabilities that could affect your business, ensuring we're always a step ahead.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="font-semibold mb-3">Centralized Monitoring Dashboard</h4>
                    <p className="text-gray-600">
                      Our security experts use a centralized monitoring dashboard that aggregates data from all systems, providing a real-time overview of the security status of your organization's infrastructure.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Incident Detection & Response */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg text-red-600 flex items-center justify-center shrink-0">
                    <AlertTriangle size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold">2. Incident Detection & Response</h3>
                </div>
                
                <p className="text-lg text-gray-600 mb-6">
                  <strong>Objective:</strong> Detect threats early and respond quickly to minimize the impact of an attack.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="font-semibold mb-3">Instant Alerting</h4>
                    <p className="text-gray-600">
                      When a threat is detected, our team is immediately alerted, allowing us to assess the situation and begin an incident response protocol in real time.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="font-semibold mb-3">Threat Containment</h4>
                    <p className="text-gray-600">
                      Once a threat is detected, we quickly isolate affected systems to prevent the attack from spreading throughout your network. This could involve shutting down compromised systems, blocking malicious traffic, or applying security patches to contain the threat.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="font-semibold mb-3">Root Cause Analysis</h4>
                    <p className="text-gray-600">
                      After containment, we perform a thorough investigation to determine how the attack occurred, the impact it had, and the vulnerabilities exploited. This analysis helps us prevent future attacks and improve your overall security posture.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="font-semibold mb-3">Resolution & Recovery</h4>
                    <p className="text-gray-600">
                      Once we have contained and analyzed the threat, we work to restore your systems and services to normal operations. This includes removing malicious software, patching vulnerabilities, and reinforcing security measures.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Ongoing Support & Maintenance */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg text-red-600 flex items-center justify-center shrink-0">
                    <Shield size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold">3. Ongoing Support & Maintenance</h3>
                </div>
                
                <p className="text-lg text-gray-600 mb-6">
                  <strong>Objective:</strong> Provide continuous, proactive security support to ensure your systems remain secure and up-to-date.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="font-semibold mb-3">Regular Security Audits & Vulnerability Scans</h4>
                    <p className="text-gray-600">
                      We conduct ongoing security audits and regular vulnerability scans to identify and fix any gaps in your cybersecurity defenses before they can be exploited.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="font-semibold mb-3">System Health Checks & Patching</h4>
                    <p className="text-gray-600">
                      Our team routinely checks the health of your systems, ensuring that all software and hardware are updated with the latest security patches. This reduces the risk of attacks targeting unpatched vulnerabilities.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="font-semibold mb-3">Security Awareness Training</h4>
                    <p className="text-gray-600">
                      We provide your team with regular security awareness training to ensure that your employees can identify phishing attempts, social engineering tactics, and other common cyber threats. Well-trained staff are less likely to fall victim to attacks, adding an extra layer of defense to your business.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="font-semibold mb-3">Continuous Improvement</h4>
                    <p className="text-gray-600">
                      Cybersecurity is a constantly evolving field, and so is our approach. We continually improve and adapt our security measures based on emerging threats, attack trends, and feedback from our monitoring systems.
                    </p>
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
                What We Aim to Achieve with Threat Monitoring & Support
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our Threat Monitoring & Support services aim to protect your business from cyber threats through early detection, rapid response, and ongoing system health checks.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg text-red-600 flex items-center justify-center mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-Time Protection</h3>
                <p className="text-gray-600">
                  Ensure that your organization is actively protected from potential threats by monitoring and responding to incidents in real time.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg text-red-600 flex items-center justify-center mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Minimize Downtime</h3>
                <p className="text-gray-600">
                  By detecting and resolving security incidents early, we minimize downtime and prevent significant disruptions to your business operations.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg text-red-600 flex items-center justify-center mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Proactive Risk Management</h3>
                <p className="text-gray-600">
                  By continuously monitoring your systems, we proactively manage and mitigate risks before they turn into serious security breaches.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg text-red-600 flex items-center justify-center mb-4">
                  <RefreshCw size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Protection & Compliance</h3>
                <p className="text-gray-600">
                  We help you meet cybersecurity compliance requirements, ensuring your data is secure and protected according to industry standards and regulations.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 md:col-span-2 lg:col-span-2">
                <div className="w-12 h-12 bg-red-100 rounded-lg text-red-600 flex items-center justify-center mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Peace of Mind</h3>
                <p className="text-gray-600">
                  With 24/7 monitoring, expert support, and ongoing maintenance, we give you peace of mind knowing that your business is always protected from evolving cyber threats.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-display mb-4">
                Why Choose Our Threat Monitoring & Support Services?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-600 shrink-0 mt-1">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Monitoring</h3>
                  <p className="text-gray-600">
                    We monitor your systems around the clock, ensuring you're always protected from emerging threats. Our security operations center provides continuous supervision and immediate response to potential security incidents.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-600 shrink-0 mt-1">
                  <AlertTriangle size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Incident Response</h3>
                  <p className="text-gray-600">
                    Our team is ready to respond to threats immediately, minimizing the impact on your business. With extensive experience in handling security incidents, we quickly contain threats and implement effective remediation measures.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-600 shrink-0 mt-1">
                  <RefreshCw size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Continuous Improvement</h3>
                  <p className="text-gray-600">
                    We adapt and evolve our cybersecurity measures based on the latest threats and vulnerabilities, ensuring your systems remain secure. Our approach incorporates lessons learned from security incidents and emerging threat intelligence.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-600 shrink-0 mt-1">
                  <Shield size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Comprehensive Support</h3>
                  <p className="text-gray-600">
                    Our ongoing support services ensure that your systems stay up to date and secure, providing long-term protection. This includes regular security assessments, patch management, and proactive maintenance to prevent security issues.
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
              Strengthen Your Security Posture Today
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
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
