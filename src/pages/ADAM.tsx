import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/shared/PageBanner";
import { Button } from "@/components/ui/button";
import { PremiumCard } from "@/components/premium/PremiumCard";
import { ScrollReveal } from "@/components/premium/ScrollReveal";
import { HUDLabel } from "@/components/premium/HUDLabel";
import { TechGrid } from "@/components/premium/TechGrid";
import { SectionDivider } from "@/components/premium/SectionDivider";
import { 
  Layers,
  Shield,
  Users,
  Building2,
  Wrench,
  FileCheck,
  Server,
  ArrowRight,
  Check,
  AlertTriangle,
  Activity,
  Calendar,
  Scale,
  Brain,
  Radio
} from "lucide-react";

const problemPoints = [
  "Spreadsheets cannot enforce data integrity or version control across fleet configurations",
  "Paper-based maintenance logs are untraceable and audit-hostile",
  "Generic fleet tools lack drone-specific lifecycle semantics",
  "Compliance gaps emerge when maintenance history is fragmented across systems",
];

const modules = [
  {
    id: "core",
    name: "ADAM Core",
    tagline: "Maintenance & Asset Health",
    icon: Activity,
    description: "The foundation layer for asset identity, component tracking, and maintenance orchestration.",
    capabilities: [
      "Complete asset registry with unique identification and provenance",
      "Component-level lifecycle tracking with usage hours and replacement history",
      "Scheduled and unscheduled maintenance workflows with digital sign-offs",
    ],
  },
  {
    id: "fleet",
    name: "ADAM Fleet",
    tagline: "Operations & Scheduling",
    icon: Calendar,
    description: "Operational planning and resource allocation across your entire drone fleet.",
    capabilities: [
      "Fleet-wide availability and readiness dashboards",
      "Mission scheduling with asset allocation and conflict detection",
      "Utilization metrics and operational performance analytics",
    ],
  },
  {
    id: "comply",
    name: "ADAM Comply",
    tagline: "DGCA & Regulatory Compliance",
    icon: Scale,
    description: "Built-in regulatory frameworks ensuring continuous compliance with aviation authorities.",
    capabilities: [
      "DGCA-aligned compliance checkpoints and audit workflows",
      "Certificate and license expiry tracking with automated alerts",
      "Exportable compliance reports for regulatory review",
    ],
  },
  {
    id: "ai",
    name: "ADAM AI",
    tagline: "Predictive Maintenance & Intelligence",
    icon: Brain,
    description: "Machine learning-driven insights that anticipate failures before they occur.",
    capabilities: [
      "Predictive maintenance alerts based on usage patterns and component age",
      "Anomaly detection across fleet telemetry and maintenance data",
      "Intelligent scheduling recommendations optimizing asset availability",
    ],
  },
  {
    id: "ops",
    name: "ADAM Ops",
    tagline: "Live Operations & Mission Control",
    icon: Radio,
    description: "Real-time operational awareness and mission execution monitoring.",
    capabilities: [
      "Live mission tracking with real-time status updates",
      "Pre-flight and post-flight checklist enforcement",
      "Incident logging and operational event timeline",
    ],
  },
];

const targetAudience = [
  {
    icon: Building2,
    title: "Commercial Drone Operators",
    description: "Organizations operating multiple drones for commercial applications requiring regulatory compliance.",
  },
  {
    icon: Wrench,
    title: "MROs",
    description: "Maintenance, Repair, and Overhaul providers managing third-party drone fleets.",
  },
  {
    icon: FileCheck,
    title: "Industrial Inspection Companies",
    description: "Enterprises deploying drones for infrastructure inspection, energy, and utilities.",
  },
  {
    icon: Shield,
    title: "Compliance-Driven Organizations",
    description: "Entities operating under strict regulatory frameworks requiring audit-ready documentation.",
  },
];

const ADAM = () => {
  return (
    <Layout>
      {/* Hero */}
      <PageBanner
        title="SNYD ADAM"
        subtitle="The first operating system for drone enterprises. Unified asset management, compliance, and operations across your entire aerial fleet."
        label="Aerial Domain Asset Management"
        labelIcon={Server}
      />

      {/* Problem Statement */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <HUDLabel icon={AlertTriangle} text="The Challenge" className="mb-6" />
              <h2 className="mb-6">Why Drone Operations Fail at Scale</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                As drone fleets grow, operational complexity multiplies. Organizations discover that 
                ad-hoc tracking methods—spreadsheets, filing cabinets, and disconnected tools—cannot 
                sustain the rigor required for regulatory compliance and operational excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When an auditor requests maintenance history for a specific aircraft, or when a 
                configuration discrepancy causes an incident, the absence of a unified system 
                becomes a liability.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <PremiumCard className="p-8">
                <h4 className="font-heading font-semibold mb-6 text-lg">Common Failure Points</h4>
                <ul className="space-y-4">
                  {problemPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <AlertTriangle className="w-3 h-3 text-destructive" />
                      </div>
                      <span className="text-sm text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </PremiumCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Product Overview */}
      <section className="section-padding bg-muted/30 relative">
        <div className="absolute inset-0 tech-grid opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <HUDLabel icon={Layers} text="Platform Overview" className="mb-6" />
            <h2 className="mb-6">An Operating System, Not a Tool</h2>
            <p className="text-muted-foreground text-lg mb-6">
              SNYD ADAM is not another fleet tracker or maintenance spreadsheet replacement. 
              It is the foundational operating system that integrates every aspect of drone 
              enterprise operations—from asset acquisition to retirement.
            </p>
            <p className="text-muted-foreground">
              Five purpose-built modules work in concert to provide a unified operational 
              environment. Each module addresses a critical domain of drone enterprise 
              management, while sharing a common data layer that ensures consistency, 
              traceability, and audit readiness across all operations.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Unified Data Layer", desc: "Single source of truth across all operational domains" },
              { title: "Modular Architecture", desc: "Deploy the modules your operation requires, scale as you grow" },
              { title: "Audit-Ready by Design", desc: "Immutable records and compliance workflows built into the core" },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <PremiumCard className="p-6 text-center">
                  <h4 className="font-heading font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </PremiumCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Module Breakdown */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <HUDLabel text="Platform Modules" className="mb-6" />
            <h2 className="mb-6">Five Modules. One System.</h2>
            <p className="text-muted-foreground">
              Each ADAM module addresses a critical domain of drone enterprise operations, 
              designed to work independently or as an integrated platform.
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {modules.map((module, index) => (
              <ScrollReveal key={module.id} delay={index * 0.05}>
                <PremiumCard className="p-8">
                  <div className="grid lg:grid-cols-[280px_1fr] gap-8">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                          <module.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-lg">{module.name}</h4>
                          <p className="text-sm text-primary font-medium">{module.tagline}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {module.description}
                      </p>
                    </div>
                    
                    <div className="border-l border-border/50 pl-8">
                      <h5 className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-4">
                        Core Capabilities
                      </h5>
                      <ul className="space-y-3">
                        {module.capabilities.map((capability, capIndex) => (
                          <li key={capIndex} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </PremiumCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Who It's Built For */}
      <section className="section-padding bg-muted/30 relative">
        <div className="absolute inset-0 tech-grid opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <HUDLabel icon={Users} text="Target Audience" className="mb-6" />
            <h2 className="mb-6">Built for Enterprise Operations</h2>
            <p className="text-muted-foreground">
              SNYD ADAM is designed for organizations that require rigorous asset management 
              and regulatory compliance.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {targetAudience.map((audience, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <PremiumCard className="p-6 h-full text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <audience.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-heading font-semibold mb-2">{audience.title}</h4>
                  <p className="text-muted-foreground text-sm">{audience.description}</p>
                </PremiumCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="max-w-2xl mx-auto">
            <PremiumCard className="p-6 border-l-4 border-l-muted-foreground/30 bg-muted/50">
              <p className="text-muted-foreground text-sm italic">
                SNYD ADAM is not designed for hobbyists or casual drone users. The platform is 
                purpose-built for commercial and industrial operations where compliance, 
                traceability, and audit readiness are non-negotiable.
              </p>
            </PremiumCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Why SNYD TECH */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <HUDLabel text="Our Qualifications" className="mb-6" />
              <h2 className="mb-6">Why SNYD TECH</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                SNYD ADAM is not built by software generalists. It emerges from SNYD TECH's direct 
                involvement in drone operations, training, and maintenance—where the limitations 
                of existing tools became painfully clear.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team combines hands-on drone operations experience with software engineering 
                capability—a rare intersection that ensures SNYD ADAM addresses real operational pain 
                points, not hypothetical use cases.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <div className="space-y-4">
                {[
                  { title: "Operational Experience", desc: "Years of hands-on drone operations across multiple sectors" },
                  { title: "DGCA Alignment", desc: "Deep understanding of Indian aviation regulatory requirements" },
                  { title: "Maintenance Exposure", desc: "Direct experience with real-world maintenance challenges and compliance audits" },
                  { title: "Education to Software", desc: "Training programs revealed gaps that no existing tool addressed" },
                ].map((item, index) => (
                  <PremiumCard key={index} className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </PremiumCard>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA Section */}
      <section className="py-28 bg-snyd-navy relative overflow-hidden">
        <TechGrid variant="dark" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <ScrollReveal>
            <HUDLabel text="Enterprise Enquiries" className="bg-white/5 border-white/10 text-white/80 mb-6" />
            <h2 className="text-white mb-4">Request a Platform Demonstration</h2>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              Schedule a technical walkthrough with our team to evaluate SNYD ADAM for your fleet operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-snyd-navy hover:bg-white/90 text-base px-8 h-12"
              >
                <Link to="/contact">
                  Request a Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 text-base px-8 h-12"
              >
                <Link to="/contact">
                  Talk to Our Team
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default ADAM;
