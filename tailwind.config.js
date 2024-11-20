// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//       "./index.html",
//       "./src/**/*.{js,ts,jsx,tsx}",
//     ],
//     darkMode: 'selector',
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    fontFamily: {vazirmatn: ['Vazir-Medium']}
  },
  plugins: [],
}