<template>
  <div class="antialiased">
    <!-- Start -->
    <!-- Top Nav Start -->
    <div class="mt-10">
      <div
        class="fixed inset-x-0 bottom-0 block h-16 pt-3 pr-2 align-middle bg-gray-300 shadow-md z-5"
      >
        <div class="flex justify-between">
          <nuxt-link to="/dlo-04">
            <button
              type="button"
              class="px-10 py-2 ml-2 text-sm font-medium text-gray-700 bg-white border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Back
            </button></nuxt-link
          >
          <nuxt-link to="/dlo-06">
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
              <span class="sr-only">Step 2</span>
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
          Select a Dealer
        </h3>
        <p class="p-4 mx-auto text-sm text-gray-500">
          Element fleet preferences indicate driver information is managed
          through your company's policy
        </p>
      </div>

      <div>
        <h3
          class="p-4 text-sm font-bold leading-6 text-white bg-element-dark-blue"
        >
          Dealer Name
        </h3>

        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-2 py-2 text-xs font-medium tracking-normal text-left text-gray-500 uppercase"
              >
                Dealer Name
              </th>
              <th
                scope="col"
                class="px-2 py-2 text-xs font-medium tracking-normal text-left text-gray-500 uppercase"
              >
                City
              </th>

              <th
                scope="col"
                class="px-2 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Courtesy Delivery Fee
              </th>
              <th
                scope="col"
                class="px-2 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Distance
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- Odd row -->

            <tr class="bg-gray-50">
              <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
                <div class="flex items-center">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <label
                    for="push_everything"
                    class="block ml-3 text-sm font-medium text-gray-700"
                  >
                    Mike Castrucci Ford of Alexandria Inc
                  </label>
                </div>
              </td>

              <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
                Alexandria
              </td>
              <td class="px-2 py-2 text-sm text-gray-500">$250.00</td>
              <td class="px-2 py-2 text-sm text-gray-500">81 Miles</td>
            </tr>
            <!-- Odd row -->
            <tr class="bg-white">
              <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
                <div class="flex items-center">
                  <input
                    id="push_everything"
                    name="push_notifications"
                    type="radio"
                    class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <label
                    for="push_everything"
                    class="block ml-3 text-sm font-medium text-gray-700"
                  >
                    Mike Castrucci Ford of Alexandria Inc
                  </label>
                </div>
              </td>
              <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
                Tim Short Ford of Morehead
              </td>

              <td class="px-2 py-2 text-sm text-gray-500">$400</td>
              <td class="px-2 py-2 text-sm text-gray-500">30 Miles</td>
            </tr>

            <!-- More items... -->
          </tbody>
        </table>
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
