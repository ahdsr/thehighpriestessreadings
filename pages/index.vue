<template>
  <div class="bg-gray-200">
    <div
      id="logo"
      class="p-6 my-auto mb-auto font-sans font-bold tracking-tighter text-9xl"
    >
      AHDSR
    </div>

    <div id="masthead" class="flex invisible p-6 h-36">
      <div
        class="my-auto mb-auto font-sans text-2xl font-bold tracking-tighter"
      >
        AHDSR
      </div>
    </div>
    <div
      id="hero"
      class="invisible p-6 font-bold tracking-tight text-gray-400 text-9xl"
    >
      <span class="block w-1/2"
        >EASY TO UNDERSTAND. ●IMPOSSIBLE TO IGNORE.</span
      >
    </div>
    <div
      id="hero"
      class="invisible p-6 font-bold tracking-tight text-gray-400 text-9xl"
    >
      <span class="block w-1/2">I make it happen real fast, unexpectedly</span>
    </div>
  </div>
</template>

<script>
// import Navbar from '../components/Navbar'

export default {
  mounted() {
    this.hero()
    this.masthead()
  },
  methods: {
    fade() {
      const gsap = this.$gsap
      var tl1 = gsap.timeline({})
      tl1.set('#fade', {
        backgroundColor: '#eeeeee',
      })
      tl1.to('#fade', {
        duration: 8,

        autoAlpha: 1,
        opacity: 0,
      })
    },
    hero() {
      const gsap = this.$gsap
      var tl1 = gsap.timeline({})
      tl1.set('#hero', {
        scaleX: 1,
        scaleY: 1,
        y: 500,
        autoAlpha: 0,
        visibility: 'hidden',
      })
      tl1.to('#hero', {
        y: 0,

        duration: 1,
        autoAlpha: 1,
        ease: 'Back.easeOut',
        delay: 1,
      })
    },
    masthead() {
      const gsap = this.$gsap
      var tl1 = gsap.timeline({})
      tl1.set('#masthead', {
        scaleX: 1,
        scaleY: 1,
        y: -500,
        autoAlpha: 0,
        visibility: 'hidden',
      })
      tl1.to('#masthead', {
        y: 0,
        duration: 1,
        autoAlpha: 1,
        ease: 'Back.easeOut',
        delay: 1,
      })
    },
    masthead() {
      const gsap = this.$gsap
      var tl1 = gsap.timeline({})
      tl1.set('#logo', {
        scaleX: 0.2,
        scaleY: 0.2,

        autoAlpha: 0,
        visibility: 'hidden',
      })
      tl1.to('#logo', {
        scaleX: 3,
        scaleY: 3,
        x: 1900,
        duration: 1,
        autoAlpha: 1,
        ease: 'Back.easeOut',
        delay: 0.5,
      })
    },
  },
}
</script>

<style></style>
