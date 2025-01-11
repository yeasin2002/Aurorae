/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: { 'clash-display': ['ClashDisplay', 'sans-serif'] },
      colors: { primary: '#FF5555' },
    },
  },
  plugins: [],
}
