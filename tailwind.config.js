/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',  // Custom extra-small breakpoint
        'sm': '640px'
      },
      fontFamily: {           
        syne: ["Syne", "sans-serif"],  // custom font-family
        kanit: ["Kanit", "sans-serif"]
      },
      colors : {
        'blue-Purple' : "#5f4cdd",
        'light-purple' : "#eeebff",
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui:{
    darkTheme:"light",
  }
}

