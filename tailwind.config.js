/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neoshe': '#275c54',
        'neoshe-light': '#3a7a70',
        'neoshe-dark': '#1e4a42',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'sonar': ['Sonar Sans', 'sans-serif'],
        'tenor': ['"Tenor Sans"', 'sans-serif'],
        'acumin-pro': ['"Acumin Pro"', 'sans-serif'],
      },

    },
  },
  plugins: [],
}
