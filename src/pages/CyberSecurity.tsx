
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight text-balance">
                  Cybersecurity
                  <span className="gradient-text block">Solutions</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                  Protect your business with enterprise-grade security solutions, vulnerability assessments, and security training programs. Stay ahead of threats and secure your valuable data.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2 group">
                    Get Security Assessment
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 group">
                    View Security Solutions
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
              
              <div>
                <img
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Cybersecurity"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Security Threats Section - Modified to paragraph format with smaller paragraphs */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Protecting Against Modern Threats
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Today's cyberthreats are sophisticated and constantly evolving. Our security solutions help you stay protected from ransomware, phishing, insider threats, and more.
              </p>
            </div>
            
            <div className="prose prose-lg max-w-4xl mx-auto">
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4 flex items-center text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 7h-3a2 2 0 0 0-2 2v.5"/>
                    <path d="M14 10.5V14"/>
                    <path d="M14 18v.5a2 2 0 0 0 2 2h3"/>
                    <path d="M3 7h3a2 2 0 0 1 2 2v.5"/>
                    <path d="M8 10.5V14"/>
                    <path d="M8 18v.5a2 2 0 0 1-2 2H3"/>
                    <rect width="18" height="18" x="3" y="3" rx="2"/>
                    <circle cx="12" cy="12" r="1"/>
                  </svg>
                  Ransomware Protection
                </h3>
                
                <h4 className="text-lg font-medium text-gray-900 mt-4">The Growing Ransomware Threat</h4>
                <p className="text-gray-700 mb-4">
                  Ransomware attacks have become one of the most significant threats to organizations worldwide. Attackers encrypt critical data and demand payment for its release, often causing operational shutdowns and financial losses. Our comprehensive protection combines multiple defensive layers that continuously monitor for suspicious encryption behaviors and unusual file activities.
                </p>
                
                <h4 className="text-lg font-medium text-gray-900 mt-4">Recovery and Resilience</h4>
                <p className="text-gray-700">
                  We implement automated backup solutions that create secure, immutable copies of your critical data that remain protected from ransomware encryption. In the event of an attack, our rapid recovery protocols minimize downtime and data loss, allowing your business to resume operations quickly while our security team contains and eliminates the threat.
                </p>
              </div>
              
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4 flex items-center text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="16" height="20" x="4" y="2" rx="2"/>
                    <path d="M10 2v4h4V2"/>
                    <path d="M18 18a4 4 0 0 0-4-4"/>
                    <path d="M10 18a4 4 0 0 1-4-4"/>
                    <line x1="12" x2="12" y1="10" y2="14"/>
                  </svg>
                  Phishing Defense
                </h3>
                
                <h4 className="text-lg font-medium text-gray-900 mt-4">Advanced Email Protection</h4>
                <p className="text-gray-700 mb-4">
                  Phishing remains the entry point for many successful cyberattacks, with attackers using increasingly sophisticated social engineering techniques. Our email filtering technology uses machine learning algorithms to identify and quarantine suspicious messages before they reach user inboxes, preventing credential theft and malware installation.
                </p>
                
                <h4 className="text-lg font-medium text-gray-900 mt-4">Human-Centered Security</h4>
                <p className="text-gray-700">
                  Technology alone isn't enough. Our comprehensive security awareness training educates employees on recognizing phishing attempts and following proper security protocols. We conduct regular simulated phishing campaigns to test and reinforce this training, providing measurable improvement in your organization's human firewall over time.
                </p>
              </div>
              
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4 flex items-center text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" x2="12" y1="8" y2="12"/>
                    <line x1="12" x2="12.01" y1="16" y2="16"/>
                  </svg>
                  Vulnerability Management
                </h3>
                
                <h4 className="text-lg font-medium text-gray-900 mt-4">Proactive Security Assessment</h4>
                <p className="text-gray-700 mb-4">
                  Unpatched vulnerabilities provide attackers with an open door to your network. Our vulnerability management program takes a proactive approach to identifying security gaps before they can be exploited. We conduct regular assessments across your entire IT infrastructure, including networks, servers, applications, and endpoints.
                </p>
                
                <h4 className="text-lg font-medium text-gray-900 mt-4">Strategic Remediation</h4>
                <p className="text-gray-700">
                  Our penetration testing team simulates real-world attacks to discover vulnerabilities that automated tools might miss. We implement a structured patch management process that prioritizes updates based on risk level, ensuring critical security patches are applied promptly while minimizing disruption to your business operations.
                </p>
              </div>
              
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4 flex items-center text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  Insider Threat Protection
                </h3>
                
                <h4 className="text-lg font-medium text-gray-900 mt-4">Behavioral Analytics</h4>
                <p className="text-gray-700 mb-4">
                  Some of the most damaging security incidents originate from within organizations. Our insider threat protection deploys user behavior analytics that establish normal activity patterns for each user and alert security teams when anomalous behaviors are detected, helping to identify potential threats before they cause damage.
                </p>
                
                <h4 className="text-lg font-medium text-gray-900 mt-4">Access Control and Data Protection</h4>
                <p className="text-gray-700">
                  Our access control management solutions implement the principle of least privilege, ensuring employees only have access to resources necessary for their roles. Additionally, our data loss prevention tools monitor and control the movement of sensitive information across your network, preventing unauthorized exfiltration of critical data.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* IT Support Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Comprehensive IT Support
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our IT support services ensure your systems run smoothly, securely, and efficiently, allowing you to focus on your core business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.5 9.4 7.5 4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Managed IT Services</h3>
                <p className="text-gray-600">
                  Proactive monitoring, maintenance, and management of your IT infrastructure to prevent issues before they impact your business.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h4"/><path d="M14 8h4"/><path d="M6 12h4"/><path d="M14 12h4"/><path d="M6 16h4"/><path d="M14 16h4"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Help Desk Support</h3>
                <p className="text-gray-600">
                  Responsive, knowledgeable technical support for your team, available when you need it to quickly resolve issues and minimize downtime.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Network Management</h3>
                <p className="text-gray-600">
                  Design, implementation, and ongoing management of secure, high-performance networks optimized for your business needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Security Training Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Security Awareness Training</h3>
                  <p className="text-gray-600 mb-6">
                    Empower your employees to be your first line of defense against cyber threats with comprehensive security awareness training programs.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 mt-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-gray-700">Interactive online training modules</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 mt-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-gray-700">Simulated phishing campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 mt-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-gray-700">Security best practices workshops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 mt-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-gray-700">Ongoing security updates and newsletters</span>
                    </li>
                  </ul>
                  <Button size="lg" className="gap-2 group">
                    Learn About Training Programs
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
                <div className="flex justify-center md:justify-end">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Security training"
                    className="rounded-lg shadow-lg w-full max-w-md object-cover"
                  />
                </div>
              </div>
            </div>
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
