/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lobster': ['Lobster', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
