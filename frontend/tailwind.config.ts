import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Core Brand Colors
        brand: {
          primary: '#CE1126', // Indonesian Red
          secondary: '#1F2937', // Charcoal
          accent: '#3B82F6', // Tech Blue
        },
        // Light Mode Colors
        light: {
          bg: {
            primary: '#FFFFFF', // Pure White
            secondary: '#F8FAFC', // Soft Gray
            tertiary: '#F1F5F9', // Light Gray
          },
          text: {
            primary: '#0F172A', // Main text
            secondary: '#475569', // Supporting text
            tertiary: '#64748B', // Captions/metadata
            inverse: '#FFFFFF', // Text on colored backgrounds
          },
        },
        // Dark Mode Colors
        dark: {
          bg: {
            primary: '#0F172A', // Deep Slate
            secondary: '#1E293B', // Dark Gray
            tertiary: '#334155', // Medium Gray
          },
          text: {
            primary: '#F8FAFC', // Main text
            secondary: '#CBD5E1', // Supporting text
            tertiary: '#94A3B8', // Captions/metadata
            inverse: '#0F172A', // Text on colored backgrounds
          },
        },
        // Supporting Colors
        status: {
          success: {
            light: '#059669',
            dark: '#10B981',
          },
          warning: {
            light: '#F59E0B',
            dark: '#FBBF24',
          },
        },
        border: {
          light: '#E2E8F0',
          dark: '#334155',
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        // Light Theme
        light: {
          primary: '#CE1126', // Indonesian Red
          secondary: '#1F2937', // Charcoal
          accent: '#3B82F6', // Tech Blue
          neutral: '#475569', // Supporting text color
          'base-100': '#FFFFFF', // Pure White background
          'base-200': '#F8FAFC', // Soft Gray background
          'base-300': '#F1F5F9', // Light Gray background
          'base-content': '#0F172A', // Main text
          info: '#3B82F6', // Tech Blue
          success: '#059669', // Green for achievements
          warning: '#F59E0B', // Orange for learning status
          error: '#DC2626', // Red for errors
        },
        // Dark Theme
        dark: {
          primary: '#CE1126', // Indonesian Red
          secondary: '#1F2937', // Charcoal
          accent: '#3B82F6', // Tech Blue
          neutral: '#CBD5E1', // Supporting text color
          'base-100': '#0F172A', // Deep Slate background
          'base-200': '#1E293B', // Dark Gray background
          'base-300': '#334155', // Medium Gray background
          'base-content': '#F8FAFC', // Main text
          info: '#3B82F6', // Tech Blue
          success: '#10B981', // Green for achievements (dark mode)
          warning: '#FBBF24', // Orange for learning status (dark mode)
          error: '#F87171', // Red for errors (dark mode)
        },
      },
    ],
  },
} satisfies Config;
