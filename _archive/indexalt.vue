<template>
  <div>
    <div class="fixed top-0 left-0 z-50 w-full shadow-2xl">
      <topNavigation />
    </div>

    <!-- <div
      id="navbar"
      class="fixed top-0 z-50 grid gap-4 text-xl text-white rounded-full shadow-xl left-96 grid-row-2 z-a50 w-96 h-96 bg-monica-xoletic"
    >
      <div class="rw-span-1 bg-monica-purpple">Link 1</div>
      <div class="col-span-1">Link 2</div>
    </div> -->
    <div
      id="box"
      class="z-0 h-screen overflow-hidden shadow-xl bg-hero-monica-03 rounded-3xl"
    >
      <div id="heroline1" class="font-bold text-white text-9xl">High</div>
      <div id="heroline2" class="font-bold text-white text-9xl">Priestess</div>
      <div id="heroline3" class="font-bold text-white text-9xl">Readings</div>
      <sectionHero />
    </div>
    <div id="box2" class="z-0 h-screen overflow-hidden shadow-xl rounded-3xl">
      <div class="font-bold text-white bg text-9xl">Section 2</div>
      <sectionTestimonial />
    </div>
    <div
      id="box3"
      class="z-0 h-screen overflow-hidden shadow-xl bg-monica-roseybrown rounded-3xl"
    >
      <div class="font-bold text-white text-9xl">Section 3</div>
      <sectionReadings />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.boxRotation()
    this.heroline1()
    this.heroline2()
    this.heroline3()
    this.animateOnScroll()
    // this.navbar()
  },

  methods: {
    boxRotation() {
      const gsap = this.$gsap
      gsap.to('#box', {
        opacity: 1,
        rotation: 0,
        scaleX: 0.9,
        scaleY: 0.9,
        duration: 3,
        z: 50,

        ease: 'elastic',
      })
    },
    heroline1() {
      const gsap = this.$gsap
      gsap.to('#heroline1', {
        opacity: 1,
        rotation: 0,
        scaleX: 1.5,
        scaleY: 1.5,
        duration: 3,
        x: 1000,
        y: 200,
        ease: 'elastic',
      })
    },
    heroline2() {
      const gsap = this.$gsap
      gsap.to('#heroline2', {
        rotation: 0,
        scaleX: 1.5,
        scaleY: 1.5,
        duration: 3.5,
        x: 994,
        y: 220,
        ease: 'elastic',
      })
    },
    heroline3() {
      const gsap = this.$gsap
      gsap.to('#heroline3', {
        rotation: 0,
        scaleX: 1.5,
        scaleY: 1.5,
        duration: 4,
        x: 994,
        y: 238,
        ease: 'elastic',
      })
    },
    navbar() {
      const gsap = this.$gsap
      gsap.from('#navbar', {
        duration: 1,
        x: 0,
        y: 2000,
        zIndex: 4,
      })
    },
    animateOnScroll() {
      // this.$gsap.to(window, { duration: 2, scrollTo: 1000 })

      this.$gsap.to('#box', {
        opacity: 0,
        x: -500,
        y: -500,
        ease: 'Circ.easeInOut',
        scrollTrigger: {
          trigger: '.content',
          pin: true,
          end: 'bottom',
          scrub: true,
        },
      })
      this.$gsap.to('#box2', {
        scaleX: 0.9,
        scaleY: 0.9,
        ease: 'Circ.easeInOut',
        scrollTrigger: {
          trigger: '#box',
          pin: false,
          start: 'top',

          scrub: true,
        },
      })
      this.$gsap.to('#box3', {
        scaleX: 0.9,
        scaleY: 0.9,
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
