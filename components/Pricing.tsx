import Link from "next/link";
import { Check } from "lucide-react";

// TODO: Lock final pricing tiers with Finance before launch. The numbers below
// are placeholders aligned with the PRD's Stripe Connect + platform-fee model.
type Tier = {
  audience: string;
  name: string;
  price: string;
  priceSuffix: string;
  blurb: string;
  bullets: string[];
  cta: { href: string; label: string };
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    audience: "For Workers",
    name: "Free, forever",
    price: "$0",
    priceSuffix: "you keep 100% of your hourly rate",
    blurb: "No signup fees. No subscription. Just shifts.",
    bullets: [
      "Browse and book shifts instantly",
      "Next-day payouts via Stripe",
      "Verified ratings build your profile",
      "ID and background check included",
    ],
    cta: { href: "/#", label: "I Want to Work" },
  },
  {
    audience: "For Employers",
    name: "Pay-as-you-staff",
    price: "",
    priceSuffix: "",
    blurb:
      "No subscriptions, no minimums. You pay only for shifts that actually happen.",
    bullets: [
      "Post unlimited shifts",
      "Background-checked, rated workers",
      "Server-verified clock-in and clock-out",
      "One consolidated invoice",
    ],
    cta: { href: "/#", label: "I Need Workers" },
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-surface-container-low py-24 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-wider text-secondary-container mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-container tracking-tight">
            Simple pricing. No surprises.
          </h2>
          <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto">
            Workers use Boost Staff for free. Employers pay only when a verified
            shift is completed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={
                tier.featured
                  ? "rounded-2xl p-8 bg-white border-2 border-primary-container shadow-elevated"
                  : "rounded-2xl p-8 bg-white border border-outline-variant/40"
              }
            >
              <p className="text-xs font-bold uppercase tracking-wider text-secondary-container mb-2">
                {tier.audience}
              </p>
              <h3 className="text-xl font-bold text-on-background">{tier.name}</h3>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-primary-container tracking-tight">
                  {tier.price}
                </span>
                <span className="text-sm text-on-surface-variant">
                  {tier.priceSuffix}
                </span>
              </div>
              <p className="text-sm text-on-surface-variant mt-3">{tier.blurb}</p>
              <ul className="mt-6 space-y-3">
                {tier.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 flex-shrink-0 text-primary-container mt-0.5" />
                    <span className="text-on-surface-variant">{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={tier.cta.href}
                className={
                  tier.featured
                    ? "mt-8 block text-center bg-secondary-container text-on-primary font-bold py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all"
                    : "mt-8 block text-center border-2 border-primary-container text-primary-container font-bold py-3 rounded-xl hover:bg-surface-container-low active:scale-95 transition-all"
                }
              >
                {tier.cta.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
