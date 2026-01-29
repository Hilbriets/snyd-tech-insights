import { motion } from "framer-motion";

interface FlightPathProps {
  className?: string;
}

export const FlightPath = ({ className = "" }: FlightPathProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Main Flight Path */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(192, 85%, 42%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(192, 85%, 42%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(168, 70%, 38%)" stopOpacity="0" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Primary Arc Path */}
        <motion.path
          d="M-100,400 Q300,100 600,300 T1300,200"
          fill="none"
          stroke="url(#pathGradient)"
          strokeWidth="2"
          strokeDasharray="12 8"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        
        {/* Secondary Path */}
        <motion.path
          d="M-50,600 Q400,400 700,500 T1250,350"
          fill="none"
          stroke="url(#pathGradient)"
          strokeWidth="1.5"
          strokeDasharray="8 12"
          strokeOpacity="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 4, delay: 0.5, ease: "easeOut" }}
        />
        
        {/* Waypoints */}
        {[
          { cx: 300, cy: 200, delay: 1.5 },
          { cx: 600, cy: 300, delay: 2 },
          { cx: 900, cy: 250, delay: 2.5 },
        ].map((point, index) => (
          <motion.g key={index}>
            <motion.circle
              cx={point.cx}
              cy={point.cy}
              r="4"
              fill="hsl(192, 85%, 42%)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: point.delay, duration: 0.3 }}
            />
            <motion.circle
              cx={point.cx}
              cy={point.cy}
              r="12"
              fill="none"
              stroke="hsl(192, 85%, 42%)"
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
              transition={{
                delay: point.delay,
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          </motion.g>
        ))}
      </svg>
      
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
