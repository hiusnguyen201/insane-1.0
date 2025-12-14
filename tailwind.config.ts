import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        accent: "hsl(var(--background-accent))",
        border: "hsl(var(--border))",
      },
      boxShadow: {
        "top-glow-inset": "0 -20px 80px -20px #ffffff1f inset",
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;
