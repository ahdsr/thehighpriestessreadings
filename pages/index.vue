<template>
  <div>
    <div
      id="navbar"
      class="fixed top-0 z-50 w-screen bg-white border-b border-blue-100"
    >
      <topNavigation />
    </div>

    <div
      id="box"
      class="h-screen text-center bg-center shadow-xl rounded-4xl bg-hero-monica-05 sm:bg-cover lg:bg-center xl:bg-hero-monica-05 xl:rounded-4xl"
    >
      <div
        id="heroline1"
        class="mx-auto font-thin tracking-tight sm:text-xl md:text-3xl lg:text-8xl md:pt-32 lg:pt-48 xl:pt-64"
      >
        The
        <span class="font-medium text-monica-purpple">High Priestess</span>
        Readings
      </div>
      <div
        id="heroline2"
        class="mx-auto text-xl font-medium tracking-tight pt-14 text-monica-melon text-opacity-70 md:text-2xl lg:text-5xl md:pt-8"
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
        <div class="block w-20 mx-auto md:w-26 sm:pt-28">
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

    <div id="box2" class="font-serif">
      <div class="max-w-4xl pt-20 mx-auto"></div>
      <sectionReadings />
    </div>

    <div id="box2" class="font-serif">
      <div class="max-w-4xl pt-20 mx-auto"></div>
      <sectionPricing />
    </div>

    <div id="box3" class="font-serif">
      <sectionTestimonial />
    </div>

    <div id="box4" class="font-serif">
      <sectionAbout />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
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
      })
    },
    heroline1() {
      const gsap = this.$gsap
      gsap.from('#heroline1', {
        opacity: 0,
        scaleX: 0.95,
        scaleY: 0.95,
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
        scaleX: 1.1,
        scaleY: 1.1,
        duration: 0.6,
        x: 0,
        y: 5,
        ease: 'Circ.easeOut',
      })
    },

    animateOnScroll() {
      //   // this.$gsap.to(window, { duration: 2, scrollTo: 1000 })
      this.$gsap.to('#box', {
        scaleX: 0.6,
        scaleY: 0.6,

        y: 200,
        ease: 'Circ.easeOut',
        scrollTrigger: {
          trigger: '#box',
          pin: false,
          start: '+=50px',
          end: 'bottom',
          scrub: 0.4,
          invalidateOnRefresh: true,
          pinSpacing: true,
        },
      })

      this.$gsap.from('#box2', {
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
          // markers: true,
        },
      })

      this.$gsap.from('#box3', {
        scaleX: 1.2,
        scaleY: 1.2,
        y: 200,

        ease: 'Circ.easeInOut',
        scrollTrigger: {
          trigger: '#box2',
          pin: false,
          start: ' top',
          scrub: true,
        },
      })
    },
  },
}
</script>

<style></style>
