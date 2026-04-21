import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Boost Staff",
  description:
    "The rules of the road for using Boost Staff as a worker or employer.",
};

export default function TermsPage() {
  return (
    <>
      <h1>Terms of Service</h1>
      <h2>Using the platform</h2>
      <p>
        You agree to provide accurate information, complete shifts you accept,
        and treat the people you work with respectfully. Boost Staff reserves
        the right to remove accounts that don&rsquo;t.
      </p>
      <h2>Questions</h2>
      <p>
        Reach us at{" "}
        <a href="mailto:legal@boostaff.io">legal@boostaff.io</a>.
      </p>
    </>
  );
}
