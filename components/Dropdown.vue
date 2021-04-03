<template>
  <div>
    <div
      id="subnav"
      @click="isOpen = !isOpen"
      class="relative z-20 flex m-2 text-center border-b border-white cursor-pointer"
    >
      <a :href="'#'">
        {{ title }}
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-3"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
      <div v-if="isOpen" class="absolute z-50 w-48 bg-red-200 h-26 sub">
        <div v-for="(item, i) in item" :key="i" class="">
          <a :href="item.link">{{ item.title }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // this.simpleFade()
  },
  name: 'dropdown',
  props: ['title', 'item'],

  methods: {
    // simpleFade() {
    //   const gsap = this.$gsap
    //   this.$gsap_x = 0
    //   this.$gsap_y = 0
    //   gsap.to('#subnav', {
    //     opacity: 1,
    //     // scaleX: 2.95,
    //     // scaleY: 2.95,
    //     duration: 0.5,
    //     x: 10,
    //     y: 0,
    //     ease: 'ease',
    //     force3D: false,
    //   })
    // },
  },
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

<style>
.sub {
  top: calc(100% + 18px);
}
</style>
