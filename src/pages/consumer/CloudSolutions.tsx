
import ServiceDetailsPage from "@/components/ServiceDetailsPage";

const CloudSolutionsPage = () => {
  const process = [
    {
      title: "Assessment & Planning",
      description: "We analyze your needs and create a customized cloud strategy for your application."
    },
    {
      title: "Cloud Infrastructure Setup",
      description: "Our team sets up a secure and scalable cloud infrastructure tailored to your needs."
    },
    {
      title: "Security & Compliance",
      description: "We implement robust security measures and ensure compliance with industry standards."
    },
    {
      title: "Optimization & Scalability",
      description: "We optimize your cloud resources for performance and cost-efficiency."
    },
    {
      title: "Ongoing Support & Maintenance",
      description: "Our team provides continuous monitoring and support for your cloud infrastructure."
    }
  ];

  const benefits = [
    {
      text: "Expertise in AWS, Azure, and Google Cloud solutions"
    },
    {
      text: "Advanced security protocols to protect your data"
    },
    {
      text: "Seamless migration from on-premises to cloud-based systems"
    }
  ];

  return (
    <ServiceDetailsPage
      title="Secure & Scalable Cloud Solutions"
      subtitle="Reliable, Fast, and Scalable Cloud Infrastructure"
      process={process}
      benefits={benefits}
    />
  );
};

export default CloudSolutionsPage;
