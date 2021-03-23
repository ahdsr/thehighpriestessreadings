<template>
  <div class="antialiased">
    <!-- Start -->
    <!-- Top Nav Start -->
    <div class="mt-10">
      <div
        class="fixed inset-x-0 bottom-0 block h-16 pt-3 pr-2 align-middle bg-gray-300 shadow-md opacity-90 z-5"
      >
        <div class="flex justify-between">
          <nuxt-link to="/dlo-03">
            <button
              type="button"
              class="px-10 py-2 ml-2 text-sm font-medium text-gray-700 bg-white border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Back
            </button></nuxt-link
          >
          <nuxt-link to="/dlo-05">
            <button
              type="submit"
              class="inline-flex px-10 py-2 ml-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-element-green hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Next
            </button></nuxt-link
          >
        </div>
      </div>
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

        <div class="ml-auto">
          <button
            type="submit"
            class="px-2 py-1 text-xs text-white border-transparent rounded-md shadow-sm bg-element-bright-blue font-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Exit
          </button>
        </div>
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
    <!-- Progress Bar Start -->
    <div class="mt-24">
      <nav aria-label="Progress">
        <ol class="flex justify-center">
          <li class="relative pr-8 sm:pr-20">
            <!-- Completed Step -->
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-element-bright-blue"></div>
            </div>
            <nuxt-link to="/dlo-01"
              ><a
                href="#"
                class="relative flex items-center justify-center w-8 h-8 rounded-full bg-element-green hover:bg-indigo-900"
              >
                <!-- Heroicon name: solid/check -->
                <svg
                  class="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span class="sr-only">Step 1</span>
              </a></nuxt-link
            >
          </li>

          <li class="relative pr-8 sm:pr-20">
            <!-- Completed Step -->
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-element-bright-blue"></div>
            </div>
            <nuxt-link to="/dlo-02"
              ><a
                href="#"
                class="relative flex items-center justify-center w-8 h-8 rounded-full bg-element-green hover:bg-indigo-900"
              >
                <!-- Heroicon name: solid/check -->
                <svg
                  class="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span class="sr-only">Step 1</span>
              </a></nuxt-link
            >
          </li>

          <li class="relative pr-8 sm:pr-20">
            <!-- Completed Step -->
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-element-bright-blue"></div>
            </div>
            <nuxt-link to="/dlo-03"
              ><a
                href="#"
                class="relative flex items-center justify-center w-8 h-8 rounded-full bg-element-green hover:bg-indigo-900"
              >
                <!-- Heroicon name: solid/check -->
                <svg
                  class="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span class="sr-only">Step 1</span>
              </a></nuxt-link
            >
          </li>

          <li class="relative pr-8 sm:pr-20">
            <!-- Current Step -->
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-gray-200"></div>
            </div>
            <nuxt-link to="/dlo-04"
              ><a
                href="#"
                class="relative flex items-center justify-center w-8 h-8 bg-white border-2 rounded-full border-element-green"
                aria-current="step"
              >
                <span
                  class="h-2.5 w-2.5 bg-indigo-600 rounded-full"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Step 2</span>
              </a></nuxt-link
            >
          </li>

          <li class="relative pr-8 sm:pr-20">
            <!-- Upcoming Step -->
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-gray-200"></div>
            </div>
            <nuxt-link to="/dlo-05"
              ><a
                href="#"
                class="relative flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group hover:border-gray-400"
              >
                <span
                  class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Step 5</span>
              </a></nuxt-link
            >
          </li>
          <li class="relative">
            <!-- Upcoming Step -->
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-gray-200"></div>
            </div>
            <nuxt-link to="/dlo-06"
              ><a
                href="#"
                class="relative flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group hover:border-gray-400"
              >
                <span
                  class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Step 5</span>
              </a></nuxt-link
            >
          </li>
        </ol>
      </nav>
    </div>
    <!-- Progress Bar END -->
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
    <div class="mt-4 bg-white">
      <div>
        <h3 class="p-4 mx-auto -mb-5 text-lg font-bold text-element-dark-blue">
          Ford F-150 Raptor
        </h3>
        <p class="p-4 mx-auto -mt-8">
          Base w/11,000lb. GVWR All-Wheel Drive High Roof HD Ext. Van 148 in. WB
          DRW
        </p>
        <p class="p-4 mx-auto text-sm text-gray-500">
          Please select the colors and options for your vehicle below.
        </p>
      </div>
      <div class="relative p-4 mx-auto carousel">
        <div
          class="relative w-full p-4 overflow-hidden rounded-xl carousel-inner"
        >
          <!--Slide 1-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden=""
            checked="checked"
          />
          <div class="absolute opacity-0 carousel-item" style="height: 20vh">
            <div class="block text-5xl text-center text-white bg-indigo-500">
              <img
                class="block object-center w-full transform scale-150"
                src="https://www.pixelstalk.net/wp-content/uploads/2016/10/Ford-Truck-Wallpapers-HD-For-Desktop.jpg"
                alt="Xcelerate Logo"
              />
            </div>
          </div>
          <label
            for="carousel-3"
            class="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-1 md:ml-10 hover:text-white hover:bg-blue-700"
            >‹</label
          >
          <label
            for="carousel-2"
            class="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-1 md:mr-10 hover:text-white hover:bg-blue-700"
            >›</label
          >

          <!--Slide 2-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div class="absolute opacity-0 carousel-item" style="height: 20vh">
            <div
              class="block w-full h-full text-5xl text-center text-white bg-orange-500"
            >
              <img
                class="block object-center w-full transform scale-150"
                src="https://s3.amazonaws.com/images.gearjunkie.com/uploads/2017/12/velocirpator-driving.jpg"
                alt="Xcelerate Logo"
              />
            </div>
          </div>
          <label
            for="carousel-1"
            class="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-2 md:ml-10 hover:text-white hover:bg-blue-700"
            >‹</label
          >
          <label
            for="carousel-3"
            class="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-2 md:mr-10 hover:text-white hover:bg-blue-700"
            >›</label
          >

          <!--Slide 3-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div class="absolute opacity-0 carousel-item" style="height: 20vh">
            <div
              class="block w-full h-full text-5xl text-center text-white bg-green-500"
            >
              <img
                class="object-center w-full transform scale-150 oblock"
                src="https://www.pixelstalk.net/wp-content/uploads/2016/10/Ford-Truck-Wallpapers-HD.jpg"
                alt="Xcelerate Logo"
              />
            </div>
          </div>
          <label
            for="carousel-2"
            class="absolute inset-y-0 left-0 z-10 hidden w-10 h-10 my-auto ml-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer prev control-3 md:ml-10 hover:text-white hover:bg-blue-700"
            >‹</label
          >
          <label
            for="carousel-1"
            class="absolute inset-y-0 right-0 z-10 hidden w-10 h-10 my-auto mr-2 text-3xl font-bold leading-tight text-center text-black bg-white rounded-full cursor-pointer next control-3 md:mr-10 hover:text-white hover:bg-blue-700"
            >›</label
          >

          <!-- Add additional indicators for each slide-->
          <ol class="carousel-indicators">
            <li class="inline-block mr-3">
              <label
                for="carousel-1"
                class="block text-4xl text-white cursor-pointer carousel-bullet hover:text-blue-700"
                >•</label
              >
            </li>
            <li class="inline-block mr-3">
              <label
                for="carousel-2"
                class="block text-4xl text-white cursor-pointer carousel-bullet hover:text-blue-700"
                >•</label
              >
            </li>
            <li class="inline-block mr-3">
              <label
                for="carousel-3"
                class="block text-4xl text-white cursor-pointer carousel-bullet hover:text-blue-700"
                >•</label
              >
            </li>
          </ol>
        </div>
      </div>
      <div class="p-4 mx-auto -mb-4 text-xs font-bold">
        Choose exterior color
      </div>
      <div class="flex p-4 mx-auto justify-left">
        <div class="inline-block w-8 h-8 mr-2 bg-red-500 rounded-full"></div>
        <div class="inline-block w-8 h-8 mr-2 bg-black rounded-full"></div>
        <div class="inline-block w-8 h-8 mr-2 bg-blue-700 rounded-full"></div>
        <div
          class="inline-block w-8 h-8 mr-2 bg-white rounded-full shadow-md"
        ></div>
        <div class="inline-block w-8 h-8 mr-2 bg-gray-200 rounded-full"></div>
        <div class="inline-block w-8 h-8 mr-2 bg-gray-400 rounded-full"></div>
        <div class="inline-block w-8 h-8 bg-red-500 rounded-full"></div>
      </div>
      <div class="p-4 mx-auto -mb-4 text-xs font-bold">
        Choose interior color
      </div>
      <div class="flex p-4 mx-auto justify-left">
        <div class="inline-block w-8 h-8 mr-2 bg-black rounded-full"></div>
      </div>

      <div class="bg-white">
        <nav class="flex flex-row text-sm font-bold sm:flex-col">
          <button
            class="block px-6 py-4 border-b-2 border-blue-500 font-mediumtext-blue-500 hover:text-blue-500 focus:outline-none"
          >
            Optional Equipment</button
          ><button
            class="block px-6 py-4 text-gray-600 hover:text-blue-500 focus:outline-none"
          >
            Standard Equipment
          </button>
        </nav>
      </div>

      <div>
        <h3
          class="p-4 text-sm font-bold leading-6 text-white bg-element-dark-blue"
        >
          Powetrain
        </h3>

        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-2 py-2 text-xs font-medium tracking-normal text-left text-gray-500 uppercase"
              ></th>
              <th
                scope="col"
                class="px-2 py-2 text-xs font-medium tracking-normal text-left text-gray-500 uppercase align-text-top"
              >
                Code
              </th>

              <th
                scope="col"
                class="px-2 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase align-text-top"
              >
                Description
              </th>
              <th
                scope="col"
                class="px-2 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase align-text-top"
              >
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- Odd row -->

            <tr class="bg-gray-50">
              <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
                <input type="checkbox" class="w-4 h-4 form-checkbox" />
              </td>

              <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
                C37ALF
              </td>
              <td class="px-2 py-2 text-sm text-gray-500">
                FCA US Fleet Puchase Allowance FCA IS National
              </td>
              <td class="px-2 py-2 text-sm text-gray-500">$1,200.23</td>
            </tr>
            <!-- Odd row -->
            <tr class="bg-white">
              <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
                <input type="checkbox" class="w-4 h-4 form-checkbox" />
              </td>
              <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
                Jane Cooper
              </td>

              <td class="px-2 py-2 text-sm text-gray-500">
                Regional Paradigm Technician
              </td>
              <td class="px-2 py-2 text-sm text-gray-500">$300.23</td>
            </tr>

            <!-- Even row -->
            <tr class="bg-gray-50">
              <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
                <input type="checkbox" class="form-checkbox" />
              </td>
              <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
                Cody Fisher
              </td>
              <td class="px-2 py-2 text-sm text-gray-500">
                Product Directives Officer
              </td>
              <td class="px-2 py-2 text-sm text-gray-500">$2,330.00</td>
            </tr>

            <!-- More items... -->
          </tbody>
        </table>

        <h3
          class="p-4 text-sm font-bold leading-6 text-white bg-element-dark-blue"
        >
          Powetrain
        </h3>

        <table class="min-w-full align-top divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-2 py-2 text-xs font-medium tracking-normal text-left text-gray-500 uppercase"
              ></th>
              <th
                scope="col"
                class="px-2 py-2 text-xs font-medium tracking-normal text-left text-gray-500 uppercase"
              >
                Code
              </th>

              <th
                scope="col"
                class="px-2 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Description
              </th>
              <th
                scope="col"
                class="px-2 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- Odd row -->

            <tr class="bg-gray-50">
              <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
                <input type="checkbox" class="w-4 h-4 form-checkbox" />
              </td>

              <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
                C37ALF
              </td>
              <td class="px-2 py-2 text-sm text-gray-500">
                FCA US Fleet Puchase Allowance FCA IS National
              </td>
              <td class="px-2 py-2 text-sm text-gray-500">$1,200.23</td>
            </tr>
            <!-- Odd row -->
            <tr class="bg-white">
              <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
                <input type="checkbox" class="w-4 h-4 form-checkbox" />
              </td>
              <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
                Jane Cooper
              </td>

              <td class="px-2 py-2 text-sm text-gray-500">
                Regional Paradigm Technician
              </td>
              <td class="px-2 py-2 text-sm text-gray-500">$300.23</td>
            </tr>

            <!-- Even row -->
            <tr class="bg-gray-50">
              <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
                <input type="checkbox" class="form-checkbox" />
              </td>
              <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
                Cody Fisher
              </td>
              <td class="px-2 py-2 text-sm text-gray-500">
                Product Directives Officer
              </td>
              <td class="px-2 py-2 text-sm text-gray-500">$2,330.00</td>
            </tr>

            <!-- More items... -->
          </tbody>
        </table>

        <h3
          class="p-4 text-sm font-bold leading-6 text-white bg-element-dark-blue"
        >
          Powetrain
        </h3>

        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-2 py-2 text-xs font-medium tracking-normal text-left text-gray-500 uppercase"
              ></th>
              <th
                scope="col"
                class="px-2 py-2 text-xs font-medium tracking-normal text-left text-gray-500 uppercase"
              >
                Code
              </th>

              <th
                scope="col"
                class="px-2 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Description
              </th>
              <th
                scope="col"
                class="px-2 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- Odd row -->

            <tr class="bg-gray-50">
              <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
                <input type="checkbox" class="w-4 h-4 form-checkbox" />
              </td>

              <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
                C37ALF
              </td>
              <td class="px-2 py-2 text-sm text-gray-500">
                FCA US Fleet Puchase Allowance FCA IS National
              </td>
              <td class="px-2 py-2 text-sm text-gray-500">$1,200.23</td>
            </tr>
            <!-- Odd row -->
            <tr class="bg-white">
              <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
                <input type="checkbox" class="w-4 h-4 form-checkbox" />
              </td>
              <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
                Jane Cooper
              </td>

              <td class="px-2 py-2 text-sm text-gray-500">
                Regional Paradigm Technician
              </td>
              <td class="px-2 py-2 text-sm text-gray-500">$300.23</td>
            </tr>

            <!-- Even row -->
            <tr class="bg-gray-50">
              <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
                <input type="checkbox" class="form-checkbox" />
              </td>
              <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
                Cody Fisher
              </td>
              <td class="px-2 py-2 text-sm text-gray-500">
                Product Directives Officer
              </td>
              <td class="px-2 py-2 text-sm text-gray-500">$2,330.00</td>
            </tr>

            <!-- More items... -->
          </tbody>
        </table>
      </div>
    </div>

    <div>
      <h3
        class="p-4 text-sm font-bold leading-6 text-white bg-element-dark-blue"
      >
        Powetrain
      </h3>

      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="px-2 py-2 text-xs font-medium tracking-normal text-left text-gray-500 uppercase"
            ></th>
            <th
              scope="col"
              class="px-2 py-2 text-xs font-medium tracking-normal text-left text-gray-500 uppercase"
            >
              Code
            </th>

            <th
              scope="col"
              class="px-2 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Description
            </th>
            <th
              scope="col"
              class="px-2 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- Odd row -->

          <tr class="bg-gray-50">
            <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
              <input type="checkbox" class="w-4 h-4 form-checkbox" />
            </td>

            <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
              C37ALF
            </td>
            <td class="px-2 py-2 text-sm text-gray-500">
              FCA US Fleet Puchase Allowance FCA IS National
            </td>
            <td class="px-2 py-2 text-sm text-gray-500">$1,200.23</td>
          </tr>
          <!-- Odd row -->
          <tr class="bg-white">
            <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
              <input type="checkbox" class="w-4 h-4 form-checkbox" />
            </td>
            <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
              Jane Cooper
            </td>

            <td class="px-2 py-2 text-sm text-gray-500">
              Regional Paradigm Technician
            </td>
            <td class="px-2 py-2 text-sm text-gray-500">$300.23</td>
          </tr>

          <!-- Even row -->
          <tr class="bg-gray-50">
            <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
              <input type="checkbox" class="form-checkbox" />
            </td>
            <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
              Cody Fisher
            </td>
            <td class="px-2 py-2 text-sm text-gray-500">
              Product Directives Officer
            </td>
            <td class="px-2 py-2 text-sm text-gray-500">$2,330.00</td>
          </tr>

          <!-- More items... -->
        </tbody>
      </table>

      <h3
        class="p-4 text-sm font-bold leading-6 text-white bg-element-dark-blue"
      >
        Powetrain
      </h3>

      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="px-2 py-2 text-xs font-medium tracking-normal text-left text-gray-500 uppercase"
            ></th>
            <th
              scope="col"
              class="px-2 py-2 text-xs font-medium tracking-normal text-left text-gray-500 uppercase"
            >
              Code
            </th>

            <th
              scope="col"
              class="px-2 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Description
            </th>
            <th
              scope="col"
              class="px-2 py-2 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- Odd row -->

          <tr class="bg-white">
            <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
              <input type="checkbox" class="w-4 h-4 form-checkbox" />
            </td>
            <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
              37ALF
            </td>

            <td class="px-2 py-2 text-sm text-gray-500">
              FCA US Fleet Puchase Allowance FCA IS National FCA US Fleet
              Puchase Allowance FCA IS National
            </td>
          </tr>

          <!-- Even row -->
          <tr class="bg-gray-50">
            <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
              <input type="checkbox" class="w-4 h-4 form-checkbox" />
            </td>

            <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
              C37ALF
            </td>
            <td class="px-2 py-2 text-sm text-gray-500">
              FCA US Fleet Puchase Allowance FCA IS National
            </td>
          </tr>
          <!-- Odd row -->
          <tr class="bg-white">
            <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
              <input type="checkbox" class="w-4 h-4 form-checkbox" />
            </td>
            <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
              Jane Cooper
            </td>

            <td class="px-2 py-2 text-sm text-gray-500">
              Regional Paradigm Technician
            </td>
          </tr>

          <!-- Even row -->
          <tr class="bg-gray-50">
            <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
              <input type="checkbox" class="form-checkbox" />
            </td>
            <td class="px-2 py-2 text-sm font-medium text-gray-900 align-top">
              Cody Fisher
            </td>
            <td class="px-2 py-2 text-sm text-gray-500">
              Product Directives Officer
            </td>
          </tr>

          <!-- More items... -->
        </tbody>
      </table>
    </div>

    <!-- End -->
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}
.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}
#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}
.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}
#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #2b6cb0; /*Set to match the Tailwind colour you want the active one to be */
}
</style>
