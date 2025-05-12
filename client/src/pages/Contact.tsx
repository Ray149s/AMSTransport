import { Helmet } from "react-helmet";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import Hero from "@/components/Hero";
import ContactBar from "@/components/ContactBar";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  contactConsent: z.boolean().refine(val => val === true, {
    message: "You must agree to be contacted",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      contactConsent: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - AMS Transportation</title>
        <meta name="description" content="Get in touch with AMS Transportation for all your logistics and transportation needs. Reach us by phone, email, or through our contact form." />
      </Helmet>
      
      <Hero showContactButton={false} />
      <ContactBar />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h1 className="text-3xl font-bold mb-6">Get In Touch</h1>
                <p className="text-gray-600 mb-8">
                  Have questions about our services or want to request a quote? Fill out the form below and our team will get back to you as soon as possible.
                </p>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
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
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
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
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you?" 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="contactConsent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              Permission to contact
                            </FormLabel>
                            <FormDescription>
                              By checking this box, you agree to allow AMS Transportation to contact you regarding your inquiry.
                            </FormDescription>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-red-600 hover:bg-red-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-red-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Our Location</h3>
                      <address className="not-italic text-gray-600">
                        AMS Transportation<br />
                        1920 Railroad Street<br />
                        Suite #5<br />
                        Statham, GA 30666
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-red-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:943-227-5246" className="hover:text-red-600 transition">
                          943-227-5246
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-red-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@alwaysmovingsomething.com" className="hover:text-red-600 transition">
                          info@alwaysmovingsomething.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-red-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 h-64 bg-gray-200 rounded-lg">
                  {/* Map would go here - using placeholder */}
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-gray-500">Google Maps Integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
