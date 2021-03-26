<template>
  <div>
    <div class="flex flex-col h-auto">
      <div class="flex-grow overflow-auto">
        <table class="table-fixed">
          <thead class="text-left bg-element-bright-blue">
            <tr class="align-top">
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white top-30"
              ></th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              ></th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.log }}
              </th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.corpcode }}
              </th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.clientNumber }}
              </th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.unitNumber }}
              </th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.orderType }}
              </th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.currentStatus }}
              </th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.driverChangeStatus }}
              </th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.year }}
              </th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.manufacturer }}
              </th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.make }}
              </th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.model }}
              </th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.factoryOrderNumber }}
              </th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.vin }}
              </th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.fleetSpecID }}
              </th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.dioInd }}
              </th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.upfitInd }}
              </th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.creditInd }}
              </th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.insuranceInd }}
              </th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.billingInd }}
              </th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.dealerInd }}
              </th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.registrationInd }}
              </th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.upfitSoftError }}
              </th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.capping }}
              </th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.lastUpdateDate }}
              </th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.lastUpdateTime }}
              </th>
              <th
                scope="col"
                class="p-3 text-xs font-medium text-left text-white"
              >
                {{ property.lastUpdateUserID }}
              </th>
            </tr>
          </thead>
          <tbody class="">
            <!-- Odd row -->
            <tr
              class="sticky left-0 bg-white hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
            >
              <td class="p-3">
                <overflow />
              </td>

              <td class="p-3">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                />
              </td>
              <td class="p-3 text-xs text-gray-700 text-c">
                <span class="relative inline-block">
                  <div
                    class="w-5 h-5 pt-0.5 font-bold text-center align-middle bg-yellow-600 rounded-full"
                  >
                    T
                  </div>
                  <span
                    class="absolute top-0 right-0 block w-2 h-2 bg-red-400 rounded-full ring-2 ring-white animate-ping"
                  ></span>
                </span>
              </td>
              <td class="p-3 text-xs text-gray-800">
                <img
                  class=""
                  src="https://e7.pngegg.com/pngimages/975/276/png-clipart-2015-audi-r8-car-2018-audi-r8-exhaust-system-audi-exhaust-system-car.png"
                />
              </td>
              <td class="p-3 text-xs text-gray-800">9990</td>
              <td class="p-3 text-xs text-gray-800">
                Element Vehicle Management Services LLC
              </td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">F302592</td>
              <td class="p-3 text-xs text-gray-800">F302592</td>
              <td class="p-3 text-xs text-gray-800">2019</td>
              <td class="p-3 text-xs text-gray-800">Ford</td>
              <td class="p-3 text-xs text-gray-800">Ford</td>
              <td class="p-3 text-xs text-gray-800">F-150</td>
              <td class="p-3 text-xs text-gray-800">JH4DA9450NS000826</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">F001584</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">03/11/2021</td>
              <td class="p-3 text-xs text-gray-800">09:10:37</td>
              <td class="p-3 text-xs text-gray-800">SuperUser</td>
            </tr>

            <!-- Even row -->
            <tr
              class="bg-gray-100 hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
            >
              <td class="p-3">
                <overflow />
              </td>

              <td class="p-3">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                />
              </td>
              <td class="p-3 text-xs text-gray-700">
                <span class="relative inline-block">
                  <div
                    class="w-5 h-5 pt-0.5 font-bold text-center text-white align-middle bg-yellow-800 rounded-full"
                  >
                    T
                  </div>
                  <span
                    class="absolute top-0 right-0 block w-2 h-2 bg-red-400 rounded-full ring-2 ring-white animate-ping"
                  ></span>
                </span>
              </td>
              <td class="p-3 text-xs text-gray-800">
                <img
                  class="inline-block w-40"
                  src="https://e7.pngegg.com/pngimages/975/276/png-clipart-2015-audi-r8-car-2018-audi-r8-exhaust-system-audi-exhaust-system-car.png"
                />
              </td>
              <td class="p-3 text-xs text-gray-800">6421</td>
              <td class="p-3 text-xs text-gray-800">64231</td>
              <td class="p-3 text-xs text-gray-800">Stock</td>
              <td class="p-3 text-xs text-gray-800">AD0020</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">2019</td>
              <td class="p-3 text-xs text-gray-800">Chrystel</td>
              <td class="p-3 text-xs text-gray-800">Chrystler</td>
              <td class="p-3 text-xs text-gray-800">300</td>
              <td class="p-3 text-xs text-gray-800">JH4DA9450NS000826</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">F001584</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">03/11/2021</td>
              <td class="p-3 text-xs text-gray-800">09:10:37</td>
              <td class="p-3 text-xs text-gray-800">SuperUser</td>
            </tr>

            <!-- Odd row -->
            <tr
              class="bg-white hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
            >
              <td class="p-3">
                <overflow />
              </td>

              <td class="p-3">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                />
              </td>
              <td class="p-3 text-xs text-gray-700">
                <span class="relative inline-block">
                  <div
                    class="w-5 h-5 pt-0.5 font-bold text-center text-white align-middle bg-green-800 rounded-full"
                  >
                    W
                  </div>
                  <span
                    class="absolute top-0 right-0 block w-2 h-2 bg-green-400 rounded-full ring-2 ring-white animate-ping"
                  ></span>
                </span>
              </td>
              <td class="p-3 text-xs text-gray-800">
                <img
                  class="inline-block w-40"
                  src="https://e7.pngegg.com/pngimages/975/276/png-clipart-2015-audi-r8-car-2018-audi-r8-exhaust-system-audi-exhaust-system-car.png"
                />
              </td>
              <td class="p-3 text-xs text-gray-800">4491</td>
              <td class="p-3 text-xs text-gray-800">31231</td>
              <td class="p-3 text-xs text-gray-800">Factory</td>
              <td class="p-3 text-xs text-gray-800">AD0020</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">2019</td>
              <td class="p-3 text-xs text-gray-800">Ford</td>
              <td class="p-3 text-xs text-gray-800">Ford</td>
              <td class="p-3 text-xs text-gray-800">F-150</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">F001584</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">03/11/2021</td>
              <td class="p-3 text-xs text-gray-800">09:10:37</td>
              <td class="p-3 text-xs text-gray-800">SuperUser</td>
            </tr>

            <!-- Even row -->
            <tr
              class="bg-gray-100 hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
            >
              <td class="p-3">
                <overflow />
              </td>

              <td class="p-3">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                />
              </td>
              <td class="p-3 text-xs text-gray-700">
                <span class="relative inline-block">
                  <div
                    class="w-5 h-5 pt-0.5 font-bold text-center text-white align-middle bg-green-800 rounded-full"
                  >
                    S
                  </div>
                  <span
                    class="absolute top-0 right-0 block w-2 h-2 bg-green-400 rounded-full ring-2 ring-white"
                  ></span>
                </span>
              </td>
              <td class="p-3 text-xs text-gray-800">
                <img
                  class="inline-block w-40"
                  src="https://e7.pngegg.com/pngimages/975/276/png-clipart-2015-audi-r8-car-2018-audi-r8-exhaust-system-audi-exhaust-system-car.png"
                />
              </td>
              <td class="p-3 text-xs text-gray-800">1291</td>
              <td class="p-3 text-xs text-gray-800">16631</td>
              <td class="p-3 text-xs text-gray-800">Factory</td>
              <td class="p-3 text-xs text-gray-800">AD0020</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">2019</td>
              <td class="p-3 text-xs text-gray-800">Volkswagen</td>
              <td class="p-3 text-xs text-gray-800">Audi</td>
              <td class="p-3 text-xs text-gray-800">A8</td>
              <td class="p-3 text-xs text-gray-800">JH4DA9450NS000826</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">F001584</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">03/11/2021</td>
              <td class="p-3 text-xs text-gray-800">09:10:37</td>
              <td class="p-3 text-xs text-gray-800">SuperUser</td>
            </tr>

            <!-- Odd row -->
            <tr
              class="bg-white hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
            >
              <td class="p-3">
                <overflow />
              </td>

              <td class="p-3">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                />
              </td>
              <td class="p-3 text-xs text-gray-700">
                <span class="relative inline-block">
                  <div
                    class="w-5 h-5 pt-0.5 font-bold text-center text-white align-middle bg-green-800 rounded-full"
                  >
                    S
                  </div>
                  <span
                    class="absolute top-0 right-0 block w-2 h-2 bg-green-400 rounded-full ring-2 ring-white"
                  ></span>
                </span>
              </td>
              <td class="p-3 text-xs text-gray-800">
                <img
                  class="inline-block w-40"
                  src="https://e7.pngegg.com/pngimages/975/276/png-clipart-2015-audi-r8-car-2018-audi-r8-exhaust-system-audi-exhaust-system-car.png"
                />
              </td>
              <td class="p-3 text-xs text-gray-800">1291</td>
              <td class="p-3 text-xs text-gray-800">35531</td>
              <td class="p-3 text-xs text-gray-800">Dealer</td>
              <td class="p-3 text-xs text-gray-800">AD0020</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">2019</td>
              <td class="p-3 text-xs text-gray-800">General Motors</td>
              <td class="p-3 text-xs text-gray-800">Chevrolet</td>
              <td class="p-3 text-xs text-gray-800">4500XD LCF Diesel</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">F001584</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">03/11/2021</td>
              <td class="p-3 text-xs text-gray-800">09:10:37</td>
              <td class="p-3 text-xs text-gray-800">SuperUser</td>
            </tr>

            <!-- Even row -->
            <tr
              class="bg-gray-100 hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
            >
              <td class="p-3">
                <overflow />
              </td>

              <td class="p-3">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                />
              </td>
              <td class="p-3 text-xs text-gray-700">
                <span class="relative inline-block">
                  <div
                    class="w-5 h-5 pt-0.5 font-bold text-center text-white align-middle bg-green-800 rounded-full"
                  >
                    S
                  </div>
                  <span
                    class="absolute top-0 right-0 block w-2 h-2 bg-green-400 rounded-full ring-2 ring-white"
                  ></span>
                </span>
              </td>
              <td class="p-3 text-xs text-gray-800">
                <img
                  class="inline-block w-40"
                  src="https://e7.pngegg.com/pngimages/975/276/png-clipart-2015-audi-r8-car-2018-audi-r8-exhaust-system-audi-exhaust-system-car.png"
                />
              </td>
              <td class="p-3 text-xs text-gray-800">1291</td>
              <td class="p-3 text-xs text-gray-800">31231</td>
              <td class="p-3 text-xs text-gray-800">Factory</td>
              <td class="p-3 text-xs text-gray-800">AD0020</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">2019</td>
              <td class="p-3 text-xs text-gray-800">Ford</td>
              <td class="p-3 text-xs text-gray-800">Ford</td>
              <td class="p-3 text-xs text-gray-800">F-150</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">F001584</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">03/11/2021</td>
              <td class="p-3 text-xs text-gray-800">09:10:37</td>
              <td class="p-3 text-xs text-gray-800">SuperUser</td>
            </tr>
            <!-- Odd row -->
            <tr
              class="bg-white hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
            >
              <td class="p-3">
                <overflow />
              </td>

              <td class="p-3">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                />
              </td>
              <td class="p-3 text-xs text-gray-700">
                <span class="relative inline-block">
                  <div
                    class="w-5 h-5 pt-0.5 font-bold text-center text-white align-middle bg-green-800 rounded-full"
                  >
                    S
                  </div>
                  <span
                    class="absolute top-0 right-0 block w-2 h-2 bg-green-400 rounded-full ring-2 ring-white"
                  ></span>
                </span>
              </td>
              <td class="p-3 text-xs text-gray-800">
                <img
                  class="inline-block w-40"
                  src="https://e7.pngegg.com/pngimages/975/276/png-clipart-2015-audi-r8-car-2018-audi-r8-exhaust-system-audi-exhaust-system-car.png"
                />
              </td>
              <td class="p-3 text-xs text-gray-800">9990</td>
              <td class="p-3 text-xs text-gray-800">31231</td>
              <td class="p-3 text-xs text-gray-800">Factory</td>
              <td class="p-3 text-xs text-gray-800">AD0020</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">2019</td>
              <td class="p-3 text-xs text-gray-800">Ford</td>
              <td class="p-3 text-xs text-gray-800">Ford</td>
              <td class="p-3 text-xs text-gray-800">F-150</td>
              <td class="p-3 text-xs text-gray-800">JH4DA9450NS000826</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">F001584</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">03/11/2021</td>
              <td class="p-3 text-xs text-gray-800">09:10:37</td>
              <td class="p-3 text-xs text-gray-800">SuperUser</td>
            </tr>

            <!-- Even row -->
            <tr
              class="bg-gray-100 hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
            >
              <td class="p-3">
                <overflow />
              </td>

              <td class="p-3">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                />
              </td>
              <td class="p-3 text-xs text-gray-700">
                <span class="relative inline-block">
                  <div
                    class="w-5 h-5 pt-0.5 font-bold text-center text-white align-middle bg-green-800 rounded-full"
                  >
                    S
                  </div>
                  <span
                    class="absolute top-0 right-0 block w-2 h-2 bg-green-400 rounded-full ring-2 ring-white"
                  ></span>
                </span>
              </td>
              <td class="p-3 text-xs text-gray-800">
                <img
                  class="inline-block w-40"
                  src="https://e7.pngegg.com/pngimages/975/276/png-clipart-2015-audi-r8-car-2018-audi-r8-exhaust-system-audi-exhaust-system-car.png"
                />
              </td>
              <td class="p-3 text-xs text-gray-800">6421</td>
              <td class="p-3 text-xs text-gray-800">64231</td>
              <td class="p-3 text-xs text-gray-800">Stock</td>
              <td class="p-3 text-xs text-gray-800">AD0020</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">2019</td>
              <td class="p-3 text-xs text-gray-800">Chrystel</td>
              <td class="p-3 text-xs text-gray-800">Chrystler</td>
              <td class="p-3 text-xs text-gray-800">300</td>
              <td class="p-3 text-xs text-gray-800">JH4DA9450NS000826</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">F001584</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">03/11/2021</td>
              <td class="p-3 text-xs text-gray-800">09:10:37</td>
              <td class="p-3 text-xs text-gray-800">SuperUser</td>
            </tr>

            <!-- Odd row -->
            <tr
              class="bg-white hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
            >
              <td class="p-3">
                <overflow />
              </td>

              <td class="p-3">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                />
              </td>
              <td class="p-3 text-xs text-gray-700">
                <span class="relative inline-block">
                  <div
                    class="w-5 h-5 pt-0.5 font-bold text-center text-white align-middle bg-green-800 rounded-full"
                  >
                    S
                  </div>
                  <span
                    class="absolute top-0 right-0 block w-2 h-2 bg-green-400 rounded-full ring-2 ring-white"
                  ></span>
                </span>
              </td>
              <td class="p-3 text-xs text-gray-800">
                <img
                  class="inline-block w-40"
                  src="https://e7.pngegg.com/pngimages/975/276/png-clipart-2015-audi-r8-car-2018-audi-r8-exhaust-system-audi-exhaust-system-car.png"
                />
              </td>
              <td class="p-3 text-xs text-gray-800">4491</td>
              <td class="p-3 text-xs text-gray-800">31231</td>
              <td class="p-3 text-xs text-gray-800">Factory</td>
              <td class="p-3 text-xs text-gray-800">AD0020</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">2019</td>
              <td class="p-3 text-xs text-gray-800">Ford</td>
              <td class="p-3 text-xs text-gray-800">Ford</td>
              <td class="p-3 text-xs text-gray-800">F-150</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">F001584</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">03/11/2021</td>
              <td class="p-3 text-xs text-gray-800">09:10:37</td>
              <td class="p-3 text-xs text-gray-800">SuperUser</td>
            </tr>

            <!-- Even row -->
            <tr
              class="bg-gray-100 hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
            >
              <td class="p-3">
                <overflow />
              </td>

              <td class="p-3">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                />
              </td>
              <td class="p-3 text-xs text-gray-700">
                <span class="relative inline-block">
                  <div
                    class="w-5 h-5 pt-0.5 font-bold text-center text-white align-middle bg-green-800 rounded-full"
                  >
                    S
                  </div>
                  <span
                    class="absolute top-0 right-0 block w-2 h-2 bg-green-400 rounded-full ring-2 ring-white"
                  ></span>
                </span>
              </td>
              <td class="p-3 text-xs text-gray-800">
                <img
                  class="inline-block w-40"
                  src="https://e7.pngegg.com/pngimages/975/276/png-clipart-2015-audi-r8-car-2018-audi-r8-exhaust-system-audi-exhaust-system-car.png"
                />
              </td>
              <td class="p-3 text-xs text-gray-800">1291</td>
              <td class="p-3 text-xs text-gray-800">16631</td>
              <td class="p-3 text-xs text-gray-800">Factory</td>
              <td class="p-3 text-xs text-gray-800">AD0020</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">2019</td>
              <td class="p-3 text-xs text-gray-800">Volkswagen</td>
              <td class="p-3 text-xs text-gray-800">Audi</td>
              <td class="p-3 text-xs text-gray-800">A8</td>
              <td class="p-3 text-xs text-gray-800">JH4DA9450NS000826</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">F001584</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">03/11/2021</td>
              <td class="p-3 text-xs text-gray-800">09:10:37</td>
              <td class="p-3 text-xs text-gray-800">SuperUser</td>
            </tr>

            <!-- Odd row -->
            <tr
              class="bg-white hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
            >
              <td class="p-3">
                <overflow />
              </td>

              <td class="p-3">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                />
              </td>
              <td class="p-3 text-xs text-gray-700">
                <span class="relative inline-block">
                  <div
                    class="w-5 h-5 pt-0.5 font-bold text-center text-white align-middle bg-green-800 rounded-full"
                  >
                    S
                  </div>
                  <span
                    class="absolute top-0 right-0 block w-2 h-2 bg-green-400 rounded-full ring-2 ring-white"
                  ></span>
                </span>
              </td>
              <td class="p-3 text-xs text-gray-800">
                <img
                  class="inline-block w-40"
                  src="https://e7.pngegg.com/pngimages/975/276/png-clipart-2015-audi-r8-car-2018-audi-r8-exhaust-system-audi-exhaust-system-car.png"
                />
              </td>
              <td class="p-3 text-xs text-gray-800">1291</td>
              <td class="p-3 text-xs text-gray-800">35531</td>
              <td class="p-3 text-xs text-gray-800">Dealer</td>
              <td class="p-3 text-xs text-gray-800">AD0020</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">2019</td>
              <td class="p-3 text-xs text-gray-800">General Motors</td>
              <td class="p-3 text-xs text-gray-800">Chevrolet</td>
              <td class="p-3 text-xs text-gray-800">4500XD LCF Diesel</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">F001584</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">03/11/2021</td>
              <td class="p-3 text-xs text-gray-800">09:10:37</td>
              <td class="p-3 text-xs text-gray-800">SuperUser</td>
            </tr>

            <!-- Even row -->
            <tr
              class="bg-gray-100 hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
            >
              <td class="p-3">
                <overflow />
              </td>

              <td class="p-3">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                />
              </td>
              <td class="p-3 text-xs text-gray-700">
                <span class="relative inline-block">
                  <div
                    class="w-5 h-5 pt-0.5 font-bold text-center text-white align-middle bg-green-800 rounded-full"
                  >
                    S
                  </div>
                  <span
                    class="absolute top-0 right-0 block w-2 h-2 bg-green-400 rounded-full ring-2 ring-white"
                  ></span>
                </span>
              </td>
              <td class="p-3 text-xs text-gray-800">
                <img
                  class="inline-block w-40"
                  src="https://e7.pngegg.com/pngimages/975/276/png-clipart-2015-audi-r8-car-2018-audi-r8-exhaust-system-audi-exhaust-system-car.png"
                />
              </td>
              <td class="p-3 text-xs text-gray-800">1291</td>
              <td class="p-3 text-xs text-gray-800">31231</td>
              <td class="p-3 text-xs text-gray-800">Factory</td>
              <td class="p-3 text-xs text-gray-800">AD0020</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">2019</td>
              <td class="p-3 text-xs text-gray-800">Ford</td>
              <td class="p-3 text-xs text-gray-800">Ford</td>
              <td class="p-3 text-xs text-gray-800">F-150</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">F001584</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">03/11/2021</td>
              <td class="p-3 text-xs text-gray-800">09:10:37</td>
              <td class="p-3 text-xs text-gray-800">SuperUser</td>
            </tr>
            <!-- Odd row -->
            <tr
              class="bg-white hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
            >
              <td class="p-3">
                <overflow />
              </td>

              <td class="p-3">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                />
              </td>
              <td class="p-3 text-xs text-gray-700">
                <span class="relative inline-block">
                  <div
                    class="w-5 h-5 pt-0.5 font-bold text-center text-white align-middle bg-green-800 rounded-full"
                  >
                    S
                  </div>
                  <span
                    class="absolute top-0 right-0 block w-2 h-2 bg-green-400 rounded-full ring-2 ring-white"
                  ></span>
                </span>
              </td>
              <td class="p-3 text-xs text-gray-800">
                <img
                  class="inline-block w-40"
                  src="https://e7.pngegg.com/pngimages/975/276/png-clipart-2015-audi-r8-car-2018-audi-r8-exhaust-system-audi-exhaust-system-car.png"
                />
              </td>
              <td class="p-3 text-xs text-gray-800">9990</td>
              <td class="p-3 text-xs text-gray-800">31231</td>
              <td class="p-3 text-xs text-gray-800">Factory</td>
              <td class="p-3 text-xs text-gray-800">AD0020</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">2019</td>
              <td class="p-3 text-xs text-gray-800">Ford</td>
              <td class="p-3 text-xs text-gray-800">Ford</td>
              <td class="p-3 text-xs text-gray-800">F-150</td>
              <td class="p-3 text-xs text-gray-800">JH4DA9450NS000826</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">F001584</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">03/11/2021</td>
              <td class="p-3 text-xs text-gray-800">09:10:37</td>
              <td class="p-3 text-xs text-gray-800">SuperUser</td>
            </tr>

            <!-- Even row -->
            <tr
              class="bg-gray-100 hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
            >
              <td class="p-3">
                <overflow />
              </td>

              <td class="p-3">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                />
              </td>
              <td class="p-3 text-xs text-gray-700">
                <span class="relative inline-block">
                  <div
                    class="w-5 h-5 pt-0.5 font-bold text-center text-white align-middle bg-green-800 rounded-full"
                  >
                    S
                  </div>
                  <span
                    class="absolute top-0 right-0 block w-2 h-2 bg-green-400 rounded-full ring-2 ring-white"
                  ></span>
                </span>
              </td>
              <td class="p-3 text-xs text-gray-800">
                <img
                  class="inline-block w-40"
                  src="https://e7.pngegg.com/pngimages/975/276/png-clipart-2015-audi-r8-car-2018-audi-r8-exhaust-system-audi-exhaust-system-car.png"
                />
              </td>
              <td class="p-3 text-xs text-gray-800">6421</td>
              <td class="p-3 text-xs text-gray-800">64231</td>
              <td class="p-3 text-xs text-gray-800">Stock</td>
              <td class="p-3 text-xs text-gray-800">AD0020</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">2019</td>
              <td class="p-3 text-xs text-gray-800">Chrystel</td>
              <td class="p-3 text-xs text-gray-800">Chrystler</td>
              <td class="p-3 text-xs text-gray-800">300</td>
              <td class="p-3 text-xs text-gray-800">JH4DA9450NS000826</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">F001584</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">03/11/2021</td>
              <td class="p-3 text-xs text-gray-800">09:10:37</td>
              <td class="p-3 text-xs text-gray-800">SuperUser</td>
            </tr>
            <!-- Odd row -->
            <tr
              class="bg-white hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
            >
              <td class="p-3">
                <overflow />
              </td>

              <td class="p-3">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                />
              </td>
              <td class="p-3 text-xs text-gray-700">
                <span class="relative inline-block">
                  <div
                    class="w-5 h-5 pt-0.5 font-bold text-center text-white align-middle bg-green-800 rounded-full"
                  >
                    S
                  </div>
                  <span
                    class="absolute top-0 right-0 block w-2 h-2 bg-green-400 rounded-full ring-2 ring-white"
                  ></span>
                </span>
              </td>
              <td class="p-3 text-xs text-gray-800">
                <img
                  class="inline-block w-40"
                  src="https://e7.pngegg.com/pngimages/975/276/png-clipart-2015-audi-r8-car-2018-audi-r8-exhaust-system-audi-exhaust-system-car.png"
                />
              </td>
              <td class="p-3 text-xs text-gray-800">9990</td>
              <td class="p-3 text-xs text-gray-800">31231</td>
              <td class="p-3 text-xs text-gray-800">Factory</td>
              <td class="p-3 text-xs text-gray-800">AD0020</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">2019</td>
              <td class="p-3 text-xs text-gray-800">Ford</td>
              <td class="p-3 text-xs text-gray-800">Ford</td>
              <td class="p-3 text-xs text-gray-800">F-150</td>
              <td class="p-3 text-xs text-gray-800">JH4DA9450NS000826</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">F001584</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">03/11/2021</td>
              <td class="p-3 text-xs text-gray-800">09:10:37</td>
              <td class="p-3 text-xs text-gray-800">SuperUser</td>
            </tr>

            <!-- Even row -->
            <tr
              class="bg-gray-100 hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
            >
              <td class="p-3">
                <overflow />
              </td>

              <td class="p-3">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                />
              </td>
              <td class="p-3 text-xs text-gray-700">
                <span class="relative inline-block">
                  <div
                    class="w-5 h-5 pt-0.5 font-bold text-center text-white align-middle bg-green-800 rounded-full"
                  >
                    S
                  </div>
                  <span
                    class="absolute top-0 right-0 block w-2 h-2 bg-green-400 rounded-full ring-2 ring-white"
                  ></span>
                </span>
              </td>
              <td class="p-3 text-xs text-gray-800">
                <img
                  class="inline-block w-40"
                  src="https://e7.pngegg.com/pngimages/975/276/png-clipart-2015-audi-r8-car-2018-audi-r8-exhaust-system-audi-exhaust-system-car.png"
                />
              </td>
              <td class="p-3 text-xs text-gray-800">6421</td>
              <td class="p-3 text-xs text-gray-800">64231</td>
              <td class="p-3 text-xs text-gray-800">Stock</td>
              <td class="p-3 text-xs text-gray-800">AD0020</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">2019</td>
              <td class="p-3 text-xs text-gray-800">Chrystel</td>
              <td class="p-3 text-xs text-gray-800">Chrystler</td>
              <td class="p-3 text-xs text-gray-800">300</td>
              <td class="p-3 text-xs text-gray-800">JH4DA9450NS000826</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">F001584</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">03/11/2021</td>
              <td class="p-3 text-xs text-gray-800">09:10:37</td>
              <td class="p-3 text-xs text-gray-800">SuperUser</td>
            </tr>

            <!-- Odd row -->
            <tr
              class="bg-white hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
            >
              <td class="p-3">
                <overflow />
              </td>

              <td class="p-3">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                />
              </td>
              <td class="p-3 text-xs text-gray-700">
                <span class="relative inline-block">
                  <div
                    class="w-5 h-5 pt-0.5 font-bold text-center text-white align-middle bg-green-800 rounded-full"
                  >
                    S
                  </div>
                  <span
                    class="absolute top-0 right-0 block w-2 h-2 bg-green-400 rounded-full ring-2 ring-white"
                  ></span>
                </span>
              </td>
              <td class="p-3 text-xs text-gray-800">
                <img
                  class="inline-block w-40"
                  src="https://e7.pngegg.com/pngimages/975/276/png-clipart-2015-audi-r8-car-2018-audi-r8-exhaust-system-audi-exhaust-system-car.png"
                />
              </td>
              <td class="p-3 text-xs text-gray-800">9990</td>
              <td class="p-3 text-xs text-gray-800">31231</td>
              <td class="p-3 text-xs text-gray-800">Factory</td>
              <td class="p-3 text-xs text-gray-800">AD0020</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">2019</td>
              <td class="p-3 text-xs text-gray-800">Ford</td>
              <td class="p-3 text-xs text-gray-800">Ford</td>
              <td class="p-3 text-xs text-gray-800">F-150</td>
              <td class="p-3 text-xs text-gray-800">JH4DA9450NS000826</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">F001584</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">03/11/2021</td>
              <td class="p-3 text-xs text-gray-800">09:10:37</td>
              <td class="p-3 text-xs text-gray-800">SuperUser</td>
            </tr>

            <!-- Even row -->
            <tr
              class="bg-gray-100 hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
            >
              <td class="p-3">
                <overflow />
              </td>

              <td class="p-3">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                />
              </td>
              <td class="p-3 text-xs text-gray-700">
                <span class="relative inline-block">
                  <div
                    class="w-5 h-5 pt-0.5 font-bold text-center text-white align-middle bg-green-800 rounded-full"
                  >
                    S
                  </div>
                  <span
                    class="absolute top-0 right-0 block w-2 h-2 bg-green-400 rounded-full ring-2 ring-white"
                  ></span>
                </span>
              </td>
              <td class="p-3 text-xs text-gray-800">
                <img
                  class="inline-block w-40"
                  src="https://e7.pngegg.com/pngimages/975/276/png-clipart-2015-audi-r8-car-2018-audi-r8-exhaust-system-audi-exhaust-system-car.png"
                />
              </td>
              <td class="p-3 text-xs text-gray-800">6421</td>
              <td class="p-3 text-xs text-gray-800">64231</td>
              <td class="p-3 text-xs text-gray-800">Stock</td>
              <td class="p-3 text-xs text-gray-800">AD0020</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">2019</td>
              <td class="p-3 text-xs text-gray-800">Chrystel</td>
              <td class="p-3 text-xs text-gray-800">Chrystler</td>
              <td class="p-3 text-xs text-gray-800">300</td>
              <td class="p-3 text-xs text-gray-800">JH4DA9450NS000826</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">F001584</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">03/11/2021</td>
              <td class="p-3 text-xs text-gray-800">09:10:37</td>
              <td class="p-3 text-xs text-gray-800">SuperUser</td>
            </tr>

            <!-- Odd row -->
            <tr
              class="bg-white hover:bg-element-green hover:shadow-md hover:bg-opacity-20"
            >
              <td class="p-3">
                <overflow />
              </td>

              <td class="p-3">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-indigo-600 border-gray-300 rounded"
                />
              </td>
              <td class="p-3 text-xs text-gray-700">
                <span class="relative inline-block">
                  <div
                    class="w-5 h-5 pt-0.5 font-bold text-center text-white align-middle bg-green-800 rounded-full"
                  >
                    S
                  </div>
                  <span
                    class="absolute top-0 right-0 block w-2 h-2 bg-green-400 rounded-full ring-2 ring-white"
                  ></span>
                </span>
              </td>
              <td class="p-3 text-xs text-gray-800">
                <img
                  class="inline-block w-40"
                  src="https://e7.pngegg.com/pngimages/975/276/png-clipart-2015-audi-r8-car-2018-audi-r8-exhaust-system-audi-exhaust-system-car.png"
                />
              </td>
              <td class="p-3 text-xs text-gray-800">9990</td>
              <td class="p-3 text-xs text-gray-800">31231</td>
              <td class="p-3 text-xs text-gray-800">Factory</td>
              <td class="p-3 text-xs text-gray-800">AD0020</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">2019</td>
              <td class="p-3 text-xs text-gray-800">Ford</td>
              <td class="p-3 text-xs text-gray-800">Ford</td>
              <td class="p-3 text-xs text-gray-800">F-150</td>
              <td class="p-3 text-xs text-gray-800">JH4DA9450NS000826</td>
              <td class="p-3 text-xs text-gray-800"></td>
              <td class="p-3 text-xs text-gray-800">F001584</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">N</td>
              <td class="p-3 text-xs text-gray-800">03/11/2021</td>
              <td class="p-3 text-xs text-gray-800">09:10:37</td>
              <td class="p-3 text-xs text-gray-800">SuperUser</td>
            </tr>

            <!-- Even row -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    property: {
      type: Object,
      required: true,
      default: {},
    },
  },
}
</script>

<style>
.extrasmall {
  font-size: 8px;
  line-height: 8px;
}
</style>
