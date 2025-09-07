/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#A17D42",
      },
      backgroundImage: {
        'hero-bg': "url('/src/img/bg.png')",
      },
    },
  },
  plugins: [],
}
