import { ReactNode } from "react";

interface PageBannerProps {
  title: string;
  subtitle: string;
  children?: ReactNode;
}

export const PageBanner = ({ title, subtitle, children }: PageBannerProps) => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-snyd-navy">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 animate-fade-in">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/70 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {subtitle}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
};
