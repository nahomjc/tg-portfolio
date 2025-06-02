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
        primary: {
          DEFAULT: "#3d4c41",
          hover: "#2d3c31",
        },
        secondary: "#2d3c31",
        accent: "#4d5c51",
        background: "#ffffff",
        foreground: "#1a1a1a",
      },
    },
  },
  plugins: [],
};

export default config;
