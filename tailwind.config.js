/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero1: "url('../public/backgrounds/hero-1.jpg')",
        hero2: "url('../public/backgrounds/hero-2.jpg')",
        hero3: "url('../public/backgrounds/hero-4.jpg')",
      },
    },
  },
  plugins: [],
};
