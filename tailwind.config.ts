import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        ink: "#f4efe8",
        "ink-soft": "#a8a39a",
        accent: "#D4A84A",
        "accent-deep": "#B8902E",
        cream: "#161616",
        sage: "#5a6b51",
        gold: "#D4A84A",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter-tight)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
