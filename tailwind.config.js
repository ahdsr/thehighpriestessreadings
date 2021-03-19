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
      display: ['Literata'],
    },
    extend: {
       backgroundImage: (theme) => ({
        'hero-pattern':
          "url('https://images.unsplash.com/photo-1607893240314-91143f82a0ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80')",

        'footer-texture':
          "url('https://images.unsplash.com/photo-1496016943515-7d33598c11e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80')",
      }),
      colors: {
        'element-dark-blue': '#333D47',
        'element-green': '#82C341',
        'element-bright-blue': '#3262C3',
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
