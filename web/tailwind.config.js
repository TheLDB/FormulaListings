module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        site: {
          'yellow': '#f5c453',
          'neutral': '#fefbe9',
          'orange': '#f0a04b',
          'green': '#183a1d',
          'ocean': '#e1eedd',
        }
      },
      fontFamily: {
        'indie': ["Indie Flower"],
        'sora': ["Sora"],
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}