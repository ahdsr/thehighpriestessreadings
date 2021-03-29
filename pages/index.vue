<template>
  <div>
    <!-- START - HERO -->

    <div
      v-gsap.from="{
        opacity: 100,
        y: 20,
        duration: 1,
      }"
      class="relative z-0 overflow-hidden bg-transparent lg:mb-32 lg:mt-11 scrollbar-hide"
    >
      <main class="px-4 mx-auto mt-16 max-w-7xl sm:mt-24">
        <div class="text-center">
          <h1
            class="pb-10 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span class="block font-light text-monica-purpple xl:inline"
              >The High Priestess</span
            >
            <span class="block text-monica-mauvelous xl:inline">Readings</span>
          </h1>
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
    </div>

    <div class="flex flex-row">
      <div
        v-gsap.from="{
          opacity: 100,
          y: 20,
          duration: 1,
        }"
      >
        <img src="~assets/images/monica-stuff.jpg" />
      </div>
      <div
        v-gsap.from="{
          opacity: 100,
          y: 30,
          duration: 1,
        }"
      >
        <img src="~assets/images/monica-crystals.jpg" />
      </div>
      <div
        v-gsap.from="{
          opacity: 100,
          y: 40,
          duration: 1,
        }"
      >
        <img src="~assets/images/monica-smudge.jpg" />
      </div>
      <div
        v-gsap.from="{
          opacity: 100,
          y: 50,
          duration: 1,
        }"
      >
        <img src="~assets/images/monica-profile.jpg" />
      </div>
    </div>

    <main id="readings">
      <sectionReadings />
    </main>

    <!-- <div>
      <sectionContentMain />
    </div> -->
    <div id="test">
      <sectionTestimonial />
    </div>

    <div class="max-w-4xl pt-20 mx-auto">
      <div class="grid grid-cols-3 gap-0">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="~assets/images/card1.png" alt="Card 1 - The future" />
            </div>
            <div class="flip-card-back">
              <h1>45 Minute Reading</h1>
              <p>$80</p>
              <p>
                Written Reading sent to your email answering up to 2 questions
                in detail. Option to include a photo of your cards.
              </p>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="~assets/images/card1.png" alt="Card 1 - The future" />
            </div>
            <div class="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="~assets/images/card1.png" alt="Card 1 - The future" />
            </div>
            <div class="flip-card-back">
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nuxt-link :to="{ path: '/', hash: 'readings' }">
      <div class="max-w-xl p-10 mx-auto">
        <lottie-player
          src="https://assets3.lottiefiles.com/packages/lf20_4nLQ1E.json"
          background="transparent"
          speed="1"
          class=""
          loop
          autoplay
        ></lottie-player>
      </div>
    </nuxt-link>

    <a href="http://www.freepik.com">Designed by rawpixel.com / Freepik</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      view: {
        atTopOfPage: true,
      },
    }
  },
  mounted() {
    this.animateOnScroll()
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // the function to call when the user scrolls, added as a methodasd
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.atTopOfPage) this.view.atTopOfPage = false
      } else {
        // user is at top of page
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true
      }
    },
    animateOnScroll() {
      // this.$gsap.to(window, { duration: 2, scrollTo: 1000 })
      this.$gsap.from('#readings', {
        y: 50,
        opactiy: 0,
        ease: 'Power1.easeInOut',
        scrollTrigger: {
          trigger: '#readings',
          pin: false,
          end: 'top top',
          scrub: 1,
          once: true,
        },
      })

      this.$gsap.from('#test', {
        y: 50,
        opactiy: 0,
        ease: 'Power1.easeInOut',
        scrollTrigger: {
          trigger: '#test',
          pin: false,
          end: 'top top',
          scrub: 1,
          once: true,
        },
      })
    },
  },
}
</script>

<style>
/* .page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in;
  transition-duration: 200ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
} */
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 420px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #191919;
  color: white;
  transform: rotateY(180deg);
}
</style>
