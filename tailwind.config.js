/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto Condensed", "sans-serif"],
      },

      collors: {
        darkGray: "#1E2022",
        darkPurple: "#302E53",
        siteOrange: "#D07017",
      },
    },
  },
  plugins: [],
};
