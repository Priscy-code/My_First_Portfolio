/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        roboto: ["Inter", "sans-serif"],
        steelfish: ["steelfish", "sans-serif"],
        roboto: ['Inter', 'sans-serif'],
        steelfish: ['steelfish', 'sans-serif'],
        sfpro: ['sfpro', 'sans-serif'], 
      },

      colors: {
        pink: "#FC7EFF",
        purple: "#9557FF",
        grayy: "#F5F5F5",
        grey: "BCB9BC",
        gry: "#767376",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
