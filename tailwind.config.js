/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'vera': {
          'primary': '#1a1a2e',    // Dark navy/purple
          'secondary': '#16213e',  // Dark blue-purple
          'accent': '#8b5cf6',     // Purple accent
          'accent-light': '#a78bfa', // Light purple
          'light': '#f8fafc',     // Light background
          'dark': '#0f0f23',      // Very dark purple
          'text-light': '#e2e8f0', // Light text
          'gray': {
            '50': '#f8fafc',
            '100': '#f1f5f9',
            '200': '#e2e8f0',
            '300': '#cbd5e1',
            '400': '#94a3b8',
            '500': '#64748b',
            '600': '#475569',
            '700': '#334155',
            '800': '#1e293b',
            '900': '#0f172a',
          }
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'vera': '0 4px 20px rgba(26, 54, 93, 0.1)',
        'vera-lg': '0 10px 40px rgba(26, 54, 93, 0.15)',
      }
    },
  },
  plugins: [],
};
