
import { useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
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

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold font-display">About Our Company</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
            <p className="text-lg text-gray-700">
              Delivering cutting-edge technology solutions since 2015, we design and develop innovative 
              applications and systems that transform businesses and enhance lives.
            </p>

            <h3 className="text-xl font-semibold">Our Expertise</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Innovation-Driven Development</h4>
                  <p className="text-gray-600">Creating forward-thinking solutions to solve the latest challenges.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Client-Focused Approach</h4>
                  <p className="text-gray-600">Tailoring our solutions to meet your specific needs and objectives.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Security-First Mindset</h4>
                  <p className="text-gray-600">Implementing robust protection measures in all our solutions.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Continuous Improvement</h4>
                  <p className="text-gray-600">Constantly refining our processes and technologies for better results.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img
              ref={imageRef}
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Team working together"
              className="rounded-lg shadow-xl opacity-0 translate-y-10 transition-all duration-700 delay-300 object-cover h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
