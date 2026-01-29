import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/shared/PageBanner";
import { Button } from "@/components/ui/button";
import { PremiumCard } from "@/components/premium/PremiumCard";
import { ScrollReveal } from "@/components/premium/ScrollReveal";
import { HUDLabel } from "@/components/premium/HUDLabel";
import { TechGrid } from "@/components/premium/TechGrid";
import { SectionDivider } from "@/components/premium/SectionDivider";
import { 
  Plane,
  Camera,
  Sprout,
  Building,
  Map,
  Shield,
  ArrowRight,
  Check,
  GraduationCap,
  Wrench,
  ClipboardList,
  Award
} from "lucide-react";

const droneServices = [
  {
    icon: GraduationCap,
    title: "Pilot Training",
    description: "DGCA-approved drone pilot certification courses.",
    features: ["Advanced Flight Training", "DGCA Prep", "Hands-on Experience", "Safety Protocols"],
  },
  {
    icon: Camera,
    title: "Aerial Imaging",
    description: "Professional aerial photography and videography.",
    features: ["Event Coverage", "Real Estate", "Commercial Filming", "360° Views"],
  },
  {
    icon: Sprout,
    title: "Agriculture",
    description: "Precision agriculture and crop monitoring.",
    features: ["Crop Health", "Spraying & Seeding", "Land Surveying", "Irrigation Planning"],
  },
  {
    icon: Building,
    title: "Industrial",
    description: "Infrastructure inspection and monitoring.",
    features: ["Structure Inspection", "Power Lines", "Wind Turbines", "Pipelines"],
  },
  {
    icon: Map,
    title: "Mapping",
    description: "High-precision aerial surveying and 3D mapping.",
    features: ["Topographic Mapping", "Site Monitoring", "3D Modeling", "Volume Calc"],
  },
  {
    icon: Shield,
    title: "Security",
    description: "Aerial surveillance and security solutions.",
    features: ["Perimeter Security", "Event Coverage", "Traffic", "Search & Rescue"],
  },
];

const Drones = () => {
  return (
    <Layout>
      <PageBanner
        title="Drone Solutions"
        subtitle="Enterprise-grade aerial technology solutions for agriculture, industry, and beyond."
        label="DGCA Approved"
        labelIcon={Award}
      />

      {/* Intro */}
      <section className="section-padding-sm bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-4xl mx-auto text-center">
            <HUDLabel icon={Plane} text="Innovative Technology" className="mb-6" />
            <h2 className="mb-6">Aerial Innovation at Scale</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              At SNYD TECH, we deliver drone-based solutions across multiple sectors. 
              Our DGCA-approved programs and practical approach make us a leader in drone 
              technology in Tamil Nadu.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Drone Services Grid */}
      <section className="section-padding bg-muted/30 relative">
        <div className="absolute inset-0 tech-grid opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center mb-12">
            <h2 className="mb-4">Capabilities</h2>
            <p className="text-muted-foreground">End-to-end drone services for enterprise needs</p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {droneServices.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <PremiumCard className="p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="w-3 h-3 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </PremiumCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Training & Software */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <PremiumCard className="p-8 h-full">
                <HUDLabel icon={GraduationCap} text="Training Program" className="mb-6" />
                <h3 className="font-heading text-2xl font-semibold mb-4">
                  Basic Drone Operations
                </h3>
                <p className="text-muted-foreground text-sm mb-2 font-mono">
                  Duration: 2 Weeks
                </p>
                <p className="text-muted-foreground mb-6">
                  Introduction to drone technology, flight operations, and safety protocols.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Drone Components & Types",
                    "Basic Flight Controls",
                    "Pre-flight Checks",
                    "Safety Regulations",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-gradient-primary">
                  <Link to="/contact">
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </PremiumCard>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <PremiumCard className="p-8 h-full">
                <HUDLabel icon={Wrench} text="Software Solution" className="mb-6" />
                <h3 className="font-heading text-2xl font-semibold mb-4">
                  Fleet Maintenance Platform
                </h3>
                <p className="text-muted-foreground text-sm mb-2 font-mono">
                  Enterprise Ready
                </p>
                <p className="text-muted-foreground mb-6">
                  End-to-end application for drone maintenance and fleet management.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Inventory Tracking",
                    "Configuration Logging",
                    "Certificate Management",
                    "Maintenance Scheduling",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center">
                        <ClipboardList className="w-3 h-3 text-secondary" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline">
                  <Link to="/contact">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </PremiumCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-snyd-navy relative overflow-hidden">
        <TechGrid variant="dark" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-white mb-4">Start Your Drone Journey</h2>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              Learn from DGCA-approved instructors with real-world operational experience
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-snyd-navy hover:bg-white/90 text-base px-8 h-12"
            >
              <Link to="/contact">
                Enroll in Drone Course
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Drones;
