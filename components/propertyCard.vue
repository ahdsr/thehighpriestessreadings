<template>
  <div id="app">
    <div class="bg-gray-300">
      <propertyCard :property="property" />
    </div>
  </div>
</template>

<script>
import propertyCard from '~/components/propertyCard'

export default {
  name: 'app',
  components: {
    propertyCard,
  },
  data: () => ({
    property: {
      imageURL: '#',
      imageAlt: 'Image Description',
      regularPrice: '$29.99',
      salePrice: '$19.99',
      heading: 'Giant Bicycle',
      reviewCount: 34,
      raiting: '4',
    },
  }),
}
</script>

<style lang="scss" scoped></style>
