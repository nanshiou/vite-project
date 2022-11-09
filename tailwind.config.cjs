/** @type {import('tailwindcss').Config} */
// 預設顏色
const colors = require('tailwindcss/colors')
// 預設 theme
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans TC', ...fontFamily.sans],
      },
      // 增加其他顏色
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.zinc,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        sky: colors.sky,
      },
      animation: {
        'ease': 'all 0.5s ease',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
