<template>
  <div>
    <canvas id="canvas" class="bg-center bg-hero-monica-09">
      <div class="h-screen">asasdas</div>
    </canvas>
    <div
      id="navbar"
      class="fixed top-0 z-50 w-screen border-b border-blue-100 bg-monica-mauvelous"
    >
      <topNavigation />
    </div>
    <!-- Hero -->
    <div
      id="box"
      class="h-screen text-center bg-center rounded-4xl bg-hero-monica-08 sm:bg-cover lg:bg-center xl:bg-hero-monica-01 xl:rounded-4xl bgeffect"
    >
      <div
        id="heroline1"
        class="mx-auto font-thin tracking-tight sm:text-xl md:text-3xl lg:text-8xl md:pt-32 lg:pt-48 xl:pt-96"
      >
        The
        <span class="font-medium text-monica-purpple">High Priestess</span>
        Readings
      </div>
      <div
        id="heroline2"
        class="mx-auto text-xl font-medium tracking-tight pt-14 text-monica-melon text-opacity-70 md:text-2xl lg:text-5xl md:pt-8"
      >
        Journey through the subconscious
      </div>
      <div
        id="heroline2"
        class="pt-0 mx-auto text-2xl font-normal tracking-tight text-monica-xoletic text-opacity-70"
      >
        Tarot and Psychic Readings
      </div>

      <nuxt-link :to="{ path: '/', hash: 'readings' }">
        <div class="block w-20 mx-auto md:w-26 sm:pt-28">
          <lottie-player
            src="https://assets3.lottiefiles.com/temp/lf20_J1XkLr.json"
            background="transparent"
            speed="1"
            class=""
            loop
            autoplay
          ></lottie-player>
          <p class="font-serif text-gray-600">Scroll down</p>
        </div>
      </nuxt-link>
    </div>
    <!-- About Readings -->
    <div id="readings" class="font-serif">
      <div class="max-w-4xl pt-20 mx-auto"></div>
      <sectionReadings />
    </div>
    <!-- Pricing -->
    <div id="pricing" class="font-serif">
      <div class="max-w-4xl pt-20 mx-auto"></div>
      <sectionPricing />
    </div>
    <!-- Testimonials -->
    <div id="tesimonials" class="font-serif">
      <sectionTestimonial />
    </div>
    <!-- About Monica -->
    <div id="aboutmonica" class="font-serif">
      <sectionAbout />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var Canvas = document.getElementById('canvas')
    var ctx = Canvas.getContext('2d')

    var resize = function () {
      Canvas.width = Canvas.clientWidth
      Canvas.height = Canvas.clientHeight
    }
    window.addEventListener('resize', resize)
    resize()

    var elements = []
    var presets = {}

    presets.o = function (x, y, s, dx, dy) {
      return {
        x: x,
        y: y,
        r: 12 * s,
        w: 5 * s,
        dx: dx,
        dy: dy,
        draw: function (ctx, t) {
          this.x += this.dx
          this.y += this.dy

          ctx.beginPath()
          ctx.arc(
            this.x + +Math.sin((50 + x + t / 10) / 100) * 3,
            this.y + +Math.sin((45 + x + t / 10) / 100) * 4,
            this.r,
            0,
            2 * Math.PI,
            false
          )
          ctx.lineWidth = this.w
          ctx.strokeStyle = '#fff'
          ctx.stroke()
        },
      }
    }

    presets.x = function (x, y, s, dx, dy, dr, r) {
      r = r || 0
      return {
        x: x,
        y: y,
        s: 20 * s,
        w: 5 * s,
        r: r,
        dx: dx,
        dy: dy,
        dr: dr,
        draw: function (ctx, t) {
          this.x += this.dx
          this.y += this.dy
          this.r += this.dr

          var _this = this
          var line = function (x, y, tx, ty, c, o) {
            o = o || 0
            ctx.beginPath()
            ctx.moveTo(-o + (_this.s / 2) * x, o + (_this.s / 2) * y)
            ctx.lineTo(-o + (_this.s / 2) * tx, o + (_this.s / 2) * ty)
            ctx.lineWidth = _this.w
            ctx.strokeStyle = c
            ctx.stroke()
          }

          ctx.save()

          ctx.translate(
            this.x + Math.sin((x + t / 10) / 100) * 5,
            this.y + Math.sin((10 + x + t / 10) / 100) * 2
          )
          ctx.rotate((this.r * Math.PI) / 180)

          line(-1, -1, 1, 1, '#fff')
          line(1, -1, -1, 1, '#fff')

          ctx.restore()
        },
      }
    }

    for (var x = 0; x < Canvas.width; x++) {
      for (var y = 0; y < Canvas.height; y++) {
        if (Math.round(Math.random() * 8000) == 1) {
          var s = (Math.random() * 5 + 1) / 10
          if (Math.round(Math.random()) == 1)
            elements.push(presets.o(x, y, s, 0, 0))
          else
            elements.push(
              presets.x(
                x,
                y,
                s,
                0,
                0,
                (Math.random() * 3 - 1) / 10,
                Math.random() * 360
              )
            )
        }
      }
    }

    setInterval(function () {
      ctx.clearRect(0, 0, Canvas.width, Canvas.height)

      var time = new Date().getTime()
      for (var e in elements) elements[e].draw(ctx, time)
    }, 10)
  },

  methods: {
    navigationIn() {
      const gsap = this.$gsap
      gsap.from('#navbar', {
        y: -200,
        opacity: 0,
        rotation: 0,
        duration: 1,
        ease: 'Circ.easeOut',
        force3D: false,
      })
    },
    heroline1() {
      const gsap = this.$gsap
      gsap.from('#heroline1', {
        opacity: 0,
        scaleX: 0.95,
        scaleY: 0.95,
        duration: 0.5,
        x: 0,
        y: 2,

        ease: 'ease',
        force3D: false,
      })
    },
    heroline2() {
      const gsap = this.$gsap
      gsap.from('#heroline2', {
        rotation: 0,
        scaleX: 1.1,
        scaleY: 1.1,
        duration: 0.6,
        x: 0,
        y: 5,
        ease: 'Circ.easeOut',
        force3D: false,
      })
    },

    animateOnScroll() {
      //   // this.$gsap.to(window, { duration: 2, scrollTo: 1000 })
      this.$gsap.to('#box', {
        scaleX: 0.6,
        scaleY: 0.6,

        y: 200,
        ease: 'Circ.easeOut',
        scrollTrigger: {
          trigger: '#box',
          pin: false,
          start: '+=100px',
          end: 'bottom',
          scrub: 0.4,
          invalidateOnRefresh: true,
          pinSpacing: true,
          force3D: false,
        },
      })

      this.$gsap.from('#readings', {
        scaleX: 1.2,
        scaleY: 1.2,
        y: 200,
        ease: 'Circ.easeInOut',
        scrollTrigger: {
          trigger: '#box2',
          pin: false,
          start: 'top 1600',
          end: 'bottom 400',
          scrub: 0.2,
          force3D: false,
          // markers: true,
        },
      })

      this.$gsap.from('#pricing', {
        scaleX: 1.2,
        scaleY: 1.2,
        y: 200,

        ease: 'Circ.easeInOut',
        scrollTrigger: {
          trigger: '#box2',
          pin: false,
          start: ' top',
          scrub: true,
          force3D: false,
        },
      })
    },
  },
}
</script>

<style></style>
