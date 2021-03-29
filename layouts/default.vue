<template>
  <div>
    <div
      v-gsap.fromTo="[
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 1 },
      ]"
      class="sticky top-0 z-50 border-b border-monica-mauvelous"
    >
      <topNavigation />
    </div>
    <Nuxt />
  </div>
</template>
<script>
// export default {
//   mounted() {
//     const boxes = gsap.units.toArray('.box')
//   },
// }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
</style>
