const { nextui } = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js"
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1280px"

    },
    extend: {
      container: {
        center: true
      },
      fontFamily: {
        "Poppins-Thin": "Poppins-Thin",
        "Poppins-Light": "Poppins-Light",
        "Poppins-Regular": "Poppins-Regular",
        "Poppins-Medium": "Poppins-Medium",
        "Poppins-SemiBold": "Poppins-SemiBold",
        "Poppins-Bold": "Poppins-Bold",
        "Poppins-ExtraBold": "Poppins-ExtraBold",
        "Poppins-Black": "Poppins-Black",

      }
    },
  },
  plugins: [function ({ addVariant }) {
    addVariant("child", "& > *")
    addVariant("child-hover", "& > *: hover")
  }, nextui()],
}

