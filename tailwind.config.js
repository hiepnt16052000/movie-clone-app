/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#F5CF49",
        "color-purple": "#A958A5",
        "color-gray-light": "#d4d4d4",
        "color-black-light": "#242424",
        "color-black": "#111111",
      },
    },
  },
  plugins: [],
};
