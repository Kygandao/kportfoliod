module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      rock: ['Rock Salt', 'serif']
    },
    extend: {
      backgroundImage: {
        'trees': "url('/background.jpg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
