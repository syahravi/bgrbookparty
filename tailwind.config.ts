import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#A8D5BA",
          50: "#F5FBF8",
          100: "#E8F5ED",
          200: "#D4EBE0",
          300: "#BFE1D2",
          400: "#A8D5BA",
          500: "#8DC9A5",
          600: "#6FB589",
          700: "#53916D",
          800: "#3F6E53",
          900: "#053923",
        },
        secondary: {
          DEFAULT: "#D4EBE0",
          light: "#F5FBF8",
          dark: "#A8D5BA",
        },
        accent: {
          DEFAULT: "#053923",
          light: "#3F6E53",
          lighter: "#6FB589",
        },
        background: "#F5FBF8",
        text: {
          primary: "#053923",
          secondary: "#3F6E53",
          muted: "#6B7280",
          light: "#9CA3AF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
