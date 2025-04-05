
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

type ProcessStep = {
  title: string;
  description: string;
};

type BenefitItem = {
  text: string;
};

type ServiceDetailsProps = {
  title: string;
  subtitle: string;
  processTitle?: string;
  process: ProcessStep[];
  benefitsTitle?: string;
  benefits: BenefitItem[];
  ctaText?: string;
  ctaLink?: string;
  showADABadge?: boolean;
};

const ServiceDetailsPage = ({
  title,
  subtitle,
  processTitle = "Our Process",
  process,
  benefitsTitle = "Why Choose Us?",
  benefits,
  ctaText = "Get a Free Consultation",
  ctaLink = "/consultation",
  showADABadge = true,
}: ServiceDetailsProps) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">{title}</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
          </div>

          {/* Process Section - Interactive timeline */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">{processTitle}</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 z-0"></div>
              
              {/* Timeline steps */}
              <div className="space-y-12 md:space-y-0 relative z-10">
                {process.map((step, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} md:items-center mb-8`}
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    <div className="md:w-1/2 flex justify-center py-4">
                      <div className={`p-6 rounded-xl ${activeStep === index ? "bg-green-100 text-green-600 scale-110" : "bg-gray-100 text-gray-600 opacity-80"} transform transition-all duration-300`}>
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-primary mb-4 mx-auto">
                          <span className="font-semibold">{index + 1}</span>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-1/2 relative flex flex-col items-center md:items-start">
                      {/* Timeline dot */}
                      <div className="hidden md:flex absolute top-1/2 transform -translate-y-1/2 left-0 md:left-auto md:right-0 z-10">
                        <div className={`w-6 h-6 rounded-full border-4 border-white ${activeStep === index ? "bg-green-600" : "bg-gray-300"} transform transition-all duration-300 ${index % 2 === 0 ? "md:translate-x-3" : "md:-translate-x-3"}`}></div>
                      </div>

                      {/* Content card */}
                      <div className={`bg-white p-6 rounded-xl shadow-md ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-8 md:text-right" : "md:ml-8"} ${activeStep === index ? "border-green-500 border-2" : "border border-gray-100"} transition-all duration-300 w-full`}>
                        <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8 w-full">
            <h2 className="text-2xl font-bold mb-8 text-center">{benefitsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="shrink-0 h-6 w-6 bg-green-100 rounded-full flex items-center justify-center text-green-600">
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
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p>{benefit.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center mb-12">
            <Button asChild className="bg-green-600 hover:bg-green-700" size="lg">
              <Link to={ctaLink}>{ctaText}</Link>
            </Button>
          </div>
        </div>
      </main>

      {/* ADA Affiliated Button */}
      {showADABadge && (
        <div className="fixed bottom-8 right-8 z-50">
          <div className="flex items-center bg-white rounded-full shadow-lg px-4 py-2 border border-gray-200">
            <img 
              src="/lovable-uploads/5d4acd95-6fa5-4ed4-a366-2f825d97e0fc.png"
              alt="ADA Affiliated" 
              className="h-6 mr-2"
            />
            <span className="text-blue-600 font-medium">ADA Affiliated</span>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ServiceDetailsPage;
