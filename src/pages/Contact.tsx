import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/shared/PageBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Instagram,
  Linkedin,
  MessageCircle,
  Send
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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <PageBanner
        title="Contact SNYD TECH"
        subtitle="Get in Touch for Technology Education & Drone Solutions"
      />

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl font-heading font-bold mb-6">Contact Information</h2>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold mb-1">Address</h4>
                      <p className="text-muted-foreground text-sm">
                        76/2, Puttu Thoppu Main Rd, Ponnagaram, Puttuthoppu, Arappalayam, Madurai, Tamil Nadu 625016
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold mb-1">Phone</h4>
                      <p className="text-muted-foreground text-sm">+91 (0452) XXXXXX</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold mb-1">Hours</h4>
                      <p className="text-muted-foreground text-sm">Mon - Sat: 9AM - 6PM</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground text-sm">info@snyd.in</p>
                      <p className="text-muted-foreground text-sm">support@snyd.in</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-heading font-semibold mb-4">Connect With Us</h4>
                  <div className="flex gap-3">
                    <a
                      href="https://instagram.com/snyd.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-gradient-snyd flex items-center justify-center text-primary-foreground hover:opacity-90 transition-opacity"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href="https://linkedin.com/company/snydtech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-[#0077B5] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href="https://wa.me/914520000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-[#25D366] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                    >
                      <MessageCircle className="w-6 h-6" />
                    </a>
                  </div>
                  <p className="text-muted-foreground text-sm mt-4">
                    @snyd.in • 116 followers • 22 posts
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-heading font-bold mb-6">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+91 98765 43210" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="course">Interested In</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a Course" />
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
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your learning goals..."
                        className="min-h-[150px]"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-snyd hover:opacity-90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold text-center mb-8">Visit Our Center</h2>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg bg-muted flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl mb-2">SNYD TECH</h3>
              <p className="text-muted-foreground">
                76/2, Puttu Thoppu Main Rd, Ponnagaram,<br />
                Madurai, Tamil Nadu 625016
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
