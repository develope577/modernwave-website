
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingADAButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Link
        to="/consultation"
        className="flex items-center gap-2 bg-white text-green-600 py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all border border-gray-200"
      >
        <Leaf size={18} />
        <span className="font-medium">ADA Affiliated</span>
      </Link>
    </div>
  );
};

export default FloatingADAButton;
