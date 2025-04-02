import React from "react";
import { Shield, Lock, Users } from "lucide-react"; // Ensure we have necessary icons
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const CyberSecurity = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-red-100 to-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight text-balance">
                  Protect Your Business with
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-400 block"> Advanced Cybersecurity</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                  Safeguard your digital assets with our comprehensive cybersecurity solutions. We offer cutting-edge protection against evolving threats.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="#services" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-600 text-primary-foreground hover:bg-red-600/90 h-11 rounded-md px-8 text-white">
                    Explore Services
                  </a>
                  <a href="#contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 text-red-600 border-red-600 hover:bg-red-50">
                    Get a Free Consultation
                  </a>
                </div>
              </div>
              
              <div>
                <img
                  src="https://images.unsplash.com/photo-1548677545-c52dca9a3a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                  alt="Cybersecurity illustration"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Why It Matters Section - Now with border */}
        <section className="py-16 bg-red-50 border border-red-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Why Cybersecurity Matters</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                In today's digital landscape, cybersecurity isn't just an IT concern—it's a business imperative. The threats are evolving, and so must your defenses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Made cards smaller by adjusting padding and font sizes */}
              <div className="bg-red-600 text-white rounded-xl p-5 shadow-md">
                <div className="text-3xl font-bold mb-2">60%</div>
                <p className="text-sm">of small businesses that suffer a cyber attack go out of business within six months</p>
              </div>
              
              <div className="bg-red-600 text-white rounded-xl p-5 shadow-md">
                <div className="text-3xl font-bold mb-2">$4.35M</div>
                <p className="text-sm">average cost of a data breach in 2022, a record high</p>
              </div>
              
              <div className="bg-red-600 text-white rounded-xl p-5 shadow-md">
                <div className="text-3xl font-bold mb-2">300%</div>
                <p className="text-sm">increase in reported cybercrimes since the pandemic began</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">Our Cybersecurity Services</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions to protect your business from cyber threats, ensuring data security and compliance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-100 text-red-600 mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Vulnerability Assessments</h3>
                <p className="text-gray-600 mb-4">
                  Identify weaknesses in your systems with our thorough assessment services.
                </p>
                <a href="#contact" className="text-red-600 font-medium flex items-center gap-1 group">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
              
              {/* Service 2 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-100 text-red-600 mb-4">
                  <Lock size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Incident Response Planning</h3>
                <p className="text-gray-600 mb-4">
                  Prepare for the unexpected with a robust incident response plan tailored to your business.
                </p>
                <a href="#contact" className="text-red-600 font-medium flex items-center gap-1 group">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
              
              {/* Service 3 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-100 text-red-600 mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Security Awareness Training</h3>
                <p className="text-gray-600 mb-4">
                  Empower your employees to be the first line of defense with our comprehensive training programs.
                </p>
                <a href="#contact" className="text-red-600 font-medium flex items-center gap-1 group">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technology Excellence Section - Based on the provided image */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">Technology Excellence & Innovation</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We leverage cutting-edge technologies and industry best practices to deliver exceptional
                software solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Modern Tech Stack</h3>
                <p className="text-gray-700 mb-4">
                  Our development team stays at the forefront of technology trends, utilizing the most appropriate and effective tech stack for each project. We carefully select technologies that balance innovation with stability, ensuring your software remains maintainable and extensible for years to come.
                </p>
                <p className="text-gray-700">
                  Whether your project requires cloud-native architecture, progressive web applications, or complex data processing capabilities, we have the expertise to implement solutions using proven, enterprise-grade technologies that align with your business goals.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Collaborative Development Approach</h3>
                <p className="text-gray-700 mb-4">
                  We believe the best software is created through close collaboration between developers and business stakeholders. Our agile development methodology emphasizes regular communication, iterative development cycles, and continuous feedback to ensure the final product truly addresses your business needs.
                </p>
                <p className="text-gray-700">
                  Throughout the development process, you'll have visibility into progress through regular demos, sprint reviews, and transparent project management tools. This collaborative approach not only ensures alignment with your vision but also allows for flexibility and adaptation as requirements evolve.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-red-500 to-orange-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl font-bold font-display mb-4">Secure Your Future Today</h2>
                <p className="text-white/90 max-w-xl">
                  Take the first step towards a secure digital environment. Contact us to discuss your cybersecurity needs and how we can help.
                </p>
              </div>
              <div className="shrink-0">
                <a href="#contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-red-600 hover:bg-white/90 border-none h-11 rounded-md px-8">
                  Get Started Now
                </a>
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
