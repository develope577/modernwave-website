
import { Code, Smartphone, Palette, Globe, Cloud, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code,
    title: "Full-Cycle App Development",
    description: "We provide end-to-end development services, from brainstorming and prototyping to full-scale deployment and post-launch support. Whether you have an idea or need an expert team to build your app from scratch, we handle everything—including coding, integrations, and performance optimization.",
    link: "/consumer/app-development"
  },
  {
    icon: Smartphone,
    title: "AI & Smart Features Integration",
    description: "We integrate AI-driven automation, chatbots, recommendation engines, and predictive analytics to enhance user experience. Our solutions allow apps to learn from user behavior to provide smart suggestions, automated workflows, and real-time data insights.",
    link: "/consumer/ai-integration"
  },
  {
    icon: Palette,
    title: "User Experience & UI/UX Design",
    description: "A great app isn't just about functionality—it's about an intuitive, seamless experience that keeps users engaged. Our design team creates visually appealing, easy-to-navigate interfaces that make apps enjoyable to use.",
    link: "/consumer/ux-design"
  },
  {
    icon: Globe,
    title: "Cross-Platform Development",
    description: "We develop apps for iOS, Android, and Web, ensuring a consistent experience across all devices. Whether it's a native, hybrid, or progressive web app (PWA), we tailor the solution to fit your audience and business goals.",
    link: "/consumer/cross-platform"
  },
  {
    icon: Cloud,
    title: "Secure & Scalable Cloud Solutions",
    description: "Your app needs to be fast, reliable, and scalable as your user base grows. We implement cloud infrastructure, secure data encryption, and efficient backend solutions to ensure high performance and data protection.",
    link: "/consumer/cloud-solutions"
  },
  {
    icon: CreditCard,
    title: "E-Commerce & Payment Integrations",
    description: "For apps that require transactions, we integrate secure payment gateways, subscription management, and seamless checkout experiences to enhance user convenience while maintaining security compliance.",
    link: "/consumer/ecommerce-integration"
  }
];

const ConsumerServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div key={index} className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
            <service.icon size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
          <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
          <Button asChild variant="outline" className="w-full">
            <Link to={service.link}>Learn More</Link>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ConsumerServicesGrid;
