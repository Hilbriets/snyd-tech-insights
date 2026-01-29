import { ReactNode } from "react";
import { motion } from "framer-motion";
import { TechGrid } from "@/components/premium/TechGrid";
import { HUDLabel } from "@/components/premium/HUDLabel";
import { LucideIcon } from "lucide-react";

interface PageBannerProps {
  title: string;
  subtitle: string;
  label?: string;
  labelIcon?: LucideIcon;
  children?: ReactNode;
}

export const PageBanner = ({ title, subtitle, label, labelIcon, children }: PageBannerProps) => {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-snyd-navy">
      <TechGrid variant="dark" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {label && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-6"
            >
              <HUDLabel icon={labelIcon} text={label} className="bg-white/5 border-white/10 text-white/80" />
            </motion.div>
          )}
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white mb-6"
          >
            {title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
          
          {children}
        </div>
      </div>
    </section>
  );
};
