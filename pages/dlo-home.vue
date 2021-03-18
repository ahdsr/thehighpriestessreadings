<template>
  <div class="antialiased">
    <!-- Start -->
    <!-- Top Nav Start -->
    <div class="mt-20">
      <div
        class="fixed inset-x-0 bottom-0 block h-16 pt-3 pr-2 align-middle shadow-xl z-5"
      ></div>
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

        <div class="ml-auto"></div>
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

    <div
      class="container flex flex-col items-center justify-center p-4 mx-auto space-y-4"
    >
      <nuxt-link
        class="flex items-center w-full p-2 bg-white border shadow rounded-xl"
        to="/dlo-01"
      >
        <div class="flex items-center space-x-4">
          <img
            src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/1-corvette-stingray-c8-2019-fd-hr-hero-front_0.jpg?itok=SEYe_vLy"
            alt="My profile"
            class="object-center w-16 h-16 rounded-full"
          />
        </div>

        <div class="flex-1 p-3">
          <div class="font-semibold text-gray-700">April, 02, 2021</div>
          <div class="text-sm text-gray-500">
            Your replacement vehicle is ready to order.
          </div>
        </div>
        <div class="p-2">
          <img
            src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
            alt="My profile"
            class="order-1 w-4 h-4 rounded-full"
          />
        </div>
      </nuxt-link>

      <div
        class="flex items-center w-full p-2 bg-white border shadow rounded-xl"
      >
        <div class="relative flex items-center space-x-4">
          <img
            src="https://www.elementfleet.com/binaries/content/gallery/elementfleet/hero/hero-1480x833-blurry-nighttime-street-min.jpg/hero-1480x833-blurry-nighttime-street-min.jpg/elementfleet%3Aherolarge"
            alt="My profile"
            class="w-16 h-16 rounded-full"
          />
          <span
            class="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full"
          ></span>
        </div>
        <div class="flex-grow p-3">
          <div class="font-semibold text-gray-700">April, 11, 2021</div>
          <div class="text-sm text-gray-500">Some other notification</div>
        </div>
        <div class="p-2">
          <span
            class="bottom-0 right-0 block w-4 h-4 bg-blue-400 rounded-full"
          ></span>
        </div>
      </div>

      <div
        class="flex items-center w-full p-2 bg-white border shadow rounded-xl"
      >
        <div class="relative flex items-center space-x-4">
          <img
            src="https://www.elementfleet.com/binaries/content/gallery/elementfleet/hero/hero-1480x833-blurry-nighttime-street-min.jpg/hero-1480x833-blurry-nighttime-street-min.jpg/elementfleet%3Aherolarge"
            alt="My profile"
            class="w-16 h-16 rounded-full"
          />
          <span
            class="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full"
          ></span>
        </div>
        <div class="flex-grow p-3">
          <div class="font-semibold text-gray-700">April, 11, 2021</div>
          <div class="text-sm text-gray-500">Some other notification</div>
        </div>
        <div class="p-2">
          <span
            class="bottom-0 right-0 block w-4 h-4 bg-blue-400 rounded-full"
          ></span>
        </div>
      </div>
    </div>

    <!-- fixed nav -->
    <nav
      class="fixed inset-x-0 bottom-0 flex justify-between font-mono text-sm text-blue-900 uppercase bg-blue-100"
    >
      <a
        href="#"
        class="block w-full px-3 py-5 text-center transition duration-300 hover:bg-blue-200 hover:text-blue-800"
      >
        <svg
          class="w-6 h-6 mx-auto mb-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            fill="#fff"
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
        Home
      </a>

      <a
        href="#"
        class="block w-full px-3 py-5 text-center hover:bg-blue-200 hover:text-blue-800"
      >
        <svg
          class="w-6 h-6 mx-auto mb-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
        Features
      </a>

      <a
        href="#"
        class="block w-full px-3 py-5 text-center hover:bg-blue-200 hover:text-blue-800"
      >
        <svg
          class="w-6 h-6 mx-auto mb-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
        Profile
      </a>

      <a
        href="#"
        class="block w-full px-3 py-5 text-center hover:bg-blue-200 hover:text-blue-800"
      >
        <svg
          class="w-6 h-6 mx-auto mb-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
          />
        </svg>
        Settings
      </a>
    </nav>
    <!-- End -->
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
