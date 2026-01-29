import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export const PremiumCard = ({ 
  children, 
  className = "", 
  hover = true,
  glow = false 
}: PremiumCardProps) => {
  return (
    <motion.div
      className={cn(
        "relative bg-card rounded-lg border border-border/50 overflow-hidden",
        hover && "card-hover",
        glow && "glow-subtle",
        className
      )}
      whileHover={hover ? { scale: 1.01 } : undefined}
      transition={{ duration: 0.3 }}
    >
      {/* Subtle top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {children}
    </motion.div>
  );
};
