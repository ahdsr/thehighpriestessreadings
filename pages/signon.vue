<template>
  <div>
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
    <div class="flex min-h-screen bg-white">
      <div
        class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
      >
        <div class="w-full max-w-sm mx-auto lg:w-96">
          <div>
            <img
              class="w-auto h-36"
              src="~/assets/images/elementLogo.svg"
              alt="Workflow"
            />
            <h2 class="mt-0 text-3xl font-extrabold text-gray-900">
              Welcome to Ordering
            </h2>
            <p class="mt-2 text-sm text-gray-600 max-w">
              <a
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Register for an account
              </a>
            </p>
          </div>

          <div class="mt-8">
            <div>
              <div class="relative mt-6">
                <div
                  class="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 text-gray-500 bg-white">
                    Or continue with
                  </span>
                </div>
              </div>
            </div>

            <div class="mt-6">
              <form action="#" method="POST" class="space-y-6">
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div class="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      required
                      class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div class="space-y-1">
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div class="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autocomplete="current-password"
                      required
                      class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <label
                      for="remember_me"
                      class="block ml-2 text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div class="text-sm">
                    <a
                      href="#"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <nuxt-link to="/comptest"
                    ><button
                      type="submit"
                      class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Sign in
                    </button></nuxt-link
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="relative flex-1 hidden w-0 lg:block">
        <img
          class="absolute inset-0 object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1565043666747-69f6646db940?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
