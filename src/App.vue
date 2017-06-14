<template>
  <div id="app">
    <img src="./assets/logo.png" alt="">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component, { createDecorator } from 'vue-class-component'

const Log = (str?: string) => {
  return createDecorator((component, key) => {
    console.log("Component: ", component)
    console.log("Decorated key: ", key)
  })
}

const NoCache = createDecorator((component: any, key) => {
  if (component.computed && component.computed[key]) {
    component.computed[key].cache = false
  } else {
    throw Error('Not a computed property')
  }
})

@Component
export default class App extends Vue {

  @Log()
  coolVar = 'hey'

  @NoCache
  @Log()
  get sayHi() {
    return 'hi'
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
