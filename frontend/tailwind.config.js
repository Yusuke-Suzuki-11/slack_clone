module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'theme-color': "#3f0e40",
        'opacity-black': "#00000028",
        'opacity-white': "#ffffff46",
        'tx-white': "#ffffffad",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
