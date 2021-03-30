<template>
  <div>
    <!-- App -->
    <div id="app">
      <component :is="state.view">
        <h1>{{ state.view }}</h1>
      </component>
      <controls></controls>
    </div>

    <!-- Controls -->
    <template id="controls">
      <ul class="controls">
        <li
          @click.prevent="setView(animation)"
          v-bind:class="{ active: animation === state.view }"
          v-for="(animation, index) in state.animations"
          :key="index"
        >
          {{ animation }}
        </li>
      </ul>
    </template>

    <!-- Transitions -->
    <template id="page">
      <transition
        v-on:enter="enter"
        v-on:leave="leave"
        v-bind:css="false"
        appear
      >
        <div class="page" v-bind:class="state.view">
          <div class="center">
            <slot></slot>
          </div>
        </div>
      </transition>
    </template>
  </div>
</template>

<script>
const app = Vue.createApp({})

// // Define a new global component called button-counter
// app.component('button-counter', {
//   data() {
//     return {
//       count: 0,
//     }
//   },
//   template: `
//     <button @click="count++">
//       You clicked me {{ count }} times.
//     </button>`,
// })

const state = {
  animations: ['fade', 'slide', 'slideUp', 'zoom', 'flipX', 'flipY'],
  view: ['slide'],
}

const controls = Vue.component('controls', {
  template: '#controls',
  data: state,
  methods: {
    setView(animation) {
      state.view = animation
    },
  },
})

const fade = Vue.component('fade', {
  template: '#page',
  methods: {
    enter(el, done) {
      TweenMax.fromTo(
        el,
        1,
        {
          autoAlpha: 0,
          scale: 1.5,
        },
        {
          autoAlpha: 1,
          scale: 1,
          transformOrigin: '50% 50%',
          ease: Power4.easeOut,
          onComplete: done,
        }
      )
    },
    leave(el, done) {
      TweenMax.fromTo(
        el,
        1,
        {
          autoAlpha: 1,
          scale: 1,
        },
        {
          autoAlpha: 0,
          scale: 0.8,
          ease: Power4.easeOut,
          onComplete: done,
        }
      )
    },
  },
})

const slide = Vue.component('slide', {
  template: '#page',
  methods: {
    enter(el, done) {
      const tl = new TimelineMax({
        onComplete: done,
      })

      tl.set(el, {
        x: window.innerWidth * 1.5,
        scale: 0.8,
        transformOrigin: '50% 50%',
      })

      tl.to(el, 0.5, {
        x: 0,
        ease: Power4.easeOut,
      })

      tl.to(el, 1, {
        scale: 1,
        ease: Power4.easeOut,
      })
    },
    leave(el, done) {
      TweenMax.fromTo(
        el,
        1,
        {
          autoAlpha: 1,
        },
        {
          autoAlpha: 0,
          ease: Power4.easeOut,
          onComplete: done,
        }
      )
    },
  },
})

const slideUp = Vue.component('slideUp', {
  template: '#page',
  methods: {
    enter(el, done) {
      const tl = new TimelineMax({
        onComplete: done,
      })

      tl.set(el, {
        y: window.innerWidth * 1.5,
        scale: 0.8,
        transformOrigin: '50% 50%',
      })

      tl.to(el, 0.5, {
        y: 0,
        ease: Power4.easeOut,
      })

      tl.to(el, 1, {
        scale: 1,
        ease: Power4.easeOut,
      })
    },
    leave(el, done) {
      TweenMax.to(el, 1, {
        y: window.innerHeight * -1.5,
        ease: Power4.easeOut,
        onComplete: done,
      })
    },
  },
})

const zoom = Vue.component('zoom', {
  template: '#page',
  methods: {
    enter(el, done) {
      const tl = new TimelineMax({
        onComplete: done,
      })

      tl.set(el, {
        autoAlpha: 0,
        scale: 2,
        transformOrigin: '50% 50%',
      })

      tl.to(el, 1, {
        autoAlpha: 1,
        scale: 1,
        ease: Power4.easeOut,
      })
    },
    leave(el, done) {
      TweenMax.to(el, 1, {
        scale: 0,
        ease: Power4.easeOut,
        onComplete: done,
      })
    },
  },
})

const flipX = Vue.component('flipX', {
  template: '#page',
  methods: {
    enter(el, done) {
      const tl = new TimelineMax({
        onComplete: done,
      })

      tl.set(el, {
        autoAlpha: 0,
        rotationX: 90,
        transformOrigin: '50% 50%',
      })

      tl.to(el, 1, {
        autoAlpha: 1,
        rotationX: 0,
        ease: Power4.easeOut,
      })
    },
    leave(el, done) {
      TweenMax.to(el, 1, {
        scale: 0,
        ease: Power4.easeOut,
        onComplete: done,
      })
    },
  },
})

const flipY = Vue.component('flipY', {
  template: '#page',
  methods: {
    enter(el, done) {
      const tl = new TimelineMax({
        onComplete: done,
      })

      tl.set(el, {
        autoAlpha: 0,
        rotationY: 90,
        transformOrigin: '50% 50%',
      })

      tl.to(el, 1, {
        autoAlpha: 1,
        rotationY: 0,
        ease: Power4.easeOut,
      })
    },
    leave(el, done) {
      TweenMax.to(el, 1, {
        scale: 0,
        ease: Power4.easeOut,
        onComplete: done,
      })
    },
  },
})
</script>

<style lang="scss" scoped></style>
