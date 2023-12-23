/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans'],
      },
    },
  },
  plugins: [],
}
