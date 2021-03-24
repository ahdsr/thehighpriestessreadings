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
    <div class="overflow-hidden bg-gray-50">
      <div class="relative pt-20 mx-auto p-44">
        <svg
          class="absolute top-0 transform -translate-x-1/2 left-full -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
          />
        </svg>

        <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div class="lg:col-span-1">
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
