/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'cyber-bg': '#0B0E14',
        'cyber-cyan': '#00F5FF',
        'cyber-purple': '#7000FF',
        'cyber-white': '#F8F9FA',
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #00F5FF 0%, #7000FF 100%)',
      }
    },
  },
  plugins: [],
}