	<template>
	<div>
		<!-- Start >-->

		<div class="mt-10">
		<div
			class="fixed inset-x-0 bottom-0 block h-16 pt-3 pr-2 align-middle bg-gray-300 shadow-md z-5"
		>
			<div class="flex justify-between">
			<button
				type="button"
				class="px-10 py-2 ml-2 text-sm font-medium text-gray-700 bg-white border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			>
				Back
			</button>
			<button
				type="submit"
				class="inline-flex px-10 py-2 ml-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-element-green hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			>
				Next
			</button>
			</div>
		</div>
		<!-- Top Navigation>-->
		<div
			class="fixed top-0 left-0 z-20 flex items-center w-full h-16 p-4 mx-auto text-white bg-white shadow-2xl "
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
				class="inline-block w-8 h-8 rounded-full"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=MnLvkwmKZ1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				alt=""
				/>
			</div>
			</div>
		</div>



		<form class="pt-4 mb-10 space-y-8 divide-y divide-gray-200">


	<!-- This example requires Tailwind CSS v2.0+ -->
			<div class="mt-8 ml-12">
			<nav aria-label="Progress">
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



			<div>
			<div>
				<h3
				class="p-4 mx-auto -mb-5 text-lg font-bold text-element-dark-blue"
				>
				Verify Driver Information
				</h3>
				<p class="p-4 mx-auto text-sm text-gray-500">
				Element fleet preferences indicate driver information is managed through your company's policy
				</p>
			</div>

<div class="grid grid-cols-2 gap-4 p-4 mx-auto">
  <div><p class="mt-1 text-sm font-semibold text-gray-900">First Name</p>
				<p class="mt-0 text-sm text-gray-500">Christoper</p>
				</div>
  <!-- ... -->
  <div><p class="mt-1 text-sm font-semibold text-gray-900">Middle Name</p>
				<p class="mt-0 text-sm text-gray-500">Alfonso</p>
				</div>

				<div><p class="mt-1 text-sm font-semibold text-gray-900">Last Name</p>
				<p class="mt-0 text-sm text-gray-500">Johnsonr</p>
				</div>

				<div><p class="mt-1 text-sm font-semibold text-gray-900"> </p>
				<p class="mt-0 text-sm text-gray-500"> </p>
				</div>

				<div ><p class="mt-1 text-sm font-semibold text-gray-900">Employee ID</p>
				<p class="mt-0 text-sm text-gray-500">19283746r</p>
				</div>

				<div><p class="mt-1 text-sm font-semibold text-gray-900">Email</p>
				<p class="mt-0 text-sm text-gray-500">johnson@home.com</p>
				</div>

				<div><p class="mt-1 text-sm font-semibold text-gray-900">Primary Phone</p>
				<p class="mt-0 text-sm text-gray-500">598-878-7445</p>
				</div>

				<div><p class="mt-1 text-sm font-semibold text-gray-900"></p>
				<p class="mt-0 text-sm text-gray-500"></p>
				</div>
				<div><p class="mt-1 text-sm font-semibold text-gray-900">Address Line 1</p>
				<p class="mt-0 text-sm text-gray-500">6500 N Westwood Acres Ln</p>
				</div>

				<div><p class="mt-1 text-sm font-semibold text-gray-900">Address Line 2</p>
				<p class="mt-0 text-sm text-gray-500">Unit #1423</p>
				</div>

				<div><p class="mt-1 text-sm font-semibold text-gray-900">City</p>
				<p class="mt-0 text-sm text-gray-500">Smithville</p>
				</div>

				<div><p class="mt-1 text-sm font-semibold text-gray-900">County</p>
				<p class="mt-0 text-sm text-gray-500">Harrisburg</p>
				</div>

				<div><p class="mt-1 text-sm font-semibold text-gray-900">State</p>
				<p class="mt-0 text-sm text-gray-500">NY</p>
				</div>

				<div><p class="mt-1 text-sm font-semibold text-gray-900">Zip Code</p>
				<p class="mt-0 text-sm text-gray-500">90365</p>
				</div>
</div>

			</div>

			<div>
			<h3
				class="p-4 text-sm font-bold leading-6 text-white bg-element-dark-blue"
			>
				Documents to View
			</h3>

			<div class="p-4 border-b border-solid mx:aut">
				<a class="text-sm font-semibold text-blue-800" href="#">Linkname</a>
				<p class="text-sm">Link Description</p>
			</div>

			<div class="p-4 border-b border-solid mx:aut">
				<a class="text-sm font-semibold text-blue-800" href="#">Linkname</a>
				<p class="text-sm">Link Description</p>
			</div>

			<div class="p-4 border-b border-solid mx:aut">
				<input type="checkbox" class="form-checkbox" checked />
				<a class="text-sm font-semibold text-blue-800" href="#">Linkname</a>
				<p class="text-sm">Link Description</p>
			</div>

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

			<div>
				<h3
				class="p-3 mx-auto -mb-5 text-lg font-bold text-element-dark-blue"
				>
				Select your vehicle
				</h3>
				<p class="p-3 mx-auto text-sm text-gray-500">
				Choose from one of the following options below
				</p>
			</div>

			<div class="grid grid-flow-col grid-rows-1">
				<div class="row-span-3">
				<img
					class="p-4"
					src="https://tdrvehicles.azureedge.net/photos/import/202002/1101/2153/7839a731-49e9-40e9-9811-f9090409f27c.jpg-1024x786"
				/>
				</div>
				<div class="col-span-2 p-4 text-sm font-bold leading-snug">
				2020 Chrystler 300
				<p class="text-sm font-normal leading-snug">
					Limited 4DR All-Wheel Drive Sedan as aasd asd asd asd gfadg
				</p>
				</div>
			</div>

			<div class="grid grid-flow-col grid-rows-1">
				<div class="row-span-3">
				<img
					class="p-4"
					src="https://tdrvehicles.azureedge.net/photos/import/202002/1101/2153/7839a731-49e9-40e9-9811-f9090409f27c.jpg-1024x786"
				/>
				</div>
				<div class="col-span-2 p-4 text-sm font-bold leading-snug">
				2020 Chrystler 300
				<p class="text-sm font-normal leading-snug">
					Limited 4DR All-Wheel Drive Sedanasd asd asd asdasd
				</p>
				</div>
			</div>

			<div class="grid grid-flow-col grid-rows-1">
				<div class="row-span-3">
				<img
					class="p-4"
					src="https://tdrvehicles.azureedge.net/photos/import/202002/1101/2153/7839a731-49e9-40e9-9811-f9090409f27c.jpg-1024x786"
				/>
				</div>
				<div class="col-span-2 p-4 text-sm font-bold leading-snug">
				2020 Chrystler 300
				<p class="text-sm font-normal leading-snug">
					Limited 4DR All-Wheel Drive Sedanasd asd asd asdasd
				</p>
				</div>
			</div>
			</div>
		</form>
		</div>
		</div>

		<!-- End -->
	</div>
	</template>

	<script>
	export default {}
	</script>

	<style lang="scss" scoped></style>
