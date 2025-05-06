
import { useEffect, useRef, useState } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isMobile = useIsMobile();
  const isContactPage = location.pathname === "/contact";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up", "opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send to Formspree
    await fetch('hhttps://formspree.io/f/mvgkdbgy', { // Replace with your Formspree ID
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
  
    console.log("Form submitted:", formData);
    
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  
    // Show success message
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold font-display">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our solutions? Ready to start a project? Contact us today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
          {/* Hide on mobile except for contact page */}
          {(!isMobile || isContactPage) && (
            <div className="lg:col-span-2 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <div className="bg-[#3B5998] text-white rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Mail size={18} className="text-white/80" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-white/90 font-medium">Email</h4>
                      <div className="my-4"></div>
                      <a className="text-white/90 font-medium"> For general, collaborations, or non-technical matters, contact us here </a>
                      <div className="my-4"></div>  
                      <a href="mailto:info@adatechventures.tech" className="text-white/70 hover:text-white">
                        info@adatechventures.tech
                      </a>
                    </div>
                  </div>  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Mail size={18} className="text-white/80" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-white/90 font-medium">Email</h4>
                      <div className="my-4"></div>
                      <a className="text-white/90 font-medium"> For technical issues contact us here </a>
                      <div className="my-4"></div>
                      <a href="mailto:supportt@adatechventures.tech" className="text-white/70 hover:text-white">
                        supportt@adatechventures.tech
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className={`${(!isMobile || isContactPage) ? 'lg:col-span-3' : 'lg:col-span-5'} animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-gray-700">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry..."
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button type="submit" className="gap-2">
                Send Message
                <Send size={16} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
