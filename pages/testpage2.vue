<template>
  <div class="p-12 px-8 mx-auto mt-6 bg-gray-300">
    <h1 class="mt-6 text-4xl font-bold text-left">New Shoes</h1>
    <img class="mt-6" src="~/assets/images/shoe.jpg" />
    <nuxt-link to="/testpage">my link</nuxt-link>
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'bg-gray-500',
    },
  },
}
</script>

<style lang="scss" scoped></style>
