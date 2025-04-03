
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckIcon, ChevronDown, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

// Schema for the first step (contact info)
const contactInfoSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  companyName: z.string().optional(),
});

// Schema for business tech solutions
const businessTechSchema = z.object({
  industry: z.string().min(1, { message: "Please select an industry" }),
  challenges: z.array(z.string()).min(1, { message: "Please select at least one challenge" }),
  services: z.array(z.string()).min(1, { message: "Please select at least one service" }),
  additionalDetails: z.string().optional(),
});

// Schema for app/product development
const productDevSchema = z.object({
  ideaClarity: z.enum(["clear", "guidance"], { required_error: "Please select an option" }),
  productType: z.string().min(1, { message: "Please select a product type" }),
  targetAudience: z.string().min(1, { message: "Please select a target audience" }),
  budgetRange: z.string().min(1, { message: "Please select a budget range" }),
  additionalDetails: z.string().optional(),
});

// Step 2 schema based on selection
const step2Schema = z.discriminatedUnion("consultationType", [
  z.object({
    consultationType: z.literal("business"),
    ...businessTechSchema.shape,
  }),
  z.object({
    consultationType: z.literal("product"),
    ...productDevSchema.shape,
  }),
]);

// Combined schema for the whole form
const formSchema = contactInfoSchema.merge(z.object({
  consultationType: z.enum(["business", "product"], {
    required_error: "Please select what you need help with",
  }),
})).merge(step2Schema);

type FormValues = z.infer<typeof formSchema>;

const industries = [
  { value: "retail", label: "Retail" },
  { value: "finance", label: "Finance" },
  { value: "healthcare", label: "Healthcare" },
  { value: "technology", label: "Technology" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "education", label: "Education" },
  { value: "hospitality", label: "Hospitality" },
  { value: "other", label: "Other" },
];

const businessChallenges = [
  { id: "automation", label: "Business automation" },
  { id: "cybersecurity", label: "Cybersecurity concerns" },
  { id: "ecommerce", label: "E-commerce & online sales" },
  { id: "ai", label: "AI-powered tools & automation" },
  { id: "cloud", label: "Cloud & infrastructure setup" },
  { id: "other", label: "Other" },
];

const businessServices = [
  { id: "ai-automation", label: "AI Automation" },
  { id: "ecommerce", label: "E-commerce Solutions" },
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "cloud", label: "Cloud Infrastructure" },
  { id: "development", label: "Custom Software Development" },
  { id: "consulting", label: "IT Consulting" },
];

const productTypes = [
  { value: "mobile-app", label: "Mobile App" },
  { value: "web-app", label: "Web App" },
  { value: "ai-tool", label: "AI-Powered Tool" },
  { value: "desktop", label: "Desktop Application" },
  { value: "saas", label: "SaaS Platform" },
  { value: "other", label: "Other" },
];

const budgetRanges = [
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-20k", label: "Between $5,000 - $20,000" },
  { value: "20k-50k", label: "Between $20,000 - $50,000" },
  { value: "50k-100k", label: "Between $50,000 - $100,000" },
  { value: "over-100k", label: "Over $100,000" },
  { value: "not-sure", label: "Not sure yet" },
];

const ConsultationPage = () => {
  const [formStep, setFormStep] = useState(1);
  const [formType, setFormType] = useState<string | null>(null);
  
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      challenges: [],
      services: [],
      additionalDetails: "",
    },
    mode: "onChange"
  });
  
  const consultationType = form.watch("consultationType");
  
  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    
    // Show success message
    toast.success("Consultation request submitted successfully! We'll contact you soon.", {
      duration: 5000,
    });
    
    // Reset form
    form.reset();
    setFormStep(1);
    setFormType(null);
    
    // Redirect back to home after brief delay
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };
  
  const nextStep = () => {
    if (formStep === 1) {
      const { fullName, email, consultationType } = form.getValues();
      
      // Validate first step fields
      if (!fullName || !email || !consultationType) {
        form.trigger(["fullName", "email", "consultationType"]);
        return;
      }
      
      setFormType(consultationType);
      setFormStep(2);
    }
  };
  
  const prevStep = () => {
    setFormStep(formStep - 1);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">Schedule a Consultation</h1>
            <p className="text-gray-600">
              Tell us about your project, and we'll get back to you quickly to schedule your consultation.
            </p>
          </div>
          
          {/* Step indicators */}
          <div className="mb-8">
            <div className="flex items-center justify-center">
              <div className={`flex items-center ${formStep > 1 ? "text-primary" : "text-gray-900"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                  formStep >= 1 ? "bg-primary text-white" : "bg-gray-200 text-gray-600"
                }`}>
                  1
                </div>
                <span className="ml-2 text-sm font-medium">Contact Info</span>
              </div>
              
              <div className={`w-12 h-1 mx-2 ${formStep > 1 ? "bg-primary" : "bg-gray-200"}`}></div>
              
              <div className={`flex items-center ${formStep > 2 ? "text-primary" : "text-gray-900"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                  formStep >= 2 ? "bg-primary text-white" : "bg-gray-200 text-gray-600"
                }`}>
                  2
                </div>
                <span className="ml-2 text-sm font-medium">Project Details</span>
              </div>
              
              <div className={`w-12 h-1 mx-2 ${formStep > 2 ? "bg-primary" : "bg-gray-200"}`}></div>
              
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                  formStep === 3 ? "bg-primary text-white" : "bg-gray-200 text-gray-600"
                }`}>
                  3
                </div>
                <span className="ml-2 text-sm font-medium">Submit</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-xl border border-gray-100 p-6 md:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Step 1: Contact Information */}
                {formStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                    
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number (Optional)</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+1 (123) 456-7890" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name (If applicable)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="pt-4">
                      <h2 className="text-xl font-semibold mb-4">What Do You Need Help With? <span className="text-red-500">*</span></h2>
                      
                      <FormField
                        control={form.control}
                        name="consultationType"
                        render={({ field }) => (
                          <FormItem>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div
                                className={`p-4 border rounded-lg cursor-pointer ${
                                  field.value === "business" 
                                    ? "border-primary bg-primary/5" 
                                    : "border-gray-200 hover:border-gray-300"
                                } transition-all`}
                                onClick={() => form.setValue("consultationType", "business")}
                              >
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-medium">I need tech solutions for my business</h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                      Custom IT solutions, cybersecurity, automation, etc.
                                    </p>
                                  </div>
                                  {field.value === "business" && (
                                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                                      <CheckIcon className="h-3 w-3 text-white" />
                                    </div>
                                  )}
                                </div>
                              </div>
                              
                              <div
                                className={`p-4 border rounded-lg cursor-pointer ${
                                  field.value === "product" 
                                    ? "border-primary bg-primary/5" 
                                    : "border-gray-200 hover:border-gray-300"
                                } transition-all`}
                                onClick={() => form.setValue("consultationType", "product")}
                              >
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-medium">I want to develop an app or product</h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                      Mobile apps, web applications, software development, etc.
                                    </p>
                                  </div>
                                  {field.value === "product" && (
                                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                                      <CheckIcon className="h-3 w-3 text-white" />
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="flex justify-end pt-4">
                      <Button type="button" onClick={nextStep}>
                        Continue
                      </Button>
                    </div>
                  </div>
                )}
                
                {/* Step 2: Project Details */}
                {formStep === 2 && consultationType === "business" && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold mb-4">Business Tech Solutions</h2>
                    
                    <FormField
                      control={form.control}
                      name="industry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Industry Type <span className="text-red-500">*</span></FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your industry" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {industries.map((industry) => (
                                <SelectItem key={industry.value} value={industry.value}>
                                  {industry.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="challenges"
                      render={() => (
                        <FormItem>
                          <div className="mb-2">
                            <FormLabel>What challenges are you facing? <span className="text-red-500">*</span></FormLabel>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {businessChallenges.map((challenge) => (
                              <FormField
                                key={challenge.id}
                                control={form.control}
                                name="challenges"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={challenge.id}
                                      className="flex items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(challenge.id)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, challenge.id])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== challenge.id
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal text-sm cursor-pointer">
                                        {challenge.label}
                                      </FormLabel>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="services"
                      render={() => (
                        <FormItem>
                          <div className="mb-2">
                            <FormLabel>Which services interest you? <span className="text-red-500">*</span></FormLabel>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {businessServices.map((service) => (
                              <FormField
                                key={service.id}
                                control={form.control}
                                name="services"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={service.id}
                                      className="flex items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(service.id)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, service.id])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== service.id
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal text-sm cursor-pointer">
                                        {service.label}
                                      </FormLabel>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="additionalDetails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional details or requirements (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please share any specific requirements or details about your project"
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex justify-between pt-4">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Back
                      </Button>
                      <Button type="submit" className="gap-2">
                        Schedule Business Tech Consultation
                        <Send size={16} />
                      </Button>
                    </div>
                  </div>
                )}
                
                {formStep === 2 && consultationType === "product" && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold mb-4">App or Product Development</h2>
                    
                    <FormField
                      control={form.control}
                      name="ideaClarity"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Do you have a clear idea or need guidance? <span className="text-red-500">*</span></FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              value={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="clear" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  I have a clear idea
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="guidance" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  I need help shaping my idea
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="productType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What type of product? <span className="text-red-500">*</span></FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select product type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {productTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="targetAudience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Who is your target audience? <span className="text-red-500">*</span></FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select target audience" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="consumers">General Consumers</SelectItem>
                              <SelectItem value="businesses">Businesses</SelectItem>
                              <SelectItem value="both">Both</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="budgetRange"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Budget Range? <span className="text-red-500">*</span></FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {budgetRanges.map((budget) => (
                                <SelectItem key={budget.value} value={budget.value}>
                                  {budget.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="additionalDetails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional details or requirements (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please share any specific requirements or details about your project"
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex justify-between pt-4">
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Back
                      </Button>
                      <Button type="submit" className="gap-2">
                        Schedule Product Development Consultation
                        <Send size={16} />
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </Form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ConsultationPage;
