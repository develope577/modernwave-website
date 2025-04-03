
import ServiceDetailsPage from "@/components/ServiceDetailsPage";

const UXDesignPage = () => {
  const process = [
    {
      title: "User Research",
      description: "We study your target audience to understand their needs, behaviors, and preferences."
    },
    {
      title: "Wireframing & Prototyping",
      description: "We create wireframes and interactive prototypes to visualize the user experience."
    },
    {
      title: "UI/UX Design",
      description: "Our designers craft beautiful and intuitive interfaces that users love."
    },
    {
      title: "Usability Testing",
      description: "We test the designs with real users to ensure they're intuitive and effective."
    },
    {
      title: "Final Design Implementation",
      description: "We finalize all design assets and prepare them for development."
    }
  ];

  const benefits = [
    {
      text: "Expertise in creating intuitive, visually engaging experiences"
    },
    {
      text: "Focus on user-centered design principles"
    },
    {
      text: "Optimized for mobile, web, and cross-platform apps"
    }
  ];

  return (
    <ServiceDetailsPage
      title="User Experience & UI/UX Design"
      subtitle="Creating Beautiful and Intuitive App Interfaces"
      process={process}
      benefits={benefits}
    />
  );
};

export default UXDesignPage;
