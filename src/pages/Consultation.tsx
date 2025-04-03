
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Define the schema for step 1
const contactInfoSchema = z.object({
  fullName: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  companyName: z.string().optional(),
  consultationType: z.enum(["business", "product"], {
    required_error: "Please select what you need help with",
  }),
});

// Schema for business tech solutions
const businessSchema = contactInfoSchema.extend({
  consultationType: z.literal("business"),
  industry: z.string().min(1, { message: "Please select an industry" }),
  challenges: z.array(z.string()).min(1, { message: "Please select at least one challenge" }),
  services: z.array(z.string()).min(1, { message: "Please select at least one service" }),
  additionalDetails: z.string().optional(),
});

// Schema for app/product development
const productSchema = contactInfoSchema.extend({
  consultationType: z.literal("product"),
  ideaClarity: z.enum(["clear", "guidance"], { required_error: "Please select an option" }),
  productType: z.string().min(1, { message: "Please select a product type" }),
  targetAudience: z.string().min(1, { message: "Please select a target audience" }),
  budgetRange: z.string().min(1, { message: "Please select a budget range" }),
  additionalDetails: z.string().optional(),
});

// Combined schema using discriminated union
const formSchema = z.discriminatedUnion("consultationType", [
  businessSchema,
  productSchema,
]);

type FormValues = z.infer<typeof formSchema>;

const industries = [
  { value: "retail", label: "Retail" },
  { value: "finance", label: "Finance" },
  { value: "healthcare", label: "Healthcare" },
  { value: "education", label: "Education" },
  { value: "technology", label: "Technology" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "other", label: "Other" },
];

const challenges = [
  { id: "business-automation", label: "Business automation" },
  { id: "cybersecurity", label: "Cybersecurity concerns" },
  { id: "ecommerce", label: "E-commerce & online sales" },
  { id: "ai-tools", label: "AI-powered tools & automation" },
  { id: "cloud-infrastructure", label: "Cloud & infrastructure setup" },
  { id: "other", label: "Other" },
];

const services = [
  { id: "ai-automation", label: "AI Automation" },
  { id: "ecommerce-platforms", label: "E-commerce Solutions" },
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "cloud-services", label: "Cloud Services" },
  { id: "custom-software", label: "Custom Software" },
  { id: "data-analytics", label: "Data Analytics" },
];

const productTypes = [
  { value: "mobile-app", label: "Mobile App" },
  { value: "web-app", label: "Web App" },
  { value: "ai-tool", label: "AI-Powered Tool" },
  { value: "saas", label: "SaaS Product" },
  { value: "desktop-app", label: "Desktop Application" },
  { value: "other", label: "Other" },
];

const audiences = [
  { value: "consumers", label: "General Consumers" },
  { value: "businesses", label: "Businesses" },
  { value: "both", label: "Both Consumers and Businesses" },
];

const budgetRanges = [
  { value: "under5k", label: "Under $5,000" },
  { value: "5k-20k", label: "$ 5,000 - $20,000" },
  { value: "20k-50k", label: "$20,000 - $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "over100k", label: "Over $100,000" },
];

const ConsultationPage = () => {
  const [formStep, setFormStep] = useState(1);
  const [formType, setFormType] = useState<"business" | "product" | undefined>(undefined);
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      consultationType: undefined,
      // Business fields
      industry: "",
      challenges: [],
      services: [],
      additionalDetails: "",
      // Product fields
      ideaClarity: undefined,
      productType: "",
      targetAudience: "",
      budgetRange: "",
    },
  });
  
  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    
    // Show success message
    toast.success("Thank you! Your request has been received. Our team will contact you shortly.", {
      duration: 5000,
    });
    
    // Reset form and navigate to home page after a delay
    setTimeout(() => {
      form.reset();
      navigate("/");
    }, 3000);
  };
  
  const handleConsultationTypeChange = (value: "business" | "product") => {
    setFormType(value);
    form.setValue("consultationType", value);
  };
  
  const nextStep = () => {
    if (formStep === 1) {
      form.trigger(["fullName", "email", "consultationType"]);
      
      const { fullName, email, consultationType } = form.getValues();
      
      // Validate first step fields
      if (!fullName || !email || !consultationType) {
        return;
      }
      
      setFormStep(2);
    }
  };
  
  const backStep = () => {
    setFormStep(1);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold font-display">Schedule a Consultation</h1>
            <p className="mt-3 text-gray-600">
              Let's discuss how we can help with your technology needs.
            </p>
          </div>
          
          {/* Steps indicator */}
          <div className="mb-10">
            <div className="flex items-center justify-center">
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${formStep === 1 ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"}`}>
                  1
                </div>
                <div className="text-sm font-medium ml-2">Contact Info</div>
              </div>
              <div className={`w-12 h-1 mx-2 ${formStep >= 2 ? "bg-blue-600" : "bg-gray-200"}`}></div>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${formStep === 2 ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"}`}>
                  2
                </div>
                <div className="text-sm font-medium ml-2">Requirements</div>
              </div>
            </div>
          </div>
          
          <Card className="shadow-md">
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                              <Input placeholder="Enter your full name" {...field} />
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
                              <Input type="email" placeholder="your@email.com" {...field} />
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
                              <Input placeholder="(123) 456-7890" {...field} />
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
                              <Input placeholder="Your company name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="space-y-3">
                        <FormLabel>What do you need help with? <span className="text-red-500">*</span></FormLabel>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div
                            className={`border rounded-lg p-4 cursor-pointer transition-all ${
                              formType === "business" ? "border-blue-600 bg-blue-50/50" : "hover:border-gray-400"
                            }`}
                            onClick={() => handleConsultationTypeChange("business")}
                          >
                            <div className="font-medium">I need tech solutions for my business</div>
                            <p className="text-sm text-gray-600 mt-1">
                              For companies looking for business technology solutions
                            </p>
                          </div>
                          
                          <div
                            className={`border rounded-lg p-4 cursor-pointer transition-all ${
                              formType === "product" ? "border-blue-600 bg-blue-50/50" : "hover:border-gray-400"
                            }`}
                            onClick={() => handleConsultationTypeChange("product")}
                          >
                            <div className="font-medium">I want to develop an app or product</div>
                            <p className="text-sm text-gray-600 mt-1">
                              For custom app or product development
                            </p>
                          </div>
                        </div>
                        {form.formState.errors.consultationType && (
                          <p className="text-sm font-medium text-destructive">
                            {form.formState.errors.consultationType.message}
                          </p>
                        )}
                      </div>
                      
                      <div className="pt-4">
                        <Button 
                          type="button" 
                          className="w-full" 
                          onClick={nextStep}
                          disabled={!form.getValues("consultationType")}
                        >
                          Continue <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {formStep === 2 && formType === "business" && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">Business Technology Solutions</h2>
                        <Button type="button" variant="outline" onClick={backStep} className="text-sm">
                          Back
                        </Button>
                      </div>
                      
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
                                  <SelectValue placeholder="Select industry" />
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
                            <div className="mb-4">
                              <FormLabel>What challenges are you facing? <span className="text-red-500">*</span></FormLabel>
                              <FormDescription>
                                Select all that apply
                              </FormDescription>
                            </div>
                            {challenges.map((item) => (
                              <FormField
                                key={item.id}
                                control={form.control}
                                name="challenges"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={item.id}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(item.id)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, item.id])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== item.id
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {item.label}
                                      </FormLabel>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="services"
                        render={() => (
                          <FormItem>
                            <div className="mb-4">
                              <FormLabel>Which services interest you? <span className="text-red-500">*</span></FormLabel>
                              <FormDescription>
                                Select all that apply
                              </FormDescription>
                            </div>
                            {services.map((item) => (
                              <FormField
                                key={item.id}
                                control={form.control}
                                name="services"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={item.id}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(item.id)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, item.id])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== item.id
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {item.label}
                                      </FormLabel>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="additionalDetails"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional details or requirements</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Share any specific requirements or questions you have..."
                                className="resize-none"
                                rows={4}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full">
                        Schedule Business Tech Consultation
                      </Button>
                    </div>
                  )}
                  
                  {formStep === 2 && formType === "product" && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">App & Product Development</h2>
                        <Button type="button" variant="outline" onClick={backStep} className="text-sm">
                          Back
                        </Button>
                      </div>
                      
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
                                  <FormLabel className="font-normal">
                                    I have a clear idea
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="guidance" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
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
                                {audiences.map((audience) => (
                                  <SelectItem key={audience.value} value={audience.value}>
                                    {audience.label}
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
                        name="budgetRange"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Budget Range <span className="text-red-500">*</span></FormLabel>
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
                            <FormLabel>Additional details or requirements</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Share any specific requirements or questions you have..."
                                className="resize-none"
                                rows={4}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full">
                        Schedule Product Development Consultation
                      </Button>
                    </div>
                  )}
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ConsultationPage;
