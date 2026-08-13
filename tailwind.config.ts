import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./context/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(15, 23, 42, 0.06), 0 8px 24px -8px rgba(15, 23, 42, 0.08)",
        "soft-lg": "0 8px 30px -8px rgba(15, 23, 42, 0.12), 0 16px 48px -16px rgba(15, 23, 42, 0.14)",
        "soft-dark": "0 2px 8px -2px rgba(0, 0, 0, 0.3), 0 8px 24px -8px rgba(0, 0, 0, 0.4)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #f97316 0%, #ec4899 40%, #8b5cf6 70%, #3b82f6 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, #eff6ff 0%, #eef2ff 100%)",
        "brand-radial":
          "radial-gradient(ellipse 65% 55% at 8% -10%, rgba(250,204,21,0.35), transparent 62%), radial-gradient(ellipse 60% 55% at 90% -5%, rgba(139,92,246,0.28), transparent 62%), radial-gradient(ellipse 70% 60% at 80% 30%, rgba(236,72,153,0.22), transparent 60%), radial-gradient(ellipse 60% 50% at 15% 40%, rgba(59,130,246,0.2), transparent 60%), radial-gradient(ellipse 50% 45% at 50% -20%, rgba(249,115,22,0.18), transparent 55%)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "pop": {
          "0%": { transform: "scale(1)" },
          "40%": { transform: "scale(1.35)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out both",
        "scale-in": "scale-in 0.2s ease-out both",
        pop: "pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
