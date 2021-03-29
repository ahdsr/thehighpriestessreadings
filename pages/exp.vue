<template>
  <div>
    <div class="p-10 mx-auto containter">
      <h1
        v-gsap.to="{
          rotation: 360,
          x: 150,
          duration: 2,
        }"
      >
        v-gsap.to
      </h1>
    </div>
    <div class="p-10 mx-auto containter">
      <p class="bg-monica-mauvelous" v-gsap.set="{ x: 100, y: 50 }">
        NUXT GSAP
      </p>
    </div>
    <div class="p-10 mx-auto containter">
      <span
        v-gsap.from="{
          opacity: 0,
          x: -200,
          duration: 1,
        }"
      >
        v-gsap.from
      </span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.box {
  height: 60px;
  width: 60px;
  background: red;
}
</style>
