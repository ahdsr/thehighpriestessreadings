<template>
  <div id="app" class="mx-auto text-xs bg-gray-50 sm:text-xs lg:text-sm">
    <div class="sticky top-0 z-10">
      <stickyNav />
    </div>

    <nav class="sticky top-0 bg-white"></nav>

    <div class="z-20"><sideNav /></div>

    <h1 class="relative pl-40 text-xl font-medium tracking-tight top-8">
      2021 RAM - 1500 Classic Tradesman 4x2 Quad Cab
    </h1>

    <div class="relative pl-40 top-10">
      <crumb />
    </div>

    <main
      id="generalPOS"
      class="mx-auto pb-14 lg:py-8 lg:pl-40 lg:pr-12 lg:pt-20"
    >
      <!-- <div class="bg-transparent shadow-lg">
        <div class="flex flex-row bg-transparent">
          <div
            class="flex p-4 bg-white border-2 border-b-0 border-element-bright-blue hover:bg-gray-100"
          >
            Vehicle
          </div>
          <div class="flex p-4 bg-white hover:bg-gray-100">
            Standard Equipment
          </div>
          <div class="flex p-4 bg-white hover:bg-gray-100">Upfitting</div>
          <div class="flex p-4 bg-white hover:bg-gray-100">
            Fees & Adjustments
          </div>
          <div class="flex p-4 bg-white hover:bg-gray-100">
            Linked Clients (3)
          </div>
          <div class="flex p-4 bg-white hover:bg-gray-100">
            Geographic Location
          </div>
        </div>
      </div> -->

      <!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->
      <div>
        <!-- This example requires Tailwind CSS v2.0+ -->
        <div class="relative inline-block text-left">
          <div>
            <button
              type="button"
              class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              id="options-menu"
              aria-expanded="true"
              aria-haspopup="true"
            >
              Options
              <!-- Heroicon name: solid/chevron-down -->
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
          <div
            class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div class="py-1" role="none">
              <a
                href="#"
                class="flex items-center px-4 py-2 text-sm text-gray-700 group hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                <!-- Heroicon name: solid/pencil-alt -->
                <svg
                  class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clip-rule="evenodd"
                  />
                </svg>
                Attachments
              </a>
              <a
                href="#"
                class="flex items-center px-4 py-2 text-sm text-gray-700 group hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                <!-- Heroicon name: solid/duplicate -->
                <svg
                  class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
                  />
                  <path
                    d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"
                  />
                </svg>
                History
              </a>
            </div>
            <div class="py-1" role="none">
              <a
                href="#"
                class="flex items-center px-4 py-2 text-sm text-gray-700 group hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                <!-- Heroicon name: solid/archive -->
                <svg
                  class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                  <path
                    fill-rule="evenodd"
                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                Comments
              </a>
              <a
                href="#"
                class="flex items-center px-4 py-2 text-sm text-gray-700 group hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                <!-- Heroicon name: solid/arrow-circle-right -->
                <svg
                  class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                Export To
              </a>
            </div>
            <div class="py-1" role="none">
              <a
                href="#"
                class="flex items-center px-4 py-2 text-sm text-gray-700 group hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                <!-- Heroicon name: solid/user-add -->
                <svg
                  class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
                  />
                </svg>
                Save
              </a>
              <a
                href="#"
                class="flex items-center px-4 py-2 text-sm text-gray-700 group hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                <!-- Heroicon name: solid/heart -->
                <svg
                  class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
                Add to favorites
              </a>
            </div>
            <div class="py-1" role="none">
              <a
                href="#"
                class="flex items-center px-4 py-2 text-sm text-gray-700 group hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                <!-- Heroicon name: solid/trash -->
                <svg
                  class="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                Delete
              </a>
            </div>
          </div>
        </div>

        <div class="sm:hidden">
          <label for="tabs" class="sr-only">Select a tab</label>
          <select
            id="tabs"
            name="tabs"
            class="block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option>Applied</option>

            <option>Phone Screening</option>

            <option selected>Interview</option>

            <option>Offer</option>

            <option>Disqualified</option>
          </select>
        </div>
        <div class="hidden sm:block">
          <div class="mb-4 border-b border-gray-200">
            <nav class="flex -mb-px space-x-8" aria-label="Tabs">
              <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200" -->

              <a
                href="#"
                class="px-1 py-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-200 whitespace-nowrap"
              >
                Vehicle

                <!-- Current: "bg-indigo-100 text-indigo-600", Default: "bg-gray-100 text-gray-900" -->
                <span
                  class="bg-gray-100 text-gray-900 hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                ></span>
              </a>

              <a
                href="#"
                class="px-1 py-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-200 whitespace-nowrap"
              >
                Standard Equipment

                <!-- Current: "bg-indigo-100 text-indigo-600", Default: "bg-gray-100 text-gray-900" -->
                <span
                  class="bg-gray-100 text-gray-900 hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                  >6</span
                >
              </a>

              <a
                href="#"
                class="px-1 py-4 text-sm font-medium text-indigo-600 border-b-2 border-element-bright-blue whitespace-nowrap"
              >
                Upfits

                <!-- Current: "bg-indigo-100 text-indigo-600", Default: "bg-gray-100 text-gray-900" -->
                <span
                  class="bg-indigo-100 text-indigo-600 hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                  >4</span
                >
              </a>

              <a
                href="#"
                class="px-1 py-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-200 whitespace-nowrap"
              >
                Fees & Adjustments
              </a>

              <a
                href="#"
                class="px-1 py-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-200 whitespace-nowrap"
              >
                Linked Clients
              </a>
            </nav>
          </div>
        </div>

        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-3">
            <img src="~assets/images/pickup.png" />
          </div>
          <div class="col-span-9 overflow-scroll bg-element-green">
            <queOnOrder :property="property" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import queOnOrder from '~/components/queOnOrder'

export default {
  name: 'app',
  components: {
    queOnOrder,
  },
  head() {
    return {
      //     script: [{ src: 'https://code.jquery.com/jquery-1.12.4.js'}],
      //     script: [{ src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.js'}],
      //
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Tangerine">',
        },
      ],
    }
  },
  data() {
    return {
      property: {
        log: 'Fleet Spec Status',
        corpcode: 'Image',
        clientNumber: 'Client Number',
        unitNumber: 'Client Name',
        orderType: 'Breakdown',
        currentStatus: 'Fleet Spec ID',
        year: 'Year',
        manufacturer: 'Manufacturer',
        make: 'Make',
        model: 'Model',
        factoryOrderNumber: 'Factory Order Number',
        vin: 'VIN',
        fleetSpecID: 'Fleet Spec ID',
        dioInd: 'DIO Indicator',
        upfitInd: 'Upfit Indicator',
        creditInd: 'Credit',
        insuranceInd: 'Insurance',
        billingInd: 'Billing',
        dealerInd: 'Dealer',
        registrationInd: 'Registration',
        upfitSoftError: 'Upfit Soft Error',
        capping: 'Capping',
        lastUpdateDate: 'Date',
        lastUpdateTime: 'Time',
        lastUpdateUserID: 'User ID',
      },
    }
  },
}
</script>

<style></style>
