import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

export const StatCard = ({ value, label, delay = 0 }: StatCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center p-8 relative group"
    >
      {/* Background on hover */}
      <div className="absolute inset-0 bg-primary/5 rounded-2xl scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
      
      <div className="relative z-10">
        <div className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-2">
          {value}
        </div>
        <div className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
          {label}
        </div>
      </div>
    </motion.div>
  );
};
