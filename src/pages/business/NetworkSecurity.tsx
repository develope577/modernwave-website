
import { useRef, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Server, Shield, Layers, Lock, BarChart } from "lucide-react";

const NetworkSecurity = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  
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

  const securityServices = [
    {
      icon: Shield,
      title: "Firewall Configuration & Implementation",
      shortDescription: "Deploy and configure firewalls to create a secure barrier around your network.",
      fullDescription: "Deploying and configuring firewalls that act as a barrier between your internal network and potential external threats. This also includes setting up access control rules based on business needs and implementing next-generation firewall features like deep packet inspection and application awareness to better detect and block sophisticated attacks."
    },
    {
      icon: Server,
      title: "Intrusion Detection & Prevention",
      shortDescription: "Monitor traffic for suspicious activity and automatically respond to threats.",
      fullDescription: "IDS/IPS systems monitor network traffic for suspicious activity and potential threats, automatically responding to mitigate attacks in real-time. Our systems use a combination of signature-based detection and behavioral analysis to identify both known and zero-day threats, providing comprehensive protection against evolving attack vectors."
    },
    {
      icon: Layers,
      title: "Network Segmentation & Secure Communications",
      shortDescription: "Divide networks into isolated segments to contain breaches and protect critical assets.",
      fullDescription: "Dividing networks into smaller, isolated segments to contain security breaches and reduce the impact of any potential attack. Securing communication channels ensures that sensitive data is transmitted safely. This micro-segmentation approach creates security zones that restrict lateral movement, ensuring that even if attackers gain access to one segment, they can't easily move to others."
    },
    {
      icon: Lock,
      title: "VPNs and Remote Access Solutions",
      shortDescription: "Enable secure, encrypted connections for remote workers accessing internal resources.",
      fullDescription: "Setting up Virtual Private Networks (VPNs) to ensure secure, encrypted communication for remote workers and secure access to internal resources. Our solutions include multi-factor authentication, split tunneling capabilities, and detailed connection logging to maintain security while providing flexibility for your remote workforce."
    },
    {
      icon: BarChart,
      title: "Continuous Monitoring & Regular Audits",
      shortDescription: "Maintain vigilance with 24/7 network monitoring and periodic security reviews.",
      fullDescription: "Network security is an ongoing process. Continuous monitoring ensures early detection of threats. Regular audits ensure that security policies and systems are updated to counter evolving cyber threats. Our monitoring solutions provide real-time visibility into your network traffic patterns, allowing us to quickly identify and respond to anomalies that may indicate security incidents."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-zinc-900 text-white">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section - Updated background color */}
        <section className="bg-gradient-to-b from-zinc-800 to-zinc-900 py-24" ref={sectionRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Complete Network Security Solutions
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Secure your business network from cyber threats with comprehensive protection
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
        <section className="py-16 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-300">
                Network security is essential for protecting your business from increasingly sophisticated cyber threats. Our comprehensive network security solutions create multiple layers of defense to safeguard your critical data and systems. With properly configured firewalls, intrusion detection systems, and secure communication channels, we ensure that your network remains protected against both internal and external threats.
              </p>
            </div>
          </div>
        </section>
        
        {/* Service Breakdown Section - Vertical Stack */}
        <section className="py-16 bg-zinc-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-display mb-4">
                Our Network Security Approach
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We implement multiple protective layers to ensure comprehensive security
              </p>
            </div>
            
            <div className="space-y-6">
              {securityServices.map((service, index) => (
                <div 
                  key={index}
                  className={`border-l-4 border-red-600 bg-zinc-900 rounded-r-lg shadow-md overflow-hidden transition-all duration-300 ${
                    expandedCard === index ? 'shadow-[0_0_15px_rgba(239,68,68,0.3)]' : ''
                  }`}
                  onMouseEnter={() => setExpandedCard(index)}
                  onMouseLeave={() => setExpandedCard(null)}
                >
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-zinc-800 text-red-500 flex items-center justify-center mr-4">
                        <service.icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                        <p className="text-gray-300 mt-1">{service.shortDescription}</p>
                        
                        {/* Expanded content */}
                        <div className={`mt-4 overflow-hidden transition-all duration-300 ${
                          expandedCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <div className="border-t border-zinc-700 pt-4">
                            <p className="text-gray-300">{service.fullDescription}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why It's Important Section */}
        <section className="py-16 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-display mb-4">
                Why is Network Security Important?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-800 p-8 rounded-xl shadow-sm border border-zinc-700 hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-red-400">Protection Against Attacks</h3>
                <p className="text-gray-300">
                  Prevents data breaches and unauthorized access from hackers or insiders. Robust network security prevents the theft of sensitive information and protects your business from ransomware and other malicious attacks.
                </p>
              </div>
              
              <div className="bg-zinc-800 p-8 rounded-xl shadow-sm border border-zinc-700 hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-red-400">Enhanced Productivity</h3>
                <p className="text-gray-300">
                  A secure network reduces downtime caused by cyberattacks, ensuring smooth business operations. When security incidents are prevented, your team can focus on core business activities rather than dealing with disruptions.
                </p>
              </div>
              
              <div className="bg-zinc-800 p-8 rounded-xl shadow-sm border border-zinc-700 hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-red-400">Regulatory Compliance</h3>
                <p className="text-gray-300">
                  Ensures your network adheres to necessary legal and industry standards. Many regulations require organizations to implement appropriate security controls to protect sensitive data. Proper network security helps meet these compliance requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-zinc-900 to-red-950/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold font-display mb-6">
              Secure Your Network Today
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Take the first step toward comprehensive network security with our expert team.
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

export default NetworkSecurity;
