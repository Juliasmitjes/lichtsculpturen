/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(35, 25%, 92%)",
        foreground: "hsl(25, 15%, 25%)",
        card: "hsl(40, 30%, 88%)",
        cardForeground: "hsl(25, 15%, 30%)",
        popover: "hsl(38, 28%, 90%)",
        popoverForeground: "hsl(25, 15%, 25%)",
        primary: "hsl(15, 65%, 55%)",
        primaryForeground: "hsl(35, 25%, 92%)",
        primaryWarm: "hsl(12, 70%, 50%)",
        primaryLight: "hsl(18, 55%, 65%)",
        secondary: "hsl(85, 25%, 45%)",
        secondaryForeground: "hsl(35, 25%, 92%)",
        secondaryWarm: "hsl(80, 30%, 35%)",
        secondaryLight: "hsl(90, 20%, 55%)",
        accent: "hsl(45, 50%, 60%)",
        accentForeground: "hsl(25, 15%, 25%)",
        accentWarm: "hsl(42, 55%, 50%)",
        accentLight: "hsl(48, 45%, 70%)",
        highlight: "hsl(25, 60%, 45%)",
        highlightForeground: "hsl(35, 25%, 92%)",
        muted: "hsl(40, 20%, 82%)",
        mutedForeground: "hsl(25, 15%, 45%)",
        destructive: "hsl(0, 65%, 55%)",
        destructiveForeground: "hsl(35, 25%, 92%)",
        border: "hsl(35, 20%, 80%)",
        input: "hsl(38, 25%, 85%)",
        ring: "hsl(15, 65%, 55%)",
      },
      boxShadow: {
        soft: "0 4px 20px hsl(15, 65%, 55% / 0.1)",
        warm: "0 8px 32px hsl(25, 60%, 45% / 0.15)",
        deep: "0 12px 40px hsl(25, 15%, 25% / 0.1)",
      },
      fontFamily: {
        handwritten: ["Caveat", "cursive"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
      },
      backgroundImage: {
        "gradient-warm": "linear-gradient(135deg, hsl(15, 65%, 55%) 0%, hsl(45, 50%, 60%) 50%, hsl(85, 25%, 45%) 100%)",
        "gradient-earth": "linear-gradient(180deg, hsl(35, 25%, 92%) 0%, hsl(40, 20%, 82%) 100%)",
        "gradient-sunset": "linear-gradient(45deg, hsl(12, 70%, 50%) 0%, hsl(25, 60%, 45%) 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "1" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "gradient-shift": "gradient-shift 6s ease infinite",
      },
    },
  },
  plugins: [],
}


