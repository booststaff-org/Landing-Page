import { FilePlus2, ShieldCheck, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: FilePlus2,
    title: "Post or Browse",
    description:
      "Businesses post open roles in seconds. Workers browse shifts that fit their lifestyle and schedule.",
  },
  {
    icon: ShieldCheck,
    title: "Match & Verify",
    description:
      "Workers are matched to the right role based on skills, location, and availability — with identity verified in-app.",
  },
  {
    icon: Wallet,
    title: "Get Paid",
    description:
      "No manual timesheets. Payment is triggered automatically once the shift is completed and approved.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface-container-low py-20 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-primary-container text-center mb-16 tracking-tight">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Icon className="w-7 h-7 text-primary-container" />
                </div>
                <h3 className="text-xl font-bold text-on-background mb-3">
                  {title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
