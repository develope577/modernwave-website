
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Code, ArrowRight } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import { Link } from "react-router-dom";

const CustomSoftware = () => {
  const processRef = useRef<HTMLDivElement>(null);

  const scrollToProcess = () => {
    processRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-purple-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 mb-6">
                  <Code size={32} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight text-balance">
                  Custom Software
                  <span className="gradient-text block">Development</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                  Tailor-made software solutions designed specifically for your unique business requirements and industry challenges. We build flexible, scalable, and user-friendly applications.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2 group" asChild>
                    <Link to="/contact">
                      Start Your Project
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 group" onClick={scrollToProcess}>
                    Explore Our Process
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
              
              <div>
                <img
                  src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Software development team"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Development Process Section */}
        <section className="py-20" ref={processRef} id="our-development-process">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Our Development Process
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We follow a proven, transparent development methodology to ensure your custom software meets all requirements and exceeds expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Discovery & Planning</h3>
                <p className="text-gray-600">
                  We work closely with you to understand your business needs, goals, and requirements before creating a detailed project roadmap.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Design & Architecture</h3>
                <p className="text-gray-600">
                  Our team designs the optimal solution architecture and user experience, ensuring a scalable and intuitive software solution.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Development & Testing</h3>
                <p className="text-gray-600">
                  Using agile methodologies, we develop your solution with frequent reviews and rigorous testing to ensure quality and functionality.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-6">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-3">Deployment & Support</h3>
                <p className="text-gray-600">
                  We handle the smooth deployment of your software and provide ongoing support, maintenance, and updates as needed.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Custom Software Services
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                From web and mobile applications to enterprise software and integrations, we build solutions that drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Web Applications</h3>
                <p className="text-gray-600 mb-6">
                  Responsive, feature-rich web applications that work seamlessly across devices and provide excellent user experiences.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Mobile Applications</h3>
                <p className="text-gray-600 mb-6">
                  Native and cross-platform mobile apps that deliver superior performance and engaging experiences for your customers.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Enterprise Software</h3>
                <p className="text-gray-600 mb-6">
                  Robust, secure, and scalable enterprise solutions that streamline operations and improve business efficiency.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">API Development</h3>
                <p className="text-gray-600 mb-6">
                  Custom API development that enables seamless integration between your systems and third-party applications.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 12v5h16a2 2 0 0 1 0 4H3v-4"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Legacy System Modernization</h3>
                <p className="text-gray-600 mb-6">
                  Transform outdated systems into modern, efficient applications without losing critical functionality or data.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md hover:scale-[1.01] transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10h10V2Z"/><path d="M22 12h-10v10h10V12Z"/><path d="M12 12H2v10h10V12Z"/><path d="M22 2h-10v10h10V2Z"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Database Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Custom database design, development, and optimization to ensure your data is secure, accessible, and efficiently managed.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technology Excellence Section - NEW */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Technology Excellence & Innovation
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We leverage cutting-edge technologies and industry best practices to deliver exceptional software solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 shadow-sm border border-purple-100">
                <h3 className="text-2xl font-semibold mb-4">Modern Tech Stack</h3>
                <p className="text-gray-700 mb-4">
                  Our development team stays at the forefront of technology trends, utilizing the most appropriate and effective tech stack for each project. We carefully select technologies that balance innovation with stability, ensuring your software remains maintainable and extensible for years to come.
                </p>
                <p className="text-gray-700">
                  Whether your project requires cloud-native architecture, progressive web applications, or complex data processing capabilities, we have the expertise to implement solutions using proven, enterprise-grade technologies that align with your business goals.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 shadow-sm border border-indigo-100">
                <h3 className="text-2xl font-semibold mb-4">Collaborative Development Approach</h3>
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
        
        {/* New Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Transforming Your Business With Technology
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We help organizations achieve their goals through innovative custom software solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Future-Proof Technology</h3>
                <p className="text-gray-600 mb-6">
                  Our custom software solutions are built with scalability and future growth in mind. We use modern, proven technologies that ensure your software remains relevant and adaptable as your business evolves and market conditions change.
                </p>
                <p className="text-gray-600">
                  By investing in custom software, you're not just solving today's challenges—you're building a foundation that can grow and adapt to tomorrow's opportunities, giving your business a competitive advantage for years to come.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md">
                <h3 className="text-2xl font-semibold mb-4">ROI-Driven Development</h3>
                <p className="text-gray-600 mb-6">
                  We understand that software is an investment, and every investment should deliver measurable returns. Our development process is focused on creating solutions that directly address your business challenges, streamline operations, and create new opportunities for growth and revenue.
                </p>
                <p className="text-gray-600">
                  Throughout the development process, we maintain clear communication about how each feature and function ties back to your business objectives, ensuring that the final product delivers real, quantifiable value to your organization.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Case Study */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <span className="text-sm font-medium text-purple-600 bg-purple-50 px-4 py-1.5 rounded-full">Success Story</span>
                  <h3 className="text-2xl font-bold mt-4">Healthcare Provider Portal</h3>
                  <p className="text-gray-600 mt-4">
                    We developed a comprehensive patient management system for a healthcare network, enabling secure access to medical records, appointment scheduling, and billing information.
                  </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 mt-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-gray-700">Reduced administrative workload by 65%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 mt-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-gray-700">Improved patient satisfaction scores by 42%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 mt-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-gray-700">HIPAA-compliant with bank-level security</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 mt-1"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-gray-700">Seamless integration with existing systems</span>
                    </li>
                  </ul>
                  <Button className="mt-8 gap-2 group">
                    Read Full Case Study
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
                <div className="bg-purple-50 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Healthcare app interface"
                    className="w-full h-full object-cover"
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

export default CustomSoftware;
