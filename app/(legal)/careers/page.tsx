import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Boost Staff",
  description:
    "Build the future of on-demand hospitality staffing with Boost Staff.",
};

export default function CareersPage() {
  return (
    <>
      <h1>Careers at Boost Staff</h1>
      <p>
        We&rsquo;re building the fastest way to staff a shift in hospitality —
        trustworthy for businesses, flexible for workers, and fair for
        everyone.
      </p>
      <h2>Open roles</h2>
      <p>
        We don&rsquo;t have public openings listed yet. If you&rsquo;re
        interested in engineering, operations, or sales roles as we grow
        across Michigan, send us a note.
      </p>
      <p>
        <a href="mailto:careers@booststaff.io">careers@booststaff.io</a>
      </p>
    </>
  );
}
