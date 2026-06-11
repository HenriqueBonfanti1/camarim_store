import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
    xl: "text-6xl md:text-8xl",
    hero: "text-[clamp(5rem,16vw,14rem)]",
  };

  return (
    <div className={`font-display font-bold tracking-tighter leading-none select-none ${sizeClasses[size]} ${className}`}>
      <span 
        className="text-glow-cyan inline-block"
        style={{ color: "rgb(0, 229, 255)" }}
      >
        SHIFT
      </span>
      <span
        className="animate-x-pulse inline-block"
        style={{ 
          color: "#FF6000",
          textShadow: "0 0 10px rgba(255, 96, 0, 0.8), 0 0 20px rgba(255, 96, 0, 0.6), 0 0 40px rgba(255, 96, 0, 0.4)"
        }}
      >
        X
      </span>
    </div>
  );
}
