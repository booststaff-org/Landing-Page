"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// TODO: Replace with real customer quotes (with permission) before launch.
type Review = {
  quote: string;
  name: string;
  role: string;
};

const reviews: Review[] = [
  {
    quote:
      "We needed three line cooks on 24 hours notice. Boost Staff had verified workers at the door before service started.",
    name: "Executive Chef",
    role: "Wedding venue, Detroit",
  },
  {
    quote:
      "The Job Code handshake is the first tool I've used that actually tells me who showed up. Time tracking just works.",
    name: "General Manager",
    role: "Restaurant group, Ann Arbor",
  },
  {
    quote:
      "Same-day shifts, clear pay, money in my account the next morning. No agencies, no guesswork.",
    name: "Line Cook",
    role: "Dearborn",
  },
];

const INTERVAL_MS = 6500;

export default function Reviews() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (n: number) => setI(((n % reviews.length) + reviews.length) % reviews.length);
  const next = () => go(i + 1);
  const prev = () => go(i - 1);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || paused) return;
    timer.current = setInterval(() => setI((v) => (v + 1) % reviews.length), INTERVAL_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-roledescription="carousel"
        aria-label="Customer reviews"
      >
        <Quote
          className="w-10 h-10 text-secondary-container/80 mx-auto mb-4"
          aria-hidden
        />
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${i * 100}%)` }}
          >
            {reviews.map((r) => (
              <figure
                key={r.quote}
                className="w-full flex-shrink-0 px-2 text-center"
                aria-hidden={reviews[i].quote !== r.quote}
              >
                <blockquote className="text-xl md:text-2xl font-medium text-on-background leading-snug">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm text-on-surface-variant">
                  <span className="font-bold text-primary-container">{r.name}</span>
                  <span className="mx-2 opacity-40">·</span>
                  <span>{r.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous review"
            onClick={prev}
            className="w-9 h-9 rounded-full bg-surface-container-low text-on-surface-variant hover:text-primary-container hover:bg-surface-container flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2" role="tablist">
            {reviews.map((_, n) => (
              <button
                key={n}
                role="tab"
                aria-label={`Go to review ${n + 1}`}
                aria-selected={n === i}
                onClick={() => go(n)}
                className={
                  n === i
                    ? "w-6 h-2 rounded-full bg-primary-container transition-all"
                    : "w-2 h-2 rounded-full bg-outline-variant hover:bg-primary-container/50 transition-all"
                }
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next review"
            onClick={next}
            className="w-9 h-9 rounded-full bg-surface-container-low text-on-surface-variant hover:text-primary-container hover:bg-surface-container flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
