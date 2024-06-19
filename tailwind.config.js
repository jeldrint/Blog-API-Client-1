/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  //@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700&family=Press+Start+2P&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300&family=Varela&family=Varela+Round&display=swap');

  theme: {
    extend: {
        fontFamily: {
            varela: 'Varela',
            varelaRound: 'Varela Round',
            roboto: 'Roboto',
            playfair: 'Playfair Display SC',
        },
        colors: {
          "light-brown": "#835938",
          "brown": "#40260A",
        },
      },
  },
  plugins: [],
}

