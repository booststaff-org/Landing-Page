type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "How are workers vetted?",
    a: "Every worker completes a government ID check and a third-party background check before their first shift. Ratings from each completed shift continue to shape who gets offered future work.",
  },
  {
    q: "What happens if someone no-shows?",
    a: "If a worker doesn't check in via the on-site Job Code, the shift is flagged and a replacement is surfaced automatically. Repeat no-shows are removed from the platform.",
  },
  {
    q: "How do payouts work?",
    a: "Hours are confirmed server-side after clock-out. Workers are paid the next business day via Stripe. Employers receive a single consolidated invoice — no timesheet chasing.",
  },
  {
    q: "Do I pay for hours that weren't worked?",
    a: "No. Time is tracked server-side against the verified clock-in and clock-out, so you're only billed for the minutes that actually happened.",
  },
  {
    q: "What if there's a dispute about a shift?",
    a: "Both sides can file a dispute inside the app. Our support team reviews the job code timestamps, location data, and ratings history before resolving. We'll reach back within one business day.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-14 px-6 max-w-3xl mx-auto scroll-mt-24">
      <div className="rounded-2xl border border-outline-variant/30 bg-white">
        <div className="px-5 py-4">
          <p className="text-xs font-bold uppercase tracking-wider text-secondary-container mb-0.5">
            Questions
          </p>
          <h2 className="text-xl md:text-2xl font-extrabold text-primary-container tracking-tight">
            Frequently asked.
          </h2>
        </div>

        <div className="divide-y divide-outline-variant/20 border-t border-outline-variant/20">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group/item">
              <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-3 text-sm font-semibold text-on-background list-none">
                <span>{q}</span>
                <span
                  aria-hidden
                  className="text-primary-container text-lg leading-none transition-transform group-open/item:rotate-45 shrink-0"
                >
                  +
                </span>
              </summary>
              <p className="px-5 pb-3 text-sm text-on-surface-variant leading-relaxed -mt-1">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
