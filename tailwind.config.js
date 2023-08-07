/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind")

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  presets: [nativewind],
}
