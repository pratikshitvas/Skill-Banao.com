/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'regal-blue':' #055190',
        blue: "#FDCC49",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#000000",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",

      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assests/brush.png')",
        person1: "url('./assests/person-1.png')",
        person2: "url('./assests/person-2.png')",
        person3: "url('./assests/person-3.png')",
        chat :"url('./assests/Capture.PNG')",
      }
    },
  },
  plugins: [],
}

