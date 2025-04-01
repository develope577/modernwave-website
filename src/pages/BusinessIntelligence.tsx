
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BarChart, ArrowRight } from "lucide-react";
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
                    <Link to="/contact">Schedule Consultation</Link>
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
        
        {/* Our Aim, Process and Goals Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Our Aim, Process, and Goals
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We aim to deliver exceptional business intelligence solutions through a proven methodology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mb-6">
                  <span className="font-bold text-xl">01</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  We're committed to transforming your business data into strategic assets that drive growth, improve decision-making, and create competitive advantages in your market.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mb-6">
                  <span className="font-bold text-xl">02</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Process</h3>
                <p className="text-gray-600">
                  We follow a structured approach - from understanding your unique business needs to data integration, dashboard development, and continuous optimization based on your feedback.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mb-6">
                  <span className="font-bold text-xl">03</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Goals</h3>
                <p className="text-gray-600">
                  Our ultimate goal is to help you make smarter, faster decisions by providing real-time visibility into your operations and turning complex data into clear, actionable insights.
                </p>
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
        
        {/* Case Study Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Success Stories
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                See how our business intelligence solutions have helped organizations transform their data into strategic assets.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full">Case Study</span>
                  <h3 className="text-2xl font-bold mt-4">Retail Chain Analytics Transformation</h3>
                  <p className="text-gray-600 mt-4">
                    A multi-location retail business struggling with inventory management and sales forecasting implemented our BI solution, resulting in a 35% reduction in overstock and a 28% increase in sales through data-driven decision making.
                  </p>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-gray-700">Integrated 5 different data sources</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-gray-700">Custom inventory forecasting model</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-gray-700">Real-time sales performance dashboards</span>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Retail analytics dashboard"
                    className="rounded-lg shadow-md"
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

export default BusinessIntelligence;
