module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif']
    },
    extend: {
      transitionProperty: {
        'height': 'height'
      },
    },
  },
  plugins: [],
}
