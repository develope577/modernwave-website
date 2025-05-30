
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BarChart, ArrowRight, Target, Network, Flag, Settings, Cpu } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import { Link } from "react-router-dom";

const BusinessIntelligence = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-indigo-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 mb-6">
                  <BarChart size={32} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight text-balance">
                  Business Intelligence
                  <span className="gradient-text block">Solutions</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                  Transform your raw data into actionable insights with our advanced analytics, dashboards, and reporting tools customized for your business needs.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2 group" asChild>
                    <Link to="/consultation">
                      Schedule Consultation
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Business Intelligence Dashboard"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Aim, Process, and Goals Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Our Aim, Process, and Goals
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We're committed to helping businesses leverage technology as a true competitive advantage.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Our Aim */}
              <div className="bg-blue-50 rounded-xl p-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-6">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Aim</h3>
                <p className="text-gray-600">
                  To bridge the gap between business challenges and technological solutions, making advanced technology accessible and beneficial for businesses of all sizes. We aim to be trusted technology partners who understand both the technical landscape and business realities.
                </p>
              </div>
              
              {/* Our Process */}
              <div className="bg-purple-50 rounded-xl p-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-6">
                  <Network size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Process</h3>
                <p className="text-gray-600">
                  We follow a collaborative, transparent process that begins with deeply understanding your business needs. From consultation through implementation and ongoing support, we maintain clear communication, ensuring solutions are delivered on time and within budget while exceeding expectations.
                </p>
              </div>
              
              {/* Our Goals */}
              <div className="bg-indigo-50 rounded-xl p-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mb-6">
                  <Flag size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Goals</h3>
                <p className="text-gray-600">
                  Our goals extend beyond implementing technology—we aim to drive measurable business outcomes. Whether it's increasing operational efficiency, enhancing security posture, or enabling data-driven decision making, our focus is on delivering solutions that provide clear ROI and sustainable competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design section with blue border */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-2 border-blue-500 rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Advanced Analytics & Insights</h2>
                <p className="text-lg mb-4">
                  Our business intelligence solutions transform complex data into clear, actionable insights that drive better decision-making and business outcomes.
                </p>
                <p className="text-lg">
                  By leveraging cutting-edge analytics technology, we help your organization navigate through data complexity, identify key patterns, and make strategic decisions with confidence and precision.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Smart Systems & Intelligent Automation - NEW SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Smart Systems & Intelligent Automation
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Boost Efficiency. Reduce Manual Work. Automate Growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  We help modern businesses thrive by integrating intelligent systems that automate repetitive tasks, streamline operations, and enhance decision-making. Our IT team specializes in creating custom automation workflows, integrating AI tools into your core systems, and ensuring everything works together seamlessly—from CRMs and ERPs to customer support platforms and logistics.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Whether you're a startup scaling fast or an enterprise needing more agility, our solutions deliver smart performance at scale.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 shrink-0">
                      <Settings size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Process Automation</h3>
                      <p className="text-gray-600">
                        Streamline workflows and eliminate repetitive tasks
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 shrink-0">
                      <Cpu size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">AI Integration</h3>
                      <p className="text-gray-600">
                        Enhance systems with intelligent decision-making capabilities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <img
                  src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Smart automation system"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Turn Data into Insights
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our business intelligence solutions help you make smarter, data-driven decisions by transforming complex information into clear, actionable insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6v6H9z" /><path d="M5 5h2v2H5z" /><path d="M5 17h2v2H5z" /><path d="M17 5h2v2h-2z" /><path d="M17 17h2v2h-2z" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Custom Dashboards</h3>
                <p className="text-gray-600 mb-6">
                  Personalized dashboards designed specifically for your business needs, giving you a clear view of your key performance indicators.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M22 12h-4"/><path d="M6 12H2"/><path d="M12 6V2"/><path d="M12 22v-4"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
                <p className="text-gray-600 mb-6">
                  Advanced algorithms that analyze patterns in your data to forecast trends and help you stay ahead of market changes.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Integration</h3>
                <p className="text-gray-600 mb-6">
                  Seamlessly connect all your data sources into a centralized system, providing a comprehensive view of your business operations.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section - NEW */}
        <section className="py-16 bg-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Unlock the Power of Data
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Transform your business with insights that drive growth and innovation.
            </p>
            <Button 
              size="lg" 
              className="gap-2 group bg-indigo-600 hover:bg-indigo-700" 
              asChild
            >
              <Link to="/consultation">
                Talk to Us Today
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </section>
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default BusinessIntelligence;
