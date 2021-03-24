<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div
      class="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="dialog-1-title"
      role="dialog"
      aria-modal="true"
      v-show="showProfile"
    >
      <div
        class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
      >
        <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
        <div
          class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-50 blur"
          aria-hidden="true"
        ></div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >

        <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->

        <div
          class="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
        >
          <div>
            <div class="flex items-center justify-center w-12 h-12 mx-auto">
              <!-- Heroicon name: outline/check -->
              <img
                class="w-auto h-8 sm:h-10"
                src="https://www.jimphicdesigns.com/downloads/imgs-mockup/hourglass.gif"
                alt=""
              />
            </div>

            <div class="mt-3 text-center sm:mt-5">
              <h3
                class="text-lg font-medium leading-6 text-gray-900"
                id="dialog-1-title"
              >
                Your session is about to time out
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Would you like to keep your session alive?
                </p>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6">
            <button
              type="button"
              class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              @click="showProfile = !showProfile"
            >
              Keep my session alive
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showProfile: true,
    }
  },
}
</script>

<style></style>
