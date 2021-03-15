<template>
  <div>
    <img :src="property.imageURL" : alt="property.imageAlt" />
    <h4>{{ property.heading }}</h4>
    <div>{{ property.regularPrice }} / regular</div>
    <div>{{ property.salePrice }} / sale</div>
    <div>
      {{ property.raiting }} / 5 starts based on {{ property.reviewCount }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['property'],
}
</script>

<style lang="scss" scoped></style>
