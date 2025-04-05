
import { useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Server, Shield, Layers, Lock, BarChart } from "lucide-react";

const NetworkSecurity = () => {
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
                Complete Network Security Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Secure your business network from cyber threats with comprehensive protection
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
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-600">
                Network security is essential for protecting your business from increasingly sophisticated cyber threats. Our comprehensive network security solutions create multiple layers of defense to safeguard your critical data and systems. With properly configured firewalls, intrusion detection systems, and secure communication channels, we ensure that your network remains protected against both internal and external threats.
              </p>
            </div>
          </div>
        </section>
        
        {/* Service Breakdown Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-display mb-4">
                Our Network Security Approach
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We implement multiple protective layers to ensure comprehensive security
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-200">
                <div className="w-14 h-14 bg-red-100 rounded-lg text-red-600 flex items-center justify-center mb-4 mx-auto">
                  <Shield size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Firewall Configuration & Implementation</h3>
                <p className="text-gray-600">
                  Deploying and configuring firewalls that act as a barrier between your internal network and potential external threats. This also includes setting up access control rules based on business needs.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-200">
                <div className="w-14 h-14 bg-red-100 rounded-lg text-red-600 flex items-center justify-center mb-4 mx-auto">
                  <Server size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Intrusion Detection & Prevention</h3>
                <p className="text-gray-600">
                  IDS/IPS systems monitor network traffic for suspicious activity and potential threats, automatically responding to mitigate attacks in real-time.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-200">
                <div className="w-14 h-14 bg-red-100 rounded-lg text-red-600 flex items-center justify-center mb-4 mx-auto">
                  <Layers size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Network Segmentation & Secure Communications</h3>
                <p className="text-gray-600">
                  Dividing networks into smaller, isolated segments to contain security breaches and reduce the impact of any potential attack. Securing communication channels ensures that sensitive data is transmitted safely.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-200">
                <div className="w-14 h-14 bg-red-100 rounded-lg text-red-600 flex items-center justify-center mb-4 mx-auto">
                  <Lock size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">VPNs and Remote Access Solutions</h3>
                <p className="text-gray-600">
                  Setting up Virtual Private Networks (VPNs) to ensure secure, encrypted communication for remote workers and secure access to internal resources.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-200">
                <div className="w-14 h-14 bg-red-100 rounded-lg text-red-600 flex items-center justify-center mb-4 mx-auto">
                  <BarChart size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Continuous Monitoring & Regular Audits</h3>
                <p className="text-gray-600">
                  Network security is an ongoing process. Continuous monitoring ensures early detection of threats. Regular audits ensure that security policies and systems are updated to counter evolving cyber threats.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Detailed Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-display mb-4">
                Our Detailed Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                How we implement and maintain robust network security for your business
              </p>
            </div>
            
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Firewall Deployment & Configuration</h3>
                  <p className="text-gray-600 mb-4">
                    We implement next-generation firewalls with advanced traffic filtering capabilities to protect your network perimeter. Our expert team configures granular access control rules based on your specific business requirements and security policies.
                  </p>
                  <p className="text-gray-600">
                    This includes application-aware inspection, deep packet inspection, and intelligent threat detection to block malicious traffic before it enters your network.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="aspect-video flex items-center justify-center bg-red-100 rounded-lg text-red-600 mb-4">
                    <Shield size={64} />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
                <div className="md:order-2">
                  <h3 className="text-2xl font-semibold mb-4">IDS/IPS Setup & Monitoring</h3>
                  <p className="text-gray-600 mb-4">
                    We deploy intrusion detection and prevention systems at strategic points throughout your network to monitor for suspicious activities and known attack patterns. These systems continuously analyze network traffic, comparing it against databases of known threats and identifying anomalous behavior.
                  </p>
                  <p className="text-gray-600">
                    When threats are detected, the system can automatically block malicious traffic and alert security personnel for further investigation and response.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl md:order-1">
                  <div className="aspect-video flex items-center justify-center bg-red-100 rounded-lg text-red-600 mb-4">
                    <Server size={64} />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Secure Communications & Network Segmentation</h3>
                  <p className="text-gray-600 mb-4">
                    We implement encryption protocols to secure data in transit, ensuring that sensitive information cannot be intercepted or compromised. Our network segmentation strategy divides your network into logical zones based on security requirements, limiting lateral movement in case of a breach.
                  </p>
                  <p className="text-gray-600">
                    This approach contains potential security incidents to specific segments, preventing attackers from gaining access to your entire network and critical assets.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="aspect-video flex items-center justify-center bg-red-100 rounded-lg text-red-600 mb-4">
                    <Layers size={64} />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
                <div className="md:order-2">
                  <h3 className="text-2xl font-semibold mb-4">VPN Configuration</h3>
                  <p className="text-gray-600 mb-4">
                    We set up secure Virtual Private Networks to create encrypted tunnels for remote access to your corporate resources. Our VPN solutions use strong authentication methods and encryption to ensure that only authorized users can access your network from remote locations.
                  </p>
                  <p className="text-gray-600">
                    This is particularly important in today's hybrid work environment, where employees need secure connections from various locations without compromising security.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl md:order-1">
                  <div className="aspect-video flex items-center justify-center bg-red-100 rounded-lg text-red-600 mb-4">
                    <Lock size={64} />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Ongoing Monitoring & Audits</h3>
                  <p className="text-gray-600 mb-4">
                    We implement continuous monitoring systems that provide real-time visibility into your network traffic and security events. Our security operations team analyzes logs, alerts, and security incidents to identify potential threats and vulnerabilities.
                  </p>
                  <p className="text-gray-600">
                    Regular security audits assess the effectiveness of your network security controls, identify gaps, and ensure compliance with relevant regulations and standards. This ongoing process helps maintain a strong security posture as threats evolve.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="aspect-video flex items-center justify-center bg-red-100 rounded-lg text-red-600 mb-4">
                    <BarChart size={64} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why It's Important Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-display mb-4">
                Why is Network Security Important?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Protection Against Attacks</h3>
                <p className="text-gray-600">
                  Prevents data breaches and unauthorized access from hackers or insiders. Robust network security prevents the theft of sensitive information and protects your business from ransomware and other malicious attacks.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Enhanced Productivity</h3>
                <p className="text-gray-600">
                  A secure network reduces downtime caused by cyberattacks, ensuring smooth business operations. When security incidents are prevented, your team can focus on core business activities rather than dealing with disruptions.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Regulatory Compliance</h3>
                <p className="text-gray-600">
                  Ensures your network adheres to necessary legal and industry standards. Many regulations require organizations to implement appropriate security controls to protect sensitive data. Proper network security helps meet these compliance requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold font-display mb-6">
              Secure Your Network Today
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
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
