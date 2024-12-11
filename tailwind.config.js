/** @type {import('tailwindcss').Config} */

const { createFluidValue } = require("./utils/createFluidValue");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      "orange-shade": "#fba311",
      "purple-shade": "#09042d",
      "grey-shade": "#565656",
      purple: "#001837",
      "light-grey-shade": "#f0f2f4",
      "light-blue": "#abc6e9",
    },
    screens: {
      sm: "576px", // => @media (min-width: 576px) { ... }
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
    extend: {
      fontSize: {
        "fluid-base": createFluidValue(14, 14),
        "fluid-h1": createFluidValue(44, 100),
        "fluid-h2": createFluidValue(40, 80),
        "fluid-h3": createFluidValue(24, 64),
        "fluid-h4": createFluidValue(24, 56),
        "fluid-h5": createFluidValue(24, 48),
        "fluid-h6": createFluidValue(24, 40),
        "fluid-body-1": createFluidValue(24, 40),
        "fluid-body-2": createFluidValue(20, 32),
        "fluid-body-3": createFluidValue(20, 32),
        "fluid-body-4": createFluidValue(20, 24),
        "fluid-body-5": createFluidValue(16, 20),
        "fluid-micro-lg": createFluidValue(14, 18),
        "fluid-body-2-guided": createFluidValue(24, 24),
        "fluid-body-5-guided": createFluidValue(18, 18),
        "fluid-micro-guided": createFluidValue(16, 16),
      },
      lineHeight: {
        "fluid-base": createFluidValue(22, 22),
        "fluid-h1": createFluidValue(54, 118),
        "fluid-h2": createFluidValue(50, 88),
        "fluid-h3": createFluidValue(32, 76),
        "fluid-h4": createFluidValue(32, 66),
        "fluid-h5": createFluidValue(32, 76),
        "fluid-h6": createFluidValue(32, 86),
        "fluid-body-1": createFluidValue(32, 50),
        "fluid-body-2": createFluidValue(28, 42),
        "fluid-body-3": createFluidValue(28, 42),
        "fluid-body-4": createFluidValue(28, 32),
        "fluid-body-5": createFluidValue(24, 28),
        "fluid-micro-lg": createFluidValue(26, 26),
        "fluid-body-2-guided": createFluidValue(32, 32),
        "fluid-body-5-guided": createFluidValue(26, 26),
        "fluid-micro-guided": createFluidValue(24, 24),
      },
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
        quickSand: ["Quicksand"],
        robFont: ["Roboto"],
      },
    },
  },
  plugins: [],
};
