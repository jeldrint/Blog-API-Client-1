/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          myFont: '"Varela Round"'
        },
        colors: {
          "light-brown": "#835938",
          "brown": "#40260A",
        },
      },
  },
  plugins: [],
}

