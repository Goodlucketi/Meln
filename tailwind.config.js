/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      
      'lg': {'max': '1000px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '880px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '500px'},
      // => @media (max-width: 639px) { ... }
     
    },
    extend: {},
  },
  plugins: [],
}