import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/shared/PageBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { PremiumCard } from "@/components/premium/PremiumCard";
import { ScrollReveal } from "@/components/premium/ScrollReveal";
import { HUDLabel } from "@/components/premium/HUDLabel";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  ArrowUpRight,
  MessageSquare
} from "lucide-react";

const courses = [
  "Python Programming",
  "Java Development",
  "AI & Machine Learning",
  "Data Science",
  "Basic Drone Operations",
  "Advanced Drone Certification",
  "3D Printing Technology",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <PageBanner
        title="Get in Touch"
        subtitle="Ready to start your journey? Let's talk about how we can help."
        label="Contact"
        labelIcon={MessageSquare}
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal direction="left">
                <HUDLabel text="Contact Information" className="mb-6" />
                <h2 className="mb-8">Let's Connect</h2>
              </ScrollReveal>
              
              <ScrollReveal direction="left" delay={0.1}>
                <PremiumCard className="p-6 space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Address",
                      content: "76/2, Puttu Thoppu Main Rd, Ponnagaram, Madurai, TN 625016"
                    },
                    {
                      icon: Phone,
                      title: "Phone",
                      content: "+91 (0452) XXXXXX"
                    },
                    {
                      icon: Clock,
                      title: "Hours",
                      content: "Mon - Sat: 9AM - 6PM"
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      content: "info@snyd.in"
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-medium text-sm mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </PremiumCard>
              </ScrollReveal>

              {/* Social Links */}
              <ScrollReveal direction="left" delay={0.2}>
                <PremiumCard className="p-6">
                  <h4 className="font-heading font-medium text-sm mb-4">Connect With Us</h4>
                  <div className="flex gap-3">
                    {[
                      { href: "https://instagram.com/snyd.in", label: "Instagram" },
                      { href: "https://linkedin.com/company/snydtech", label: "LinkedIn" },
                      { href: "https://wa.me/914520000000", label: "WhatsApp" },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 rounded-lg bg-muted/50 text-center text-xs font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all flex items-center justify-center gap-2"
                      >
                        {social.label}
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </PremiumCard>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <PremiumCard className="p-8">
                  <HUDLabel text="Send a Message" className="mb-6" />
                  <h3 className="font-heading text-xl font-semibold mb-8">Tell us about your goals</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm">Your Name</Label>
                        <Input 
                          id="name" 
                          placeholder="John Doe" 
                          required 
                          className="bg-muted/50 border-border/50 focus:border-primary/50 h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="john@example.com" 
                          required 
                          className="bg-muted/50 border-border/50 focus:border-primary/50 h-11"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm">Phone Number</Label>
                        <Input 
                          id="phone" 
                          placeholder="+91 98765 43210" 
                          className="bg-muted/50 border-border/50 focus:border-primary/50 h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="course" className="text-sm">Interested In</Label>
                        <Select>
                          <SelectTrigger className="bg-muted/50 border-border/50 focus:border-primary/50 h-11">
                            <SelectValue placeholder="Select a program" />
                          </SelectTrigger>
                          <SelectContent>
                            {courses.map((course) => (
                              <SelectItem key={course} value={course.toLowerCase().replace(/\s+/g, "-")}>
                                {course}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your learning goals and how we can help..."
                        className="min-h-[140px] bg-muted/50 border-border/50 focus:border-primary/50 resize-none"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-primary hover:opacity-90 h-12"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </PremiumCard>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-8">
            <h3 className="font-heading font-semibold">Visit Our Center</h3>
          </ScrollReveal>
          <ScrollReveal>
            <PremiumCard className="aspect-[21/9] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">SNYD TECH</h4>
                <p className="text-muted-foreground text-sm">
                  76/2, Puttu Thoppu Main Rd, Ponnagaram,<br />
                  Madurai, Tamil Nadu 625016
                </p>
              </div>
            </PremiumCard>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
