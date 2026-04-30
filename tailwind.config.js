/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': 'radial-gradient(circle at top, rgba(145, 94, 255, 0.2), transparent 40%), linear-gradient(180deg, rgba(17, 25, 40, 0.75), rgba(5, 8, 22, 0.95))',
      },
    },
  },
  plugins: [],
};