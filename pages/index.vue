<template>
  <div id="app" class="h-screen">
    <header class="p-4 mx-auto text-white bg-gray-800">
      <Navbar />
    </header>

    <!-- <div id="hero" class="h-screen p-10 mx-auto text-sm text-white bg-black">
      <div class=""><h1 id="logo" class="text-2xl">ahdsr</h1></div>
      <div
        class="flex flex-row mx-auto font-bold tracking-wide text-center text-white uppercase text-md max-h-10"
      >
        <div id="sketch" class="flex-1 p-2 bg-yellow-600 border-b border-white">
          <a class="p-10" href="">Section 1</a>
        </div>
        <div class="flex-1 p-2 bg-green-500">Section 2</div>
        <div class="flex-1 p-2 bg-blue-600">
          <a @click="hero()" class="p-10" href="#">Section 3</a>
        </div>
        <div class="flex-1 p-2 bg-red-700">Section 4</div>
        <div class="flex-1 p-2 bg-indigo-800">Section 5</div>
      </div>
      <div id="section1" class="p-10 bg-yellow-600">
        <h1 class="text-2xl">Section 1</h1>
      </div>
    </div> -->
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar,
  },
}

// export default {
//   mounted() {
//     this.hero()
//     this.logo()
//     this.hero()
//   },

//   methods: {
//     master() {},

//     //
//     hero() {
//       const gsap = this.$gsap

//       var tl1 = gsap.timeline({
//         repeat: 0,
//         repeatDelay: 0,
//         ease: 'easeOut',
//       })
//       tl1.from('#hero', {
//         scaleX: 0.2,
//         scaleY: 0.2,
//         duration: 1,
//         ease: 'elastic',
//       })
//       // tl1.to('#hero', { y: 500, duration: 0.5 })
//       // tl1.to('#hero', { opacity: 0, duration: 1 })
//     },

//     logo() {
//       const gsap = this.$gsap
//       var tl2 = gsap.timeline({
//         repeat: 0,
//         repeatDelay: 2,
//         ease: 'easeOut',
//       })
//       // tl2.from('#logo', { scaleX: 0, scaleY: 0, duration: 1 })
//       // tl2.from('#logo', { x: 0, duration: 1 })
//       tl2.from('#logo', { y: -150, duration: 1, ease: 'elastic' })
//       // tl2.to('#logo', { opacity: 1, duration: 2 })
//     },

//     showSection() {
//       const gsap = this.$gsap
//       this.$gsap_x = 0
//       this.$gsap_y = 0
//       gsap.to('#section1', {
//         opacity: 1,
//         // scaleX: 2.95,
//         // scaleY: 2.95,
//         duration: 1,
//         x: 100,
//         y: 0,
//         ease: 'ease',
//         force3D: false,
//       })
//     },
//     heroline2() {
//       const gsap = this.$gsap
//       gsap.from('#heroline2', {
//         rotation: 0,
//         scaleX: 1.1,
//         scaleY: 1.1,
//         duration: 0.6,
//         x: 0,
//         y: 5,
//         ease: 'Circ.easeOut',
//         force3D: false,
//       })
//     },

//     animateOnScroll() {
//       //   // this.$gsap.to(window, { duration: 2, scrollTo: 1000 })
//       this.$gsap.to('#box', {
//         scaleX: 0.6,
//         scaleY: 0.6,

//         y: 200,
//         ease: 'Circ.easeOut',
//         scrollTrigger: {
//           trigger: '#box',
//           pin: false,
//           start: '+=50px',
//           end: 'bottom',
//           scrub: 0.4,
//           invalidateOnRefresh: true,
//           pinSpacing: true,
//           force3D: false,
//         },
//       })

//       this.$gsap.from('#box2', {
//         scaleX: 1.2,
//         scaleY: 1.2,
//         y: 200,
//         ease: 'Circ.easeInOut',
//         scrollTrigger: {
//           trigger: '#box2',
//           pin: false,
//           start: 'top 1600',
//           end: 'bottom 400',
//           scrub: 0.2,
//           force3D: false,
//           // markers: true,
//         },
//       })

//       this.$gsap.from('#box3', {
//         scaleX: 1.2,
//         scaleY: 1.2,
//         y: 200,

//         ease: 'Circ.easeInOut',
//         scrollTrigger: {
//           trigger: '#box2',
//           pin: false,
//           start: ' top',
//           scrub: true,
//           force3D: false,
//         },
//       })
//     },
//   },
// }
</script>

<style></style>
