
import { toast } from "sonner";

// Define form submission types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  service?: string;
}

// In a real app, this would connect to a database or API
// This is a simple mock implementation for demonstration
const formSubmissions: ContactFormData[] = [];

export const submitContactForm = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return false;
    }

    // Validate email format
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    // In a real app, this would be an API call to a backend service
    // For demo purposes, we're just storing in memory
    formSubmissions.push(formData);
    console.log("Form submission received:", formData);
    console.log("All form submissions:", formSubmissions);
    
    // Send notification
    toast.success("Thank you for your message! We'll get back to you soon.");
    return true;
  } catch (error) {
    console.error("Form submission error:", error);
    toast.error("Failed to submit form. Please try again later.");
    return false;
  }
};

// In a real app, this would be restricted to admin access
export const getFormSubmissions = (): ContactFormData[] => {
  return [...formSubmissions];
};

// For handling newsletter form specifically
export const submitNewsletterForm = async (email: string, interests?: string[]): Promise<boolean> => {
  try {
    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    // Store as a special type of form submission
    formSubmissions.push({
      name: "Newsletter Subscriber",
      email: email,
      message: `Subscribed to newsletter${interests ? ` with interests: ${interests.join(', ')}` : ''}`,
    });
    
    console.log("Newsletter subscription received:", email);
    toast.success("Thank you for subscribing to our newsletter!");
    return true;
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    toast.error("Failed to subscribe. Please try again later.");
    return false;
  }
};
