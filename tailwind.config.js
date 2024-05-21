/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  corePlugins: {
    container: false,
  },
  theme: {
    boxShadow: {
      DEFAULT: '0 8px 16px rgba(0,0, 0,0.08)'
    },
    fontFamily: {
      sans: '"Nunito Sans", sans-serif'
    },
    extend: {
      colors: {
        'transparent-white': 'rgba(255 255 255 / .9)',
        black: {
          30: '#A1A7B5',
          DEFAULT: '#000000',
        },
        grey: '#81899D',
        primary: '#0F62FE',
        link: '#0C5BEF',
        blue: {
          100: '#F0F6FE'
        }
      }
    },
  },
}

