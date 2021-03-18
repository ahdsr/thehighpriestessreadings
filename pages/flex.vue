<template>
  <div>
    <h1 class="p-2 text-lg font-bold sm:p-2 sm:text-2xl lg:text-4xl lg:p-10">
      Flex Play
    </h1>

    <div class="flex flex-col bg-green-300 xl:flex-row">
      <div class="p-2 bg-yellow-500 sm:p-2 lg:p-10">
        <h2 class="font-bold sm:font-bold sm:text-2xl lg:font-bold lg:text-3xl">
          111
        </h2>
        <p class="mt-2 font-extralight lg:font-light lg:text-2xl lg:mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <div class="p-2 bg-yellow-500 sm:p-2 lg:p-10">
        <h2 class="font-bold sm:font-bold sm:text-2xl lg:font-bold lg:text-3xl">
          222
        </h2>
        <p class="mt-2 font-extralight lg:font-light lg:text-2xl lg:mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <div class="p-2 bg-green-500 sm:p-2 lg:p-10">
        <h2 class="font-bold sm:font-bold sm:text-2xl lg:font-bold lg:text-3xl">
          333
        </h2>
        <p class="mt-2 font-extralight lg:font-light lg:text-2xl lg:mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <div class="p-2 bg-blue-500 sm:p-2 lg:p-10">
        <h2 class="font-bold sm:font-bold sm:text-2xl lg:font-bold lg:text-3xl">
          444
        </h2>
        <p class="mt-2 font-extralight lg:font-light lg:text-2xl lg:mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>

    <div
      class="flex bg-green-300 sm:flex-nowrap lg:flex-nowrap lg:bg-gradient-to-tr from-yellow-400 via-red-500 to-blue-500"
    >
      <div class="bg-yellow-500">
        <img
          class="sm:align-middle"
          src="https://images.unsplash.com/photo-1615724265324-657f3f0ed4ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        />
      </div>
      <div class="bg-yellow-500 lg:justify-center">
        <img
          class="lg:p-10"
          src="https://images.unsplash.com/photo-1615724265324-657f3f0ed4ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
