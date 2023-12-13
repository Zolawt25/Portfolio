/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main: "#0c0c1d"
      },
      maxWidth: {
        "9xl": "1366px"
      },
      spacing: {
        "10per": "10%",
        big: "530px"
      }
    },
  },
  plugins: [],
}