"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import logo from "@/public/boost-staff-logo.png";

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu when the viewport grows past the md breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-elevated">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center group"
          aria-label="Boost Staff home"
        >
          <Image
            src={logo}
            alt="Boost Staff"
            priority
            className="h-12 md:h-16 w-auto flex-shrink-0 transition-transform group-hover:-translate-y-0.5 duration-200"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-8"
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold text-on-surface-variant hover:text-primary-container transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {/* <Link
            href="/signin"
            className="text-sm font-semibold text-on-surface-variant hover:text-primary-container transition-colors"
          >
            Sign In
          </Link> */}
          <Link
            href="/#"
            className="bg-secondary-container text-on-primary font-bold px-5 py-2.5 rounded-lg text-sm border-2 border-primary-container hover:bg-primary-container hover:text-on-primary transition-colors active:scale-95 shadow-[0_4px_14px_rgba(27,93,173,0.15)]"
          >
            Download App
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-primary-container hover:bg-surface-container-low transition-colors"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-outline-variant/20 bg-white"
        >
          <nav aria-label="Primary mobile" className="flex flex-col px-6 py-4">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-semibold text-on-background border-b border-outline-variant/10 last:border-b-0"
              >
                {label}
              </a>
            ))}
            {/* <Link
              href="/signin"
              onClick={() => setOpen(false)}
              className="py-3 text-base font-semibold text-on-background"
            >
              Sign In
            </Link> */}
            <Link
              href="/#"
              onClick={() => setOpen(false)}
              className="mt-3 bg-secondary-container text-on-primary font-bold px-5 py-3 rounded-lg text-center border-2 border-primary-container"
            >
              Download App
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
