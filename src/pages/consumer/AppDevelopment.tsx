
import ServiceDetailsPage from "@/components/ServiceDetailsPage";

const AppDevelopmentPage = () => {
  const process = [
    {
      title: "Idea & Planning",
      description: "We brainstorm and create detailed wireframes and planning documents for your app."
    },
    {
      title: "UI/UX Design",
      description: "Our designers create intuitive and visually appealing interfaces tailored to your users."
    },
    {
      title: "Development & Coding",
      description: "Our expert developers build your app using the latest technologies and best practices."
    },
    {
      title: "Testing & Optimization",
      description: "Rigorous testing ensures your app is stable, secure, and optimized for performance."
    },
    {
      title: "Deployment & Support",
      description: "We handle the launch and provide ongoing maintenance and support for your app."
    }
  ];

  const benefits = [
    {
      text: "Expertise in iOS, Android, and Web applications"
    },
    {
      text: "Agile development for faster delivery"
    },
    {
      text: "Continuous maintenance and support"
    }
  ];

  return (
    <ServiceDetailsPage
      title="Full-Cycle App Development"
      subtitle="We Build Your Idea from Start to Finish"
      process={process}
      benefits={benefits}
    />
  );
};

export default AppDevelopmentPage;
