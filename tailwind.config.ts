import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand
        primary: "#00458a",
        "primary-container": "#1b5dad",
        "primary-fixed": "#d6e3ff",
        "primary-fixed-dim": "#a9c7ff",
        "on-primary": "#ffffff",
        "on-primary-container": "#c5d8ff",
        "on-primary-fixed": "#001b3d",
        "on-primary-fixed-variant": "#00468c",

        // Accent
        secondary: "#914d00",
        "secondary-container": "#fd983a",
        "secondary-fixed": "#ffdcc3",
        "secondary-fixed-dim": "#ffb77e",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#693600",
        "on-secondary-fixed": "#2f1500",
        "on-secondary-fixed-variant": "#6e3900",

        // Surface tiers
        surface: "#f9f9ff",
        "surface-bright": "#f9f9ff",
        "surface-dim": "#cfdaf2",
        "surface-tint": "#1c5eae",
        "surface-variant": "#d8e3fb",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f0f3ff",
        "surface-container": "#e7eeff",
        "surface-container-high": "#dee8ff",
        "surface-container-highest": "#d8e3fb",

        // Text
        background: "#f9f9ff",
        "on-background": "#111c2d",
        "on-surface": "#111c2d",
        "on-surface-variant": "#424751",

        // Lines
        outline: "#727783",
        "outline-variant": "#c2c6d3",

        // States
        error: "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",
      },
      fontFamily: {
        headline: ["var(--font-headline)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      boxShadow: {
        elevated: "0 12px 40px rgba(17, 28, 45, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
