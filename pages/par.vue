<template>
  <div>
    <header
      id="box"
      class="flex items-center justify-center h-screen mb-12 bg-fixed bg-cover bg-hero-monica-01"
    >
      <main class="h-screen px-4 mx-auto mt-16 max-w-7xl sm:mt-24">
        <div class="text-center">
          <div
            id="heroline1"
            class="pb-10 font-serif text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-9xl text-monica-purpple"
          >
            The High Priestess
          </div>

          <div
            id="heroline2"
            class="block pl-20 text-white text-9xl xl:inline bg-monica-melon"
          >
            Readings
          </div>
          <div
            class="mx-auto mt-3 text-base text-gray-500 max-w-mlg sm:text-lg md:mt-5 md:text-xl md:max-w-3xl lg:text-2xl lg:max-w-5xl"
          >
            <div class="mx-auto mt-3 lg:text-3xl">
              Journey through the subconscious.
            </div>
            <div class="mx-auto mt-3 lg:text-3xl">
              Tarot and Psychic Readings
            </div>
          </div>
          <div class="max-w-md pt-5 mx-auto sm:flex sm:justify-center md:mt-8">
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <nuxt-link :to="{ path: '/', hash: 'readings' }">
                <div class="container">
                  <lottie-player
                    src="https://assets9.lottiefiles.com/temp/lf20_J1XkLr.json"
                    background="transparent"
                    speed="1"
                    class="w-24"
                    loop
                    autoplay
                  ></lottie-player>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </main>
    </header>
    <div id="navbar" class="sticky bottom-0">
      <topNavigation />
    </div>
    <div id="box2" class="font-serif">
      <sectionReadings />
    </div>
    <section
      class="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img"
    >
      <div
        class="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl"
      >
        Parralax inline
      </div>
    </section>
    <div class="max-w-lg m-auto">
      <p class="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat
        a magna non varius. Proin leo felis, euismod non porta eget, varius sit
        amet sapien. Maecenas in nulla at leo convallis consectetur id a sapien.
        Nulla nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat
        libero. Nulla ac odio aliquam, accumsan arcu ut, lacinia est. Nulla eu
        sem elit. Fusce nec laoreet sem, semper molestie libero.
      </p>
      <p class="mb-4">
        Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin, lectus
        et fringilla ultrices, dolor nisi scelerisque tortor, vel finibus magna
        massa non nunc. Phasellus massa quam, egestas a nisl sed, porta volutpat
        metus. Nunc sed elit ac tellus tempor cursus. Suspendisse potenti.
        Vestibulum varius rutrum nisl nec consequat. Suspendisse semper
        dignissim sem viverra semper. Nulla porttitor, purus nec accumsan
        pharetra, nisi dolor condimentum ipsum, id consequat nulla nunc in
        ligula.
      </p>
      <p class="mb-4">
        Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris
        porta dignissim hendrerit. Cras id velit varius, fermentum lectus vitae,
        ultricies dolor. In bibendum rhoncus purus vel rutrum. Nam vulputate
        imperdiet fringilla. Donec blandit libero massa. Suspendisse dictum diam
        mauris, vitae fermentum dolor tincidunt in. Pellentesque sollicitudin
        venenatis dolor, vitae scelerisque elit ultrices eu. Donec eget sodales
        risus, quis dignissim neque.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.boxRotation()
    // this.heroline1()
    // this.heroline2()
    this.heroline3()
    this.animateOnScroll()
    // this.navbar()
  },

  methods: {
    boxRotation() {
      const gsap = this.$gsap
      gsap.from('#box', {
        scaleX: 0.8,
        scaleY: 0.8,
        opacity: 0,
        rotation: 0,
        duration: 1,
        ease: 'elastic',
      })
    },
    // // heroline1() {
    // //   const gsap = this.$gsap
    // //   gsap.from('#heroline1', {
    // //     opacity: 0,
    // //     rotation: 0,
    // //     scaleX: 0.8,
    // //     scaleY: 0.8,
    // //     duration: 0.5,
    // //     x: 0,
    // //     y: 20,

    // //     ease: 'easeOut',
    // //   })
    // // },
    // // heroline2() {
    // //   const gsap = this.$gsap
    // //   gsap.to('#heroline2', {
    // //     rotation: 0,
    // //     scaleX: 1.5,
    // //     scaleY: 1.5,
    // //     duration: 3.5,
    // //     x: 994,
    // //     y: 220,
    // //     ease: 'elastic',
    // //   })
    // },
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

    animateOnScroll() {
      //   // this.$gsap.to(window, { duration: 2, scrollTo: 1000 })
      this.$gsap.to('#box', {
        scaleX: 0.8,
        scaleY: 0.8,
        y: 600,
        opacity: 0,
        ease: 'Circ.easeInOut',
        scrollTrigger: {
          trigger: '#box',
          pin: false,
          start: '0',
          end: 'bottom',
          scrub: 0.2,
          invalidateOnRefresh: true,
          markers: true,
        },
      })

      this.$gsap.from('#box2', {
        scaleX: 1.1,
        scaleY: 1.1,
        opacity: 1,
        ease: 'Circ.easeInOut',
        scrollTrigger: {
          trigger: '#box2',
          pin: false,
          start: 'top 1000',
          end: 'bottom',
          scrub: 0.2,

          markers: true,
        },
      })
      this.$gsap.from('#navbar', {
        scrollTrigger: {
          trigger: '#navbar',
          pin: true,
          start: 'top 1000',
          end: 'bottom',
          scrub: 0.2,

          markers: true,
        },
      })
      //   this.$gsap.to('#box3', {
      //     scaleX: 0.9,
      //     scaleY: 0.9,
      //     ease: 'Circ.easeInOut',
      //     scrollTrigger: {
      //       trigger: '#box2',
      //       pin: false,
      //       start: ' top',
      //       scrub: true,
      //     },
      //   })
    },
  },
}
</script>

<style></style>
