/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'iPhoneSE': '375px',
        'iPhoneXR': '414px',
        'iPhone12Pro': '390px',
        'GalaxyFold': '280px',
        'smd': '695px',
      },
    },
  },
  plugins: [],
}
