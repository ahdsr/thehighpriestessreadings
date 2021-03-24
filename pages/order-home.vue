<template>
  <div class="min-h-screen mx-auto text-xs bg-gray-50 sm:text-xs lg:text-sm">
    <div class="sticky top-0">
      <stickyNav />
    </div>
    <sideNav />

    <!--Floating Info Div-->

    <!--General Order-->
    <div class="bg-gray-50">
      <div class="relative pt-20 mx-auto pl-44">
        <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div class="lg:col-span-2">
            <h2
              class="text-3xl font-light tracking-tight text-gray-700 sm:text-4xl"
            >
              Welcome back to Ordering
              <span class="text-yellow-500">Sandy Wilson</span>
            </h2>
            <h3 class="mt-4 text-xl tracking-tight text-gray-800">
              Truck & Engineering Team
            </h3>
          </div>
        </div>
      </div>
    </div>

    <!--Approval-->
    <main
      id="approvalPOS"
      class="mx-auto pb-14 lg:py-8 lg:pl-44 lg:pr-12 lg:pt-0"
    >
      <div>
        <h3 class="text-lg font-medium leading-6 text-gray-900">Your Queues</h3>

        <dl class="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2 lg:grid-cols-3">
          <div class="relative px-4 pt-5 pb-4 bg-white rounded-lg shadow">
            <dt>
              <div class="absolute p-3 bg-indigo-500 rounded-md">
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
              <p class="ml-16 text-sm font-medium text-gray-500 truncate">
                On-Order Queue
              </p>
            </dt>
            <dd class="flex items-baseline pb-0 ml-16 sm:pb-0">
              <p class="text-2xl font-semibold text-gray-900">234</p>
              <p
                class="flex items-baseline ml-2 text-sm font-semibold text-green-600"
              >
                <svg
                  class="self-center flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only"> Increased by </span>
                122
              </p>
            </dd>
          </div>

          <div
            class="relative px-4 pt-5 pb-12 overflow-hidden bg-white rounded-lg shadow sm:pt-6 sm:px-6"
          >
            <dt>
              <div class="absolute p-3 bg-indigo-500 rounded-md">
                <!-- Heroicon name: outline/mail-open -->
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
                    d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                  />
                </svg>
              </div>
              <p class="ml-16 text-sm font-medium text-gray-500 truncate">
                Upfit / Project Queue
              </p>
            </dt>
            <dd class="flex items-baseline ml-16 sm:pb-7">
              <p class="text-2xl font-semibold text-gray-900">21</p>
              <p
                class="flex items-baseline ml-2 text-sm font-semibold text-green-600"
              >
                <svg
                  class="self-center flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>

                5.4%
              </p>
            </dd>
          </div>

          <div
            class="relative px-4 pt-5 pb-5 overflow-hidden bg-white rounded-lg shadow sm:pt-6 sm:px-6"
          >
            <dt>
              <div class="absolute p-3 bg-indigo-500 rounded-md">
                <!-- Heroicon name: outline/cursor-click -->
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
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </div>
              <p class="ml-16 text-sm font-medium text-gray-500 truncate">
                Avg. Click Rate
              </p>
            </dt>
            <dd class="flex items-baseline pb-6 ml-16 sm:pb-7">
              <p class="text-2xl font-semibold text-gray-900">24.57%</p>
              <p
                class="flex items-baseline ml-2 text-sm font-semibold text-red-600"
              >
                <svg
                  class="self-center flex-shrink-0 w-5 h-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only"> Decreased by </span>
                3.2%
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showProfile: false,
    }
  },
  head() {
    return {
      //     script: [{ src: 'https://code.jquery.com/jquery-1.12.4.js'}],
      //     script: [{ src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.js'}],
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        },
      ],
      script: [
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.2/jquery.min.js',
        },
      ],
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
