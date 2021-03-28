<template>
  <div class="min-h-screen mx-auto text-xs bg-gray-50 sm:text-xs lg:text-sm">
    <div class="sticky top-0 z-10">
      <stickyNav />
    </div>
    <div v-show="showModal">
      <modalSignOutLG />
    </div>
    <nav class="sticky top-0 bg-white"></nav>

    <div class="z-20"><sideNav /></div>

    <h1 class="relative pl-40 text-xl font-medium tracking-tight top-8">
      Additional Options Maintanence
    </h1>

    <div class="relative pl-40 top-10">
      <crumb />
    </div>
    <main
      id="approvalPOS"
      class="mx-auto pb-14 lg:py-8 lg:pl-40 lg:pr-12 lg:pt-20"
    >
      <div class="grid max-w-xs grid-cols-1 gap-4 pr-20">
        <div class="col-span-1">
          <label for="country" class="block font-medium text-gray-700 truncate"
            >Corp</label
          >
          <select
            id="country"
            name="country"
            autocomplete="country"
            class="block w-full px-3 py-2 mt-1 truncate bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900"
          >
            <option>FA</option>
            <option>CA</option>
          </select>
        </div>
        <div class="col-span-1">
          <label
            for="expiration_date"
            class="block font-medium text-gray-700 truncate"
            >Expiration date</label
          >
          <input
            type="text"
            name="expiration_date"
            id="expiration_date"
            autocomplete="cc-exp"
            class="block w-full px-3 py-2 mt-1 truncate border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900"
            placeholder="MM / YY"
          />
        </div>
        <div class="col-span-1">
          <label for="country" class="block font-medium text-gray-700 truncate"
            >Year</label
          >
          <select
            id="country"
            name="country"
            autocomplete="country"
            class="block w-full px-3 py-2 mt-1 truncate bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900"
          >
            <option>FA</option>
            <option>CA</option>
          </select>
        </div>
        <div class="col-span-1">
          <label for="country" class="block font-medium text-gray-700 truncate"
            >Make</label
          >
          <select
            id="country"
            name="country"
            autocomplete="country"
            class="block w-full px-3 py-2 mt-1 truncate bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900"
          >
            <option>FA</option>
            <option>CA</option>
          </select>
        </div>
        <div class="col-span-1">
          <button
            type="button"
            class="inline-flex items-center px-6 py-3 mt-4 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-element-green hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="showModal = !showModal"
          >
            Save
            <!-- Heroicon name: solid/mail -->
            <svg
              class="w-5 h-5 ml-3 -mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              />
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              />
            </svg>
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    }
  },
}
</script>

<style lang="scss" scoped></style>
