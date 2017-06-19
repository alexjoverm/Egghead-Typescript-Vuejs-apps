<template>
  <div id="app">
    <ul>
      <li v-for="user in users">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { lazyInject } from './container'
import { TYPES } from './types'

@Component
export default class App extends Vue {
  users = []

  @lazyInject(TYPES.users)
  usersService

  created() {
    this.usersService.getUsers()
      .then(data => {
        this.users = data
      })

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
