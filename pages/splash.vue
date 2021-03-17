<template>
  <div>
    <nav
      class="fixed top-0 left-0 z-50 w-full py-0 font-sans bg-white shadow-md"
    >
      <div class="sm:px-6 lg:px-8 xl:px-32">
        <div class="relative flex justify-between h-16">
          <div class="inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button -->
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 text-gray-400 rounded-sm hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
            <div class="hidden text-gray-800 sm:ml-6 sm:flex sm:space-x-8">
              <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
              <nuxt-link
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-800 border-b-2 border-gray-800"
                to="/splash"
                >Home</nuxt-link
              >
              <nuxt-link
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-800 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
                to="/usecases"
                >Use Cases</nuxt-link
              >
              <nuxt-link
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-800 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
                to="/resume"
                >Resume</nuxt-link
              >
            </div>
          </div>
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <button
              class="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              @click="showProfile = !showProfile"
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
                class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
                v-show="showProfile"
              >
                <nuxt-link
                  class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-800 border-b-2 border-gray-800"
                  to="/splash"
                  >Home</nuxt-link
                >
                <nuxt-link
                  class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-800 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
                  to="/usecases"
                  >Use Cases</nuxt-link
                >
                <nuxt-link
                  class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-800 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
                  to="/resume"
                  >Resume</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div v-show="showProfile" class="sm:invisible" id="mobile-menu">
        <div class="pt-2 pb-4 space-y-1 sm:hidden v-show=">
          <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
          <nuxt-link
            class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-800 border-b-2 border-gray-800"
            to="/splash"
            >Home</nuxt-link
          >
          <nuxt-link
            class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-800 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
            to="/resume"
            >Resume</nuxt-link
          >
          <nuxt-link
            class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-800 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
            to="/resume"
            >Resume</nuxt-link
          >
        </div>
      </div>
    </nav>

    <div class="p-16 mx-auto mb-0 bg-gray-200">
      <img class="p-16 -mb-16 w-96" src="~/assets/images/atomic.svg" />
      <h1 class="p-16 mb-0 font-serif text-8xl">
        Lucas is a UI & UX designer located in Toronto.
      </h1>
      <div class="flex">
        <div class="p-16 text-4xl leading-relaxed">
          <p>
            Lucas Czuchraj is a designer from Toronto. He has 15+ years of
            experience in the field, graduated from the York Sheridan Bachelor
            of Design (Honors) program. He’s interested in all aspects of
            design, from sketching, to wireframing and final look and feel.
            Music and photography are his other passions. Check out the resume
            below.
          </p>
        </div>
        <div class="p-16 text-xl">
          <div
            class="justify-center w-auto h-32 mb-10 text-center bg-white rounded-lg"
          >
            <img
              class="justify-center inline-block p-16"
              src="~/assets/images/atomic.svg"
            />
          </div>
          <p>
            Lucas Czuchraj is a designer from Toronto. He has 15+ years of
            experience in the field, graduated from the York Sheridan Bachelor
            of Design (Honors) program. He’s interested in all aspects of
            design, from sketching, to wireframing and final look and feel.
            Music and photography are his other passions. Check out the resume
            below.
          </p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-5 gap-0 mx-auto cursor-pointer">
      <div>
        <img
          class="object-cover w-full overflow-hidden transition duration-300 ease-out transform shadow-2xl h-72 hover:scale-90"
          src="https://images.unsplash.com/photo-1496016943515-7d33598c11e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
        />
      </div>
      <div>
        <img
          class="object-cover w-full overflow-hidden transition duration-300 ease-out transform shadow-2xl h-72 hover:scale-95"
          src="https://images.unsplash.com/photo-1615836364937-786654db8232?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        />
      </div>
      <div>
        <img
          class="object-cover w-full overflow-hidden transition duration-300 ease-out transform shadow-2xl h-72 hover:scale-95"
          src="https://images.unsplash.com/photo-1615886490002-ae8172eea2de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=660&q=80"
        />
      </div>
      <div>
        <img
          class="object-cover w-full overflow-hidden transition duration-300 ease-out transform shadow-2xl h-72 hover:scale-95"
          src="https://images.unsplash.com/photo-1615884363252-983eed162938?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        />
      </div>
      <div>
        <img
          class="object-cover w-full overflow-hidden transition duration-300 ease-out transform shadow-2xl h-72 hover:scale-95"
          src="https://images.unsplash.com/photo-1615829913763-bc72584f166f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
        />
      </div>
      <div>
        <img
          class="object-cover w-full overflow-hidden transition duration-300 ease-out transform shadow-2xl h-72 hover:scale-95"
          src="https://images.unsplash.com/photo-1615847697785-effb9d96a274?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1339&q=80"
        />
      </div>
      <div>
        <img
          class="object-cover w-full overflow-hidden transition duration-300 ease-out transform shadow-2xl h-72 hover:scale-95"
          src="https://images.unsplash.com/photo-1611095789391-947c8f94179c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
        />
      </div>
      <div>
        <img
          class="object-cover w-full overflow-hidden transition duration-300 ease-out transform shadow-2xl h-72 hover:scale-95"
          src="https://images.unsplash.com/photo-1615872862502-f1b3aede3a73?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
        />
      </div>
      <div>
        <img
          class="object-cover w-full overflow-hidden transition duration-300 ease-out transform shadow-2xl h-72 hover:scale-95"
          src="https://images.unsplash.com/photo-1615827806874-212122b513f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        />
      </div>
    </div>
    <div class="h-full p-16 bg-gray-400">
      <div class="flex">
        <div class="p-16 text-4xl leading-relaxed">
          <p>
            Lucas Czuchraj is a designer from Toronto. He has 15+ years of
            experience in the field, graduated from the York Sheridan Bachelor
            of Design (Honors) program. He’s interested in all aspects of
            design, from sketching, to wireframing and final look and feel.
            Music and photography are his other passions. Check out the resume
            below.
          </p>
        </div>
        <div class="p-16 text-xl">
          <p>
            Lucas Czuchraj is a designer from Toronto. He has 15+ years of
            experience in the field, graduated from the York Sheridan Bachelor
            of Design (Honors) program. He’s interested in all aspects of
            design, from sketching, to wireframing and final look and feel.
            Music and photography are his other passions. Check out the resume
            below.
          </p>
        </div>
        <div class="p-16 text-xl">
          <p>
            Lucas Czuchraj is a designer from Toronto. He has 15+ years of
            experience in the field, graduated from the York Sheridan Bachelor
            of Design (Honors) program. He’s interested in all aspects of
            design, from sketching, to wireframing and final look and feel.
            Music and photography are his other passions. Check out the resume
            below.
          </p>
          <button
            type="button"
            class="inline-flex items-center px-6 py-3 mt-6 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-sm shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Say hello!
          </button>
        </div>
      </div>
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
