
import { useEffect, useRef } from "react";
import { Server, LineChart, Code, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BusinessSection = () => {
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
    <section id="business-solutions" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full">FOR BUSINESS</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold font-display">
            Empowering Small Businesses with Cutting-Edge Tech
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Scalable, efficient solutions designed to help businesses of all sizes leverage digital
            technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 hover:shadow-md hover:scale-[1.01] transition-all">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-6">
              <Server size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">IT Consulting & Strategy</h3>
            <p className="text-gray-600 mb-6">
              Strategic IT consulting to align your technology investments with business goals and create a roadmap for success.
            </p>
            <Link to="/business/consulting" className="text-primary font-medium flex items-center gap-1 group">
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
            </Link>
          </div>
          
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 hover:shadow-md hover:scale-[1.01] transition-all">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 mb-6">
              <LineChart size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Business Intelligence</h3>
            <p className="text-gray-600 mb-6">
              Turn your data into actionable insights with advanced analytics, dashboards, and reporting tools customized for your business needs.
            </p>
            <Link to="/business/intelligence" className="text-primary font-medium flex items-center gap-1 group">
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
            </Link>
          </div>
          
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 hover:shadow-md hover:scale-[1.01] transition-all">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600 mb-6">
              <Code size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Custom Software Development</h3>
            <p className="text-gray-600 mb-6">
              Tailor-made software solutions designed specifically for your unique business requirements and industry challenges.
            </p>
            <Link to="/business/software" className="text-primary font-medium flex items-center gap-1 group">
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
            </Link>
          </div>
          
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400 hover:shadow-md hover:scale-[1.01] transition-all">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-100 text-red-600 mb-6">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Cybersecurity Solutions</h3>
            <p className="text-gray-600 mb-6">
              Protect your business with enterprise-grade security solutions, vulnerability assessments, and security training programs.
            </p>
            <Link to="/business/cybersecurity" className="text-primary font-medium flex items-center gap-1 group">
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
            </Link>
          </div>
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Technology Excellence 
                <br/>
                & Innovation
              </h3>
              <p className="text-gray-600 mb-6">
                Our experts will work with you to understand your specific needs and design the perfect solution for your business challenges.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Business meeting"
                className="rounded-lg shadow-lg w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
