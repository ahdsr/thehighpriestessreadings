<template>
  <div
    v-gsap.fromTo="[
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
    ]"
  >
    <div class="relative overflow-hidden bg-monica-purpple">
      <main class="relative h-screen px-4 mx-auto max-w-7xl sm:mt-24">
        <p
          class="mx-auto mt-3 text-base text-gray-500 max-w-mlg sm:text-lg md:mt-5 md:text-xl md:max-w-3xl lg:text-2xl lg:max-w-5xl"
        >
          <span class="lg:text-3xl"
            >Journey through the subconscious. Tarot and Psychic Readings</span
          >
          <span class="lg:text-xl"
            >My name is Monica. I am a Tarot Reader and Psychic. I offer
            readings Psychic Tarot Readings to help you achieve the clarity and
            guidance you seek. My purpose is to relay the messages that spirit
            has for you. Readings mainly include messages derived from Tarot,
            and also include information in the form of images, words, feelings
            and emotions derived from Psychic connection methods.
          </span>
        </p>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: true,
    }
  },
}
</script>

<style></style>
