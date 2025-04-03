
import ServiceDetailsPage from "@/components/ServiceDetailsPage";

const AIIntegrationPage = () => {
  const process = [
    {
      title: "Consultation & Strategy",
      description: "We analyze your needs and create a strategy for integrating AI into your application."
    },
    {
      title: "Development & Integration",
      description: "Our experts implement AI technologies and integrate them with your existing systems."
    },
    {
      title: "Testing & Optimization",
      description: "We thoroughly test and refine the AI components to ensure optimal performance."
    },
    {
      title: "Deployment & Scaling",
      description: "We deploy your AI solution and ensure it scales with your growing user base."
    },
    {
      title: "Continuous Learning",
      description: "The AI solution continuously improves through machine learning and ongoing optimization."
    }
  ];

  const benefits = [
    {
      text: "Cutting-edge AI technologies for smarter solutions"
    },
    {
      text: "Seamless integration with existing systems"
    },
    {
      text: "Continuous learning and performance improvement"
    }
  ];

  return (
    <ServiceDetailsPage
      title="AI & Smart Features Integration"
      subtitle="Enhance User Experience with AI-Powered Solutions"
      process={process}
      benefits={benefits}
    />
  );
};

export default AIIntegrationPage;
