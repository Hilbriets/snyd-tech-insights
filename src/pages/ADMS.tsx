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
  Database,
  Layers,
  Settings,
  History,
  Shield,
  Users,
  Building2,
  Wrench,
  FileCheck,
  Server,
  Lock,
  ArrowRight,
  Check,
  AlertTriangle,
  Boxes,
  ClipboardCheck,
  Cog
} from "lucide-react";

const problemPoints = [
  "Spreadsheets cannot enforce data integrity or version control across fleet configurations",
  "Paper-based maintenance logs are untraceable and audit-hostile",
  "Generic fleet tools lack drone-specific lifecycle semantics",
  "Compliance gaps emerge when maintenance history is fragmented across systems",
];

const architectureLayers = [
  {
    icon: Database,
    title: "Models",
    description: "Define drone types, component specifications, and baseline configurations. Models serve as the canonical reference for all derivative instances.",
  },
  {
    icon: Boxes,
    title: "Instances",
    description: "Each physical drone is tracked as an instance with unique identifiers, ownership history, and deployment status.",
  },
  {
    icon: Settings,
    title: "Configurations",
    description: "Version-controlled configuration states for each instance—payload, firmware, component swaps—with full change history.",
  },
  {
    icon: History,
    title: "Maintenance & History",
    description: "Complete maintenance records, scheduled tasks, compliance checkpoints, and immutable audit trails.",
  },
];

const capabilities = [
  {
    category: "Fleet & Asset Management",
    icon: Layers,
    features: [
      "Centralized drone registry with unique identification",
      "Real-time fleet status and operational readiness",
      "Ownership and custody tracking",
      "Deployment history and utilization metrics",
    ],
  },
  {
    category: "Parts & Component Tracking",
    icon: Cog,
    features: [
      "Serial number-level component tracking",
      "Component lifecycle and usage hours",
      "Replacement history and part provenance",
      "Inventory management and reorder thresholds",
    ],
  },
  {
    category: "Configuration Management",
    icon: Settings,
    features: [
      "Version-controlled configuration baselines",
      "Payload and sensor configuration tracking",
      "Firmware version management",
      "Configuration change audit trail",
    ],
  },
  {
    category: "Maintenance & Compliance",
    icon: ClipboardCheck,
    features: [
      "Scheduled and unscheduled maintenance workflows",
      "DGCA-aligned compliance checkpoints",
      "Digital work orders and sign-offs",
      "Certificate and license expiry tracking",
    ],
  },
  {
    category: "Security & Governance",
    icon: Lock,
    features: [
      "Role-based access control (RBAC)",
      "Immutable audit logs for all changes",
      "Data encryption at rest and in transit",
      "Multi-tenant architecture for fleet operators",
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

const ADMS = () => {
  return (
    <Layout>
      {/* Hero */}
      <PageBanner
        title="Drone Maintenance & Lifecycle Management"
        subtitle="Enterprise-grade software for fleet traceability, configuration control, and compliance-ready maintenance records."
        label="Enterprise Software"
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
                configuration discrepancy causes an incident, the absence of a structured system 
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
            <HUDLabel icon={Database} text="Product Overview" className="mb-6" />
            <h2 className="mb-6">ADMS: A Single Source of Truth</h2>
            <p className="text-muted-foreground text-lg">
              The ADMS platform provides end-to-end lifecycle management for drone fleets—from 
              acquisition through retirement. Every configuration change, maintenance action, and 
              compliance checkpoint is recorded in an immutable, audit-ready system.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Traceability", desc: "Complete provenance for every component and configuration change" },
              { title: "Compliance", desc: "DGCA-aligned workflows with digital sign-offs and expiry tracking" },
              { title: "Audit-Ready", desc: "Immutable records exportable for regulatory review" },
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

      {/* How ADMS Works - Architecture */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <HUDLabel icon={Layers} text="Architecture" className="mb-6" />
            <h2 className="mb-6">How ADMS Works</h2>
            <p className="text-muted-foreground">
              ADMS is built on a four-layer architecture that mirrors the operational reality 
              of drone fleet management.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architectureLayers.map((layer, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <PremiumCard className="p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                    <layer.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-mono text-xs text-muted-foreground mb-2">Layer {index + 1}</div>
                  <h4 className="font-heading font-semibold mb-3">{layer.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{layer.description}</p>
                </PremiumCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Core Capabilities */}
      <section className="section-padding bg-muted/30 relative">
        <div className="absolute inset-0 tech-grid opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <HUDLabel icon={Settings} text="Capabilities" className="mb-6" />
            <h2 className="mb-6">Core Capabilities</h2>
            <p className="text-muted-foreground">
              ADMS delivers comprehensive functionality across five critical domains.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <PremiumCard className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <cap.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-heading font-semibold">{cap.category}</h4>
                  </div>
                  <ul className="space-y-2">
                    {cap.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <Check className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </PremiumCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's Built For */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <HUDLabel icon={Users} text="Target Audience" className="mb-6" />
            <h2 className="mb-6">Built for Enterprise Operations</h2>
            <p className="text-muted-foreground">
              ADMS is designed for organizations that require rigorous asset management 
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
                ADMS is not designed for hobbyists or casual drone users. The platform is 
                purpose-built for commercial and industrial operations where compliance, 
                traceability, and audit readiness are non-negotiable.
              </p>
            </PremiumCard>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* Why SNYD TECH */}
      <section className="section-padding bg-muted/30 relative">
        <div className="absolute inset-0 tech-grid opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <HUDLabel text="Our Qualifications" className="mb-6" />
              <h2 className="mb-6">Why SNYD TECH</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                ADMS is not built by software generalists. It emerges from SNYD TECH's direct 
                involvement in drone operations, training, and maintenance—where the limitations 
                of existing tools became painfully clear.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team combines hands-on drone operations experience with software engineering 
                capability—a rare intersection that ensures ADMS addresses real operational pain 
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

      {/* CTA Section */}
      <section className="py-28 bg-snyd-navy relative overflow-hidden">
        <TechGrid variant="dark" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <ScrollReveal>
            <HUDLabel text="Enterprise Enquiries" className="bg-white/5 border-white/10 text-white/80 mb-6" />
            <h2 className="text-white mb-4">Request a Demonstration</h2>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              Schedule a technical walkthrough with our team to evaluate ADMS for your fleet operations.
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

export default ADMS;
