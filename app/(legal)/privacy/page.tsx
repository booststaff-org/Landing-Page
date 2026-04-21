import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Boost Staff",
  description:
    "How Boost Staff collects, uses, and protects information from workers and employers.",
};

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <h2>What we collect</h2>
      <p>
        Identity information needed to verify you can legally work, payment
        details routed through our processor, location during a shift to
        confirm on-site arrival, and product usage data to improve the service.
      </p>
      <h2>How to reach us</h2>
      <p>
        Questions about your data? Email{" "}
        <a href="mailto:privacy@boostaff.io">privacy@boostaff.io</a>.
      </p>
    </>
  );
}
