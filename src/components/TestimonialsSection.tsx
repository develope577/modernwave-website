
import { useEffect, useRef, useState } from "react";

type Testimonial = {
  name: string;
  company: string;
  image: string;
  quote: string;
  category: "retail" | "healthcare" | "technology";
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    company: "Allcorp Apparel",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    quote: "Their digital transformation strategy increased our online sales by 215% within six months, while reducing operational costs.",
    category: "retail",
  },
  {
    name: "Michael Chen",
    company: "MediCare Health Services",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Implementation of a custom patient scheduling system reduced administrative time by 40% and improved patient satisfaction.",
    category: "healthcare",
  },
  {
    name: "Emma Rodriguez",
    company: "TechVisionary",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    quote: "Their innovative approach to our data visualization challenges helped us make better decisions in half the time.",
    category: "technology",
  },
  {
    name: "James Wilson",
    company: "StructureWise Architecture",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
    quote: "The custom project management tool they built has revolutionized how we track and complete client projects.",
    category: "retail",
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
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

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold font-display">Business Success Stories</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            See how our solutions have helped real businesses overcome challenges and achieve growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative">
              <div className="absolute top-4 left-4 bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded">
                Retail
              </div>
              <img
                src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Retail business"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Allcorp Apparel's Digital Transformation</h3>
              <p className="text-gray-600 mb-4">
                How a retail clothing retailer increased online sales by 215% with our e-commerce platform and business management system.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-blue-600">
                    Results:
                  </span>
                  <span className="ml-2 text-sm font-medium">+215% Sales</span>
                </div>
                <span className="text-xs text-gray-500">3 months ago</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative">
              <div className="absolute top-4 left-4 bg-indigo-100 text-indigo-600 text-xs font-medium px-2 py-1 rounded">
                Healthcare
              </div>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Healthcare facility"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">MediCare Health's Automated Scheduling</h3>
              <p className="text-gray-600 mb-4">
                Implementation of a custom patient scheduling system that reduced administrative time by 40% and improved patient satisfaction.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-indigo-600">
                    Results:
                  </span>
                  <span className="ml-2 text-sm font-medium">-40% Time Savings</span>
                </div>
                <span className="text-xs text-gray-500">2 months ago</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-sm p-8 md:p-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
          <div className="flex flex-col items-center text-center">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-6 text-primary"
            >
              <path
                d="M14.028 6C7.412 10.341 3 19.187 3 29V30H13V29C13 22.373 15.5 17.173 20 14V6H14.028Z"
                fill="currentColor"
                fillOpacity="0.2"
              />
              <path
                d="M32.028 6C25.412 10.341 21 19.187 21 29V30H31V29C31 22.373 33.5 17.173 38 14V6H32.028Z"
                fill="currentColor"
                fillOpacity="0.2"
              />
              <path
                d="M14.028 6C7.412 10.341 3 19.187 3 29V30H13V29C13 22.373 15.5 17.173 20 14V6H14.028Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M32.028 6C25.412 10.341 21 19.187 21 29V30H31V29C31 22.373 33.5 17.173 38 14V6H32.028Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            
            <div className="relative w-full max-w-3xl">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 absolute inset-0 ${
                    index === activeIndex
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8 pointer-events-none"
                  }`}
                >
                  <p className="text-xl md:text-2xl font-display italic text-gray-700 mb-8">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-gray-200"
                    />
                    <div className="ml-4 text-left">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-primary w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
