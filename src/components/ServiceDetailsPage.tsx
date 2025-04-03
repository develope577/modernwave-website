
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
};

const ServiceDetailsPage = ({
  title,
  subtitle,
  processTitle = "Our Process",
  process,
  benefitsTitle = "Why Choose Us?",
  benefits,
  ctaText = "Get a Free Consultation",
}: ServiceDetailsProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">{title}</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
          </div>

          {/* Process Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">{processTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {process.map((step, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <span className="font-semibold">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-16 bg-gray-50 rounded-2xl p-8">
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
            <Button asChild className="bg-blue-600 hover:bg-blue-700" size="lg">
              <Link to="/consultation">{ctaText}</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetailsPage;
