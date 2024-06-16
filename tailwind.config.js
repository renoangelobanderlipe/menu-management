/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px', // => @media (min-width: 640px) { ... }
      md: '768px', // => @media (min-width: 768px) { ... }
      lg: '1024px', // => @media (min-width: 1024px) { ... }
      xl: '1280px', // => @media (min-width: 1280px) { ... }
      '2xl': '1536px', // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ['Public Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        light: {
          container: '#F9FAFB',
          'main-bg': '#F4F6F8',
          headings: '#161C24',
          'body-text': '#454F5B',
        },
        dark: {
          container: '#212B36',
          'main-bg': '#161C24',
          headings: '#F9FAFB',
          'body-text': '#DFE3E8',
        },
        primary: {
          100: '#CBFAE2',
          200: '#98F6D0',
          300: '#62E6BC',
          400: '#3ACEAD',
          500: '#08AE98',
          600: '#05958F',
          700: '#04767D',
          800: '#025664',
          900: '#013F53',
        },
        neutrals: {
          100: '#F9FAFB',
          200: '#F4F6F8',
          300: '#DFE3E8',
          400: '#C4CDD5',
          500: '#919EAB',
          600: '#637381',
          700: '#454F5B',
          800: '#212B36',
          900: '#161C24',
        },
        success: {
          100: '#EBFBD2',
          200: '#D4F7A7',
          300: '#B0E778',
          400: '#8ACF52',
          500: '#59AF23',
          600: '#429619',
          700: '#2E7D11',
          800: '#1D650B',
          900: '#275C05',
        },
        info: {
          100: '#CDEFFC',
          200: '#9DDBFA',
          300: '#6ABEF1',
          400: '#449FE4',
          500: '#0E74D3',
          600: '#0A5AB5',
          700: '#074397',
          800: '#042F7A',
          900: '#022165',
        },
        warning: {
          100: '#FFF5CC',
          200: '#FFE999',
          300: '#FFDA66',
          400: '#FFCB3F',
          500: '#FFB200',
          600: '#DB9200',
          700: '#B77400',
          800: '#935900',
          900: '#7A4600',
        },
        danger: {
          100: '#FCDCD5',
          200: '#FAB3AB',
          300: '#F0807F',
          400: '#E15D68',
          500: '#CE2D4A',
          600: '#B12048',
          700: '#941645',
          800: '#770E3F',
          900: '#62083A',
        },
      },
      boxShadow: {
        container: '-8px 5px 7.8px -1px rgba(58, 206, 173, 0.03), 9px -1px 7.8px -1px rgba(71, 88, 224, 0.04)',
        card: '5px 7px 9.8px -1px rgba(58, 206, 173, 0.1), -5px 2px 6.3px -2px rgba(58, 206, 173, 0.1)',
      },
    },
  },

  plugins: [],
});
