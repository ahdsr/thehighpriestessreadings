<template>
  <div class="antialiased">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div
        class="flex items-end justify-center min-h-screen px-4 pt-4 pb-40 text-center sm:block sm:p-0"
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
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

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
          class="inline-block px-4 pt-5 pb-5 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div
              class="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full"
            >
              <!-- Heroicon name: outline/check -->
              <svg
                class="w-6 h-6 text-green-600"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-5">
              <h3
                class="text-lg font-medium leading-6 text-gray-900"
                id="modal-headline"
              >
                Order Succesfully Submited
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur amet labore.
                </p>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6">
            <nuxt-link to="/dlo-01">
              <button
                type="button"
                class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              >
                Go back home
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Start -->
    <!-- Top Nav Start -->
    <div class="mt-10">
      <div
        class="fixed inset-x-0 bottom-0 block h-16 pt-3 pr-2 align-middle bg-gray-300 shadow-md z-5"
      >
        <div class="flex justify-between">
          <nuxt-link to="/dlo-05">
            <button
              type="button"
              class="px-10 py-2 ml-2 text-sm font-medium text-gray-700 bg-white border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Back
            </button></nuxt-link
          >
          <nuxt-link to="/dlo-07">
            <button
              type="submit"
              class="inline-flex px-10 py-2 ml-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-element-green hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Next
            </button></nuxt-link
          >
        </div>
      </div>
      <!-- Top Navigation>-->
      <div
        class="fixed top-0 left-0 z-20 flex items-center w-full h-16 p-4 mx-auto text-white bg-white shadow-lg"
      >
        <div>
          <img
            class="w-6 fill-current"
            viewBox="0 0 20 20"
            src="~/assets/images/menu.svg"
          />
        </div>
        <div class="ml-4">
          <img
            class="w-24 fill-current"
            viewBox="0 0 20 20"
            src="~/assets/images/Icon-Logo-Xcelerate.svg"
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
            alt=""
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
            <!-- Completed Step -->
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-element-bright-blue"></div>
            </div>
            <a
              href="#"
              class="relative flex items-center justify-center w-8 h-8 rounded-full bg-element-green hover:bg-indigo-900"
            >
              <!-- Heroicon name: solid/check -->
              <svg
                class="w-5 h-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="sr-only">Step 1</span>
            </a>
          </li>

          <li class="relative pr-8 sm:pr-20">
            <!-- Completed Step -->
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-element-bright-blue"></div>
            </div>
            <a
              href="#"
              class="relative flex items-center justify-center w-8 h-8 rounded-full bg-element-green hover:bg-indigo-900"
            >
              <!-- Heroicon name: solid/check -->
              <svg
                class="w-5 h-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="sr-only">Step 1</span>
            </a>
          </li>

          <li class="relative pr-8 sm:pr-20">
            <!-- Completed Step -->
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-element-bright-blue"></div>
            </div>
            <a
              href="#"
              class="relative flex items-center justify-center w-8 h-8 rounded-full bg-element-green hover:bg-indigo-900"
            >
              <!-- Heroicon name: solid/check -->
              <svg
                class="w-5 h-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="sr-only">Step 1</span>
            </a>
          </li>

          <li class="relative pr-8 sm:pr-20">
            <!-- Completed Step -->
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-element-bright-blue"></div>
            </div>
            <a
              href="#"
              class="relative flex items-center justify-center w-8 h-8 rounded-full bg-element-green hover:bg-indigo-900"
            >
              <!-- Heroicon name: solid/check -->
              <svg
                class="w-5 h-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="sr-only">Step 1</span>
            </a>
          </li>

          <li class="relative pr-8 sm:pr-20">
            <!-- Completed Step -->
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-element-bright-blue"></div>
            </div>
            <a
              href="#"
              class="relative flex items-center justify-center w-8 h-8 rounded-full bg-element-green hover:bg-indigo-900"
            >
              <!-- Heroicon name: solid/check -->
              <svg
                class="w-5 h-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="sr-only">Step 1</span>
            </a>
          </li>
          <li class="relative">
            <!-- Current Step -->
            <div
              class="absolute inset-0 flex items-center"
              aria-hidden="true"
            ></div>
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
        </ol>
      </nav>
    </div>
    <!-- Progress Bar END -->
    <!-- Progress Nav Start -->
    <!--
    <div class="flex justify-center">
      <div class="grid grid-cols-6 gap-4 pl-2 pr-2 text-xs">
        <div>Validate Driver</div>
        <div>Vehicle</div>
        <div>Upfit</div>
        <div>Dealer</div>
        <div>Billing & Registration</div>
        <div>Summay</div>
      </div>
    </div>
    -->
    <!-- Progress Nav END -->
    <div class="mt-4">
      <div>
        <h3 class="p-4 mx-auto -mb-5 text-lg font-bold text-element-dark-blue">
          Review before sumbitting
        </h3>
        <p class="p-4 mx-auto text-sm text-gray-500">
          Review you order before submitting it. You can go back to each page to
          make any modifications if needed.
        </p>
      </div>
      <div
        class="p-4 mx-auto text-base font-bold text-gray-600 bg-gray-100 border-b-2"
      >
        <h3 class="text-base font-bold text-gray-600">General Order</h3>
      </div>
      <div class="grid grid-cols-2 gap-4 p-4 mx-auto">
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Client/Unit</p>
          <p class="mt-0 text-sm text-gray-500">1429/1231</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Log Number</p>
          <p class="mt-0 text-sm text-gray-500">23423453</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Order Type</p>
          <p class="mt-0 text-sm text-gray-500">Factory Order</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Order ID</p>
          <p class="mt-0 text-sm text-gray-500">343234</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Order Status</p>
          <p class="mt-0 text-sm text-gray-500">Saved</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">
            Factory Order Number
          </p>
          <p class="mt-0 text-sm text-gray-500">19283746r</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">
            Factory Order Date
          </p>
          <p class="mt-0 text-sm text-gray-500">03/11/2021</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">
            Order By and Date
          </p>
          <p class="mt-0 text-sm text-gray-500"></p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">
            Requested Delivery Date
          </p>
          <p class="mt-0 text-sm text-gray-500">03/22/2021</p>
        </div>
        <!-- ... -->
      </div>
    </div>

    <div class="mt-4">
      <div
        class="p-4 mx-auto text-base font-bold text-gray-600 bg-gray-100 border-b-2"
      >
        <h3 class="text-base font-bold text-gray-600">Driver Information</h3>
      </div>
      <div class="grid grid-cols-2 gap-4 p-4 mx-auto">
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">First Name</p>
          <p class="mt-0 text-sm text-gray-500">Christoper</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">First Name</p>
          <p class="mt-0 text-sm text-gray-500">Christoper</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Middle Name</p>
          <p class="mt-0 text-sm text-gray-500">Alfonso</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Last Name</p>
          <p class="mt-0 text-sm text-gray-500">Johnsonr</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900"></p>
          <p class="mt-0 text-sm text-gray-500"></p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Employee ID</p>
          <p class="mt-0 text-sm text-gray-500">19283746r</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Email</p>
          <p class="mt-0 text-sm text-gray-500">johnson@home.com</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Primary Phone</p>
          <p class="mt-0 text-sm text-gray-500">598-878-7445</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900"></p>
          <p class="mt-0 text-sm text-gray-500"></p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Address Line 1</p>
          <p class="mt-0 text-sm text-gray-500">6500 N Westwood Acres Ln</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Address Line 2</p>
          <p class="mt-0 text-sm text-gray-500">Unit #1423</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">City</p>
          <p class="mt-0 text-sm text-gray-500">Smithville</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">County</p>
          <p class="mt-0 text-sm text-gray-500">Harrisburg</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">State</p>
          <p class="mt-0 text-sm text-gray-500">NY</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Zip Code</p>
          <p class="mt-0 text-sm text-gray-500">90365</p>
        </div>
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900"></p>
          <p class="mt-0 text-sm text-gray-500"></p>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <div
        class="p-4 mx-auto text-base font-bold text-gray-600 bg-gray-100 border-b-2"
      >
        <h3 class="text-base font-bold text-gray-600">Custom Driver Fields</h3>
      </div>
      <div class="grid grid-cols-2 gap-4 p-4 mx-auto">
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">First Name</p>
          <p class="mt-0 text-sm text-gray-500">Christoper</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">First Name</p>
          <p class="mt-0 text-sm text-gray-500">Christoper</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Middle Name</p>
          <p class="mt-0 text-sm text-gray-500">Alfonso</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Last Name</p>
          <p class="mt-0 text-sm text-gray-500">Johnsonr</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900"></p>
          <p class="mt-0 text-sm text-gray-500"></p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Employee ID</p>
          <p class="mt-0 text-sm text-gray-500">19283746r</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Email</p>
          <p class="mt-0 text-sm text-gray-500">johnson@home.com</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Primary Phone</p>
          <p class="mt-0 text-sm text-gray-500">598-878-7445</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900"></p>
          <p class="mt-0 text-sm text-gray-500"></p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Address Line 1</p>
          <p class="mt-0 text-sm text-gray-500">6500 N Westwood Acres Ln</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Address Line 2</p>
          <p class="mt-0 text-sm text-gray-500">Unit #1423</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">City</p>
          <p class="mt-0 text-sm text-gray-500">Smithville</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">County</p>
          <p class="mt-0 text-sm text-gray-500">Harrisburg</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">State</p>
          <p class="mt-0 text-sm text-gray-500">NY</p>
        </div>
        <!-- ... -->
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900">Zip Code</p>
          <p class="mt-0 text-sm text-gray-500">90365</p>
        </div>
        <div>
          <p class="mt-1 text-sm font-semibold text-gray-900"></p>
          <p class="mt-0 text-sm text-gray-500"></p>
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
