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
<<<<<<< HEAD
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
=======
  data() {
    return {
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
      property2: {
        imageURL:
          'https://images.unsplash.com/photo-1615555896813-401d84a0d737?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        imageAlt: 'Image Description',
        regularPrice: '$329.99',
        salePrice: '$219.99',
        heading: 'Suck it bitch',
        reviewCount: 44,
        rating: 4,
      },
      property3: {
        imageURL:
          'https://images.unsplash.com/photo-1615555896813-401d84a0d737?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        imageAlt: 'Image Description',
        regularPrice: '$129.99',
        salePrice: '$219.00',
        heading: 'Yes, this is something I built',
        reviewCount: 14,
        rating: 3,
      },
      property4: {
        imageURL:
          'https://images.unsplash.com/photo-1615555896813-401d84a0d737?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        imageAlt: 'Image Description',
        regularPrice: '$9.99',
        salePrice: '$9.00',
        heading: 'I love VUE and TAILWIND',
        reviewCount: 54,
        rating: 1,
      },
    }
  },
>>>>>>> b09f00557e31934baa27dfbdcd0b5d3d5638965a
}
</script>

<style lang="scss" scoped></style>
