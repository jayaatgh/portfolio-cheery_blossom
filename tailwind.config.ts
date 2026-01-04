import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        blush: "hsl(var(--blush))",
        lavender: "hsl(var(--lavender))",
        peach: "hsl(var(--peach))",
        "rose-gold": "hsl(var(--rose-gold))",
        "warm-white": "hsl(var(--warm-white))",
        "soft-pink": "hsl(var(--soft-pink))",
        mauve: "hsl(var(--mauve))",
        cream: "hsl(var(--cream))",
        sky: "hsl(var(--sky))",
        "sky-light": "hsl(var(--sky-light))",
        "pink-100": "hsl(340 60% 96%)",
        "sky-50": "hsl(200 70% 97%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
        xl: "calc(var(--radius) + 6px)",
        "2xl": "calc(var(--radius) + 12px)",
        "3xl": "calc(var(--radius) + 20px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "25%": { transform: "translateY(-8px) rotate(0.5deg)" },
          "50%": { transform: "translateY(-14px) rotate(0deg)" },
          "75%": { transform: "translateY(-6px) rotate(-0.5deg)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-scale": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "gentle-pulse": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.02)" },
        },
        blob: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "25%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
          "50%": { borderRadius: "50% 60% 30% 60% / 30% 50% 70% 50%" },
          "75%": { borderRadius: "60% 40% 60% 40% / 70% 30% 50% 60%" },
        },
        "gradient-float": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.6" },
          "33%": { transform: "translate(30px, -30px) scale(1.05)", opacity: "0.7" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)", opacity: "0.5" },
        },
        "gradient-float-delayed": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.5" },
          "50%": { transform: "translate(-40px, 30px) scale(1.1)", opacity: "0.6" },
        },
        "gradient-float-slow": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.4" },
          "25%": { transform: "translate(20px, -20px) scale(1.02)", opacity: "0.5" },
          "75%": { transform: "translate(-30px, 10px) scale(0.98)", opacity: "0.45" },
        },
        "gradient-pulse": {
          "0%, 100%": { opacity: "0.3", transform: "translate(-50%, -50%) scale(1)" },
          "50%": { opacity: "0.5", transform: "translate(-50%, -50%) scale(1.1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
        float: "float 5s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in-down": "fade-in-down 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in-scale": "fade-in-scale 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "gentle-pulse": "gentle-pulse 4s ease-in-out infinite",
        blob: "blob 8s ease-in-out infinite",
        "gradient-float": "gradient-float 15s ease-in-out infinite",
        "gradient-float-delayed": "gradient-float-delayed 18s ease-in-out infinite 2s",
        "gradient-float-slow": "gradient-float-slow 22s ease-in-out infinite 4s",
        "gradient-pulse": "gradient-pulse 12s ease-in-out infinite",
      },
      boxShadow: {
        soft: "0 4px 24px -6px hsl(345 25% 65% / 0.12)",
        card: "0 10px 40px -10px hsl(345 25% 55% / 0.1)",
        hover: "0 16px 50px -14px hsl(345 35% 55% / 0.18)",
        glow: "0 0 60px -15px hsl(345 50% 70% / 0.25)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
