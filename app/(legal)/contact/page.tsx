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
        Have a question or need help? Reach us through any of the channels
        below.
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
      <h2>Mailing Address</h2>
      <address>
        Boost Staff Inc.<br />
        19120 Grand River Ave<br />
        Detroit, MI 48223
      </address>
    </>
  );
}
