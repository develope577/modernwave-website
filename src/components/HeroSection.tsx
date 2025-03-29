import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-16">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_40%)]"></div>
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.1),transparent_30%)]"></div>
      </div>
      
      <div 
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 z-10 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="order-2 lg:order-1">
          <div 
            className={`transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-balance">
              Innovative Tech Solutions for{" "}
              <span className="gradient-text">Businesses & Consumers</span>
            </h1>
          </div>
          
          <div 
            className={`mt-6 transition-all duration-700 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg text-gray-600 max-w-lg">
              Transforming ideas into powerful technology solutions that drive growth and enhance everyday life.
            </p>
          </div>
          
          <div 
            className={`mt-8 flex flex-wrap gap-4 transition-all duration-700 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button size="lg" className="gap-2 group" asChild>
              <Link to="/business">
                Explore Business Solutions
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div 
          className={`order-1 lg:order-2 flex justify-center transition-all duration-700 delay-900 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-500/10 blur-3xl rounded-full transform -translate-x-1/4 -translate-y-1/4"></div>
            <NetworkAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

const NetworkAnimation = () => {
  return (
    <div className="w-72 h-72 md:w-96 md:h-96 relative">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Nodes */}
        <circle cx="100" cy="100" r="8" fill="#3B82F6" className="animate-pulse-slow" />
        <circle cx="50" cy="50" r="6" fill="#6366F1" />
        <circle cx="150" cy="50" r="6" fill="#8B5CF6" />
        <circle cx="50" cy="150" r="6" fill="#EC4899" />
        <circle cx="150" cy="150" r="6" fill="#F59E0B" />
        
        {/* Connections */}
        <line x1="100" y1="100" x2="50" y2="50" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.6" />
        <line x1="100" y1="100" x2="150" y2="50" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.6" />
        <line x1="100" y1="100" x2="50" y2="150" stroke="#EC4899" strokeWidth="1" strokeOpacity="0.6" />
        <line x1="100" y1="100" x2="150" y2="150" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.6" />
        <line x1="50" y1="50" x2="150" y2="50" stroke="#6366F1" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="50" y1="150" x2="150" y2="150" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="50" y1="50" x2="50" y2="150" stroke="#EC4899" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="150" y1="50" x2="150" y2="150" stroke="#8B5CF6" strokeWidth="1" strokeOpacity="0.4" />
      </svg>
    </div>
  );
};

export default HeroSection;
