/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        read: ['Newsreader', 'serif'],
        keisei: ['Kaisei Decol', 'serif'],
        header: ['Fraunces', 'serif'],
        newsreader: ['Newsreader', 'serif']

      }, 
      colors:{
        'banner': '#dbdada',
        'dark-shade': '#0c0c0c',
        'dark-shade-bright': '#262626',
        'primary-light': '#858652',
        'button-light': '#474747',
        'line-color' :'70600B',
        'primary': 'rgb(112,96,10)'
      }
    },
  },
  plugins: [],
}
