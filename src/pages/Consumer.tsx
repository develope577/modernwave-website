
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ConsumerServicesGrid from "@/components/ConsumerServicesGrid";
import ServiceWorkflow from "@/components/ServiceWorkflow";

const Consumer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight">
                Consumer Technology <span className="text-green-600">Solutions</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Innovative technology designed to enhance everyday experiences. Our consumer-focused solutions combine cutting-edge technology with intuitive design.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link to="/consultation">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#services">Explore Services</a>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Consumer technology" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Consumer Technology Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet the needs of today's consumers. Explore our services below.
            </p>
          </div>
          
          <ConsumerServicesGrid />
        </div>
      </section>
      
      {/* How Our Services Work Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceWorkflow />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Idea into Reality?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our consumer technology solutions can help you achieve your goals.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-green-600 hover:bg-gray-100">
            <Link to="/consultation">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Consumer;
