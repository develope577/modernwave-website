
import ServiceDetailsPage from "@/components/ServiceDetailsPage";

const EcommerceIntegrationPage = () => {
  const process = [
    {
      title: "Business Analysis",
      description: "We analyze your business requirements to determine the optimal payment solutions."
    },
    {
      title: "Payment Gateway Integration",
      description: "We integrate secure payment gateways and transaction processing systems."
    },
    {
      title: "User Experience Optimization",
      description: "We design a seamless checkout process optimized for conversions."
    },
    {
      title: "Security & Compliance",
      description: "We ensure all payment systems meet PCI DSS and other security standards."
    },
    {
      title: "Testing & Deployment",
      description: "We thoroughly test all payment flows before deploying to production."
    }
  ];

  const benefits = [
    {
      text: "Expertise in secure payment processing and subscription management"
    },
    {
      text: "Integration with leading e-commerce platforms like Shopify, WooCommerce, and Magento"
    },
    {
      text: "Compliance with PCI DSS standards for secure transactions"
    }
  ];

  return (
    <ServiceDetailsPage
      title="E-Commerce & Payment Integrations"
      subtitle="Secure, Seamless, and Scalable Transaction Solutions"
      process={process}
      benefits={benefits}
    />
  );
};

export default EcommerceIntegrationPage;
