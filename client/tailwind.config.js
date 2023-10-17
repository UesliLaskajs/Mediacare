/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:"#5272F2",
        yellowColor:"#FFCD4B",
        lightBlue:"#1AACAC",
        purpleColor:"#B931FC",
        textColor:"#4E535F",
        heroColor:"#132043",
      },
      boxShadow:{
        panelShadow:"rgba(16,12,45,0.15 ) 0px 47px 100ox 0px"
      }
    },
  },
  plugins: [],
}


