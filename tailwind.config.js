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
      animation: {
        'rotate-horizontal': 'rotateHorizontal 12s infinite linear',
      },
      keyframes: {
        rotateHorizontal: {
          '0%': { transform: 'rotateY(0deg)' },
          '25%': { transform: 'rotateY(90deg)' },
          '50%': { transform: 'rotateY(180deg)' },
          '75%': { transform: 'rotateY(90deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
      },
    },
  },
  plugins: [require('daisyui')],
}

