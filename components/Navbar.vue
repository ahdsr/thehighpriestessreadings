<template>
  <div>
    <nav class="flex items-center justify-center">
      <div
        class="relative flex m-2 text-center border-b border-white hover:bg-yellow-100"
      >
        <a href="#">Home</a>
      </div>
      <div class="relative flex m-2 text-center border-b border-white">
        <a href="#">About</a>
      </div>
      <div class="relative flex m-2 text-center border-b border-white">
        <a href="#">Suck it</a>
      </div>
      <Dropdown title="Services" :items="services" />
    </nav>
  </div>
</template>

<script>
import Dropdown from '../components/Dropdown'
export default {
  name: 'navbar',
  components: {
    Dropdown,
  },
  data() {
    return {
      services: [
        {
          title: 'Web',
          link: '#',
        },
        {
          title: 'SuckIt',
          link: '#',
        },
        {
          title: 'Fuckit',
          link: '#',
        },
      ],
    }
  },
}
</script>

<style></style>
