
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary text-white">
                <span className="font-semibold">A</span>
              </div>
              <span className="font-display font-medium">ADA Tech Ventures</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Innovative technology solutions for businesses and consumers. Simplifying the complex, amplifying results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/business" className="text-gray-400 hover:text-white transition-colors">
                  Business Solutions
                </Link>
              </li>
              <li>
                <Link to="/consumer" className="text-gray-400 hover:text-white transition-colors">
                  Consumer Tech
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/business" className="text-gray-400 hover:text-white transition-colors">
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link to="/business" className="text-gray-400 hover:text-white transition-colors">
                  Applications
                </Link>
              </li>
              <li>
                <Link to="/business" className="text-gray-400 hover:text-white transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link to="/consumer" className="text-gray-400 hover:text-white transition-colors">
                  Smart Home
                </Link>
              </li>
              <li>
                <Link to="/consumer" className="text-gray-400 hover:text-white transition-colors">
                  Mobile Apps
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>123 Innovation Way</li>
              <li>San Francisco, CA 94107</li>
              <li>
              <a href="mailto:contact@techsolutions.com" className="hover:text-white transition-colors">
                  info@adatechventures.com
                </a>
              </li>
              <li>
                <a href="mailto:contact@techsolutions.com" className="hover:text-white transition-colors">
                  support@adatechventures.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ADA Tech Ventures. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
