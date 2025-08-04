/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      jetBrains: ["JetBrains Mono", "monospace"],
    },
    screens: {
      tabletLg: "920px",
      tabletSm: "660px",
      laptop1: "1110px",
      mobileLg: "600px",
    },
    extend: {},
  },
  plugins: [],
};
