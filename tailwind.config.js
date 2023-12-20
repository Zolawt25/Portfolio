/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main: "#0c0c1d",
        hero: "#ffffff09",
        secondery: "#111132",
        btnColor: "#FFA500",
        textColor: "#d3d3d3"
      },
      maxWidth: {
        "9xl": "1366px"
      },
      spacing: {
        "10per": "10%",
        big: "660px",
        mid: "500px",
        font: "100px"
      },
      fontSize: {
        huge: "250px",
        big: "100px"
      }
    },
  },
  plugins: [],
}