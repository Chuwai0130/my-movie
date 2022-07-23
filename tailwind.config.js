/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
       'primary': '#00df9a'
      },
      scale: {
        '130': '1.30'
      }
    },
  },
  plugins: [],
}
