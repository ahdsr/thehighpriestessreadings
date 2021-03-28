<template>
  <div class="min-h-screen mx-auto text-xs bg-gray-50 sm:text-xs lg:text-sm">
    <div class="sticky top-0">
      <stickyNav />
    </div>
    <sideNav />

    <!--Floating Info Div-->

    <h1 class="relative text-xl font-medium tracking-tight top-8 left-40">
      Business Maintanance Tables
    </h1>

    <!--Approval-->
    <main id="approvalPOS" class="mx-auto lg:py-8 lg:pl-40 lg:pr-12 lg:pt-0">
      <div>
        <h3 class="mt-10 text-lg font-medium leading-6 text-gray-900">
          Your BMTs
        </h3>

        <dl class="grid grid-cols-4 gap-4 mt-5">
          <div
            class="pt-3 pb-10 pl-3 overflow-hidden bg-white rounded-lg shadow"
          >
            <nuxt-link to="/bmt-addOptions">
              <div class="absolute p-3 rounded-md bg-element-dark-blue">
                <!-- Heroicon name: outline/users -->
                <svg
                  class="w-6 h-6 text-white"
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <p class="ml-16 text-sm font-medium text-gray-500">
                Additional Options
              </p>
            </nuxt-link>
          </div>
          <div
            class="pt-3 pb-10 pl-3 overflow-hidden bg-white rounded-lg shadow"
          >
            <nuxt-link to="/queue-onorder">
              <div class="absolute p-3 rounded-md bg-element-dark-blue">
                <!-- Heroicon name: outline/users -->
                <svg
                  class="w-6 h-6 text-white"
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <p class="ml-16 text-sm font-medium text-gray-500">
                On-Order Queue
              </p>
            </nuxt-link>
          </div>
          <div
            class="pt-3 pb-10 pl-3 overflow-hidden bg-white rounded-lg shadow"
          >
            <nuxt-link to="/queue-onorder">
              <div class="absolute p-3 rounded-md bg-element-dark-blue">
                <!-- Heroicon name: outline/users -->
                <svg
                  class="w-6 h-6 text-white"
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <p class="ml-16 text-sm font-medium text-gray-500">
                On-Order Queue
              </p>
            </nuxt-link>
          </div>
          <div
            class="pt-3 pb-10 pl-3 overflow-hidden bg-white rounded-lg shadow"
          >
            <nuxt-link to="/queue-onorder">
              <div class="absolute p-3 rounded-md bg-element-dark-blue">
                <!-- Heroicon name: outline/users -->
                <svg
                  class="w-6 h-6 text-white"
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <p class="ml-16 text-sm font-medium text-gray-500">
                On-Order Queue
              </p>
            </nuxt-link>
          </div>
        </dl>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  // head() {
  //   return {
  //     //     script: [{ src: 'https://code.jquery.com/jquery-1.12.4.js'}],
  //     //     script: [{ src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.js'}],
  //     link: [
  //       {
  //         rel: 'stylesheet',
  //         href:
  //           'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
  //       },
  //     ],
  //     script: [
  //       {
  //         src:
  //           'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.2/jquery.min.js',
  //       },
  //     ],
  //   }
  // },
}
</script>

<style></style>
