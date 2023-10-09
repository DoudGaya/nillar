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
        poppin: ['Poppins', 'serif'],
        keisei: ['Kaisei Decol', 'serif'],
        header: ['Fraunces', 'serif'],
        newsreader: ['Newsreader', 'serif']

      }, 
      colors:{
        'banner': '#dbdada',
        'primary-light': 'rgb(235,235,235)',
        'primary':'rgb(219,218,218)',
        'dark-shade': '#0c0c0c',
        'dark-shade-bright': '#262626',
        'button-light': '#474747',
        'line-color' :'70600B',
      }
    },
  },
  plugins: [],
}
