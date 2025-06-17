import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().min(1, "Organization is required"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  useEffect(() => {
    document.title = "Contact - Delmo Group";
  }, []);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      organization: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully",
        description: "Thank you for your inquiry. We will respond within 24 hours.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Australia",
      address: ["Ground Floor,", "465 Victoria Avenue", "Chatswood NSW 2067"],
      phone: "Tel. +61 2 9844 5809",
      email: "info@delmogroup.com",
      color: "text-eucalyptus"
    },
    {
      icon: MapPin,
      title: "Argentina",
      address: ["Parera 47, 4th floor", "Recoleta, CABA", "Argentina"],
      phone: "Tel. +54 11 4814 1505",
      email: "info@delmogroup.com",
      color: "text-ocean"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-semibold mb-8 text-charcoal">Contact</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Connect with Delmo Group to discuss sustainable development opportunities and Blue Economy initiatives.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-charcoal font-medium">First Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your first name" 
                            className="focus:ring-eucalyptus focus:border-eucalyptus"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-charcoal font-medium">Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your last name" 
                            className="focus:ring-eucalyptus focus:border-eucalyptus"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-charcoal font-medium">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="your.email@organization.com" 
                          className="focus:ring-eucalyptus focus:border-eucalyptus"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-charcoal font-medium">Organization</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your organization" 
                          className="focus:ring-eucalyptus focus:border-eucalyptus"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-charcoal font-medium">Subject</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="focus:ring-eucalyptus focus:border-eucalyptus">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="blue-economy">Blue Economy Projects</SelectItem>
                          <SelectItem value="environmental">Environmental Advisory</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-charcoal font-medium">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={6}
                          placeholder="Please describe your inquiry or project requirements..."
                          className="resize-none focus:ring-eucalyptus focus:border-eucalyptus"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-eucalyptus hover:bg-eucalyptus/90 text-white font-semibold py-4 px-8 rounded-lg transition-colors focus:ring-2 focus:ring-eucalyptus focus:ring-offset-2"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="lg:pl-8">
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={info.color} size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.address.map((line, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">{line}</p>
                        ))}
                        <p className="text-gray-600 text-sm">{info.phone}</p>
                        <p className="text-gray-600 text-sm">{info.email}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-12">
              <img 
                src="/attached_assets/contact-us_1750117561625.avif"
                alt="Aerial view of ocean sustainability and environmental preservation efforts" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
