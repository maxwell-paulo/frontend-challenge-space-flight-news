/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    collors: {
      dakGray: "#1E2022",
      darkPurple: "#302E53",
      siteOrange: "#D07017",
    },
    extend: {
      fontFamily: {
        Roboto: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
