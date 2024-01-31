/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '450px',
      'laptop': '1024px',
    },
    extend: {
      fontFamily: {
        itim: "'Itim', cursive",
        istok: "'Istok Web', sans-serif",
        Saira: "'Saira Stencil One'"
      }
    },
  },
  plugins: [require("daisyui")],
}

