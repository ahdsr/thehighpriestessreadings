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
            alt="Xcelerate Logo"
          />
        </div>
        <div class="ml-4">
          <img
            class="w-24 fill-current"
            viewBox="0 0 20 20"
            src="~/assets/images/Icon-Logo-Xcelerate.svg"
            alt="Xcelerate Logo"
          />
        </div>

        <div class="ml-auto"></div>
        <div class="ml-4">
          <img
            class="inline-block object-cover w-8 h-8 rounded-full"
            src="https://vignette.wikia.nocookie.net/97918c83-d3c3-4a97-a206-6d770810e8e3/scale-to-width-down/800"
            alt="Xcelerate Logo"
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
        <div class="relative flex items-center space-x-4">
          <img
            src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/1-corvette-stingray-c8-2019-fd-hr-hero-front_0.jpg?itok=SEYe_vLy"
            alt="My profile"
            class="object-center w-16 h-16 rounded-full"

          />
          <span
            class="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full"
          ></span>
        </div>

        <div class="flex-1 p-3">
          <div class="font-semibold text-gray-700">Order your new vehicle</div>
          <div class="text-sm text-gray-500">
            Your replacement vehicle is ready to order.
          </div>
          <div class="mt-2 text-xs text-gray-500 uppercase">April 1, 2012</div>
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
        </div>
        <div class="flex-grow p-3">
          <div class="font-semibold text-gray-700">Some other notification</div>
          <div class="text-sm text-gray-500">Some other notification</div>
          <div class="mt-2 text-xs text-gray-500 uppercase">April 1, 2012</div>
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
        </div>
        <div class="flex-grow p-3">
          <div class="font-semibold text-gray-700">You da best driver</div>
          <div class="text-sm text-gray-500">Some other notification</div>
          <div class="mt-2 text-xs text-gray-500 uppercase">April 1, 2012</div>
        </div>
      </div>
    </div>

    <!-- fixed nav -->
    <nav
      class="fixed inset-x-0 bottom-0 flex justify-between p-4 font-mono text-sm text-blue-900 uppercase bg-blue-100"
    >
      <a
        href="#"
        class="block w-full text-center transition duration-300 hover:bg-blue-200 hover:text-blue-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6 mx-auto mb-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </a>

      <a
        href="#"
        class="block w-full text-center hover:bg-blue-200 hover:text-blue-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6 mx-auto mb-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
          />
        </svg>
      </a>

      <a
        href="#"
        class="block w-full text-center hover:bg-blue-200 hover:text-blue-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6 mx-auto mb-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      </a>

      <a
        href="#"
        class="block w-full text-center hover:bg-blue-200 hover:text-blue-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6 mx-auto mb-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-6 h-6 mx-auto mb-2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </a>

      <a
        href="#"
        class="block w-full text-center hover:bg-blue-200 hover:text-blue-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6 mx-auto mb-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </a>
    </nav>
    <!-- End -->
  </div>
</template>

<script>
export default {}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Varta:wght@300;400;500;600;700&display=swap');





</style>

