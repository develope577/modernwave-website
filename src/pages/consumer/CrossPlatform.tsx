
import ServiceDetailsPage from "@/components/ServiceDetailsPage";

const CrossPlatformPage = () => {
  const process = [
    {
      title: "Platform Selection",
      description: "We help you choose the right platforms and technologies for your app's needs."
    },
    {
      title: "Development & Integration",
      description: "Our team builds your app for all platforms using efficient cross-platform frameworks."
    },
    {
      title: "Testing & Optimization",
      description: "We extensively test on all target platforms to ensure consistent performance."
    },
    {
      title: "Deployment & Scaling",
      description: "We deploy to all app stores and platforms, ensuring your app is ready for users."
    },
    {
      title: "Ongoing Updates",
      description: "We provide continuous updates to maintain compatibility with new OS versions."
    }
  ];

  const benefits = [
    {
      text: "Expertise in building apps that work across multiple platforms"
    },
    {
      text: "Consistent user experience across all devices"
    },
    {
      text: "Faster development time and reduced costs"
    }
  ];

  return (
    <ServiceDetailsPage
      title="Cross-Platform Development"
      subtitle="Your App, Everywhere: iOS, Android, and Web"
      process={process}
      benefits={benefits}
    />
  );
};

export default CrossPlatformPage;
