import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { AppleIcon } from "./icons/AppleIcon";
import { GooglePlayIcon } from "./icons/GooglePlayIcon";
import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";

const trustItems = [
  "Background Checked",
  "Instant Matching",
  "Automated Pay",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative backdrop: soft radial gradient + brand-tinted blobs. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(27,93,173,0.12),transparent_60%)]" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-secondary-container/20 blur-3xl" />
        <div className="absolute top-40 -left-24 h-72 w-72 rounded-full bg-primary-container/20 blur-3xl" />
      </div>

      <div className="px-6 py-12 md:py-20 max-w-7xl mx-auto flex flex-col items-center text-center">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary-container leading-tight mb-6 tracking-tight">
            Staff Up in Minutes.
          </h1>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-lg text-on-surface-variant max-w-2xl mb-10">
            Instantly connect with verified workers — or find flexible shifts near you.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col w-full gap-4 mb-10 sm:flex-row sm:justify-center">
            <Link
              href="/#"
              className="bg-secondary-container text-on-primary font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:opacity-90 active:scale-95 transition-all"
            >
              I Need Workers
            </Link>
            <Link
              href="/#"
              className="border-2 border-primary-container text-primary-container font-bold py-4 px-8 rounded-xl text-lg hover:bg-surface-container-low active:scale-95 transition-all"
            >
              I Want to Work
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex gap-3 mb-16">
            <Link
              href="/#"
              className="group flex items-center gap-2.5 bg-on-background text-white rounded-xl px-4 py-2.5 hover:bg-black transition-colors active:scale-95"
            >
              <AppleIcon className="h-6 w-6 flex-shrink-0" />
              <div className="text-left leading-tight">
                <p className="text-[9px] uppercase opacity-70 tracking-wide">
                  Download on the
                </p>
                <p className="text-sm font-semibold -mt-0.5">App Store</p>
              </div>
            </Link>
            <Link
              href="/#"
              className="group flex items-center gap-2.5 bg-on-background text-white rounded-xl px-4 py-2.5 hover:bg-black transition-colors active:scale-95"
            >
              <GooglePlayIcon className="h-6 w-6 flex-shrink-0" />
              <div className="text-left leading-tight">
                <p className="text-[9px] uppercase opacity-70 tracking-wide">
                  Get it on
                </p>
                <p className="text-sm font-semibold -mt-0.5">Google Play</p>
              </div>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <PhoneMockup />
        </Reveal>

        <Reveal delay={0.25}>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-on-surface-variant/80">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-1">
                <CheckCircle2 className="h-5 w-5 text-secondary-container fill-secondary-container" />
                <span className="text-on-background/80">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
