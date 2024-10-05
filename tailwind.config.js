/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  mode: "jit",
  content: ["./*.{html,js}"],
  theme: {
    extend: {

       fontFamily: {
        playwrite: ["'Playwrite CU'", "sans-serif"],
        NerkoOne: ["'Nerko One'", "sans-serif"],
        Manrope: ["'Manrope'", "sans-serif"],
        AbrilFatface:["Abril Fatface", "serif"],
        playwriteNetherland: ["Playwrite NL", "cursive"]
      } ,

      colors: {
        cream: '#FFEFCB',
        creamwhite: '#FFFDE7'
      }

       

    },

    
  },
  plugins: [],
}

