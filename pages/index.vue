<template>
  <div>
    <!-- START - HERO -->

    <div class="relative overflow-hidden bg-white lg:mb-32 lg:mt-11">
      <main class="px-4 mx-auto mt-16 max-w-7xl sm:mt-24">
        <div class="text-center">
          <h1
            class="pb-10 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span class="block font-light text-gray-600 xl:inline"
              >The High Priestess</span
            >
            <span class="block text-monica-mauvelous xl:inline">Readings</span>
          </h1>
          <p
            class="mx-auto mt-3 text-base text-gray-500 max-w-mlg sm:text-lg md:mt-5 md:text-xl md:max-w-3xl lg:text-2xl lg:max-w-5xl"
          >
            <span class="lg:text-3xl"
              >Journey through the subconscious. Tarot and Psychic
              Readings</span
            >
            <span class="lg:text-xl"
              >My name is Monica. I am a Tarot Reader and Psychic. I offer
              readings Psychic Tarot Readings to help you achieve the clarity
              and guidance you seek. My purpose is to relay the messages that
              spirit has for you. Readings mainly include messages derived from
              Tarot, and also include information in the form of images, words,
              feelings and emotions derived from Psychic connection methods.
            </span>
          </p>
          <div class="max-w-md pt-5 mx-auto sm:flex sm:justify-center md:mt-8">
            <div class="rounded-md shadow">
              <nuxt-link :to="{ path: '/index', hash: 'readings' }">
                <a
                  href="#"
                  class="flex items-center justify-center w-full px-8 py-3 text-2xl font-extrabold text-white border border-transparent rounded-md bg-monica-mauvelous hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 lg:text-2xl"
                  :to="{ path: '/', hash: 'readings' }"
                >
                  Learn more
                </a>
              </nuxt-link>
              <div class="container"
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_EwEpue.json"
                background="transparent"
                speed="1"
                style="width: 300px; height: 300px"
                loop
                controls
                autoplay
              ></lottie-player>
              </div>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"></div>
          </div>
        </div>
      </main>
    </div>

    <div class="flex flex-row">
      <div class=""><img src="~assets/images/monica-stuff.jpg" /></div>
      <div class=""><img src="~assets/images/monica-crystals.jpg" /></div>
      <div class=""><img src="~assets/images/monica-smudge.jpg" /></div>
      <div class=""><img src="~assets/images/monica-profile.jpg" /></div>
    </div>

    <main id="readings">
      <sectionReadings />
    </main>

    <!-- <div>
      <sectionContentMain />
    </div> -->
    <div>
      <sectionTestimonial />
    </div>

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
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // the function to call when the user scrolls, added as a method
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
  },
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in;
  transition-duration: 200ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
