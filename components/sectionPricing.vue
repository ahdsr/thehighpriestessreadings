<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative overflow-hidden bg-white lg:mb-32 lg:mt-11">
      <main class="px-4 mx-auto mt-16 max-w-7xl sm:mt-24">
        <div class="text-center">
          <h2
            class="font-sans font-light tracking-tight text-7xl text-monica-purpple"
          >
            Pricing
          </h2>
          <div class="max-w-4xl pt-20 mx-auto">
            <div class="grid grid-cols-3 gap-10">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      class="block rounded-2xl"
                      src="~assets/images/card1.png"
                      alt="Card 1 - The future"
                    />
                  </div>
                  <div class="flip-card-back rounded-2xl">
                    <h1>45 Minute Reading</h1>
                    <p>$80</p>
                    <p>
                      Written Reading sent to your email answering up to 2
                      questions in detail. Option to include a photo of your
                      cards.
                    </p>
                  </div>
                </div>
              </div>

              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      class="block rounded-2xl"
                      src="~assets/images/card1.png"
                      alt="Card 1 - The future"
                    />
                  </div>
                  <div class="flip-card-back rounded-2xl">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                  </div>
                </div>
              </div>

              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="relative inset-0 flip-card-front">
                    <img
                      class="block rounded-2xl"
                      src="~assets/images/card1.png"
                      alt="Card 1 - The future"
                    />
                  </div>
                  <div class="flip-card-back rounded-2xl">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
