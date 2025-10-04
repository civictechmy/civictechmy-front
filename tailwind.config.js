import { preset } from "@govtechmy/myds-style";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "src/**/*.{js,jsx,ts,tsx,mdx}",
    "node_modules/@govtechmy/myds-react/dist/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [preset],
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(101.65% 92.54% at 50% 0%, var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        civictechmy: {
          700: "rgba(var(--_civictech-700) / <alpha-value>)",
          600: "rgba(var(--_civictech-600) / <alpha-value>)",
          200: "rgba(var(--_civictech-200) / <alpha-value>)",
          100: "rgba(var(--_civictech-100) / <alpha-value>)",
          50: "rgba(var(--_civictech-50) / <alpha-value>)",
          secondary: "rgba(var(--_civictech-secondary) / <alpha-value>)",
          tertiary: "rgba(var(--_civictech-tertiary) / <alpha-value>)",
        },
        "txt-_civictechmy-600": "rgb(var(--txt-_civictechmy-600))",
        "txt-_civictechmy-600-dark": "rgb(var(--txt-_civictechmy-600-dark))",
        "fr-_civictechmy-100": "rgb(var(--fr-_civictechmy-100))",
      },
    },
  },
};
