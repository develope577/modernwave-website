
import { useEffect, useRef } from "react";
import { ArrowRight, Smartphone, Home, ShieldCheck, Laptop, Headphones, Zap, Code, Pen, Database, Layers, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Card, CardContent } from "@/components/ui/card";

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
                    alt="Full-Cycle App Development"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100 text-green-600 mb-4">
                    <Code size={20} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Full-Cycle App Development</h3>
                  <p className="text-gray-600 mb-6">
                    We provide end-to-end development services, from brainstorming and prototyping to full-scale deployment and post-launch support. Whether you have an idea or need an expert team to build your app from scratch, we handle everything—including coding, integrations, and performance optimization.
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
                    alt="AI & Smart Features Integration"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100 text-green-600 mb-4">
                    <Smartphone size={20} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">AI & Smart Features Integration</h3>
                  <p className="text-gray-600 mb-6">
                    We integrate AI-driven automation, chatbots, recommendation engines, and predictive analytics to enhance user experience. Our solutions allow apps to learn from user behavior to provide smart suggestions, automated workflows, and real-time data insights.
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
                    alt="User Experience & UI/UX Design"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100 text-green-600 mb-4">
                    <Pen size={20} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">User Experience & UI/UX Design</h3>
                  <p className="text-gray-600 mb-6">
                    A great app isn't just about functionality—it's about an intuitive, seamless experience that keeps users engaged. Our design team creates visually appealing, easy-to-navigate interfaces that make apps enjoyable to use.
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
                    alt="Cross-Platform Development"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100 text-green-600 mb-4">
                    <Laptop size={20} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Cross-Platform Development</h3>
                  <p className="text-gray-600 mb-6">
                    We develop apps for iOS, Android, and Web, ensuring a consistent experience across all devices. Whether it's a native, hybrid, or progressive web app (PWA), we tailor the solution to fit your audience and business goals.
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
                    alt="Secure & Scalable Cloud Solutions"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100 text-green-600 mb-4">
                    <Database size={20} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Secure & Scalable Cloud Solutions</h3>
                  <p className="text-gray-600 mb-6">
                    Your app needs to be fast, reliable, and scalable as your user base grows. We implement cloud infrastructure, secure data encryption, and efficient backend solutions to ensure high performance and data protection.
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
                    alt="E-Commerce & Payment Integrations"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100 text-green-600 mb-4">
                    <Layers size={20} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">E-Commerce & Payment Integrations</h3>
                  <p className="text-gray-600 mb-6">
                    For apps that require transactions, we integrate secure payment gateways, subscription management, and seamless checkout experiences to enhance user convenience while maintaining security compliance.
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
        
        {/* How Our Services Work Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                How Our Services Work
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our streamlined process ensures your app idea becomes reality with efficiency and quality at every step.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 hidden md:block"></div>
              
              {/* Step 1 */}
              <div className="relative z-10 mb-12 md:mb-0">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
                    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 md:ml-auto md:mr-0 max-w-md">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4 md:ml-auto md:mr-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">You start with an idea</h3>
                        <p className="text-gray-600">
                          Share your vision with us through consultation. We'll discuss requirements, audience, and goals to establish a clear roadmap.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center z-10 mx-auto md:mx-0 mb-4 md:mb-0">
                    <span className="font-bold">1</span>
                  </div>
                  
                  <div className="md:w-1/2 hidden md:block"></div>
                </div>
              </div>
              
              {/* Arrow down */}
              <div className="flex justify-center my-4 md:my-6">
                <ArrowDown className="text-green-500 animate-bounce" />
              </div>
              
              {/* Step 2 */}
              <div className="relative z-10 mb-12 md:mb-0">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 hidden md:block"></div>
                  
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center z-10 mx-auto md:mx-0 mb-4 md:mb-0">
                    <span className="font-bold">2</span>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12">
                    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 max-w-md">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                          <Pen size={24} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">We design the UI/UX</h3>
                        <p className="text-gray-600">
                          Our designers create wireframes and prototypes focusing on intuitive navigation and engaging visual elements for your target audience.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              
              {/* Arrow down */}
              <div className="flex justify-center my-4 md:my-6">
                <ArrowDown className="text-green-500 animate-bounce" />
              </div>
              
              {/* Step 3 */}
              <div className="relative z-10 mb-12 md:mb-0">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
                    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 md:ml-auto md:mr-0 max-w-md">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4 md:ml-auto md:mr-0">
                          <Code size={24} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">We develop the app</h3>
                        <p className="text-gray-600">
                          Our expert development team builds your app using the latest technologies and best practices, with regular progress updates.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center z-10 mx-auto md:mx-0 mb-4 md:mb-0">
                    <span className="font-bold">3</span>
                  </div>
                  
                  <div className="md:w-1/2 hidden md:block"></div>
                </div>
              </div>
              
              {/* Arrow down */}
              <div className="flex justify-center my-4 md:my-6">
                <ArrowDown className="text-green-500 animate-bounce" />
              </div>
              
              {/* Step 4 */}
              <div className="relative z-10 mb-12 md:mb-0">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 hidden md:block"></div>
                  
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center z-10 mx-auto md:mx-0 mb-4 md:mb-0">
                    <span className="font-bold">4</span>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12">
                    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 max-w-md">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                          <Smartphone size={24} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">AI & integrations are added</h3>
                        <p className="text-gray-600">
                          We enhance your app with smart features, third-party integrations, and custom functionalities that make it stand out.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              
              {/* Arrow down */}
              <div className="flex justify-center my-4 md:my-6">
                <ArrowDown className="text-green-500 animate-bounce" />
              </div>
              
              {/* Step 5 */}
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
                    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 md:ml-auto md:mr-0 max-w-md">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4 md:ml-auto md:mr-0">
                          <Database size={24} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Deployment & scaling</h3>
                        <p className="text-gray-600">
                          We launch your app, ensure smooth deployment, and provide ongoing support to help it grow with your user base.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center z-10 mx-auto md:mx-0 mb-4 md:mb-0">
                    <span className="font-bold">5</span>
                  </div>
                  
                  <div className="md:w-1/2 hidden md:block"></div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <Button size="lg" className="gap-2 bg-green-600 hover:bg-green-700" asChild>
                <Link to="/contact">
                  Start Your Project Today
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-white">
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
        <section className="py-20 bg-gray-50">
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
