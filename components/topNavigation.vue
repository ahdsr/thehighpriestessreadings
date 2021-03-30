<template>
  <div>
    <nav class="font-sans font-normal bg-white text-monica-xoletic">
      <div class="px-4 mx-auto sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 ">
          <div class="flex">
            <div class="flex items-center flex-shrink-0 ">

              <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                <circle
                  stroke-width="3"
                  stroke="#B538F9"
                  fill="#FFFFFF"
                  r="16"
                  cy="25"
                  cx="25"
                />
                <path
                  stroke-width="0"
                  fill="#B538F9"
                  d="m25,9a16,16 0 0 0 0,32l0,-1.5a18,18 0 0 0 0,-29l0,-1.5z"
                />
              </svg>

            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
              <nuxt-link class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 bg-transparent" to=/>Home</nuxt-link>
              <nuxt-link class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700" to=/about>About</nuxt-link>
              <nuxt-link class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700" to=/testimonials>Testimonials</nuxt-link>
              <nuxt-link class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700" to=/contact>Contact</nuxt-link>



            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
      <a href="@monica.czuchraj@gmail.com">Email </a>
          </div>
          <div class="flex items-center -mr-2 sm:hidden">
            <!-- Mobile menu button -->
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
              <svg
                class="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
              <svg
                class="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="sm:hidden" id="mobile-menu">
        <div class="pt-2 pb-3 space-y-1">

          <nuxt-link class="block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 border-l-4 border-indigo-500 bg-indigo-50" to=/about>About</nuxt-link>
              <nuxt-link class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" to=/testimonials>Testimonials</nuxt-link>
              <nuxt-link class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" to=/contact>Contact</nuxt-link>


        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    }
  },
}
</script>

<style></style>
