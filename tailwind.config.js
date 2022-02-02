module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: [],
  darkMode: 'class',
  theme: {
    fontFamily: {
      rock: ['Rock Salt', 'serif']
    },
    extend: {
      backgroundImage: {
        'light-background': "url('/images/background.jpg')",
        'dark-background' : "url('/images/sunsetbackground.jpg')"
      }
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark']
    },
  },
  plugins: [],
}
