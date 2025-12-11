"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale";
  delay?: number;
  threshold?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
  className = "",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  return (
    <div
      ref={ref}
      className={`scroll-animate scroll-${animation} ${
        isVisible ? "is-visible" : ""
      } ${className}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}
