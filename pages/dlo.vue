<template>
  <div>
    <!-- Start >-->
    <div class="mt-10">
      <div
        class="fixed inset-x-0 bottom-0 z-10 block h-16 pt-3 pr-2 align-middle bg-gray-200 shadow-2xl"
      >
        <div class="flex justify-end">
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
      <!-- Top Navigation>-->
      <div
        class="fixed top-0 left-0 z-50 flex justify-between w-full h-12 p-2 mx-auto text-white bg-white border-b-4 shadow-2xl border-element-dark-blue"
      >
        <img
          class="w-6 fill-current"
          viewBox="0 0 20 20"
          src="~/assets/images/menu.svg"
        />
        <img
          class="w-24 fill-current"
          viewBox="0 0 20 20"
          src="~/assets/images/Icon-Logo-Xcelerate.svg"
        />
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6C8.89543 6 8 5.10457 8 4C8 2.89543 8.89543 2 10 2C11.1046 2 12 2.89543 12 4C12 5.10457 11.1046 6 10 6Z"
              fill="#4A5568"
            />
            <path
              d="M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12Z"
              fill="#4A5568"
            />
            <path
              d="M10 18C8.89543 18 8 17.1046 8 16C8 14.8954 8.89543 14 10 14C11.1046 14 12 14.8954 12 16C12 17.1046 11.1046 18 10 18Z"
              fill="#4A5568"
            />
          </svg>
        </div>
      </div>

      <form class="mb-10 space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 class="p-3 mx-auto text-lg font-bold leading-6 text-gray-900">
              Driver Ordering
            </h3>
            <p class="p-3 mx-auto mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <!-- This example requires Tailwind CSS v2.0+ -->
          <div class="p-3 mx-auto">
            <nav aria-label="Progress ">
              <ol class="flex items-center">
                <li class="relative pr-8 sm:pr-20">
                  <!-- Completed Step -->
                  <div
                    class="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div class="h-0.5 w-full bg-element-bright-blue"></div>
                  </div>
                  <a
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
                  </a>
                </li>

                <li class="relative pr-8 sm:pr-20">
                  <!-- Completed Step -->
                  <div
                    class="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div class="h-0.5 w-full bg-indigo-600"></div>
                  </div>
                  <a
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
                    <span class="sr-only">Step 2</span>
                  </a>
                </li>

                <li class="relative pr-8 sm:pr-20">
                  <!-- Current Step -->
                  <div
                    class="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div class="h-0.5 w-full bg-gray-200"></div>
                  </div>
                  <a
                    href="#"
                    class="relative flex items-center justify-center w-8 h-8 bg-white border-2 rounded-full border-element-green"
                    aria-current="step"
                  >
                    <span
                      class="h-2.5 w-2.5 bg-indigo-600 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Step 3</span>
                  </a>
                </li>

                <li class="relative pr-8 sm:pr-20">
                  <!-- Upcoming Step -->
                  <div
                    class="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div class="h-0.5 w-full bg-gray-200"></div>
                  </div>
                  <a
                    href="#"
                    class="relative flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group hover:border-gray-400"
                  >
                    <span
                      class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Step 4</span>
                  </a>
                </li>

                <li class="relative">
                  <!-- Upcoming Step -->
                  <div
                    class="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div class="h-0.5 w-full bg-gray-200"></div>
                  </div>
                  <a
                    href="#"
                    class="relative flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group hover:border-gray-400"
                  >
                    <span
                      class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Step 5</span>
                  </a>
                </li>
              </ol>
            </nav>
          </div>
          <div class="p-3 mx-auto">
            <div class="mt-4">
              <p class="mt-1 text-sm font-semibold text-gray-900">First Name</p>
              <p class="mt-0 text-sm text-gray-500">Christoper</p>
            </div>

            <div class="mt-4">
              <p class="mt-1 text-sm font-semibold text-gray-900">First Name</p>
              <p class="mt-0 text-sm text-gray-500">Christoper</p>
            </div>

            <div class="mt-4">
              <p class="mt-1 text-sm font-semibold text-gray-900">First Name</p>
              <p class="mt-0 text-sm text-gray-500">Christoper</p>
            </div>

            <div class="mt-4">
              <p class="mt-1 text-sm font-semibold text-gray-900">First Name</p>
              <p class="mt-0 text-sm text-gray-500">Christoper</p>
            </div>

            <div class="mt-4">
              <p class="mt-1 text-sm font-semibold text-gray-900">First Name</p>
              <p class="mt-0 text-sm text-gray-500">Christoper</p>
            </div>

            <div class="mt-4">
              <p class="mt-1 text-sm font-semibold text-gray-900">First Name</p>
              <p class="mt-0 text-sm text-gray-500">Christoper</p>
            </div>
          </div>
        </div>

        <div>
          <h3 class="p-2 text-sm font-bold leading-6 text-white bg-blue-900">
            Documents to View
          </h3>

          <div class="p-2 border-b border-solid mx:aut">
            <a class="text-sm font-semibold text-blue-800" href="#">Linkname</a>
            <p class="text-sm">Link Description</p>
          </div>

          <div class="p-2 border-b border-solid mx:aut">
            <a class="text-sm font-semibold text-blue-800" href="#">Linkname</a>
            <p class="text-sm">Link Description</p>
          </div>

          <div class="p-2 border-b border-solid mx:aut">
            <input type="checkbox" class="form-checkbox" checked />
            <a class="text-sm font-semibold text-blue-800" href="#">Linkname</a>
            <p class="text-sm">Link Description</p>
          </div>

          <h3 class="p-2 text-sm font-bold leading-6 text-white bg-blue-900">
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
                <td
                  class="px-2 py-2 text-sm font-medium text-gray-900 align-top"
                >
                  <input type="checkbox" class="form-checkbox" checked />
                </td>

                <td
                  class="px-2 py-2 text-sm font-medium text-gray-900 align-top"
                >
                  C37ALF
                </td>
                <td class="px-2 py-2 text-sm text-gray-500">
                  FCA US Fleet Puchase Allowance FCA IS National
                </td>
                <td class="px-2 py-2 text-sm text-gray-500">$1,200.23</td>
              </tr>
              <!-- Odd row -->
              <tr class="bg-white">
                <td
                  class="px-2 py-2 text-sm font-medium text-gray-900 align-top"
                >
                  <input type="checkbox" class="form-checkbox" checked />
                </td>
                <td
                  class="px-2 py-2 text-sm font-medium text-gray-900 align-top"
                >
                  Jane Cooper
                </td>

                <td class="px-2 py-2 text-sm text-gray-500">
                  Regional Paradigm Technician
                </td>
                <td class="px-2 py-2 text-sm text-gray-500">$300.23</td>
              </tr>

              <!-- Even row -->
              <tr class="bg-gray-50">
                <td
                  class="px-2 py-2 text-sm font-medium text-gray-900 align-top"
                >
                  <input type="checkbox" class="form-checkbox" />
                </td>
                <td
                  class="px-2 py-2 text-sm font-medium text-gray-900 align-top"
                >
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

          <h3 class="p-2 text-sm font-bold leading-6 text-white bg-blue-900">
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
                <td
                  class="px-2 py-2 text-sm font-medium text-gray-900 align-top"
                >
                  <input type="checkbox" class="form-checkbox" checked />
                </td>
                <td
                  class="px-2 py-2 text-sm font-medium text-gray-900 align-top"
                >
                  37ALF
                </td>

                <td class="px-2 py-2 text-sm text-gray-500">
                  FCA US Fleet Puchase Allowance FCA IS National FCA US Fleet
                  Puchase Allowance FCA IS National
                </td>
              </tr>

              <!-- Even row -->
              <tr class="bg-gray-50">
                <td
                  class="px-2 py-2 text-sm font-medium text-gray-900 align-top"
                >
                  <input type="checkbox" class="form-checkbox" checked />
                </td>

                <td
                  class="px-2 py-2 text-sm font-medium text-gray-900 align-top"
                >
                  C37ALF
                </td>
                <td class="px-2 py-2 text-sm text-gray-500">
                  FCA US Fleet Puchase Allowance FCA IS National
                </td>
              </tr>
              <!-- Odd row -->
              <tr class="bg-white">
                <td
                  class="px-2 py-2 text-sm font-medium text-gray-900 align-top"
                >
                  <input type="checkbox" class="form-checkbox" checked />
                </td>
                <td
                  class="px-2 py-2 text-sm font-medium text-gray-900 align-top"
                >
                  Jane Cooper
                </td>

                <td class="px-2 py-2 text-sm text-gray-500">
                  Regional Paradigm Technician
                </td>
              </tr>

              <!-- Even row -->
              <tr class="bg-gray-50">
                <td
                  class="px-2 py-2 text-sm font-medium text-gray-900 align-top"
                >
                  <input type="checkbox" class="form-checkbox" />
                </td>
                <td
                  class="px-2 py-2 text-sm font-medium text-gray-900 align-top"
                >
                  Cody Fisher
                </td>
                <td class="px-2 py-2 text-sm text-gray-500">
                  Product Directives Officer
                </td>
              </tr>

              <!-- More items... -->
            </tbody>
          </table>

          <h3 class="p-2 text-sm font-bold leading-6 text-white bg-blue-900">
            Wheels & Rims
          </h3>
          <div class="flex bg-gray-200">
            <div>
              <img
                class="w-24"
                src="https://tdrvehicles.azureedge.net/photos/import/202002/1101/2153/7839a731-49e9-40e9-9811-f9090409f27c.jpg-1024x786"
              />
            </div>
            <div>2020 Chrystler 300</div>
            <div>Limited 4DR All-Wheel Drive Sedan</div>
          </div>
          <div class="flex bg-gray-200">
            <div>
              <img
                class="w-24"
                src="https://tdrvehicles.azureedge.net/photos/import/202002/1101/2153/7839a731-49e9-40e9-9811-f9090409f27c.jpg-1024x786"
              />
            </div>
            <div>2020 Chrystler 300</div>
            <div>Limited 4DR All-Wheel Drive Sedan</div>
          </div>
          <div class="flex bg-gray-200">
            <div>
              <img
                class="w-24"
                src="https://tdrvehicles.azureedge.net/photos/import/202002/1101/2153/7839a731-49e9-40e9-9811-f9090409f27c.jpg-1024x786"
              />
            </div>
            <div>2020 Chrystler 300</div>
            <div>Limited 4DR All-Wheel Drive Sedan</div>
          </div>
        </div>
      </form>
    </div>

    <!-- End -->
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
