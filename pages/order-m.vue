<template>
  <div class="mx-auto text-xs bg-gray-50 sm:text-xs lg:text-sm">
    <nav class="sticky top-0 z-20 mx-auto bg-white pl-28">
      <div class="h-20 p-2 pl-4 pr-4 shadow-md">
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
            class="flex items-center justify-center flex-1 ml-3 sm:items-stretch sm:justify-start"
          >
            <div
              class="flex justify-center flex-1 px-2 lg:ml-6 lg:justify-start"
            >
              <div class="w-full max-w-lg lg:max-w-xs">
                <label for="search" class="sr-only">Search</label>
                <div class="relative">
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                  >
                    <!-- Heroicon name: solid/search -->
                    <svg
                      class="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    id="search"
                    name="search"
                    class="block w-full py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:bg-white focus:border-gray-200 focus:ring-white focus:text-gray-900 sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div class="hidden sm:block sm:ml-6">
              <!--
              <div class="flex space-x-4">
                Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"
                <a
                  href="#"
                  class="px-3 py-2 font-medium text-white bg-gray-900 rounded-md"
                  aria-current="page"
                  >General Order</a
                >

                <a
                  href="#"
                  class="px-3 py-2 font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >Approval</a
                >

                <a
                  href="#"
                  class="px-3 py-2 font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >Driver</a
                >

                <a
                  href="#"
                  class="px-3 py-2 font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >Vehicle</a
                >
              </div>
              -->
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
            <div class="relative ml-2">
              <div>
                <div class="mr-10">
                  <button
                    type="button"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-800 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign Out
                  </button>
                </div>
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
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  >Your Profile</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  >Settings</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  >Sign out</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="hidden" id="mobile-menu">
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

    <div
      class="fixed min-w-full p-4 shadow-md bg-blue-50 pl-14 top-22 left-28 blur bg-opacity-70"
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
            class="px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
            :to="{ path: '/order-m', hash: 'generalPOS' }"
          >
            <a
              href="#"
              class="px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
            >
              General Order
            </a>
          </nuxt-link>
          <nuxt-link
            class="px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
            :to="{ path: '/order-m', hash: 'driverPOS' }"
          >
            <a
              href="#"
              class="px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
            >
              Driver
            </a>
          </nuxt-link>
          <nuxt-link
            class="px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
            :to="{ path: '/order-m', hash: 'vehiclePOS' }"
          >
            <a
              href="#"
              class="px-3 py-2 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-md"
              aria-current="page"
            >
              Vehicle
            </a>
          </nuxt-link>
          <nuxt-link
            class="px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
            :to="{ path: '/order-m', hash: 'dioPOS' }"
          >
            <a
              href="#"
              class="px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
            >
              DIO
            </a>
          </nuxt-link>
          <nuxt-link
            class="px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
            :to="{ path: '/order-m', hash: 'upfitPOS' }"
          >
            <a
              href="#"
              class="px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
            >
              Upfit
            </a>
          </nuxt-link>
          <nuxt-link
            class="px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
            :to="{ path: '/order-m', hash: 'feesPOS' }"
          >
            <a
              href="#"
              class="px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
            >
              Fees &amp; Charges
            </a>
          </nuxt-link>
          <nuxt-link
            class="px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
            :to="{ path: '/order-m', hash: 'billingrPOS' }"
          >
            <a
              href="#"
              class="px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
            >
              Billing
            </a>
          </nuxt-link>
          <a
            href="#"
            class="px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
          >
            Title &amp; Registration
          </a>
          <a
            href="#"
            class="px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
          >
            Insurance
          </a>
          <a
            href="#"
            class="px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
          >
            Dealer
          </a>
          <a
            href="#"
            class="px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-700"
          >
            Custom Fields
          </a>
        </nav>
      </div>
    </div>

    <aside
      class="fixed top-0 left-0 z-50 invisible min-h-full shadow-2xl z-2 w-28 lg:visible bg-element-bright-blue"
    >
      <div class="flex-col text-center text-white">
        <div class="h-20 p-6 bg-element-green hover:bg-blue-500">
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 80"
            class="inline-block w-10"
          >
            <style>
              .st0 {
                fill: none;
              }
              .st1 {
                fill: #3ebeb0;
              }
              .st2 {
                fill: #35beef;
              }
              .st3 {
                fill: #0086aa;
              }
              .st4 {
                fill: #f3bd19;
              }
              .st5 {
                fill: #353535;
              }
              .st6 {
                fill: #37a595;
              }
            </style>
            <path class="st0" d="M0 0h80v80H0z" />
            <path
              class="st1"
              d="M54.1 40L40 54.1l11.4 11.4c3.3 3.3 8.8 3.3 12.2 0l1.9-1.9c3.3-3.3 3.3-8.8 0-12.2L54.1 40z"
            />
            <path
              class="st2"
              d="M28.6 14.5c-3.3-3.3-8.8-3.3-12.2 0l-1.9 1.9c-3.3 3.3-3.3 8.8 0 12.2L40 54.1 54.1 40 28.6 14.5z"
            />
            <path
              class="st3"
              d="M14.5 51.4c-3.3 3.3-3.3 8.8 0 12.2l1.9 1.9c3.3 3.3 8.8 3.3 12.2 0L40 54.1 25.9 40 14.5 51.4z"
            />
            <path
              class="st4"
              d="M65.5 28.6c3.3-3.3 3.3-8.8 0-12.2l-1.9-1.9c-3.3-3.3-8.8-3.3-12.2 0L40 25.9 54.1 40l11.4-11.4z"
            />
            <path
              class="st5"
              d="M40 32.1c-7 0-14.1 7.9-14.1 7.9L40 54.1 54.1 40S47 32.1 40 32.1z"
            />
            <path
              transform="rotate(-45.098 48.776 48.842)"
              class="st6"
              d="M38.8 46.4h19.9v4.9H38.8z"
            />
          </svg>
        </div>
        <div class="p-6 hover:bg-blue-500">
          <nuxt-link to="/order-home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="inline-block w-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </nuxt-link>
          <!-- <p class="text-xs text-gray-800">Home</p> -->
        </div>

        <div class="p-6 hover:bg-blue-500">
          <nuxt-link to="/order-m">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="inline-block w-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </nuxt-link>
          <!-- <p class="text-xs text-gray-800">Queues</p> -->
        </div>
        <div class="p-6 hover:bg-blue-500">
          <a href="#"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="inline-block w-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </svg>

            <!-- <p class="text-xs text-gray-800">Edit Order</p> -->
          </a>
        </div>

        <div class="p-6 hover:bg-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="inline-block w-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
          <!-- <p class="text-xs text-gray-800">Order Preferences</p> -->
        </div>

        <div class="p-6 hover:bg-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="inline-block w-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
            />
          </svg>
          <!-- <p class="text-xs text-gray-800">Vehicle Config</p> -->
        </div>

        <div class="p-6 hover:bg-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="inline-block w-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
            />
          </svg>

          <!-- <p class="text-xs text-gray-800">Codes Tables</p> -->
        </div>

        <div class="p-6 hover:bg-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="inline-block w-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <!-- <p class="text-xs text-gray-800">Batch Processing</p> -->
        </div>
        <div class="p-6 hover:bg-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="inline-block w-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
            />
          </svg>
          <!-- <p class="text-xs text-gray-800">BMTs</p> -->
        </div>

        <div class="p-6 hover:bg-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="inline-block w-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>

          <!-- <p class="text-xs text-gray-800">Change History</p> -->
        </div>

        <div class="p-6 hover:bg-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="inline-block w-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
            />
          </svg>

          <!-- <p class="text-xs text-gray-800">Reference Library</p> -->
        </div>
      </div>
    </aside>

    <!--Floating Info Div-->

    <!--General Order-->
    <main
      id="generalPOS"
      class="mx-auto pb-14 lg:py-8 lg:pl-44 lg:pr-12 lg:pt-28"
    >
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <!-- Payment details -->
        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-12">
          <section aria-labelledby="payment_details_heading">
            <form action="#" method="POST">
              <div class="sm:overflow-hidden">
                <div class="px-4 py-12 bg-white sm:p-6 lg:p-10">
                  <div>
                    <h2
                      id="payment_details_heading"
                      class="text-2xl font-bold leading-6 text-element-bright-blue"
                    >
                      General Order
                    </h2>
                    <p class="mt-1 text-gray-500">
                      Update your billing information. Please note that updating
                      your location could affect your tax rates.
                    </p>
                  </div>

                  <div
                    class="grid grid-cols-1 gap-2 mt-6 md:grid md:grid-cols-4 md:gap-4 lg:grid lg:grid-cols-7 lg:gap-6"
                  >
                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Log Number</p>
                      <p class="text-gray-500">50119171</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Client</p>
                      <p class="text-gray-500">9990</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2 sm:col-span-1">
                      <label
                        for="last_name"
                        class="block font-medium text-gray-700"
                        >Unit</label
                      >
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autocomplete="cc-family-name"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">
                        Purchase Order Date
                      </p>
                      <p class="text-gray-500">03/11/2021</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Purchase Number</p>
                      <p class="text-gray-500">50119171-001</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Order ID</p>
                      <p class="text-gray-500">3003428</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Ordered By & Date</p>
                      <p class="text-gray-500">Mr. Smith - 03/11/2021</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="email_address"
                        class="block font-medium text-gray-700"
                        >Vehicle Breakdown</label
                      >
                      <input
                        type="text"
                        name="email_address"
                        id="email_address"
                        autocomplete="email"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="email_address"
                        class="block font-medium text-gray-700"
                        >Client Asset ID</label
                      >
                      <input
                        type="text"
                        name="email_address"
                        id="email_address"
                        autocomplete="email"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>
                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="email_address"
                        class="block font-medium text-gray-700"
                        >Client Purchase Order Number</label
                      >
                      <input
                        type="text"
                        name="email_address"
                        id="email_address"
                        autocomplete="email"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
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
                      <p class="font-medium text-gray-800">Order Type</p>
                      <p class="text-gray-500">Stock</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="country"
                        class="block font-medium text-gray-700 truncate"
                        >Vehicle Located</label
                      >
                      <select
                        id="country"
                        name="country"
                        autocomplete="country"
                        class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      >
                        <option>Client</option>
                      </select>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="expiration_date"
                        class="block font-medium text-gray-700"
                        >Expration date</label
                      >
                      <input
                        type="text"
                        name="expiration_date"
                        id="expiration_date"
                        autocomplete="cc-exp"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                        placeholder="MM / YY"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="security_code"
                        class="flex items-center font-medium text-gray-700 truncate"
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
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="country"
                        class="block font-medium text-gray-700 truncate"
                        >Country / Region</label
                      >
                      <select
                        id="country"
                        name="country"
                        autocomplete="country"
                        class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="postal_code"
                        class="block font-medium text-gray-700"
                        >ZIP / Postal</label
                      >
                      <input
                        type="text"
                        name="postal_code"
                        id="postal_code"
                        autocomplete="postal-code"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
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
                        class="block font-medium text-gray-700"
                        >Dealership Name</label
                      >
                      <input
                        type="text"
                        name="expiration_date"
                        id="expiration_date"
                        autocomplete="cc-exp"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="expiration_date"
                        class="block font-medium text-gray-700"
                        >First Name</label
                      >
                      <input
                        type="text"
                        name="expiration_date"
                        id="expiration_date"
                        autocomplete="cc-exp"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="expiration_date"
                        class="block font-medium text-gray-700"
                        >Last Name</label
                      >
                      <input
                        type="text"
                        name="expiration_date"
                        id="expiration_date"
                        autocomplete="cc-exp"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="expiration_date"
                        class="block font-medium text-gray-700"
                        >Phone Number</label
                      >
                      <input
                        type="text"
                        name="expiration_date"
                        id="expiration_date"
                        autocomplete="cc-exp"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="expiration_date"
                        class="block font-medium text-gray-700"
                        >Ext</label
                      >
                      <input
                        type="text"
                        name="expiration_date"
                        id="expiration_date"
                        autocomplete="cc-exp"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="expiration_date"
                        class="block font-medium text-gray-700"
                        >Email</label
                      >
                      <input
                        type="text"
                        name="expiration_date"
                        id="expiration_date"
                        autocomplete="cc-exp"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>
                  </div>
                </div>

                <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center px-4 py-2 font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
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
    <main
      id="approvalPOS"
      class="mx-auto pb-14 lg:py-8 lg:pl-44 lg:pr-12 lg:pt-28"
    >
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
                      class="text-2xl font-bold leading-6 text-gray-700"
                    >
                      Approval
                    </h2>
                    <p class="mt-1 text-gray-500">
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
                        class="block font-medium text-gray-700"
                        >Year</label
                      >
                      <p>asdasd</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2 sm:col-span-1">
                      <div>
                        <p class="block font-medium text-gray-700">
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
                        <p class="block font-medium text-gray-700">
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
                        <p class="block font-medium text-gray-700">
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
                        <p class="block font-medium text-gray-700">
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
                        <p class="block font-medium text-gray-700">
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
                        <p class="block font-medium text-gray-700">
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
                    class="inline-flex justify-center px-4 py-2 font-medium text-white border border-transparent rounded-md shadow-sm bg-element-dark-blue hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
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
    <main
      id="driverPOS"
      class="mx-auto pb-14 lg:py-8 lg:pl-44 lg:pr-12 lg:pt-28"
    >
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <!-- Payment details -->
        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-12">
          <section aria-labelledby="payment_details_heading">
            <form action="#" method="POST">
              <div class="shadow-lg sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-12 bg-white sm:p-6 lg:p-10">
                  <div class="pb-4 border-b">
                    <h2
                      id="payment_details_heading"
                      class="text-2xl font-bold leading-6 text-gray-700"
                    >
                      Driver
                    </h2>
                    <p class="mt-1 text-gray-500">
                      Update your billing information. Please note that updating
                      your location could affect your tax rates.
                    </p>
                  </div>

                  <div
                    class="grid grid-cols-1 gap-2 mt-6 md:grid md:grid-cols-4 md:gap-4 lg:grid lg:grid-cols-8 lg:gap-6"
                  >
                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">First Name</p>
                      <p class="text-gray-500">Tom</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Middle Name</p>
                      <p class="text-gray-500">Rick</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Last Name</p>
                      <p class="text-gray-500">Rick</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="last_name"
                        class="block font-medium text-gray-700"
                        >Employee ID</label
                      >
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autocomplete="cc-family-name"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Driver Breakdown</p>
                      <p class="text-gray-500">9999-DCTEST</p>
                    </div>
                  </div>

                  <div
                    class="grid grid-cols-1 gap-2 mt-6 md:grid md:grid-cols-4 md:gap-4 lg:grid lg:grid-cols-8 lg:gap-6"
                  >
                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Address Line 1</p>
                      <p class="text-gray-500">847 W Monroe St APT 24</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Address Line 2</p>
                      <p class="text-gray-500"></p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">City</p>
                      <p class="text-gray-500">Chicago</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">State</p>
                      <p class="text-gray-500">IL</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">County</p>
                      <p class="text-gray-500">IL</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">County</p>
                      <p class="text-gray-500">Cook</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Zip Code</p>
                      <p class="text-gray-500">60607-2635</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Email</p>
                      <p class="text-gray-500"></p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Phone</p>
                      <p class="text-gray-500"></p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">
                        Vehicle Eligibility
                      </p>
                      <p class="text-gray-500">
                        Authorized to drive company vehicle
                      </p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Role</p>
                      <p class="text-gray-500">Driver</p>
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
                      <p class="font-medium text-gray-800">Address Line 1</p>
                      <p class="text-gray-500">847 W Monroe St APT 24</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Address Line 2</p>
                      <p class="text-gray-500"></p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">City</p>
                      <p class="text-gray-500">Chicago</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">State</p>
                      <p class="text-gray-500">IL</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">County</p>
                      <p class="text-gray-500">IL</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">County</p>
                      <p class="text-gray-500">Cook</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Zip Code</p>
                      <p class="text-gray-500">60607-2635</p>
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
                      <p class="font-medium text-gray-800">Address Line 1</p>
                      <p class="text-gray-500">847 W Monroe St APT 24</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Address Line 2</p>
                      <p class="text-gray-500"></p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">City</p>
                      <p class="text-gray-500">Chicago</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">State</p>
                      <p class="text-gray-500">IL</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">County</p>
                      <p class="text-gray-500">IL</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">County</p>
                      <p class="text-gray-500">Cook</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Zip Code</p>
                      <p class="text-gray-500">60607-2635</p>
                    </div>
                  </div>
                </div>

                <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center px-4 py-2 font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
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
    <main
      id="vehiclePOS"
      class="mx-auto pb-14 lg:py-8 lg:pl-44 lg:pr-12 lg:pt-28"
    >
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <!-- Payment details -->
        <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-12">
          <section aria-labelledby="payment_details_heading">
            <form action="#" method="POST">
              <div class="shadow-lg sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-12 bg-white sm:p-6 lg:p-10">
                  <div class="pb-4 border-b">
                    <h2
                      id="payment_details_heading"
                      class="text-2xl font-bold leading-6 text-gray-700"
                    >
                      Vehicle
                    </h2>
                    <p class="mt-1 text-gray-500">
                      Update your billing information. Please note that updating
                      your location could affect your tax rates.
                    </p>
                  </div>

                  <div
                    class="grid grid-cols-1 gap-2 mt-6 md:grid md:grid-cols-4 md:gap-4 lg:grid lg:grid-cols-8 lg:gap-6"
                  >
                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Product Class</p>
                      <p class="text-gray-500">Car</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Log Numeber</p>
                      <p class="text-gray-500">5011911</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Client</p>
                      <p class="text-gray-500">9990</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2 sm:col-span-1">
                      <p class="font-medium text-gray-800">Unit</p>
                      <p class="text-gray-500">General Motors</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Make</p>
                      <p class="text-gray-500">Chevrolet</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Model</p>
                      <p class="text-gray-500">Camaro</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">ACode</p>
                      <p class="text-gray-500">Camaro</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="last_name"
                        class="block font-medium text-gray-700"
                        >Model Code</label
                      >
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autocomplete="cc-family-name"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="country"
                        class="block font-medium text-gray-700"
                        >Trim</label
                      >
                      <select
                        id="country"
                        name="country"
                        autocomplete="country"
                        class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:"
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
                      <p class="font-medium text-gray-800">MFR DAN</p>
                      <p class="text-gray-500">Car</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Year</p>
                      <p class="text-gray-500">2020</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2 sm:col-span-1">
                      <p class="font-medium text-gray-800">Manufacturer</p>
                      <p class="text-gray-500">General Motors</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Make</p>
                      <p class="text-gray-500">Chevrolet</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">Model</p>
                      <p class="text-gray-500">Camaro</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <p class="font-medium text-gray-800">ACode</p>
                      <p class="text-gray-500">Camaro</p>
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="last_name"
                        class="block font-medium text-gray-700"
                        >Model Code</label
                      >
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autocomplete="cc-family-name"
                        class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:"
                      />
                    </div>

                    <div class="lg:col-span-1 md:col-span-2">
                      <label
                        for="country"
                        class="block font-medium text-gray-700"
                        >Trim</label
                      >
                      <select
                        id="country"
                        name="country"
                        autocomplete="country"
                        class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:"
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
                                class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap"
                              >
                                ---
                              </td>

                              <td
                                class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap"
                              >
                                0002
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                2SS
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                2SS
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                Preferred Equipment Group 2SS
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                1
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                OTC
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                No
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                No
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                S
                              </td>
                            </tr>

                            <!-- Even row -->
                            <tr class="bg-gray-50 hover:bg-green-100">
                              <td
                                class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap"
                              >
                                ---
                              </td>

                              <td
                                class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap"
                              >
                                0002
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                2SS
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                2SS
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                Preferred Equipment Group 2SS
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                1
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                OTC
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                No
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                No
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                S
                              </td>
                            </tr>

                            <tr class="bg-white hover:bg-green-100">
                              <td
                                class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap"
                              >
                                ---
                              </td>

                              <td
                                class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap"
                              >
                                0002
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                2SS
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                2SS
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                Preferred Equipment Group 2SS
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                1
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                OTC
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                No
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                No
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                S
                              </td>
                            </tr>

                            <!-- Even row -->
                            <tr class="bg-gray-50 hover:bg-green-100">
                              <td
                                class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap"
                              >
                                ---
                              </td>

                              <td
                                class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap"
                              >
                                0002
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                2SS
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                2SS
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                Preferred Equipment Group 2SS
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                1
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                OTC
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                No
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                No
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
                              >
                                $0.00
                              </td>
                              <td
                                class="px-4 py-4 text-gray-500 whitespace-nowrap"
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
                    class="inline-flex justify-center px-4 py-2 font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
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

    <!--DIO -->
    <main id="dioPOS" class="mx-auto pb-14 lg:py-8 lg:pl-44 lg:pr-12 lg:pt-28">
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
                      class="text-2xl font-bold leading-6 text-gray-700"
                    >
                      Dealer Installed Options
                    </h2>
                    <p class="mt-1 text-gray-500">
                      Update your billing information. Please note that updating
                      your location could affect your tax rates.
                    </p>
                  </div>
                </div>

                <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center px-4 py-2 font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
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
    <main
      id="upfitPOS"
      class="mx-auto pb-14 lg:py-8 lg:pl-44 lg:pr-12 lg:pt-28"
    >
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
                      class="text-2xl font-bold leading-6 text-gray-700"
                    >
                      Upfit
                    </h2>
                    <p class="mt-1 text-gray-500">
                      Update your billing information. Please note that updating
                      your location could affect your tax rates.
                    </p>
                  </div>
                </div>

                <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center px-4 py-2 font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
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
    <main id="feesPOS" class="mx-auto pb-14 lg:py-8 lg:pl-44 lg:pr-12 lg:pt-28">
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
                      class="text-2xl font-bold leading-6 text-gray-700"
                    >
                      Fees & Charges
                    </h2>
                    <p class="mt-1 text-gray-500">
                      Update your billing information. Please note that updating
                      your location could affect your tax rates.
                    </p>
                  </div>
                </div>

                <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center px-4 py-2 font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
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
