<template>
  <div>
    <div
      class="fixed min-w-full p-6 shadow-md bg-blue-50 pl-14 top-22 left-28 blur bg-opacity-70"
    >
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select a tab</label>
        <select
          id="tabs"
          name="tabs"
          class="block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option>General Order</option>

          <option>Company</option>

          <option selected>Team Members</option>

          <option>Billing</option>
        </select>
      </div>
      <div class="hidden sm:block">
        <nav class="flex space-x-4 justify-self-center" aria-label="Tabs">
          <!-- Current: "bg-indigo-100 text-indigo-700", Default: "text-gray-500 hover:text-gray-700"-->
          <nuxt-link
            class="px-3 py-1 text-sm font-medium text-gray-500 truncate rounded-md hover:text-gray-700"
            :to="{ path: '/order-m', hash: 'generalPOS' }"
          >
            <a
              href="#"
              class="px-3 py-1 text-sm font-medium text-gray-500 truncate rounded-md hover:text-gray-700"
            >
              General Order
            </a>
          </nuxt-link>
          <nuxt-link
            class="px-3 py-1 text-sm font-medium text-gray-500 truncate rounded-md hover:text-gray-700"
            :to="{ path: '/order-m', hash: 'driverPOS' }"
          >
            <a
              href="#"
              class="px-3 py-1 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
            >
              Driver
            </a>
          </nuxt-link>
          <nuxt-link
            class="px-3 py-1 text-sm font-medium text-gray-500 truncate rounded-md hover:text-gray-700"
            :to="{ path: '/order-m', hash: 'vehiclePOS' }"
          >
            <a
              href="#"
              class="px-3 py-1 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-md"
              aria-current="page"
            >
              Vehicle
            </a>
          </nuxt-link>
          <nuxt-link
            class="px-3 py-1 text-sm font-medium text-gray-500 truncate rounded-md hover:text-gray-700"
            :to="{ path: '/order-m', hash: 'dioPOS' }"
          >
            <a
              href="#"
              class="px-3 py-1 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
            >
              DIO
            </a>
          </nuxt-link>
          <nuxt-link
            class="px-3 py-1 text-sm font-medium text-gray-500 truncate rounded-md hover:text-gray-700"
            :to="{ path: '/order-m', hash: 'upfitPOS' }"
          >
            <a
              href="#"
              class="px-3 py-1 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
            >
              Upfit
            </a>
          </nuxt-link>
          <nuxt-link
            class="px-3 py-1 text-sm font-medium text-gray-500 truncate rounded-md hover:text-gray-700"
            :to="{ path: '/order-m', hash: 'feesPOS' }"
          >
            <a
              href="#"
              class="px-3 py-1 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
            >
              Fees &amp; Charges
            </a>
          </nuxt-link>
          <nuxt-link
            class="px-3 py-1 text-sm font-medium text-gray-500 truncate rounded-md hover:text-gray-700"
            :to="{ path: '/order-m', hash: 'billingrPOS' }"
          >
            <a
              href="#"
              class="px-3 py-1 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
            >
              Billing
            </a>
          </nuxt-link>
          <a
            href="#"
            class="px-3 py-1 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
          >
            Title &amp; Registration
          </a>
          <a
            href="#"
            class="px-3 py-1 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
          >
            Insurance
          </a>
          <a
            href="#"
            class="px-3 py-1 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
          >
            Dealer
          </a>
          <a
            href="#"
            class="px-3 py-1 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
          >
            Custom Fields
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
