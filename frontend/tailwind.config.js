/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DayOne: ["Days One", "sans serif"],
        SansMono: ["Outfit", "sans-serif"],
        BalooTamma: ["Baloo Tamma 2", "system - ui"],
        BioRhyme: ["BioRhyme", "serif"],
        BalooBhai: ["Baloo Bhai 2", "sans-serif"],
      },
      dropShadow: {
        box1: "-100px 0px 160px #ffffff",
      },
    },
  },
  plugins: [],
};
