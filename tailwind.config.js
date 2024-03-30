/** @type {import('tailwindcss').Config} **/

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#2C9CF0",
        black: "#000000",
        dark: "#292B32",
        card: "#3B3E47",
        cardFont: "#DFDFDF",
        "card-bg": "#818A97",
        whiteMedium: "#F7F7F8",
        "cardFont-light": "#525965",

        darkMedium: "#292B32",
        white: "#FFFFFF",
        "dark-grad-col-1": "#18282A",
        "dark-grad-col-2": "#221A2C",
        "white-grad-col-1": "#F9F8FF",
        "white-grad-col-2": "#F3F9FF",
      },
    },
  },
  plugins: [],
};
