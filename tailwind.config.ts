import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f4efe8",
        ink: "#0A0A0A",
        "ink-soft": "#4a4540",
        accent: "#C9A84C",
        "accent-deep": "#9C7A2E",
        cream: "#ede5d8",
        sage: "#5a6b51",
        gold: "#C9A84C",
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
