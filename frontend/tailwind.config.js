module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'theme-color': "#4A154A",
        'opacity-black': "#00000028",
        'opacity-white': "#ffffff46",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
