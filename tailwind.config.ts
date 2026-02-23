import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#1A1A1A",
          deep: "#0D0D0D",
          light: "#2A2A2A",
          medium: "#222222",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E5C76B",
          dark: "#B8960C",
          muted: "rgba(212, 175, 55, 0.15)",
        },
        cream: {
          DEFAULT: "#F8F7F4", // Main background updated to soft luxury cream
          dark: "#E8E8E0",
          light: "#FFFFFF", // Pure white
          soft: "#F5F5F0",
        },
        richblack: "#0D0D0D",
        bodytext: "#333333", // Body text color
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-montserrat)", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 6rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15" }],
        "display-sm": ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.2" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "caption": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.08em" }],
      },
      spacing: {
        "section": "clamp(5rem, 12vw, 7.5rem)", // 120px max on desktop
        "section-sm": "clamp(3.75rem, 8vw, 5rem)", // 80px on tablet
        "section-xs": "clamp(2.5rem, 6vw, 3.75rem)", // 60px on mobile
        "gutter": "clamp(1.5rem, 3vw, 3rem)",
      },
      borderRadius: {
        luxury: "6px", // Softer card radius
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37, #E5C76B, #D4AF37)",
        "dark-gradient": "linear-gradient(180deg, #0D0D0D, #1A1A1A)",
        "hero-overlay": "linear-gradient(180deg, rgba(13,13,13,0.7) 0%, rgba(26,26,26,0.85) 50%, rgba(13,13,13,0.95) 100%)",
      },
      boxShadow: {
        "gold-glow": "0 0 30px rgba(212, 175, 55, 0.08)", // Subtler gold glow
        "gold-glow-lg": "0 0 40px rgba(212, 175, 55, 0.12)", // Less intense large glow
        "card": "0 10px 30px rgba(0, 0, 0, 0.06)", // Lighter card shadow
        "card-hover": "0 15px 40px rgba(0, 0, 0, 0.08)", // Subtler hover shadow
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
        "scroll-indicator": "scrollIndicator 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        scrollIndicator: {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "50%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(8px)" },
        },
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      ease: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
