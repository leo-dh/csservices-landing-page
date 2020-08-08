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
        brick: {
          100: '#F7EDEA',
          200: '#EBD2CC',
          300: '#DFB7AD',
          400: '#C7816F',
          500: '#AF4B31',
          600: '#9E442C',
          700: '#692D1D',
          800: '#4F2216',
          900: '#35170F',
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
