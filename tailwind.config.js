/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx, js}"],
  theme: {
    extend: {
      backgroundImage: {
        'land' : "url('https://cdn.wallpapersafari.com/50/21/2KyHld.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
};
