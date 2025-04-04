
import { useEffect, useRef } from "react";
import { Home, Smartphone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ConsumerSection = () => {
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
    <section id="consumer-solutions" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <span className="text-sm font-medium text-green-600 bg-green-100 px-4 py-1.5 rounded-full">FOR CONSUMERS</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold font-display">
            Smart Tech for Everyday Needs
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Intuitive personal solutions that make daily life more efficient, connected, and enjoyable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 hover:shadow-md hover:scale-[1.01] transition-all">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 text-green-600 mb-6">
              <Home size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Smart Home Integration</h3>
            <p className="text-gray-600 mb-6">
              Connect and control your home devices with intuitive, voice-driven smart home solutions.
            </p>
            <Link to="/consumer" className="text-green-600 font-medium flex items-center gap-1 group">
              Explore features
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
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 text-green-600 mb-6">
              <Smartphone size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Mobile Applications</h3>
            <p className="text-gray-600 mb-6">
              Powerful apps designed to streamline activities, help you stay organized, and improve productivity.
            </p>
            <Link to="/consumer" className="text-green-600 font-medium flex items-center gap-1 group">
              Explore features
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
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 text-green-600 mb-6">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Digital Security</h3>
            <p className="text-gray-600 mb-6">
              Protect your digital life with user-friendly yet powerful security solutions for all your devices.
            </p>
            <Link to="/consumer" className="text-green-600 font-medium flex items-center gap-1 group">
              Explore features
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
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Technology that adapts to your lifestyle</h3>
            <p className="text-gray-600 mb-6">
              Our consumer solutions are designed to be adaptive, affordable, and seamlessly integrate into your daily routine.
            </p>
            <Button variant="green" size="lg" asChild>
              <Link to="/consultation">Try Consumer Tech</Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Smart technology"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsumerSection;
