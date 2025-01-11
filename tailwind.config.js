/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: { 'clash-display': ['ClashDisplay', 'sans-serif'] },
      colors: { primary: '#FFD400', background: '#1B1D20' },
    },
  },
  plugins: [],
}
