<template>
  <div id="app">
    <button @click="sumUp">Count {{count.acum}}</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  count: any = {
    acum: 0
  }

  @Watch('count', { deep: true })
  watchCount(newVal, oldVal) {
    console.log('newVal: ', newVal, ', oldVal: ', oldVal)
  }

  sumUp() {
    this.count.acum++
  }
}
</script>






<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  font-size: 2em;
}
</style>
