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
    colors: {
      purple: {
        100: "#9131751A",
        300: "#91317580",
        500: "#913175",
        700: "#91317533"
      },
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
        100: '#369FFF',
        300: '#0071B1'
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

