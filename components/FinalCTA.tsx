import Link from "next/link";
import { AppleIcon } from "./icons/AppleIcon";
import { GooglePlayIcon } from "./icons/GooglePlayIcon";

export default function FinalCTA() {
  return (
    <section className="bg-primary-container text-on-primary py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">
        Ready when you are.
      </h2>
      <p className="text-base md:text-lg opacity-90 max-w-xl mx-auto mb-8">
        Hire verified workers or pick up your next shift — all from the app.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3">
        <Link
          href="/#"
          className="group flex items-center gap-2.5 bg-on-background text-white rounded-xl px-5 py-3 hover:bg-black transition-colors active:scale-95"
        >
          <AppleIcon className="h-7 w-7 flex-shrink-0" />
          <div className="text-left leading-tight">
            <p className="text-[10px] uppercase opacity-70 tracking-wide">
              Download on the
            </p>
            <p className="text-base font-semibold -mt-0.5">App Store</p>
          </div>
        </Link>
        <Link
          href="/#"
          className="group flex items-center gap-2.5 bg-on-background text-white rounded-xl px-5 py-3 hover:bg-black transition-colors active:scale-95"
        >
          <GooglePlayIcon className="h-7 w-7 flex-shrink-0" />
          <div className="text-left leading-tight">
            <p className="text-[10px] uppercase opacity-70 tracking-wide">
              Get it on
            </p>
            <p className="text-base font-semibold -mt-0.5">Google Play</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
