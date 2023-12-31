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
        "5per": "5%",
        "screen": "90vh",
        big: "500px",
        mid: "400px",
        sm: "320px",
        xs: "235px",
        font: "100px"
      },
      fontSize: {
        huge: "250px",
        big: "100px"
      }
    },
  },
  plugins: [
    
  ],
}