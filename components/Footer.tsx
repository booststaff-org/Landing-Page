import Image from "next/image";
import Link from "next/link";
import logo from "@/public/boost-staff-logo.png";
import { LinkedInIcon, InstagramIcon, FacebookIcon, TikTokIcon } from "./icons/SocialIcons";

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/contact", label: "Contact Us" },
  { href: "/careers", label: "Careers" },
];

const socials = [
  { href: "https://www.facebook.com/share/1BU4Lpa46a/", label: "Facebook", Icon: FacebookIcon },
  { href: "https://www.instagram.com/booststaff", label: "Instagram", Icon: InstagramIcon },
  { href: "https://www.linkedin.com/company/booststaff/", label: "LinkedIn", Icon: LinkedInIcon },
  { href: "https://www.tiktok.com/@boost.staff?_r=1&_t=ZP-965oY4VMREF", label: "TikTok", Icon: TikTokIcon },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 gap-8 max-w-7xl mx-auto">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-2">
            <Link href="/" aria-label="Boost Staff home">
              <Image src={logo} alt="Boost Staff" className="h-16 w-auto hover:opacity-80 transition-opacity" />
            </Link>
          </div>
          {/* TODO: Confirm registered legal entity name and verify support
              phone number with Operations before launch. */}
          <p className="text-sm text-on-surface-variant/70">
            © {new Date().getFullYear()} Boost Staff Inc. ·{" "}
            <a href="tel:+17343597116" className="hover:text-primary-container">
              (734) 359-7116
            </a>
          </p>
        </div>
        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-6 text-sm font-medium text-on-surface-variant"
        >
          {legalLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-secondary-container transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-3">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary-container hover:bg-primary-container hover:text-white transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
