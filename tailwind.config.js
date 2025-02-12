/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    screens: {
      xs: '375px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
      xl2: '1420px' 
    },
    extend: {
      backgroundImage:{
        'banner-taichi': "url('./assets/taichi-playa.png')"
      },
      colors: {
        'white-breack': '#f7f8f9',
        'black-light': '#9E9E9E',
        'red-light': '#D9534F',
        'white-cream': '#F7F7F7',
        'gray-light': '#DADADA',
        'green-light':'#A9DFBF',
        'brown-light': '#D2B48C',
        'black-text': '#3F3F64',
        'white-off': '#f9fafd',
        'yellow-mustard':'#FEC501',
        'yellow-mustarda':'#d9aa02'
      }
    },
  },
  plugins: [],
}