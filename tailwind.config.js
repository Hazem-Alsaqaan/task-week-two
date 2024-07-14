/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "420px",
      },
      fontFamily: {
        RubikBlack: ["RubikBlack"],
        RubikExtraBold: ["RubikExtraBold"],
        RubikBold: ["RubikBold"],
        RubikSemiBold: ["RubikSemiBold"],
        RubikMedium: ["RubikMedium"],
        RubikRegular: ["RubikRegular"],
      },
      backgroundColor: {
        darkBackground: "#0C111D",
      },
    },
  },
  plugins: [],
};
