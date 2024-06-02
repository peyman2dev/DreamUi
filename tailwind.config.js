/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
      }
    },
  },
  plugins: [function ({ addVariant }) {
    addVariant("child", "& > *")
    addVariant("child-hover", "& > *:hover")
  }],
}

