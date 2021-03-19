<template>
  <div
    class="p-2 mt-6 overflow-hidden bg-white shadow-2xl rounded-xl mx:auto md:mx-auto lg:mx-40"
  >
    <div class="md:flex">
      <img
        class="object-cover object-center w-full h-56 md:w-40 md:h-40" :src="property.imageURL" :alt="property.imageAlt"/>
      <div class="p-4 -mt-4">
        <span class="inline-block px-2 mt-4 text-xs bg-yellow-600 rounded-full"
          >NEW</span
        >
        <div
          class="mt-0 font-sans text-sm font-semibold tracking-wide text-gray-600 uppercase"
        >
          {{ property.regularPrice }} Reg &bull; {{ property.salePrice }} Sale
        </div>
        <h4 class="mt-0 text-xl font-bold leading-tight tracking-tight">
          {{ property.heading }}
        </h4>

        <div class="flex mt-4 text-sm text-gray-600">
          <svg
            class="w-4 h-5 fill-current"
            v-for="i in 5"
            :key="i"
            :class="i <= property.rating ? 'text-yellow-600' : 'text-gray-400'"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <span class="ml-4"> {{ property.reviewCount }} reviews</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// This is an example of a data property declaring a Vue prop //
export default {
  props: {
    property: {
      type: Object,
      required: true,
      default: {},
    },
  },
}
</script>

<style lang="scss" scoped></style>
