"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Stagger offset (seconds) when a parent renders multiple Reveals. */
  delay?: number;
  /** Tailwind display class override, e.g. "block" (default) or "inline-block". */
  as?: "div" | "section" | "li";
  className?: string;
};

/**
 * Scroll-triggered fade-up that respects `prefers-reduced-motion`.
 * Uses viewport-once so content doesn't re-animate on scroll back.
 */
export default function Reveal({
  children,
  delay = 0,
  as = "div",
  className,
}: Props) {
  const reduce = useReducedMotion();
  const Component =
    as === "section" ? motion.section : as === "li" ? motion.li : motion.div;

  if (reduce) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </Component>
  );
}
