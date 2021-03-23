<template>
  <div class="mx-auto bg-gray-100">
    <nav class="fixed top-0 left-0 z-20 w-full bg-gray-800">
      <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
          <div
            class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start"
          >
            <div class="flex items-center flex-shrink-0">
              <!-- <img class="block w-auto h-8 lg:hidden" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">-->
              <!-- <img class="hidden w-auto h-8 lg:block" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow"> -->
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a
                  href="#"
                  class="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md"
                  aria-current="page"
                  >General Order</a
                >

                <a
                  href="#"
                  class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >Approval</a
                >

                <a
                  href="#"
                  class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >Driver</a
                >

                <a
                  href="#"
                  class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >Vehicle</a
                >
              </div>
            </div>
          </div>
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <button
              class="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span class="sr-only">View notifications</span>
              <!-- Heroicon name: outline/bell -->
              <svg
                class="w-6 h-6"
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            <!-- Profile dropdown -->
            <div class="relative ml-3">
              <div>
                <button
                  type="button"
                  class="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://bbts1.azureedge.net/images/p/full/2020/09/b27b816d-776f-4440-944e-e4a1411010c2.jpg"
                    alt=""
                  />
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
                class="absolute right-0 hidden w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  >Your Profile</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  >Settings</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  >Sign out</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="sm:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md"
            aria-current="page"
            >Dashboard</a
          >

          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >Team</a
          >

          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >Projects</a
          >

          <a
            href="#"
            class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >Calendar</a
          >
        </div>
      </div>
    </nav>

    <nav class="flex pb-4" aria-label="Breadcrumb">
      <ol class="flex px-6 space-x-4 bg-white rounded-md shadow">
        <li class="flex">
          <div class="flex items-center">
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <!-- Heroicon name: solid/home -->
              <svg
                class="flex-shrink-0 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                />
              </svg>
              <span class="sr-only">Home</span>
            </a>
          </div>
        </li>

        <li class="flex">
          <div class="flex items-center">
            <svg
              class="flex-shrink-0 w-6 h-full text-gray-200"
              viewBox="0 0 24 44"
              preserveAspectRatio="none"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
            </svg>
            <a
              href="#"
              class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              >Projects</a
            >
          </div>
        </li>

        <li class="flex">
          <div class="flex items-center">
            <svg
              class="flex-shrink-0 w-6 h-full text-gray-200"
              viewBox="0 0 24 44"
              preserveAspectRatio="none"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
            </svg>
            <a
              href="#"
              class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              aria-current="page"
              >Project Nero</a
            >
          </div>
        </li>
      </ol>
    </nav>

    <aside class="fixed left-0 top-70">
      <div class="flex-col p-3">
        <div class="pb-4">
          <img
            class="inline-block w-10 h-10 rounded-full pb"
            src="https://bbts1.azureedge.net/images/p/full/2020/09/b27b816d-776f-4440-944e-e4a1411010c2.jpg"
            alt=""
          />
          <p>Home</p>
        </div>
        <div class="pb-4">
          <img
            class="inline-block w-10 h-10 rounded-full pb"
            src="https://bbts1.azureedge.net/images/p/full/2020/09/b27b816d-776f-4440-944e-e4a1411010c2.jpg"
            alt=""
          />
          <p>Queues</p>
        </div>
        <div class="pb-4">
          <img
            class="inline-block w-10 h-10 rounded-full pb"
            src="https://bbts1.azureedge.net/images/p/full/2020/09/b27b816d-776f-4440-944e-e4a1411010c2.jpg"
            alt=""
          />
        </div>
        <div class="pb-4">
          <img
            class="inline-block w-10 h-10 rounded-full pb"
            src="https://bbts1.azureedge.net/images/p/full/2020/09/b27b816d-776f-4440-944e-e4a1411010c2.jpg"
            alt=""
          />
        </div>
      </div>
    </aside>

    <!--Content Start-->

    <!--General Order-->
    <main class="pb-10 mx-auto lg:py-12 lg:pl-24 lg:pr-4">
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <!-- Payment details -->
        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-12">
          <section aria-labelledby="payment_details_heading">
            <form action="#" method="POST">
              <div class="shadow-lg sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-12 bg-white sm:p-6 lg:p-10">
                  <div>
                    <h2
                      id="payment_details_heading"
                      class="text-xl font-bold leading-6 text-gray-900"
                    >
                      General Order
                    </h2>
                    <p class="mt-1 text-sm text-gray-500">
                      Update your billing information. Please note that updating
                      your location could affect your tax rates.
                    </p>
                  </div>

                  <div
                    class="grid grid-cols-1 gap-2 mt-6 md:grid md:grid-cols-4 md:gap-4 lg:grid lg:grid-cols-7 lg:gap-6"
                  >
                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">
                        Log Number
                      </p>
                      <p class="text-sm text-gray-500">50119171</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">Client</p>
                      <p class="text-sm text-gray-500">9990</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2 sm:col-span-1">
                      <label
                        for="last_name"
                        class="block text-sm font-medium text-gray-700"
                        >Unit</label
                      >
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autocomplete="cc-family-name"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">
                        Purchase Order Date
                      </p>
                      <p class="text-sm text-gray-500">03/11/2021</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">
                        Purchase Number
                      </p>
                      <p class="text-sm text-gray-500">50119171-001</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">Order ID</p>
                      <p class="text-sm text-gray-500">3003428</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">
                        Ordered By & Date
                      </p>
                      <p class="text-sm text-gray-500">
                        Mr. Smith - 03/11/2021
                      </p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="email_address"
                        class="block text-sm font-medium text-gray-700"
                        >Vehicle Breakdown</label
                      >
                      <input
                        type="text"
                        name="email_address"
                        id="email_address"
                        autocomplete="email"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="email_address"
                        class="block text-sm font-medium text-gray-700"
                        >Client Asset ID</label
                      >
                      <input
                        type="text"
                        name="email_address"
                        id="email_address"
                        autocomplete="email"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                      />
                    </div>
                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="email_address"
                        class="block text-sm font-medium text-gray-700"
                        >Client Purchase Order Number</label
                      >
                      <input
                        type="text"
                        name="email_address"
                        id="email_address"
                        autocomplete="email"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div class="bg-blue-100">
                    <h2
                      id="payment_details_heading"
                      class="p-2 mt-10 font-medium leading-6 text-gray-900"
                    >
                      Client Information
                    </h2>
                  </div>

                  <div
                    class="grid grid-cols-1 gap-2 mt-6 md:grid md:grid-cols-4 md:gap-4 lg:grid lg:grid-cols-7 lg:gap-6"
                  >
                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">
                        Order Type
                      </p>
                      <p class="text-sm text-gray-500">Stock</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="country"
                        class="block text-sm font-medium text-gray-700 truncate"
                        >Vehicle Located</label
                      >
                      <select
                        id="country"
                        name="country"
                        autocomplete="country"
                        class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                      >
                        <option>Client</option>
                      </select>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="expiration_date"
                        class="block text-sm font-medium text-gray-700"
                        >Expration date</label
                      >
                      <input
                        type="text"
                        name="expiration_date"
                        id="expiration_date"
                        autocomplete="cc-exp"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                        placeholder="MM / YY"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="security_code"
                        class="flex items-center text-sm font-medium text-gray-700 truncate"
                      >
                        <span>Security code</span>
                        <!-- Heroicon name: solid/question-mark-circle -->
                        <svg
                          class="flex-shrink-0 w-5 h-5 ml-1 text-gray-300"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </label>
                      <input
                        type="text"
                        name="security_code"
                        id="security_code"
                        autocomplete="cc-csc"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="country"
                        class="block text-sm font-medium text-gray-700 truncate"
                        >Country / Region</label
                      >
                      <select
                        id="country"
                        name="country"
                        autocomplete="country"
                        class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="postal_code"
                        class="block text-sm font-medium text-gray-700"
                        >ZIP / Postal</label
                      >
                      <input
                        type="text"
                        name="postal_code"
                        id="postal_code"
                        autocomplete="postal-code"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div class="bg-blue-100">
                    <h2
                      id="payment_details_heading"
                      class="p-2 mt-10 font-medium leading-6 text-gray-900"
                    >
                      Dealer Contact Information
                    </h2>
                  </div>

                  <div
                    class="grid grid-cols-1 gap-2 mt-6 md:grid md:grid-cols-4 md:gap-4 lg:grid lg:grid-cols-7 lg:gap-6"
                  >
                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="expiration_date"
                        class="block text-sm font-medium text-gray-700"
                        >Dealership Name</label
                      >
                      <input
                        type="text"
                        name="expiration_date"
                        id="expiration_date"
                        autocomplete="cc-exp"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="expiration_date"
                        class="block text-sm font-medium text-gray-700"
                        >First Name</label
                      >
                      <input
                        type="text"
                        name="expiration_date"
                        id="expiration_date"
                        autocomplete="cc-exp"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="expiration_date"
                        class="block text-sm font-medium text-gray-700"
                        >Last Name</label
                      >
                      <input
                        type="text"
                        name="expiration_date"
                        id="expiration_date"
                        autocomplete="cc-exp"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="expiration_date"
                        class="block text-sm font-medium text-gray-700"
                        >Phone Number</label
                      >
                      <input
                        type="text"
                        name="expiration_date"
                        id="expiration_date"
                        autocomplete="cc-exp"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="expiration_date"
                        class="block text-sm font-medium text-gray-700"
                        >Ext</label
                      >
                      <input
                        type="text"
                        name="expiration_date"
                        id="expiration_date"
                        autocomplete="cc-exp"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="expiration_date"
                        class="block text-sm font-medium text-gray-700"
                        >Email</label
                      >
                      <input
                        type="text"
                        name="expiration_date"
                        id="expiration_date"
                        autocomplete="cc-exp"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>

    <!--Approval-->
    <main class="pb-10 mx-auto lg:py-12 lg:pl-24 lg:pr-4">
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <!-- Payment details -->
        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-12">
          <section aria-labelledby="payment_details_heading">
            <form action="#" method="POST">
              <div class="shadow-lg sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-6 bg-white sm:p-6">
                  <div>
                    <h2
                      id="payment_details_heading"
                      class="text-lg font-bold leading-6 text-gray-900"
                    >
                      Approval
                    </h2>
                    <p class="mt-1 text-sm text-gray-500">
                      Update your billing information. Please note that updating
                      your location could affect your tax rates.
                    </p>
                  </div>

                  <div
                    class="grid grid-cols-1 gap-2 mt-6 md:grid md:grid-cols-4 md:gap-4 lg:grid lg:grid-cols-7 lg:gap-6"
                  >
                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="first_name"
                        class="block text-sm font-medium text-gray-700"
                        >Year</label
                      >
                      <p>asdasd</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2 sm:col-span-1">
                      <div>
                        <p class="block text-sm font-medium text-gray-700">
                          Dealer Installed Options
                        </p>
                        <button
                          type="button"
                          class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          aria-pressed="false"
                        >
                          <span class="sr-only">Use setting</span>
                          <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                          <span
                            class="relative inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow pointer-events-none ring-0"
                          >
                            <!-- Enabled: "opacity-0 ease-out duration-100", Not Enabled: "opacity-100 ease-in duration-200" -->
                            <span
                              class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-200 ease-in opacity-100"
                              aria-hidden="true"
                            >
                              <svg
                                class="w-3 h-3 text-gray-400 bg-white"
                                fill="none"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                            <!-- Enabled: "opacity-100 ease-in duration-200", Not Enabled: "opacity-0 ease-out duration-100" -->
                            <span
                              class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-100 ease-out opacity-0"
                              aria-hidden="true"
                            >
                              <svg
                                class="w-3 h-3 text-indigo-600 bg-white"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                                />
                              </svg>
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <div>
                        <p class="block text-sm font-medium text-gray-700">
                          Dealer Installed Options
                        </p>
                        <button
                          type="button"
                          class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          aria-pressed="false"
                        >
                          <span class="sr-only">Use setting</span>
                          <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                          <span
                            class="relative inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow pointer-events-none ring-0"
                          >
                            <!-- Enabled: "opacity-0 ease-out duration-100", Not Enabled: "opacity-100 ease-in duration-200" -->
                            <span
                              class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-200 ease-in opacity-100"
                              aria-hidden="true"
                            >
                              <svg
                                class="w-3 h-3 text-gray-400 bg-white"
                                fill="none"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                            <!-- Enabled: "opacity-100 ease-in duration-200", Not Enabled: "opacity-0 ease-out duration-100" -->
                            <span
                              class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-100 ease-out opacity-0"
                              aria-hidden="true"
                            >
                              <svg
                                class="w-3 h-3 text-indigo-600 bg-white"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                                />
                              </svg>
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <div>
                        <p class="block text-sm font-medium text-gray-700">
                          Dealer Installed Options
                        </p>
                        <button
                          type="button"
                          class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          aria-pressed="false"
                        >
                          <span class="sr-only">Use setting</span>
                          <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                          <span
                            class="relative inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow pointer-events-none ring-0"
                          >
                            <!-- Enabled: "opacity-0 ease-out duration-100", Not Enabled: "opacity-100 ease-in duration-200" -->
                            <span
                              class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-200 ease-in opacity-100"
                              aria-hidden="true"
                            >
                              <svg
                                class="w-3 h-3 text-gray-400 bg-white"
                                fill="none"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                            <!-- Enabled: "opacity-100 ease-in duration-200", Not Enabled: "opacity-0 ease-out duration-100" -->
                            <span
                              class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-100 ease-out opacity-0"
                              aria-hidden="true"
                            >
                              <svg
                                class="w-3 h-3 text-indigo-600 bg-white"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                                />
                              </svg>
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <div>
                        <p class="block text-sm font-medium text-gray-700">
                          Dealer Installed Options
                        </p>
                        <button
                          type="button"
                          class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          aria-pressed="false"
                        >
                          <span class="sr-only">Use setting</span>
                          <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                          <span
                            class="relative inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow pointer-events-none ring-0"
                          >
                            <!-- Enabled: "opacity-0 ease-out duration-100", Not Enabled: "opacity-100 ease-in duration-200" -->
                            <span
                              class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-200 ease-in opacity-100"
                              aria-hidden="true"
                            >
                              <svg
                                class="w-3 h-3 text-gray-400 bg-white"
                                fill="none"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                            <!-- Enabled: "opacity-100 ease-in duration-200", Not Enabled: "opacity-0 ease-out duration-100" -->
                            <span
                              class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-100 ease-out opacity-0"
                              aria-hidden="true"
                            >
                              <svg
                                class="w-3 h-3 text-indigo-600 bg-white"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                                />
                              </svg>
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <div>
                        <p class="block text-sm font-medium text-gray-700">
                          Dealer Installed Options
                        </p>
                        <button
                          type="button"
                          class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          aria-pressed="false"
                        >
                          <span class="sr-only">Use setting</span>
                          <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                          <span
                            class="relative inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow pointer-events-none ring-0"
                          >
                            <!-- Enabled: "opacity-0 ease-out duration-100", Not Enabled: "opacity-100 ease-in duration-200" -->
                            <span
                              class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-200 ease-in opacity-100"
                              aria-hidden="true"
                            >
                              <svg
                                class="w-3 h-3 text-gray-400 bg-white"
                                fill="none"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                            <!-- Enabled: "opacity-100 ease-in duration-200", Not Enabled: "opacity-0 ease-out duration-100" -->
                            <span
                              class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-100 ease-out opacity-0"
                              aria-hidden="true"
                            >
                              <svg
                                class="w-3 h-3 text-indigo-600 bg-white"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                                />
                              </svg>
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <div>
                        <p class="block text-sm font-medium text-gray-700">
                          Dealer Installed Options
                        </p>
                        <button
                          type="button"
                          class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          aria-pressed="false"
                        >
                          <span class="sr-only">Use setting</span>
                          <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                          <span
                            class="relative inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow pointer-events-none ring-0"
                          >
                            <!-- Enabled: "opacity-0 ease-out duration-100", Not Enabled: "opacity-100 ease-in duration-200" -->
                            <span
                              class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-200 ease-in opacity-100"
                              aria-hidden="true"
                            >
                              <svg
                                class="w-3 h-3 text-gray-400 bg-white"
                                fill="none"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                            <!-- Enabled: "opacity-100 ease-in duration-200", Not Enabled: "opacity-0 ease-out duration-100" -->
                            <span
                              class="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-100 ease-out opacity-0"
                              aria-hidden="true"
                            >
                              <svg
                                class="w-3 h-3 text-indigo-600 bg-white"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                                />
                              </svg>
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-element-dark-blue hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>

    <!--Driver-->
    <main class="pb-10 mx-auto lg:py-12 lg:pl-24 lg:pr-4">
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <!-- Payment details -->
        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-12">
          <section aria-labelledby="payment_details_heading">
            <form action="#" method="POST">
              <div class="shadow-lg sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-6 bg-white sm:p-6">
                  <div class="pb-4 border-b">
                    <h2
                      id="payment_details_heading"
                      class="text-xl font-bold leading-6 text-gray-900"
                    >
                      Driver
                    </h2>
                    <p class="mt-1 text-sm text-gray-500">
                      Update your billing information. Please note that updating
                      your location could affect your tax rates.
                    </p>
                  </div>

                  <div
                    class="grid grid-cols-1 gap-2 mt-6 md:grid md:grid-cols-4 md:gap-4 lg:grid lg:grid-cols-8 lg:gap-6"
                  >
                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">
                        First Name
                      </p>
                      <p class="text-sm text-gray-500">Tom</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">
                        Middle Name
                      </p>
                      <p class="text-sm text-gray-500">Rick</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">Last Name</p>
                      <p class="text-sm text-gray-500">Rick</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="last_name"
                        class="block text-sm font-medium text-gray-700"
                        >Employee ID</label
                      >
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autocomplete="cc-family-name"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">
                        Driver Breakdown
                      </p>
                      <p class="text-sm text-gray-500">9999-DCTEST</p>
                    </div>
                  </div>

                  <div
                    class="grid grid-cols-1 gap-2 mt-6 md:grid md:grid-cols-4 md:gap-4 lg:grid lg:grid-cols-8 lg:gap-6"
                  >
                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">
                        Address Line 1
                      </p>
                      <p class="text-sm text-gray-500">
                        847 W Monroe St APT 24
                      </p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">
                        Address Line 2
                      </p>
                      <p class="text-sm text-gray-500"></p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">City</p>
                      <p class="text-sm text-gray-500">Chicago</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">State</p>
                      <p class="text-sm text-gray-500">IL</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">County</p>
                      <p class="text-sm text-gray-500">IL</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">County</p>
                      <p class="text-sm text-gray-500">Cook</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">Zip Code</p>
                      <p class="text-sm text-gray-500">60607-2635</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">Email</p>
                      <p class="text-sm text-gray-500"></p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">Phone</p>
                      <p class="text-sm text-gray-500"></p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">
                        Vehicle Eligibility
                      </p>
                      <p class="text-sm text-gray-500">
                        Authorized to drive company vehicle
                      </p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">Role</p>
                      <p class="text-sm text-gray-500">Driver</p>
                    </div>
                  </div>

                  <div class="bg-blue-100">
                    <h2
                      id="payment_details_heading"
                      class="p-2 mt-10 font-medium leading-6 text-gray-900"
                    >
                      Garaging Address
                    </h2>
                  </div>

                  <div
                    class="grid grid-cols-1 gap-2 mt-6 md:grid md:grid-cols-4 md:gap-4 lg:grid lg:grid-cols-8 lg:gap-6"
                  >
                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">
                        Address Line 1
                      </p>
                      <p class="text-sm text-gray-500">
                        847 W Monroe St APT 24
                      </p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">
                        Address Line 2
                      </p>
                      <p class="text-sm text-gray-500"></p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">City</p>
                      <p class="text-sm text-gray-500">Chicago</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">State</p>
                      <p class="text-sm text-gray-500">IL</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">County</p>
                      <p class="text-sm text-gray-500">IL</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">County</p>
                      <p class="text-sm text-gray-500">Cook</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">Zip Code</p>
                      <p class="text-sm text-gray-500">60607-2635</p>
                    </div>
                  </div>

                  <div class="bg-blue-100">
                    <h2
                      id="payment_details_heading"
                      class="p-2 mt-10 font-medium leading-6 text-gray-900"
                    >
                      Delivery Address
                    </h2>
                  </div>

                  <div
                    class="grid grid-cols-1 gap-2 mt-6 md:grid md:grid-cols-4 md:gap-4 lg:grid lg:grid-cols-8 lg:gap-6"
                  >
                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">
                        Address Line 1
                      </p>
                      <p class="text-sm text-gray-500">
                        847 W Monroe St APT 24
                      </p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">
                        Address Line 2
                      </p>
                      <p class="text-sm text-gray-500"></p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">City</p>
                      <p class="text-sm text-gray-500">Chicago</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">State</p>
                      <p class="text-sm text-gray-500">IL</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">County</p>
                      <p class="text-sm text-gray-500">IL</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">County</p>
                      <p class="text-sm text-gray-500">Cook</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">Zip Code</p>
                      <p class="text-sm text-gray-500">60607-2635</p>
                    </div>
                  </div>
                </div>

                <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>

    <!--Vehicle-->
    <main class="pb-10 mx-auto lg:py-12 lg:pl-24 lg:pr-4">
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <!-- Payment details -->
        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-12">
          <section aria-labelledby="payment_details_heading">
            <form action="#" method="POST">
              <div class="shadow-lg sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-6 bg-white sm:p-6">
                  <div class="pb-4 border-b">
                    <h2
                      id="payment_details_heading"
                      class="text-xl font-bold leading-6 text-gray-900"
                    >
                      Vehicle
                    </h2>
                    <p class="mt-1 text-sm text-gray-500">
                      Update your billing information. Please note that updating
                      your location could affect your tax rates.
                    </p>
                  </div>

                  <div
                    class="grid grid-cols-1 gap-2 mt-6 md:grid md:grid-cols-4 md:gap-4 lg:grid lg:grid-cols-8 lg:gap-6"
                  >
                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">
                        Product Class
                      </p>
                      <p class="text-sm text-gray-500">Car</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">
                        Log Numeber
                      </p>
                      <p class="text-sm text-gray-500">5011911</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">Client</p>
                      <p class="text-sm text-gray-500">9990</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2 sm:col-span-1">
                      <p class="text-sm font-medium text-gray-800">Unit</p>
                      <p class="text-sm text-gray-500">General Motors</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">Make</p>
                      <p class="text-sm text-gray-500">Chevrolet</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">Model</p>
                      <p class="text-sm text-gray-500">Camaro</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">ACode</p>
                      <p class="text-sm text-gray-500">Camaro</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="last_name"
                        class="block text-sm font-medium text-gray-700"
                        >Model Code</label
                      >
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autocomplete="cc-family-name"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="country"
                        class="block text-sm font-medium text-gray-700"
                        >Trim</label
                      >
                      <select
                        id="country"
                        name="country"
                        autocomplete="country"
                        class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>

                  <div
                    class="grid grid-cols-1 gap-2 mt-6 md:grid md:grid-cols-4 md:gap-4 lg:grid lg:grid-cols-8 lg:gap-6"
                  >
                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">MFR DAN</p>
                      <p class="text-sm text-gray-500">Car</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">Year</p>
                      <p class="text-sm text-gray-500">2020</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2 sm:col-span-1">
                      <p class="text-sm font-medium text-gray-800">
                        Manufacturer
                      </p>
                      <p class="text-sm text-gray-500">General Motors</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">Make</p>
                      <p class="text-sm text-gray-500">Chevrolet</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">Model</p>
                      <p class="text-sm text-gray-500">Camaro</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="text-sm font-medium text-gray-800">ACode</p>
                      <p class="text-sm text-gray-500">Camaro</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="last_name"
                        class="block text-sm font-medium text-gray-700"
                        >Model Code</label
                      >
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autocomplete="cc-family-name"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="country"
                        class="block text-sm font-medium text-gray-700"
                        >Trim</label
                      >
                      <select
                        id="country"
                        name="country"
                        autocomplete="country"
                        class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- Table -->
                <div class="flex flex-col px-4 py-6 bg-white">
                  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div
                      class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
                    >
                      <div
                        class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"
                      >
                        <table class="min-w-full divide-y divide-gray-200">
                          <thead class="align-top bg-element-bright-blue">
                            <tr>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                              >
                                Actions
                              </th>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                              >
                                Equipment Category
                              </th>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                              >
                                Option Code
                              </th>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                              >
                                Option Code External
                              </th>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                              >
                                Option Description
                              </th>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                              >
                                Quantity
                              </th>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                              >
                                Type
                              </th>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                              >
                                PPO
                              </th>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                              >
                                DPO
                              </th>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                              >
                                Driver Price
                              </th>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                              >
                                Invoice
                              </th>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                              >
                                MSRP
                              </th>
                              <th
                                scope="col"
                                class="px-4 py-3 text-xs font-medium tracking-wider text-left text-white uppercase"
                              >
                                Transmit
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <!-- Odd row -->
                            <tr
                              class="bg-white hover:bg-green-100 focus:bg-blue-100"
                            >
                              <td
                                class="px-4 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                              >
                                ---
                              </td>

                              <td
                                class="px-4 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                              >
                                0002
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                2SS
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                2SS
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                Preferred Equipment Group 2SS
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                1
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                OTC
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                No
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                No
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                S
                              </td>
                            </tr>

                            <!-- Even row -->
                            <tr class="bg-gray-50 hover:bg-green-100">
                              <td
                                class="px-4 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                              >
                                ---
                              </td>

                              <td
                                class="px-4 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                              >
                                0002
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                2SS
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                2SS
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                Preferred Equipment Group 2SS
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                1
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                OTC
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                No
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                No
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                S
                              </td>
                            </tr>

                            <tr class="bg-white hover:bg-green-100">
                              <td
                                class="px-4 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                              >
                                ---
                              </td>

                              <td
                                class="px-4 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                              >
                                0002
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                2SS
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                2SS
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                Preferred Equipment Group 2SS
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                1
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                OTC
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                No
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                No
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                S
                              </td>
                            </tr>

                            <!-- Even row -->
                            <tr class="bg-gray-50 hover:bg-green-100">
                              <td
                                class="px-4 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                              >
                                ---
                              </td>

                              <td
                                class="px-4 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                              >
                                0002
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                2SS
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                2SS
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                Preferred Equipment Group 2SS
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                1
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                OTC
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                No
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                No
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap"
                              >
                                S
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>

    <!--General Order-->
    <main class="pb-10 mx-auto lg:py-12 lg:pl-24 lg:pr-4">
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <!-- Payment details -->
        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-12">
          <section aria-labelledby="payment_details_heading">
            <form action="#" method="POST">
              <div class="shadow-lg sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-12 bg-white sm:p-6 lg:p-10">
                  <div>
                    <h2
                      id="payment_details_heading"
                      class="text-xl font-bold leading-6 text-gray-900"
                    >
                      Dealer Installed Options
                    </h2>
                    <p class="mt-1 text-sm text-gray-500">
                      Update your billing information. Please note that updating
                      your location could affect your tax rates.
                    </p>
                  </div>
                </div>

                <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>

    <!--Upfit-->
    <main class="pb-10 mx-auto lg:py-12 lg:pl-24 lg:pr-4">
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <!-- Payment details -->
        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-12">
          <section aria-labelledby="payment_details_heading">
            <form action="#" method="POST">
              <div class="shadow-lg sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-12 bg-white sm:p-6 lg:p-10">
                  <div>
                    <h2
                      id="payment_details_heading"
                      class="text-xl font-bold leading-6 text-gray-900"
                    >
                      Upfit
                    </h2>
                    <p class="mt-1 text-sm text-gray-500">
                      Update your billing information. Please note that updating
                      your location could affect your tax rates.
                    </p>
                  </div>
                </div>

                <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>

    <!--Fees & Charges-->
    <main class="pb-10 mx-auto lg:py-12 lg:pl-24 lg:pr-4">
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <!-- Payment details -->
        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-12">
          <section aria-labelledby="payment_details_heading">
            <form action="#" method="POST">
              <div class="shadow-lg sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-12 bg-white sm:p-6 lg:p-10">
                  <div>
                    <h2
                      id="payment_details_heading"
                      class="text-xl font-bold leading-6 text-gray-900"
                    >
                      Fees & Charges
                    </h2>
                    <p class="mt-1 text-sm text-gray-500">
                      Update your billing information. Please note that updating
                      your location could affect your tax rates.
                    </p>
                  </div>
                </div>

                <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
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
