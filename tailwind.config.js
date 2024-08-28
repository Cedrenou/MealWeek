/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E2E1D9",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
