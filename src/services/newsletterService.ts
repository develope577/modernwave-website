
import { toast } from "sonner";

// In a real app, this would connect to a database
// This is a simple mock implementation for demonstration
const subscriberEmails: string[] = [];

export const subscribeToNewsletter = async (email: string): Promise<boolean> => {
  try {
    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    // Check if email is already subscribed
    if (subscriberEmails.includes(email)) {
      toast.info("This email is already subscribed");
      return true;
    }

    // In a real app, this would be an API call to a backend service
    // For demo purposes, we're just storing in memory
    subscriberEmails.push(email);
    console.log("Subscribed emails:", subscriberEmails);
    
    toast.success("Thank you for subscribing to our newsletter!");
    return true;
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    toast.error("Failed to subscribe. Please try again later.");
    return false;
  }
};

export const getSubscribers = (): string[] => {
  return [...subscriberEmails];
};
