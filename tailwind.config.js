/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#ff6b00",
          dark: "#101418",
          green: "#41e575",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Plus Jakarta Sans", "sans-serif"],
        display: ["Syne", "sans-serif"],
      },
      boxShadow: {
        card: '0 20px 45px -18px rgba(15, 23, 42, 0.25)',
      },
      borderRadius: {
        card: "1rem",
      },
    },
  },
  plugins: [],
};

