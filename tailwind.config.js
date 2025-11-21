/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a',
          foreground: '#f8fafc',
        },
        secondary: {
          DEFAULT: '#f1f5f9',
          foreground: '#0f172a',
        },
        border: '#e2e8f0',
        background: '#ffffff',
        foreground: '#020617',
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        md: '6px',
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
      },
      fontSize: {
        sm: ['14px', { lineHeight: '24px' }],
      },
    },
  },
  plugins: [],
}
