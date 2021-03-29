<template>
  <div class="wrap" id="myApplication">
    <nav class="nav">
      <ul class="nav-links">
        <li class="nav-item">
          <a class="nav-link" href="javascript:;" @click="currentView = Who"
            >Who</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:;" @click="currentView = Works"
            >Works</a
          >
        </li>
      </ul>
    </nav>

    <transition name="fade">
      <!--mode="out-in"-->
      <component :is="currentView"></component>
    </transition>
  </div>
</template>

<script>
Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  el: '#myApplication',
  template: '<App/>',
  components: { App },
  data: {
    attributeA: 'valueA',
    attributeB: 'valueB',
  },
})

// on les affiches
alert(vm.attributeA) // valueA
alert(vm.attributeB) // valueB

export default {
  data() {
    return {
      showProfile: false,
      currentView: 'Who',
    }
  },
}
</script>

<style></style>
