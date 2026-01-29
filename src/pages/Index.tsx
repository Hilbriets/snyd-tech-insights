import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/shared/StatCard";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { 
  ArrowRight, 
  Code, 
  Cpu, 
  Box, 
  GraduationCap,
  Users,
  Building2,
  Award
} from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-snyd-navy">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        </div>

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm mb-6 animate-fade-in">
              <Cpu className="w-4 h-4" />
              Technology Education & Drone Solutions
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Expand Your Perspective with{" "}
              <span className="text-gradient">SNYD TECH</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Empowering the next generation through cutting-edge technology education and innovative drone solutions in Tamil Nadu.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg" className="bg-gradient-snyd hover:opacity-90 text-lg px-8">
                <Link to="/services">
                  Explore Courses
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 border-white/30 text-white hover:bg-white/10">
                <Link to="/drones">Drone Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value="500+" label="Students Trained" />
            <StatCard value="20+" label="Technology Workshops" />
            <StatCard value="15+" label="Drone Projects" />
            <StatCard value="50+" label="Corporate Clients" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Core Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive technology training and solutions for the next generation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Code}
              title="Technology Education"
              description="Comprehensive training in Java, Python, AI, and Data Science for students and professionals."
              href="/services"
            />
            <ServiceCard
              icon={Cpu}
              title="Drone Solutions"
              description="Providing drone-based solutions and products for day-to-day problems across various sectors."
              href="/drones"
            />
            <ServiceCard
              icon={Box}
              title="3D Printing"
              description="Hands-on training in 3D printing technology for prototyping and manufacturing."
              href="/services"
            />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                About SNYD TECH
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Based in Madurai, Tamil Nadu, SNYD TECH is a leading provider of technology education and services. We specialize in providing workshops on the latest technologies for school and college students, helping them build careers in emerging tech fields.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our mission is to bridge the gap between academic learning and industry requirements by offering practical, hands-on training in cutting-edge technologies.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">
                  Know More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="p-6 bg-card rounded-2xl shadow-lg">
                  <GraduationCap className="w-10 h-10 text-primary mb-3" />
                  <h4 className="font-heading font-semibold">Expert Training</h4>
                  <p className="text-sm text-muted-foreground">Industry-certified instructors</p>
                </div>
                <div className="p-6 bg-card rounded-2xl shadow-lg">
                  <Users className="w-10 h-10 text-secondary mb-3" />
                  <h4 className="font-heading font-semibold">Small Batches</h4>
                  <p className="text-sm text-muted-foreground">Personalized attention</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="p-6 bg-card rounded-2xl shadow-lg">
                  <Building2 className="w-10 h-10 text-accent mb-3" />
                  <h4 className="font-heading font-semibold">Corporate Tie-ups</h4>
                  <p className="text-sm text-muted-foreground">Industry partnerships</p>
                </div>
                <div className="p-6 bg-card rounded-2xl shadow-lg">
                  <Award className="w-10 h-10 text-primary mb-3" />
                  <h4 className="font-heading font-semibold">Certifications</h4>
                  <p className="text-sm text-muted-foreground">Recognized credentials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-snyd relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have transformed their careers with SNYD TECH
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
