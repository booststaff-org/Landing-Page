import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Boost Staff",
  description: "Reach the Boost Staff team for support or sales.",
};

export default function ContactPage() {
  return (
    <>
      <h1>Contact us</h1>
      <p>
        We&rsquo;re a small team. Pick the right address and we&rsquo;ll get
        back to you within one business day.
      </p>
      <h2>Support</h2>
      <p>
        For shift, payment, or account issues:{" "}
        <a href="mailto:support@booststaff.io">support@booststaff.io</a>
      </p>
      <h2>Sales</h2>
      <p>
        Staffing a venue, hotel, or event?{" "}
        <a href="mailto:sales@booststaff.io">sales@booststaff.io</a>
      </p>
      <h2>Phone</h2>
      <p>
        <a href="tel:+17343597116">(734) 359-7116</a>
      </p>
    </>
  );
}
