module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      "1/3": "31%",
      "2/3": "32%",
    },
    screens: {
      tablet: "375px",
      // => @media (min-width: 640px) { ... }
      ipad: "768px",
      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
