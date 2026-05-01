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
        background: "var(--background)",
        foreground: "var(--foreground)",
        natural: {
          50: "#f7f9f7",
          100: "#e8ede8",
          200: "#d4e4bc", // Soft Sage
          300: "#a3c5a0",
          400: "#7fb07b",
          500: "#4a7c44", // Primary Forest
          600: "#3b6336",
          700: "#2d4a29",
          800: "#233920",
          900: "#1a2f1a",
          950: "#0d1a0d",
        },
        earth: {
          soft: "#fdfbf7",
          warm: "#f4f1ea",
          sand: "#e9c46a",
        }
      },
    },
  },
  plugins: [],
};
export default config;
