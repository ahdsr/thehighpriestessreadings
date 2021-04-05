<template>
  <div>
    <div
      id="navbar"
      class="fixed top-0 z-50 w-screen border-b border-blue-100 bg-monica-mauvelous"
    >
      <topNavigation />
    </div>
    <!-- Hero -->
    <div id="box" class="h-screen text-center lg:bg-hero-monica-01 lg:bg-cover">
      <div
        id="heroline1"
        class="mx-auto font-thin tracking-tight sm:text-xl md:text-3xl lg:text-8xl md:pt-32 lg:pt-48 xl:pt-96"
      >
        The
        <span class="font-serif font-medium text-monica-purpple"
          >High Priestess</span
        >
        Readings
      </div>
      <div
        id="heroline2"
        class="mx-auto font-serif text-xl font-medium tracking-tight pt-14 text-monica-melon text-opacity-70 md:text-2xl lg:text-5xl md:pt-8"
      >
        Journey through the subconscious
      </div>
      <div
        id="heroline2"
        class="pt-0 mx-auto text-2xl font-normal tracking-tight text-monica-xoletic text-opacity-70"
      >
        Tarot and Psychic Readings
      </div>

      <nuxt-link :to="{ path: '/', hash: 'readings' }">
        <div class="block w-20 mx-auto md:w-26 lg:w-32 sm:pt-28">
          <lottie-player
            src="https://assets3.lottiefiles.com/temp/lf20_J1XkLr.json"
            background="transparent"
            speed="1"
            class=""
            loop
            autoplay
          ></lottie-player>
          <p class="font-serif text-gray-600">Scroll down</p>
        </div>
      </nuxt-link>
    </div>
    <!-- About Readings -->
    <div id="readings" class="font-serif">
      <div class="max-w-4xl mx-auto"></div>
      <sectionReadings />
    </div>
    <!-- Pricing -->
    <div id="pricing" class="font-serif">
      <div class="max-w-4xl mx-auto"></div>
      <sectionPricing />
    </div>
    <!-- Testimonials -->
    <div id="tesimonials" class="font-serif">
      <sectionTestimonial />
    </div>
    <!-- About Monica -->
    <div id="aboutmonica" class="font-serif">
      <sectionAbout />
    </div>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
  },

  mounted() {
    let externalScript = document.createElement('script')
    externalScript.setAttribute(
      'src',
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js'
    )
    document.head.appendChild(externalScript)

    this.navigationIn()
    this.heroline1()
    this.heroline2()

    this.animateOnScroll()
    // this.navbar()
  },

  methods: {
    navigationIn() {
      const gsap = this.$gsap
      gsap.from('#navbar', {
        y: -200,
        opacity: 0,
        rotation: 0,
        duration: 1,
        ease: 'Circ.easeOut',
        force3D: false,
      })
    },
    heroline1() {
      const gsap = this.$gsap
      gsap.from('#heroline1', {
        opacity: 0,
        scaleX: 0,
        scaleY: 0,
        duration: 0.5,
        x: 0,
        y: 2,
        ease: 'ease',
      })
    },
    heroline2() {
      const gsap = this.$gsap
      gsap.from('#heroline2', {
        rotation: 0,
        scaleX: 1.4,
        scaleY: 1.5,
        duration: 0.6,
        x: 0,
        y: 5,
        ease: 'Circ.easeOut',
      })
    },

    animateOnScroll() {
      //   // this.$gsap.to(window, { duration: 2, scrollTo: 1000 })
      this.$gsap.to('#box', {
        scaleX: 1.2,
        scaleY: 1.2,

        y: 200,
        ease: 'Circ.easeOut',
        scrollTrigger: {
          trigger: '#box',
          pin: false,
          start: '+=100px',
          end: 'bottom',
          scrub: 0.4,
          invalidateOnRefresh: true,
          pinSpacing: true,
          force3D: false,
        },
      })

      this.$gsap.from('#readings', {
        scaleX: 1.2,
        scaleY: 1.2,
        y: 200,
        ease: 'Circ.easeInOut',
        scrollTrigger: {
          trigger: '#box2',
          pin: false,
          start: 'top 1600',
          end: 'bottom 400',
          scrub: 0.2,
          force3D: false,
          // markers: true,
        },
      })

      this.$gsap.from('#pricing', {
        scaleX: 1.2,
        scaleY: 1.2,
        y: 200,

        ease: 'Circ.easeInOut',
        scrollTrigger: {
          trigger: '#box2',
          pin: false,
          start: ' top',
          scrub: true,
          force3D: false,
        },
      })
    },
  },
}
</script>

<style></style>
