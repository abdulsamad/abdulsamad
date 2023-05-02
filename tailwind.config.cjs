/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F2F0FF',
          100: '#E6E1FE',
          200: '#CCC3FD',
          300: '#AEA1FD',
          400: '#9583FC',
          500: '#7C65FB',
          600: '#401FF9',
          700: '#2305CC',
          800: '#18048B',
          900: '#0C0246',
          950: '#060123',
          DEFAULT: '#7c65fb',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Open Sans', 'sans-serif'],
        display: ['Bruno Ace SC'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      backgroundImage: {
        gradient: 'linear-gradient(45deg, #7c65fb, #da62c4 30%, #7c65fb 60%)',
        'contact-gradient': `linear-gradient(90deg, #673AB7 50%, #fff 50%, #fff 100%)`,
      },
      lineHeight: {
        12: '3rem',
        14: '3.5rem',
      },
      animation: {
        'text-gradient': 'text-gradient 8s linear infinite',
      },
      keyframes: {
        'text-gradient': {
          from: {
            'background-position': '100%',
          },
          to: {
            'background-position': '400%',
          },
        },
      },
    },
  },
  plugins: [],
};
