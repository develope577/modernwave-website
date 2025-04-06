
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BusinessSection from "@/components/BusinessSection";
import ConsumerSection from "@/components/ConsumerSection";
import ManagedITServicesSection from "@/components/ManagedITServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <BusinessSection />
        <ManagedITServicesSection />
        <ConsumerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
