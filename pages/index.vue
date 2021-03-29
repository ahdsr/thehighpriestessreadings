<template>
  <div>
    <!-- START - HERO -->
    <div class="sticky top-0 z-50 shadow-lg">
      <topNavigation />
    </div>
    <div class="z-40">
      <sectionHero />
    </div>

    <div class="flex flex-row">
      <div class=""><img src="~assets/images/monica-stuff.jpg" /></div>
      <div class=""><img src="~assets/images/monica-crystals.jpg" /></div>
      <div class=""><img src="~assets/images/monica-smudge.jpg" /></div>
      <div class=""><img src="~assets/images/monica-profile.jpg" /></div>
    </div>

    <div>
      <sectionReadings />
    </div>

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
      showProfile: false,
    }
  },
  head() {
    return {
      link: [],
      script: [],
    }
  },
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
