const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Poppins"'],
    },
    extend: {
      backgroundImage: (theme) => ({
        'hero-monica-01': "url('~assets/images/1.jpg')",
        'hero-monica-02': "url('~assets/images/2.jpg')",
        'hero-monica-03': "url('~assets/images/3.jpg')",
        'hero-monica-04': "url('~assets/images/4.jpg')",
        'hero-monica-05': "url('~assets/images/5.jpg')",
        'hero-monica-06': "url('~assets/images/6.jpg')",
        'hero-monica-07': "url('~assets/images/7.jpg')",
        'hero-monica-08': "url('~assets/images/8.jpg')",
        'hero-monica-09': "url('~assets/images/9.jpg')",
        'hero-monica-10': "url('~assets/images/10.jpg')",
        'hero-monica-11': "url('~assets/images/11.jpg')",
        'hero-monica-12': "url('~assets/images/12.jpg')",
      }),
      colors: {
        'monica-mauvelous': '#E4959E',
        'monica-xoletic': '#1F0812',
        'monica-roseybrown': '#B98B82',
        'monica-melon': '#B538F9',
        'monica-purpple': '#793C80',
      },
      keyframes: {
        roll: {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateX(20rem) rotate(385deg)' },
        },
        scale: {
          '0%, 100%': { transform: 'scaleX(0) scaleY(0)' },
          '50%': { transform: 'scaleX(2) scaleY(2)' },
        },
      },
      animations: {
        roll: 'roll 3s ease-in-out infinite',
      },
      variants: {
        extend: {},
      },
      plugins: [
        require('@tailwindcss/forms'),
        require('tailwind-scrollbar-hide'),
        // ...
      ],
    },
  },
}
