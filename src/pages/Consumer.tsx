
import { useEffect, useRef } from "react";
import { ArrowRight, Smartphone, Home, ShieldCheck, Laptop, Headphones, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Consumer = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
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

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-green-50 to-white py-24" ref={heroRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
                <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight text-balance">
                  Smart Technology for
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-400 block"> Your Everyday Life</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                  Discover intuitive, user-friendly technology solutions designed to simplify your daily activities and enhance your digital experience.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2 group bg-green-600 hover:bg-green-700" asChild>
                    <Link to="/contact">
                      Explore Products
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 group text-green-600 border-green-600 hover:bg-green-50" asChild>
                    <Link to="/contact">
                      View Applications
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Smart devices and technology"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Products Grid Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Consumer Technology Solutions
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                From smart home automation to digital security, our consumer-focused solutions make technology accessible and beneficial for everyone.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Product 1 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:scale-[1.01] transition-all group">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Smart home devices"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100 text-green-600 mb-4">
                    <Home size={20} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Smart Home Integration</h3>
                  <p className="text-gray-600 mb-6">
                    Connect and control your home devices with intuitive, voice-driven smart home solutions. Automate lighting, climate control, security, and entertainment systems.
                  </p>
                  <a href="#" className="text-green-600 font-medium flex items-center gap-1 group">
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
              
              {/* Product 2 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:scale-[1.01] transition-all group">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Mobile application"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100 text-green-600 mb-4">
                    <Smartphone size={20} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Mobile Applications</h3>
                  <p className="text-gray-600 mb-6">
                    Powerful apps designed to streamline activities, help you stay organized, and improve productivity. User-friendly interfaces with seamless device integration.
                  </p>
                  <a href="#" className="text-green-600 font-medium flex items-center gap-1 group">
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
              
              {/* Product 3 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:scale-[1.01] transition-all group">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1562813733-b31f0941b2b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Digital security"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100 text-green-600 mb-4">
                    <ShieldCheck size={20} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Digital Security</h3>
                  <p className="text-gray-600 mb-6">
                    Protect your digital life with user-friendly yet powerful security solutions for all your devices. Includes identity protection and secure cloud backups.
                  </p>
                  <a href="#" className="text-green-600 font-medium flex items-center gap-1 group">
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
              
              {/* Product 4 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:scale-[1.01] transition-all group">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Productivity software"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100 text-green-600 mb-4">
                    <Laptop size={20} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Productivity Software</h3>
                  <p className="text-gray-600 mb-6">
                    Streamline your daily tasks and boost efficiency with our intuitive productivity tools designed for work, education, and personal organization.
                  </p>
                  <a href="#" className="text-green-600 font-medium flex items-center gap-1 group">
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
              
              {/* Product 5 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:scale-[1.01] transition-all group">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1520170350707-b2da59970118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Entertainment devices"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100 text-green-600 mb-4">
                    <Headphones size={20} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Smart Entertainment</h3>
                  <p className="text-gray-600 mb-6">
                    Elevate your entertainment experience with integrated audio, video, and streaming solutions that work seamlessly across all your devices.
                  </p>
                  <a href="#" className="text-green-600 font-medium flex items-center gap-1 group">
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
              
              {/* Product 6 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:scale-[1.01] transition-all group">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Smart energy solutions"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100 text-green-600 mb-4">
                    <Zap size={20} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Energy Management</h3>
                  <p className="text-gray-600 mb-6">
                    Smart energy solutions that help you optimize consumption, reduce utility bills, and minimize your environmental impact.
                  </p>
                  <a href="#" className="text-green-600 font-medium flex items-center gap-1 group">
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
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Why Our Consumer Tech Stands Out
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We design our consumer technology with a focus on user experience, seamless integration, and practical benefits for everyday life.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Person using technology"
                  className="rounded-lg shadow-xl"
                />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    User-Centered Design
                  </h3>
                  <p className="text-gray-600 ml-11">
                    Our products are designed with real users in mind, focusing on intuitive interfaces and simple user experiences that don't require technical expertise.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    Seamless Integration
                  </h3>
                  <p className="text-gray-600 ml-11">
                    All our products work together harmoniously across different platforms and devices, creating a unified technology ecosystem in your home.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    Privacy-Focused
                  </h3>
                  <p className="text-gray-600 ml-11">
                    We prioritize your data privacy and security, with transparent policies and advanced protection measures built into every product.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    Continuous Innovation
                  </h3>
                  <p className="text-gray-600 ml-11">
                    Our products evolve with regular updates and new features, ensuring they remain current with the latest technological advancements.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Button className="gap-2 group bg-green-600 hover:bg-green-700" asChild>
                    <Link to="/contact">
                      Discover All Features
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                How Our Technology Adapts to Your Lifestyle
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our consumer solutions are designed to be adaptive, affordable, and seamlessly integrate into your daily routine.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m15 9-6 6"></path>
                    <path d="m9 9 6 6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Simplifies Complexity</h3>
                <p className="text-gray-600">
                  Our technology simplifies complex processes, making advanced features accessible to users of all technical abilities.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Personalized Experience</h3>
                <p className="text-gray-600">
                  Adaptive learning technology creates personalized experiences that evolve based on your preferences and usage patterns.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect x="2" y="6" width="20" height="16" rx="2"></rect>
                    <path d="M6 12h12"></path>
                    <path d="M6 16h12"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Time-Saving</h3>
                <p className="text-gray-600">
                  Our products are designed to save you time on routine tasks, giving you more freedom to focus on what matters most to you.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl font-bold font-display mb-4">Ready to transform your digital lifestyle?</h2>
                <p className="text-white/90 max-w-xl">
                  Discover how our consumer technology solutions can make your everyday life more connected, efficient, and enjoyable.
                </p>
              </div>
              <div className="shrink-0">
                <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-white/90 border-none" asChild>
                  <Link to="/contact">
                    Get Started Today
                  </Link>
                </Button>
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

export default Consumer;
