<template>
  <div>
    <!-- Top Navigation Bar -->
    <nav class="font-mono bg-blue-900 shadow-md">
      <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="relative flex justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button -->
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
              <img
                class="block w-auto h-8 lg:hidden"
                src="~/assets/images/elementLogo.svg"
                alt="Workflow"
              />
              <img
                class="hidden w-auto h-24 lg:block"
                src="~/assets/images/elementLogo.svg"
                alt="Workflow"
              />
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
              <a
                href="#"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-white"
              >
                Dashboard
              </a>
              <a
                href="#"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
              >
                Ordering
              </a>
              <a
                href="#"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
              >
                Configure a Vehicle
              </a>
            </div>
          </div>
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <button
              class="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
            <div class="relative z-50 ml-3">
              <div>
                <button
                  type="button"
                  class="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  id="user-menu"
                  aria-expanded="false"
                  aria-haspopup="true"
                  @click="showProfile = !showProfile"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=MnLvkwmKZ1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>

              <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-200"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
              <div
                class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
                v-show="showProfile"
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
                <nuxt-link to="/signon"
                  ><a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    >Sign out</a
                  ></nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="sm:hidden" id="mobile-menu">
        <div class="pt-2 pb-4 space-y-1">
          <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
          <a
            href="#"
            class="block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 border-l-4 border-indigo-500 bg-indigo-50"
            >Dashboard</a
          >
          <a
            href="#"
            class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
            >Team</a
          >
          <a
            href="#"
            class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
            >Projects</a
          >
          <a
            href="#"
            class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
            >Calendar</a
          >
        </div>
      </div>
    </nav>

    <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h1 class="mt-6 text-lg font-bold text-gray-800">My Pending Actions</h1>
    </div>

    <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
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
      <div class="mt-6">
        <div class="sm:hidden">
          <label for="tabs" class="sr-only">Select a tab</label>
          <select
            id="tabs"
            name="tabs"
            class="block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option selected>My Account</option>
            <option>Company</option>
            <option>Team Members</option>
            <option>Billing</option>
          </select>
        </div>
        <div class="hidden sm:block">
          <nav
            class="relative z-0 flex divide-x divide-gray-200 rounded-lg shadow"
            aria-label="Tabs"
          >
            <a
              href="#"
              aria-current="page"
              class="relative flex-1 min-w-0 px-4 py-4 overflow-hidden text-sm font-medium text-center text-gray-900 bg-white rounded-l-lg group hover:bg-gray-50 focus:z-10"
            >
              <span>Fleet Specifications (23)</span>
              <span
                aria-hidden="true"
                class="bg-indigo-500 absolute inset-x-0 bottom-0 h-0.5"
              ></span>
            </a>

            <a
              href="#"
              aria-current="false"
              class="relative flex-1 min-w-0 px-4 py-4 overflow-hidden text-sm font-medium text-center text-gray-500 bg-white hover:text-gray-700 group hover:bg-gray-50 focus:z-10"
            >
              <span>Price & Configurations (23)</span>
              <span
                aria-hidden="true"
                class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
              ></span>
            </a>

            <a
              href="#"
              aria-current="false"
              class="relative flex-1 min-w-0 px-4 py-4 overflow-hidden text-sm font-medium text-center text-gray-500 bg-white hover:text-gray-700 group hover:bg-gray-50 focus:z-10"
            >
              <span>Orders (2233)</span>
              <span
                aria-hidden="true"
                class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
              ></span>
            </a>

            <a
              href="#"
              aria-current="false"
              class="relative flex-1 min-w-0 px-4 py-4 overflow-hidden text-sm font-medium text-center text-gray-500 bg-white rounded-r-lg hover:text-gray-700 group hover:bg-gray-50 focus:z-10"
            >
              <span>Upfit Quites (23)</span>
              <span
                aria-hidden="true"
                class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
              ></span>
            </a>
            <a
              href="#"
              aria-current="false"
              class="relative flex-1 min-w-0 px-4 py-4 overflow-hidden text-sm font-medium text-center text-gray-500 bg-white rounded-r-lg hover:text-gray-700 group hover:bg-gray-50 focus:z-10"
            >
              <span>On Hold Specs (2)</span>
              <span
                aria-hidden="true"
                class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
              ></span>
            </a>
          </nav>
        </div>
      </div>
    </div>

    <div class="px-2 mx-auto mt-6 max-w-7xl sm:px-6 lg:px-8">
      Add Filter Section Here
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div>
        <h3 class="text-lg font-medium leading-6 text-gray-900">
          Last 30 days
        </h3>

        <dl class="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2 lg:grid-cols-3">
          <div
            class="relative px-4 pt-5 pb-12 overflow-hidden bg-white rounded-lg shadow sm:pt-6 sm:px-6"
          >
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
                Total Subscribers
              </p>
            </dt>
            <dd class="flex items-baseline pb-6 ml-16 sm:pb-7">
              <p class="text-2xl font-semibold text-gray-900">71,897</p>

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
              <div
                class="absolute inset-x-0 bottom-0 px-4 py-4 bg-gray-50 sm:px-6"
              >
                <div class="text-sm">
                  <a
                    href="#"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View all<span class="sr-only">
                      Total Subscribers stats</span
                    ></a
                  >
                </div>
              </div>
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
                Avg. Open Rate
              </p>
            </dt>
            <dd class="flex items-baseline pb-6 ml-16 sm:pb-7">
              <p class="text-2xl font-semibold text-gray-900">58.16%</p>

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
                5.4%
              </p>
              <div
                class="absolute inset-x-0 bottom-0 px-4 py-4 bg-gray-50 sm:px-6"
              >
                <div class="text-sm">
                  <a
                    href="#"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View all<span class="sr-only">
                      Avg. Open Rate stats</span
                    ></a
                  >
                </div>
              </div>
            </dd>
          </div>

          <div
            class="relative px-4 pt-5 pb-12 overflow-hidden bg-white rounded-lg shadow sm:pt-6 sm:px-6"
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
              <div
                class="absolute inset-x-0 bottom-0 px-4 py-4 bg-gray-50 sm:px-6"
              >
                <div class="text-sm">
                  <a
                    href="#"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View all<span class="sr-only">
                      Avg. Click Rate stats</span
                    ></a
                  >
                </div>
              </div>
            </dd>
          </div>
        </dl>
      </div>

      <div class="mx-auto mt-6">
        <!-- This example requires Tailwind CSS v2.0+ -->
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
            >
              <div
                class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"
              >
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-xs font-medium tracking-normal text-left text-gray-500 uppercase"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        Role
                      </th>
                      <th scope="col" class="relative px-4 py-3">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- Odd row -->
                    <tr class="bg-white">
                      <td
                        class="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        Jane Cooper
                      </td>

                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        Regional Paradigm Technician
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        jane.cooper@example.com
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        Admin
                      </td>
                      <td
                        class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"
                      >
                        <a
                          href="#"
                          class="text-indigo-600 hover:text-indigo-900"
                          >Edit</a
                        >
                      </td>
                    </tr>

                    <!-- Even row -->
                    <tr class="bg-gray-50">
                      <td
                        class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        Cody Fisher
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        Product Directives Officer
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        cody.fisher@example.com
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        Owner
                      </td>
                      <td
                        class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"
                      >
                        <a
                          href="#"
                          class="text-indigo-600 hover:text-indigo-900"
                          >Edit</a
                        >
                      </td>
                    </tr>
                    <!-- Odd row -->
                    <tr class="bg-white">
                      <td
                        class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        Jane Cooper
                      </td>

                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        Regional Paradigm Technician
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        jane.cooper@example.com
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        Admin
                      </td>
                      <td
                        class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"
                      >
                        <a
                          href="#"
                          class="text-indigo-600 hover:text-indigo-900"
                          >Edit</a
                        >
                      </td>
                    </tr>

                    <!-- Even row -->
                    <tr class="bg-gray-50">
                      <td
                        class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        Cody Fisher
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        Product Directives Officer
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        cody.fisher@example.com
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        Owner
                      </td>
                      <td
                        class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"
                      >
                        <a
                          href="#"
                          class="text-indigo-600 hover:text-indigo-900"
                          >Edit</a
                        >
                      </td>
                    </tr>
                    <!-- Odd row -->
                    <tr class="bg-white">
                      <td
                        class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        Jane Cooper
                      </td>

                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        Regional Paradigm Technician
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        jane.cooper@example.com
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        Admin
                      </td>
                      <td
                        class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"
                      >
                        <a
                          href="#"
                          class="text-indigo-600 hover:text-indigo-900"
                          >Edit</a
                        >
                      </td>
                    </tr>

                    <!-- Even row -->
                    <tr class="bg-gray-50">
                      <td
                        class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        Cody Fisher
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        Product Directives Officer
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        cody.fisher@example.com
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        Owner
                      </td>
                      <td
                        class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"
                      >
                        <a
                          href="#"
                          class="text-indigo-600 hover:text-indigo-900"
                          >Edit</a
                        >
                      </td>
                    </tr>
                    <!-- Odd row -->
                    <tr class="bg-white">
                      <td
                        class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        Jane Cooper
                      </td>

                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        Regional Paradigm Technician
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        jane.cooper@example.com
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        Admin
                      </td>
                      <td
                        class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"
                      >
                        <a
                          href="#"
                          class="text-indigo-600 hover:text-indigo-900"
                          >Edit</a
                        >
                      </td>
                    </tr>

                    <!-- Even row -->
                    <tr class="bg-gray-50">
                      <td
                        class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        Cody Fisher
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        Product Directives Officer
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        cody.fisher@example.com
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        Owner
                      </td>
                      <td
                        class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"
                      >
                        <a
                          href="#"
                          class="text-indigo-600 hover:text-indigo-900"
                          >Edit</a
                        >
                      </td>
                    </tr>
                    <!-- Odd row -->
                    <tr class="bg-white">
                      <td
                        class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        Jane Cooper
                      </td>

                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        Regional Paradigm Technician
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        jane.cooper@example.com
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        Admin
                      </td>
                      <td
                        class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"
                      >
                        <a
                          href="#"
                          class="text-indigo-600 hover:text-indigo-900"
                          >Edit</a
                        >
                      </td>
                    </tr>

                    <!-- Even row -->
                    <tr class="bg-gray-50">
                      <td
                        class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        Cody Fisher
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        Product Directives Officer
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        cody.fisher@example.com
                      </td>
                      <td
                        class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                      >
                        Owner
                      </td>
                      <td
                        class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"
                      >
                        <a
                          href="#"
                          class="text-indigo-600 hover:text-indigo-900"
                          >Edit</a
                        >
                      </td>
                    </tr>

                    <!-- More items... -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <!-- This example requires Tailwind CSS v2.0+ -->
      <nav
        class="flex items-center justify-between px-4 border-t border-gray-200 sm:px-0"
      >
        <div class="flex flex-1 w-0 -mt-px">
          <a
            href="#"
            class="inline-flex items-center pt-4 pr-1 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300"
          >
            <!-- Heroicon name: solid/arrow-narrow-left -->
            <svg
              class="w-5 h-5 mr-3 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
            Previous
          </a>
        </div>
        <div class="hidden md:-mt-px md:flex">
          <a
            href="#"
            class="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300"
          >
            1
          </a>
          <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
          <a
            href="#"
            class="inline-flex items-center px-4 pt-4 text-sm font-medium text-indigo-600 border-t-2 border-indigo-500"
            aria-current="page"
          >
            2
          </a>
          <a
            href="#"
            class="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300"
          >
            3
          </a>
          <span
            class="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent"
          >
            ...
          </span>
          <a
            href="#"
            class="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300"
          >
            8
          </a>
          <a
            href="#"
            class="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300"
          >
            9
          </a>
          <a
            href="#"
            class="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300"
          >
            10
          </a>
        </div>
        <div class="flex justify-end flex-1 w-0 -mt-px">
          <a
            href="#"
            class="inline-flex items-center pt-4 pl-1 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300"
          >
            Next
            <!-- Heroicon name: solid/arrow-narrow-right -->
            <svg
              class="w-5 h-5 ml-3 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showProfile: false,
    }
  },
}
</script>

<style lang="scss" scoped></style>
