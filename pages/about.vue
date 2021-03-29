<template>
  <div>
    <!-- START - HERO -->
    <div
      class="relative object-fill overflow-hidden bg-cover bg-hero-monica-01 bg-opacity-40 xl:pb-40"
    >
      <div class="relative pt-6 pb-72 sm:pb-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6">
          <nav
            class="relative flex items-center justify-between sm:h-10 md:justify-center"
            aria-label="Global"
          >
            <div
              class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"
            >
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span class="sr-only">Workflow</span>
                  <img
                    class="w-auto h-8 sm:h-10"
                    src="https://supertarot.co.uk/wp-content/uploads/moon-symbol-980x980.png"
                    alt=""
                  />
                </a>
                <div class="z-50 flex items-center -mr-2 md:hidden">
                  <button
                    @click="showProfile = !showProfile"
                    type="button"
                    class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md bg-gray-50 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    aria-expanded="false"
                  >
                    <span class="sr-only">Open main menu</span>
                    <!-- Heroicon name: outline/menu -->
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
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="hidden md:flex md:space-x-10">
              <a href="#" class="font-medium text-gray-500 hover:text-gray-900"
                >About Me</a
              >

              <a href="#" class="font-medium text-gray-500 hover:text-gray-900"
                >Readings</a
              >
            </div>
            <div
              class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0"
            >
              <span class="inline-flex rounded-md shadow">
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-gray-50"
                >
                  Log in
                </a>
              </span>
            </div>
          </nav>
        </div>

        <!--
      Mobile menu, show/hide based on menu open state.

      Entering: "duration-150 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
        <div
          v-show="showProfile"
          class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform font-display md:hidden show"
        >
          <div
            class="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5"
          >
            <div class="flex items-center justify-between px-5 pt-4">
              <div>
                <img
                  class="w-auto h-8"
                  src="https://supertarot.co.uk/wp-content/uploads/moon-symbol-980x980.png"
                  alt=""
                />
              </div>
              <div class="-mr-2">
                <button
                  @click="showProfile = !showProfile"
                  type="button"
                  class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <!-- Heroicon name: outline/x -->
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3">
              <a
                href="#"
                class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                >Product</a
              >

              <a
                href="#"
                class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                >Features</a
              >
            </div>
            <a
              href="#"
              class="block w-full px-5 py-3 font-medium text-center text-indigo-600 bg-gray-50 hover:bg-gray-100"
            >
              Log in
            </a>
          </div>
        </div>

        <main class="px-4 mx-auto mt-16 sm:mt-24">
          <div class="text-center">
            <h1
              class="text-4xl font-semibold tracking-tight text-gray-100 font-display sm:text-5xl md:text-6xl xl:pt-48 xl:text-8xl"
            >
              <span class="block xl:inline">The High Priestess</span>
              <span class="block text-monica-mauvelous xl:inline"
                >Readings</span
              >
              <div class="animate-role">
                <img
                  src="~assets/images/star.png"
                  alt="Start"
                  class="w-24 mx-auto mt-10"
                />
              </div>
            </h1>
            <p
              class="max-w-xl mx-auto mt-3 text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl xl:font-light xl:text-4xl xl:leading-relaxed"
            >
              Tarot card reading is the practice of using tarot cards to gain
              insight into the past, present or future by formulating a
              question, then drawing and interpreting cards. Reading tarot cards
              is a type of cartomancy.
            </p>
            <div
              class="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8"
            >
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Book Now
                </a>
              </div>
              <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Find Out More
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

    <div class="flex flex-row">
      <div class=""><img src="~assets/images/monica-stuff.jpg" /></div>
      <div class=""><img src="~assets/images/monica-crystals.jpg" /></div>
      <div class=""><img src="~assets/images/monica-smudge.jpg" /></div>
      <div class=""><img src="~assets/images/monica-profile.jpg" /></div>
    </div>
    <!-- END - HERO -->

    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="font-display bg-monica-xoletic">
      <div class="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-extrabold text-monica-mauvelous">
            About your reading
          </h2>
          <p class="mt-4 text-lg text-gray-500">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p>
        </div>
        <dl
          class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8"
        >
          <div class="relative">
            <dt>
              <!-- Heroicon name: outline/check -->
              <svg
                class="absolute w-6 h-6 text-green-500"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p class="text-lg font-medium leading-6 text-gray-900 ml-9">
                Invite team members
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500 ml-9">
              Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est,
              molestie blandit quis ac. Lacus.
            </dd>
          </div>

          <div class="relative">
            <dt>
              <!-- Heroicon name: outline/check -->
              <svg
                class="absolute w-6 h-6 text-green-500"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p class="text-lg font-medium leading-6 text-gray-900 ml-9">
                Notifications
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500 ml-9">
              Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis.
              Nibh urna non parturient.
            </dd>
          </div>

          <div class="relative">
            <dt>
              <!-- Heroicon name: outline/check -->
              <svg
                class="absolute w-6 h-6 text-green-500"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p class="text-lg font-medium leading-6 text-gray-900 ml-9">
                List view
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500 ml-9">
              Etiam cras augue ornare pretium sit malesuada morbi orci,
              venenatis. Dictum lacus.
            </dd>
          </div>

          <div class="relative">
            <dt>
              <!-- Heroicon name: outline/check -->
              <svg
                class="absolute w-6 h-6 text-green-500"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p class="text-lg font-medium leading-6 text-gray-900 ml-9">
                Boards
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500 ml-9">
              Interdum quam pulvinar turpis tortor, egestas quis diam amet,
              natoque. Mauris sagittis.
            </dd>
          </div>

          <div class="relative">
            <dt>
              <!-- Heroicon name: outline/check -->
              <svg
                class="absolute w-6 h-6 text-green-500"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p class="text-lg font-medium leading-6 text-gray-900 ml-9">
                Keyboard shortcuts
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500 ml-9">
              Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate
              mollis nec. In at risus odio.
            </dd>
          </div>

          <div class="relative">
            <dt>
              <!-- Heroicon name: outline/check -->
              <svg
                class="absolute w-6 h-6 text-green-500"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p class="text-lg font-medium leading-6 text-gray-900 ml-9">
                Reporting
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500 ml-9">
              Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc
              odio. Sed bibendum.
            </dd>
          </div>

          <div class="relative">
            <dt>
              <!-- Heroicon name: outline/check -->
              <svg
                class="absolute w-6 h-6 text-green-500"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p class="text-lg font-medium leading-6 text-gray-900 ml-9">
                Calendars
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500 ml-9">
              Sed mi, dapibus turpis orci posuere integer. A porta viverra
              posuere adipiscing turpis.
            </dd>
          </div>

          <div class="relative">
            <dt>
              <!-- Heroicon name: outline/check -->
              <svg
                class="absolute w-6 h-6 text-green-500"
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p class="text-lg font-medium leading-6 text-gray-900 ml-9">
                Mobile app
              </p>
            </dt>
            <dd class="mt-2 text-base text-gray-500 ml-9">
              Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id
              dignissim tristique proin sed.
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <!-- This example requires Tailwind CSS v2.0+ -->
    <div id="gradient" class="bg-monica-xoletic font-display bg-hero-pattern">
      <div class="pt-12 sm:pt-16 lg:pt-24">
        <div class="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2
              class="text-lg font-semibold leading-6 tracking-wider text-gray-300 uppercase"
            >
              Pricing
            </h2>
            <p
              class="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
            >
              The right price for you, whoever you are
            </p>
            <p class="text-xl text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              sequi unde repudiandae natus.
            </p>
            <img class="pt-6 mx-auto w-44" src="~assets/images/orn.png" />
          </div>
        </div>
      </div>
      <div class="pb-12 mt-8 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div class="relative">
          <div class="absolute inset-0 bg-monica-xoletic h-3/4"></div>
          <div class="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div
              class="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0"
            >
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <div>
                    <h3
                      class="inline-flex px-4 py-1 text-sm font-semibold tracking-wide text-indigo-600 uppercase rounded-full bg-monica-mauvelous"
                      id="tier-standard"
                    >
                      First Reading
                    </h3>
                  </div>

                  <div class="flex items-baseline mt-4 text-3xl font-extrabold">
                    $49
                    <span class="ml-1 text-2xl font-medium text-gray-500">
                    </span>
                  </div>
                  <p class="mt-5 text-lg text-gray-500">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
                <div
                  class="flex flex-col justify-between flex-1 px-6 pt-6 pb-8 space-y-6 bg-gray-50 sm:p-10 sm:pt-6"
                >
                  <ul class="space-y-4">
                    <li class="flex items-start">
                      <div class="flex-shrink-0">
                        <!-- Heroicon name: outline/check -->
                        <svg
                          class="w-6 h-6 text-green-500"
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p class="ml-3 text-base text-gray-700">
                        Pariatur quod similique
                      </p>
                    </li>

                    <li class="flex items-start">
                      <div class="flex-shrink-0">
                        <!-- Heroicon name: outline/check -->
                        <svg
                          class="w-6 h-6 text-green-500"
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p class="ml-3 text-base text-gray-700">
                        Sapiente libero doloribus modi nostrum
                      </p>
                    </li>

                    <li class="flex items-start">
                      <div class="flex-shrink-0">
                        <!-- Heroicon name: outline/check -->
                        <svg
                          class="w-6 h-6 text-green-500"
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p class="ml-3 text-base text-gray-700">
                        Vel ipsa esse repudiandae excepturi
                      </p>
                    </li>

                    <li class="flex items-start">
                      <div class="flex-shrink-0">
                        <!-- Heroicon name: outline/check -->
                        <svg
                          class="w-6 h-6 text-green-500"
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p class="ml-3 text-base text-gray-700">
                        Itaque cupiditate adipisci quibusdam
                      </p>
                    </li>
                  </ul>
                  <div class="rounded-md shadow">
                    <a
                      href="#"
                      class="flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-gray-800 border border-transparent rounded-md hover:bg-gray-900"
                      aria-describedby="tier-standard"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>

              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <div>
                    <h3
                      class="inline-flex px-4 py-1 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-100 rounded-full"
                      id="tier-standard"
                    >
                      Enterprise
                    </h3>
                  </div>
                  <div class="flex items-baseline mt-4 text-6xl font-extrabold">
                    $79
                    <span class="ml-1 text-2xl font-medium text-gray-500">
                      /mo
                    </span>
                  </div>
                  <p class="mt-5 text-lg text-gray-500">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
                <div
                  class="flex flex-col justify-between flex-1 px-6 pt-6 pb-8 space-y-6 bg-gray-50 sm:p-10 sm:pt-6"
                >
                  <ul class="space-y-4">
                    <li class="flex items-start">
                      <div class="flex-shrink-0">
                        <!-- Heroicon name: outline/check -->
                        <svg
                          class="w-6 h-6 text-green-500"
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p class="ml-3 text-base text-gray-700">
                        Pariatur quod similique
                      </p>
                    </li>

                    <li class="flex items-start">
                      <div class="flex-shrink-0">
                        <!-- Heroicon name: outline/check -->
                        <svg
                          class="w-6 h-6 text-green-500"
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p class="ml-3 text-base text-gray-700">
                        Sapiente libero doloribus modi nostrum
                      </p>
                    </li>

                    <li class="flex items-start">
                      <div class="flex-shrink-0">
                        <!-- Heroicon name: outline/check -->
                        <svg
                          class="w-6 h-6 text-green-500"
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p class="ml-3 text-base text-gray-700">
                        Vel ipsa esse repudiandae excepturi
                      </p>
                    </li>

                    <li class="flex items-start">
                      <div class="flex-shrink-0">
                        <!-- Heroicon name: outline/check -->
                        <svg
                          class="w-6 h-6 text-green-500"
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p class="ml-3 text-base text-gray-700">
                        Itaque cupiditate adipisci quibusdam
                      </p>
                    </li>
                  </ul>
                  <div class="rounded-md shadow">
                    <a
                      href="#"
                      class="flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-gray-800 border border-transparent rounded-md hover:bg-gray-900"
                      aria-describedby="tier-standard"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative px-4 mx-auto mt-4 max-w-7xl sm:px-6 lg:px-8 lg:mt-5"
        >
          <div class="max-w-md mx-auto lg:max-w-5xl"></div>
        </div>
      </div>
    </div>

    <!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ]
  }
  ```
-->
    <div class="overflow-hidden bg-white font-display">
      <div class="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          class="absolute top-0 bottom-0 hidden w-screen lg:block bg-gray-50 left-3/4"
        ></div>
        <div
          class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none"
        >
          <div>
            <h2
              class="text-base font-semibold tracking-wide text-indigo-600 uppercase"
            >
              Say Hello
            </h2>
            <h3
              class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl"
            >
              Meet Monica
            </h3>
          </div>
        </div>
        <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div class="relative lg:row-start-1 lg:col-start-2">
            <svg
              class="absolute top-0 right-0 hidden -mt-20 -mr-20 lg:block"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
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
                height="384"
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div class="relative mx-auto text-base max-w-prose lg:max-w-none">
              <figure>
                <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    class="object-cover object-center rounded-lg shadow-lg"
                    src="~assets/images/monica-profile.jpg"
                    alt="Whitney leaning against a railing on a downtown street"
                    width="1184"
                    height="1376"
                  />
                </div>
                <figcaption class="flex mt-3 text-sm text-gray-500">
                  <!-- Heroicon name: solid/camera -->
                  <svg
                    class="flex-none w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="ml-2">Photograph by Magda Olszewski</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div class="mt-8 lg:mt-0">
            <div class="mx-auto text-base max-w-prose lg:max-w-none">
              <p class="text-lg text-gray-500">
                In eu mi bibendum neque egestas congue quisque. Ultrices mi
                tempus imperdiet nulla malesuada. Velit sed ullamcorper morbi
                tincidunt
              </p>
            </div>
            <div
              class="mx-auto mt-5 prose text-gray-500 prose-indigo lg:max-w-none lg:row-start-1 lg:col-start-1"
            >
              <img
                src="~assets/images/unicorn.png"
                alt="Unicorn"
                class="w-48"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Est
                sit amet facilisis magna etiam tempor orci eu lobortis. Feugiat
                in fermentum posuere urna nec. Ac turpis egestas sed tempus urna
                et pharetra pharetra massa. In eu mi bibendum neque egestas
                congue quisque. Ultrices mi tempus imperdiet nulla malesuada.
                Velit sed ullamcorper morbi tincidunt. Id leo in vitae turpis
                massa sed elementum tempus egestas. Felis eget nunc lobortis
                mattis aliquam faucibus purus. Eu mi bibendum neque egestas
                congue quisque egestas. Volutpat sed cras ornare arcu dui. Dolor
                sit amet consectetur adipiscing elit duis tristique sollicitudin
                nibh. Scelerisque eleifend donec pretium vulputate sapien nec
                sagittis aliquam. Lacus vel facilisis volutpat est.
              </p>
              <ul>
                <li>Quis elit egestas venenatis mattis dignissim.</li>
                <li>
                  Cras cras lobortis vitae vivamus ultricies facilisis tempus.
                </li>
                <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
              </ul>
              <p>
                In eu mi bibendum neque egestas congue quisque. Ultrices mi
                tempus imperdiet nulla malesuada. Velit sed ullamcorper morbi
                tincidunt
              </p>
              <h3>Something about me</h3>

              <p>
                In eu mi bibendum neque egestas congue quisque. Ultrices mi
                tempus imperdiet nulla malesuada. Velit sed ullamcorper morbi
                tincidunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="http://www.freepik.com">Designed by rawpixel.com / Freepik</a>
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
            'https://fonts.googleapis.com/css2?family=Varta:wght@300;400;500;600;700&display=swap">',
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
@import url('https://fonts.googleapis.com/css2?family=Varta:wght@300;400;500;600;700&display=swap');
</style>
