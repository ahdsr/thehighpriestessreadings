<template>
  <div id="app">
    <div class="flex flex-col p-10 m-6 text-white bg-black">
      <div
        v-for="(ingredients, i) in ingredients"
        class="flex-col p-4 text-white bg-blue-600"
      >
        {{ ingredients }} ( {{ i }} )
        <template v-for="(ingredients, index) in ingredients">
          <h1 class="text-xl font-bold">{{ ingredients }}</h1>
          <p>{{ index }}</p>
        </template>
      </div>
      <div
        v-bind:key="persons in persons"
        class="flex-col p-4 text-white bg-red-600"
      >
        {{ persons }}
      </div>
      <h1
        class="pb-10 text-5xl text-purple-300"
        v-for="(specHeaders, index) in ingredients"
      >
        {{ ingredients }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      specHeaders: ['meat', 'fruit', 'cookies'],
      persons: [
        { name: 'Max', age: 27, color: 'red' },
        { name: 'Anna', age: 'unknown', color: 'blue' },
      ],
    }
  },
  methods: {},
}
</script>

<style></style>
