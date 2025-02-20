import daisyui from 'daisyui';

import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        construction: {
          "primary": "#FFC700",           // Bright yellow
          "secondary": "#FFB800",         // Slightly darker yellow
          "accent": "#242424",            // Dark gray
          "neutral": "#1a1a1a",           // Almost black
          "base-100": "#2B2B2B",          // Concrete gray
          "base-200": "#232323",          // Darker concrete
          "base-300": "#1C1C1C",          // Steel gray
          "base-content": "#FFE074",      // Light yellow text
          "info": "#FFD700",              // Gold yellow
          "success": "#FFB800",           // Yellow variant
          "warning": "#FF8C00",           // Dark orange
          "error": "#DC2626",             // Red
        },
      },
    ],
  },
} satisfies Config;
