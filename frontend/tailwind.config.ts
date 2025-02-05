import type { Config } from "tailwindcss";
import daisyui from 'daisyui';

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
          "primary": "#FFC700",           // Brighter yellow
          "secondary": "#FFB800",         // Slightly darker yellow
          "accent": "#242424",            // Dark gray
          "neutral": "#1a1a1a",           // Almost black
          "base-100": "#333333",          // Dark background
          "base-200": "#292929",          // Slightly darker background
          "base-300": "#242424",          // Even darker background
          "base-content": "#FFE074",      // Light yellow text
          "info": "#FFD700",              // Gold yellow
          "success": "#FFB800",           // Another yellow variant
          "warning": "#FF8C00",           // Dark orange for contrast
          "error": "#DC2626",             // Keeping danger red
        },
      },
    ],
  },
} satisfies Config;
