
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const ConsumerFeatureSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Why Our Consumer Tech Stands Out
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We design our consumer technology with a focus on user experience, seamless
            integration, and practical benefits for everyday life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Consumer technology dashboard"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">User-Centered Design</h3>
                <p className="text-gray-600">
                  Our products are designed with real users in mind, focusing on intuitive 
                  interfaces and simple user experiences that don't require technical 
                  expertise.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
                <p className="text-gray-600">
                  All our products work together harmoniously across different platforms 
                  and devices, creating a unified technology ecosystem in your home.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Privacy-Focused</h3>
                <p className="text-gray-600">
                  We prioritize your data privacy and security, with transparent policies 
                  and advanced protection measures built into every product.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Continuous Innovation</h3>
                <p className="text-gray-600">
                  Our products evolve with regular updates and new features, ensuring 
                  they remain current with the latest technological advancements.
                </p>
              </div>
            </div>

            <Button asChild variant="green" className="mt-4">
              <Link to="/consumer">Discover All Features</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsumerFeatureSection;
