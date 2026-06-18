/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["DM Serif Display", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#1a1a18",
          2: "#4a4a46",
          3: "#8a8a84",
        },
        paper: {
          DEFAULT: "#fafaf7",
          2: "#f2f2ed",
          3: "#e8e8e1",
        },
        accent: {
          DEFAULT: "#c84b2f",
          soft: "#f5ede9",
        },
      },
    },
  },
  plugins: [],
};
