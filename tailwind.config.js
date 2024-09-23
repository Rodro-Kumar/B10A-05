/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      lexend: "var(--lexend)",
    },
    extend: {
      colors: {
        primaryColor: "var(--primaryColor)",
        secondaryColor: "var(--secondaryColor)",
      },
    },
  },
  plugins: [],
};
