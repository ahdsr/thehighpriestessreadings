const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode:   , // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg:
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      right:
        '7px 0px 15px -4px rgba(0, 0, 0, 0.3), 7px 0px 15px -4px rgba(0, 0, 0, 0.05)',
    },
    fontFamily: {
      sans: ['Rubik'],
    },
    extend: {
      backgroundImage: (theme) => ({
        'hero-monica-01': "url('~assets/images/monica-hero.jpg')",

        'hero-monica-02':
          "url('https://images.unsplash.com/photo-1583530015497-6cf9ef9c6f0f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80')",
      }),
      colors: {
        'element-dark-blue': '#333D47',
        'element-green': '#82C341',
        'element-bright-blue': '#3262C3',
        'monica-mauvelous': '#E4959E',
        'monica-xoletic': '#1F0812',
        'monica-roseybrown': '#B98B82',
        'monica-melon': '#F3B3A6',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'),
      // ...
    ],
  },
}
