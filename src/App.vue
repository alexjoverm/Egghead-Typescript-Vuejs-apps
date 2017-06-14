<template>
  <div id="app">
    <Users/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Provide } from 'vue-property-decorator'
import Users from './components/Users.vue'

import axios from 'axios'

@Component({
  components: {
    Users
  }
})
export default class App extends Vue {
  @Provide() http = axios
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
