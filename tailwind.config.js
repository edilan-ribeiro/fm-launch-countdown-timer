/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': {'max':'780px'}
      },
      height: {
        '1': '1px'
      },
      fontSize: {
        '7.5xl': '5rem'
      },
      letterSpacing: {
        widest: '0.3em',
      },
      colors: {
        'grayish': 'hsl(237, 18%, 59%)',
        'soft-red': 'hsl(345, 95%, 68%)',
        'dark-des-blue': 'hsl(236, 21%, 26%)',
        'dark-blue': 'hsl(235, 16%, 14%)',
        'black-blue': 'hsl(234, 17%, 12%)',
      },
      fontFamily: {
        'red-hat': ['Red Hat Text', 'sans-serif'],
      },
      backgroundImage: {
        'stars': "url('./src/assets/images/bg-stars.svg')",
        'hills': "url('./src/assets/images/pattern-hills.svg')",
      }
    },
  },
  plugins: [],
}

