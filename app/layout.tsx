import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://boostaff.io";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-headline",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Boost Staff — Staff Up in Minutes",
    template: "%s — Boost Staff",
  },
  description:
    "Instantly connect with verified workers — or find flexible shifts near you. The on-demand staffing marketplace for hospitality and events.",
  applicationName: "Boost Staff",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Boost Staff — Staff Up in Minutes",
    description:
      "Instantly connect with verified workers — or find flexible shifts near you.",
    url: SITE_URL,
    siteName: "Boost Staff",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Boost Staff — Staff Up in Minutes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boost Staff — Staff Up in Minutes",
    description:
      "Instantly connect with verified workers — or find flexible shifts near you.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Schema.org Organization JSON-LD. Helps search and social surfaces render
// rich results and link the brand to social profiles.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Boost Staff",
  url: SITE_URL,
  logo: `${SITE_URL}/boost-staff-logo.png`,
  description:
    "On-demand staffing marketplace for hospitality and events. Background-checked workers, Job Code check-in, server-verified hours, and instant payouts.",
  // TODO: Confirm support phone number with Operations before launch.
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-734-359-7116",
      contactType: "customer support",
      areaServed: "US",
      availableLanguage: ["English"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/boost-staff",
    "https://www.instagram.com/booststaff",
    "https://x.com/booststaff",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        {children}
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
