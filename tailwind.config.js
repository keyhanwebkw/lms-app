/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      xxl: "1440px",
    },
    backgroundImage: {
      'bg-auth': "url('/img/png/bg-auth.png')",
      'course-slider': "url('/img/png/bg-course-slider.png')",
      'slider-primary': "url('/img/primary.png')",
    },
    colors: {
      turquoise: {
        100: "#1EBFBB1A",
        300: "#1EBFBB80",
        500: "#1EBFBB"
      },
      orange: {
        100: "#FFA62480",
        300: "#FFA624",
        500: '#FF8A04'
      },
      green: {
        100: "#00AA58",
        300: '#00BEA4'
      },
      red: {
        100: "#FC4C561A",
        300: "#FDFBFC",
        500: "#FC4C56",
        700: "#FF0000",
        900: "#EB1111",
      },
      gray: {
        50: '#EFEFEF',
        100: '#D9D9D9',
        300: '#8C8C8C',
        500: '#787878',
        700: '#555555'
      },
      blue: {
        100: "#E9EFF2",
        200: "#2980B940",
        300: "#2980B9",
        500: "#003355",
        600: "#0078C7",
        700: "#1000CB",
        900: "#001827"
      },
      black: '#000',
      white: '#fff',
    },
    borderRadius: {
      none: "0px",
      primary: '12px',
      sm: '5px',
      full: '9999px'
    },
    boxShadow: {
      'primary': '0 0 2px 0 rgba(0,0,0,0.25)',
      'secend': '0 0 17px 0 rgba(0, 0, 0, 0.25)'
    }
  },
  plugins: [],
}

