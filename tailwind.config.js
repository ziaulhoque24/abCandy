/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5742AC",
        Black: "#2C2347",
        bodyText: "#676276",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        sm: "425px",

        md: "768px",

        lg: "992px",

        xl: "1290px",
        "2xl": "1290px",
      },
    },
  },
  plugins: [],
};
