<template>
  <div id="app" class="font-mono antialiased text-gray-900">
    <h1 class="font-serif text-4xl">This is responsive!</h1>

    <div class="items-center min-h-screen p-12">
      <propertyCard :property="property" />
      <propertyCard :property="property2" />
      <propertyCard :property="property3" />
      <propertyCard :property="property4" />
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
  data: ()=> ({
    property: {
      imageURL:
        'https://images.unsplash.com/photo-1615479865224-b07bb46a5f56?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
      imageAlt: 'Image Description',
      regularPrice: '$29.99',
      salePrice: '$19.99',
      heading: 'The trip to the Ocean',
      reviewCount: 34,
      rating: 4,
    },
  }),
}
</script>

<style lang="scss" scoped></style>
