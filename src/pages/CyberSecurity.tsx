import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Server, Shield, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import useScrollToTop from "@/hooks/useScrollToTop";

const CyberSecurity = () => {
  useScrollToTop();
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const securitySolutionsRef = useRef<HTMLDivElement>(null);
  
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
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-red-50 to-white py-24" ref={sectionRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
                <span className="text-sm font-medium text-red-600 bg-red-100 px-4 py-1.5 rounded-full">CYBERSECURITY</span>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold font-display leading-tight text-balance">
                  Enterprise-Grade 
                  <span className="text-red-600 block">Security Solutions</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                  Protect your business with comprehensive cybersecurity strategies designed to safeguard your critical data, systems, and reputation.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2 group bg-red-600 hover:bg-red-700" asChild>
                    <Link to="/consultation">
                      Get Security Assessment
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 group" onClick={() => scrollToSection('security-solutions')}>
                    Explore Solutions
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
              
              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Cybersecurity protection"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Why It Matters Section - Modified layout with smaller cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Why It Matters
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="md:col-span-2">
                <div className="space-y-8">
                  <p className="text-lg text-gray-600">
                    In today's interconnected digital landscape, cybersecurity is not just an IT concern but a fundamental business risk that affects organizations of all sizes. As cyber threats continue to evolve in sophistication and scale, businesses must adopt comprehensive security strategies to protect their critical assets, maintain customer trust, and ensure operational continuity.
                  </p>
                  
                  <p className="text-lg text-gray-600">
                    The cost of cybersecurity breaches extends far beyond immediate financial losses, affecting brand reputation, customer relationships, and competitive positioning. By implementing robust security measures, organizations can not only defend against current threats but also build resilience against emerging risks in an increasingly complex threat landscape.
                  </p>
                </div>
              </div>
              
              <div className="md:col-span-1">
                <div className="grid grid-cols-1 gap-4 h-full">
                  <div className="bg-red-50 rounded-lg p-4 text-center w-24 mx-auto flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-red-600 mb-2">60%</h3>
                    <p className="text-gray-700 text-sm">
                      of small businesses close within 6 months of a significant cyber attack
                    </p>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg
