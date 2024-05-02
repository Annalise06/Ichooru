// /** @type {import('tailwindcss').Config} */
// export const content = [
//   "./index.html",
//   "./src/**/*.{js,ts,jsx,tsx}",
//   "./node_modules/tw-elements/dist/js/**/*.js",
// ];
// export const theme = {
//   extend: {},
//   fontFamily: {
//     poppins: ["Poppins", "sans-serif"],
//     cabin: ["cabin", "sans-serif"],
//     rye: ["Rye", "cursive"],
//   },
//   color: {
//     // darkd: "#151c6d",
//     primary: "#F53E03",
//     dark: "#021024",
//     darker: "#052659"
//   },
// };
// export const darkMode = "class";
// export const plugins = [require("tw-elements/dist/plugin.cjs")];


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        cabin: ["cabin", "sans-serif"],
        rye: ["Rye", "cursive"],
        mirza: ["Mirza", "sans-serif"],
      },
      color: {
        // darkd: "#151c6d",
        primary: "#F53E03",
        dark: "#021024",
        darker: "#052659"
      },
    },
  },
  plugins: [],
}