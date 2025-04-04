
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HelpCircle, Server, Cloud, BarChart } from "lucide-react";

const ManagedITServicesSection = () => {
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

  const services = [
    {
      icon: HelpCircle,
      title: "Tech Support",
      description: "Expert troubleshooting, bug fixes, and resolution of software issues to keep your business running smoothly."
    },
    {
      icon: Server,
      title: "System Setup & Integration",
      description: "Professional installation of software, network configuration, and seamless integration of new hardware."
    },
    {
      icon: Cloud,
      title: "Cloud & Remote IT Management",
      description: "Comprehensive management of servers, cloud migrations, and reliable remote technical assistance."
    },
    {
      icon: BarChart,
      title: "Ongoing Maintenance & Monitoring",
      description: "Proactive preventive maintenance, continuous performance monitoring, and timely updates."
    }
  ];

  return (
    <section id="managed-it-services" className="py-20 bg-blue-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <span className="text-sm font-medium text-blue-600 bg-blue-100 px-4 py-1.5 rounded-full">END-TO-END SOLUTIONS</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold font-display">
            🖥️ Managed IT Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT support and management to keep your business technology running at peak performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 hover:shadow-md hover:scale-[1.01] transition-all"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-6">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
            <Link to="/consultation">Schedule Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ManagedITServicesSection;
