<template>
  <div>
    <div id="app-gridview">
      <h1>Gridview - Listview</h1>
      <div>
        <button class="button" v-on:click="switchView()">
          <span>{{ buttonSwitchViewText }}</span>
        </button>
        <button class="button" v-on:click="switchData()">
          <span>{{ buttonSwitchDataText }}</span>
        </button>
      </div>

      <div v-bind:class="[isGridView ? 'grid-wrapper' : 'list-wrapper']">
        <div class="grid-row" v-if="isGridView">
          <div class="grid-header" v-for="name in gridData.columns">
            {{ name }}
          </div>
        </div>

        <!-- GridView structure -->
        <div v-if="isGridView" class="grid-row" v-for="row in gridData.data">
          <div class="list-row-item" v-for="name in gridData.columns">
            <div>{{ row[name] }}</div>
          </div>
        </div>

        <!-- ListView structure -->
        <div v-if="!isGridView" class="list-row" v-for="row in gridData.data">
          <img v-bind:src="row.ImagePath" class="list-image" />
          <div class="list-property">
            <div class="list-row-item" v-for="name in gridData.columns">
              <div class="list-property-name">{{ name }}</div>
              <div>{{ row[name] }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      //     script: [{ src: 'https://code.jquery.com/jquery-1.12.4.js'}],
      //     script: [{ src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.js'}],
      link: [
        {
          rel: 'stylesheet',
          href: '~assets/css/grid.css',
        },
      ],
      script: [
        {
          src: '~assets/js/gridToggle.js',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
