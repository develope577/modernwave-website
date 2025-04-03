
import { useState } from "react";
import { Lightbulb, Paintbrush, Code, Zap, Send } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "You start with an idea",
    description: "Share your app concept with us. We help refine and validate it through research and market analysis.",
    color: "bg-amber-100 text-amber-600"
  },
  {
    icon: Paintbrush,
    title: "We design the UI/UX",
    description: "Our designers create intuitive and visually appealing interfaces tailored to your target audience.",
    color: "bg-pink-100 text-pink-600"
  },
  {
    icon: Code,
    title: "We develop the app",
    description: "Our developers build your app using modern frameworks and best coding practices.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Zap,
    title: "AI & integrations are added",
    description: "We enhance your app with AI features and integrate it with necessary third-party services.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Send,
    title: "Deployment & scaling",
    description: "We launch your app and ensure it scales efficiently as your user base grows.",
    color: "bg-green-100 text-green-600"
  }
];

const ServiceWorkflow = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">How Our Services Work</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our streamlined process ensures efficient development from concept to launch
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 z-0"></div>

        {/* Timeline steps */}
        <div className="space-y-12 md:space-y-0 relative z-10">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} md:items-center`}
              onMouseEnter={() => setActiveStep(index)}
            >
              <div className="md:w-1/2 flex justify-center py-4">
                <div className={`p-6 rounded-xl ${step.color} ${activeStep === index ? "scale-110" : "opacity-70"} transform transition-all duration-300`}>
                  <step.icon size={64} />
                </div>
              </div>

              <div className="md:w-1/2 relative flex flex-col items-center md:items-start">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute top-1/2 transform -translate-y-1/2 left-0 md:left-auto md:right-0 z-10">
                  <div className={`w-6 h-6 rounded-full border-4 border-white ${activeStep === index ? "bg-blue-600" : "bg-gray-300"} transform transition-all duration-300 ${index % 2 === 0 ? "md:translate-x-3" : "md:-translate-x-3"}`}></div>
                </div>

                {/* Content card */}
                <div className={`bg-white p-6 rounded-xl shadow-md ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-8 md:text-right" : "md:ml-8"} ${activeStep === index ? "border-blue-500 border-2" : "border border-gray-100"} transition-all duration-300`}>
                  <h3 className="text-xl font-semibold mb-2">
                    Step {index + 1}: {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceWorkflow;
