import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Server, Shield, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import useScrollToTop from "@/hooks/useScrollToTop";

const CyberSecurity = () => {
  useScrollToTop();

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
                <span className="text-sm font-medium text-red-600 bg-red-100 px-4 py-1.5 rounded-full">
                  CYBERSECURITY
                </span>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold font-display leading-tight text-balance">
                  Enterprise-Grade{" "}
                  <span className="text-red-600 block">Security Solutions</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                  Protect your business with comprehensive cybersecurity strategies
                  designed to safeguard your critical data, systems, and reputation.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2 group bg-red-600 hover:bg-red-700" asChild>
                    <Link to="/consultation">
                      Get Security Assessment
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 group"
                    onClick={() => scrollToSection("security-solutions")}
                  >
                    Explore Solutions
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>

              <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Cybersecurity protection visual"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display">Why It Matters</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border border-gray-200 rounded-xl p-8 shadow-sm">
              <div className="md:col-span-2 space-y-6">
                <p className="text-lg text-gray-600">
                  In today's interconnected digital landscape, cybersecurity is not just an IT
                  concern but a fundamental business risk. As cyber threats evolve, businesses
                  must adopt comprehensive strategies to protect assets, trust, and operations.
                </p>
                <p className="text-lg text-gray-600">
                  The cost of breaches goes beyond finances—impacting brand trust, customer
                  relationships, and market position. Strong cybersecurity builds long-term
                  resilience.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center space-y-6">
                {[
                  {
                    stat: "60%",
                    desc: "of small businesses close within 6 months of a significant cyber attack",
                  },
                  {
                    stat: "$4.35M",
                    desc: "average cost of a data breach in 2022, a record high",
                  },
                  {
                    stat: "300%",
                    desc: "increase in reported cybercrimes since the pandemic began",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-red-50 rounded-lg p-4 text-center w-36 flex flex-col items-center justify-center"
                  >
                    <h3 className="text-2xl font-bold text-red-600 mb-2">{item.stat}</h3>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="security-solutions" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Comprehensive Security Solutions
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                From threat assessment to incident response, our cybersecurity services provide
                end-to-end protection for your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield size={24} />,
                  title: "Vulnerability Assessment",
                  desc: "Comprehensive scanning and evaluation of your infrastructure to identify security gaps before they can be exploited.",
                },
                {
                  icon: <Server size={24} />,
                  title: "Network Security",
                  desc: "Advanced firewall configuration, intrusion detection, and network monitoring to prevent unauthorized access.",
                },
                {
                  icon: <AlertTriangle size={24} />,
                  title: "Threat Monitoring & Support",
                  desc: "24/7 monitoring and rapid response to security threats with ongoing support to maintain system integrity.",
                },
              ].map((service, idx) => (
                <Card
                  key={idx}
                  className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-100 text-red-600 mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CyberSecurity;
