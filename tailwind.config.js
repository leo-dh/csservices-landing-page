/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        navy: {
          100: '#E8E9EC',
          200: '#C4C9D0',
          300: '#A1A8B3',
          400: '#5B667A',
          500: '#142541',
          600: '#12213B',
          700: '#0C1627',
          800: '#09111D',
          900: '#060B14',
        },
        peach: {
          100: '#FEF1EE',
          200: '#FCDDD5',
          300: '#FAC8BC',
          400: '#F79F89',
          500: '#F37657',
          600: '#DB6A4E',
          700: '#924734',
          800: '#6D3527',
          900: '#49231A',
        },
      },
      spacing: {
        full: '100%',
      },
      flex: {
        '2': '2 1 0%',
      },
      height: {
        'screen-1/2': '50vh',
        'screen-1/3': 'calc(100vh / 3)',
        'screen-1/4': '25vh',
        'screen-1/5': '20vh',
      },
    },
  },
  variants: {
    margin: ['responsive', 'first'],
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
};
