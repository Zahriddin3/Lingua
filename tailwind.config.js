/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        axiforma: ["Axiforma"],
      },
      colors: {
        myPurple: "#524FD5",
        myGray: "#666680",
        myBlack: "#181B32",
      },
      aspectRatio: {
        "1/1": "1 / 1",
      },
    },
  },
  plugins: [],
};
