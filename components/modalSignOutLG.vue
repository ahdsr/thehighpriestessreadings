<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div
      class="fixed inset-0 z-40 transition-opacity bg-opacity-40 bg-element-dark-blue blur"
      aria-hidden="true"
    ></div>
    <div
      class="container fixed z-50 mx-auto my-auto overflow-y-auto bg-white shadow-lg inset-24 rounded-xl"
      aria-labelledby="dialog-1-title"
      role="dialog"
      aria-modal="true"
      v-show="showModal"
    >
      <div class="container mx-auto">
        <h2 class="p-5 text-xl font-bold tracking-tight shadow-sm bg-yellow-50">
          Add a new option
        </h2>
      </div>
      <div class="flex flex-row p-5">
        <div class="p-2">3434</div>
        <div class="p-2">3434</div>
        <div class="p-2">3434</div>
        <div class="p-2">3434</div>
        <div class="p-2">3434</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: true,
    }
  },
}
</script>

<style></style>
