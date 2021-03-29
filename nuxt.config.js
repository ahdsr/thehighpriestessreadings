export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'The High Preistess Readings',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src:
          'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js',
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css',
      },
    ],
  },
  router: {
    scrollBehavior: async function (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = async (hash, x = 0) => {
        return (
          document.querySelector(hash) ||
          new Promise((resolve) => {
            if (x > 50) {
              return resolve(document.querySelector('#app'))
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1))
            }, 100)
          })
        )
      }

      if (to.hash) {
        let el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({
            top: el.offsetTop - 40,
            behavior: 'smooth',
          })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      return { x: 0, y: 0 }
    },
    linkActiveClass: 'your-custom-active-link',
    linkExactActiveClass: 'your-custom-exact-active-link',
  },

  gsap: {
    extraPlugins: {
      /**
       * When you enable them, plugins are
       * automatically registered and available globally
       */
      scrollTo: true,
      scrollTrigger: true,
    },
    extraEases: {
      expoScaleEase: true,
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/tailwindcss', 'nuxt-gsap-module'],

  // pageTransition: {
  //   name: 'page',
  //   mode: 'out-in',
  //   css: false,

  //   beforeEnter(el) {
  //     this.$gsap.set(el, {
  //       opacity: 0,
  //       top: '-100%',
  //     })
  //   },

  //   enter(el, done) {
  //     this.$gsap.to(el, {
  //       opacity: 1,
  //       top: 0,
  //       duration: 0.5,
  //       ease: 'sine',
  //       onComplete: done,
  //     })
  //   },

  //   leave(el, done) {
  //     this.$gsap.to(el, {
  //       opacity: 0,
  //       top: '100%',
  //       duration: 0.5,
  //       ease: 'sine',
  //       onComplete: done,
  //     })
  //   },
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Phone setup
  // server: {
  //   host: '0.0.0.0',
  // },
}
