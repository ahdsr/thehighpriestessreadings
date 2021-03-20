<template>
  <div class="antialiased">
    <!-- Start -->
    <!-- Top Nav Start -->
    <div class="mt-10">
      <!-- Top Navigation>-->
      <div
        class="fixed top-0 left-0 z-20 flex items-center w-full h-16 p-4 mx-auto text-white bg-white shadow-lg"
      >
        <div>
          <img
            class="w-6 fill-current"
            viewBox="0 0 20 20"
            src="~/assets/images/menu.svg"
            alt="Menu"
          />
        </div>
        <div class="ml-4">
          <img
            class="w-24 fill-current"
            viewBox="0 0 20 20"
            src="~/assets/images/Icon-Logo-Xcelerate.svg"
            alt="Xcelerate Logo"
          />
        </div>

        <div class="ml-auto">
          <button
            type="submit"
            class="px-2 py-1 text-xs text-white border-transparent rounded-md shadow-sm bg-element-bright-blue font-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Exit
          </button>
        </div>
        <div class="ml-4">
          <img
            class="inline-block object-cover w-8 h-8 rounded-full"
            src="https://vignette.wikia.nocookie.net/97918c83-d3c3-4a97-a206-6d770810e8e3/scale-to-width-down/800"
            alt="User Profile"
          />
        </div>
      </div>
    </div>
    <!-- Top Nav END -->
    <!-- Progress Bar Start -->
    <div class="mt-24">
      <nav aria-label="Progress">
        <ol class="flex justify-center">
          <li class="relative pr-8 sm:pr-20">
            <!-- Current Step -->
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-gray-200"></div>
            </div>
            <a
              href="#"
              class="relative flex items-center justify-center w-8 h-8 bg-white border-2 rounded-full border-element-green"
              aria-current="step"
            >
              <span
                class="h-2.5 w-2.5 bg-indigo-600 rounded-full"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Step 3</span>
            </a>
          </li>

          <li class="relative pr-8 sm:pr-20">
            <!-- Upcoming Step -->
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-gray-200"></div>
            </div>
            <a
              href="#"
              class="relative flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group hover:border-gray-400"
            >
              <span
                class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Step 4</span>
            </a>
          </li>

          <li class="relative pr-8 sm:pr-20">
            <!-- Upcoming Step -->
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-gray-200"></div>
            </div>
            <a
              href="#"
              class="relative flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group hover:border-gray-400"
            >
              <span
                class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Step 4</span>
            </a>
          </li>

          <li class="relative pr-8 sm:pr-20">
            <!-- Upcoming Step -->
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-gray-200"></div>
            </div>
            <a
              href="#"
              class="relative flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group hover:border-gray-400"
            >
              <span
                class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Step 4</span>
            </a>
          </li>

          <li class="relative pr-8 sm:pr-20">
            <!-- Upcoming Step -->
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-gray-200"></div>
            </div>
            <a
              href="#"
              class="relative flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group hover:border-gray-400"
            >
              <span
                class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Step 5</span>
            </a>
          </li>
          <li class="relative">
            <!-- Upcoming Step -->
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-gray-200"></div>
            </div>
            <a
              href="#"
              class="relative flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group hover:border-gray-400"
            >
              <span
                class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Step 5</span>
            </a>
          </li>
        </ol>
      </nav>
    </div>

    <!-- Progress Nav END -->
    <div class="mt-4">
      <div>
        <h3 class="p-4 mx-auto -mb-5 text-lg font-bold text-element-dark-blue">
          Before you begin
        </h3>
        <p class="p-4 mx-auto text-sm text-gray-500">
          Please review the following documents. You must readn and accept the
          required document in order to proceed with you order.
        </p>
      </div>
    </div>

    <div>
      <div class="p-4 border-b border-solid mx:aut">
        <a class="text-sm font-semibold text-blue-800" href="#"
          >Element Driver Handbook 2021</a
        >
        <p class="text-sm">Driver handbook</p>
      </div>

      <div class="p-4 border-b border-solid mx:aut">
        <a class="text-sm font-semibold text-blue-800" href="#"
          >Xcelerate for Drivers User Guide</a
        >
        <p class="text-sm">Fleet Forms</p>
      </div>

      <div class="p-4 border-b border-solid mx:aut">
        <a class="text-sm font-semibold text-blue-800" href="#"
          >Driver Ordering Policy 2021</a
        >
        <p class="text-sm">Ordering Policy</p>
      </div>

      <div class="p-4 border-b border-solid mx:aut">
        <a class="text-sm font-semibold text-blue-800" href="#"
          >Xcelerate for Drivers 2021 Safety Policies</a
        >
        <p class="text-sm">Safety Policy</p>
      </div>

      <div class="p-4 border-b border-solid mx:aut">
        <a class="text-sm font-semibold text-blue-800" href="#"
          >Driver Ordering Policy 2021</a
        >
        <p class="text-sm">Ordering Policy Documents</p>
      </div>
    </div>

    <!-- I agree -->
    <div class="p-4 mx-auto">
      <div class="flex flex-row p-4 mx-auto bg-yellow-200">
        <div class="flex">
          <input type="checkbox" class="w-4 h-4 form-checkbox" />
        </div>
        <div class="flex ml-4 text-sm font-bold">
          I confirm I have read all the required documentation
        </div>
        <div class="flex-none">
          <nuxt-link to="/dlo-02">
            <button
              type="submit"
              class="inline-flex px-10 py-2 ml-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-element-green hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Next
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- End -->
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
