<template>
  <div id="app">
    <p>{{ userName }}</p>
    <button @click="handler">Click</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import {
  AdvicePool,
  adviceMetadata,
  onException,
  afterMethod,
  beforeMethod,
  adviceParam,
  IMetadata
} from 'kaop-ts'

class Advice extends AdvicePool {
  static getCached (@adviceMetadata metadata: IMetadata) {
    const key = `${metadata.scope.$options.name}_${metadata.propertyKey}`
    const cached = localStorage.getItem(key)

    if (cached) {
      metadata.scope.userName = cached
      this.stop()
    }
  }

  static setCached (@adviceMetadata metadata: IMetadata) {
    const key = `${metadata.scope.$options.name}_${metadata.propertyKey}`

    if (metadata.result) {
      metadata.result.then(() => {
        localStorage.setItem(key, metadata.scope.userName)
      })
    }
  }

  static report (@adviceMetadata metadata: IMetadata) {
    console.error('Exception ocurred', metadata.exception)
  }

  static notify (@adviceParam(0) toServer) {
    console.log('Notifying', toServer)
  }
}

@Component
export default class App extends Vue {
  userName = ''

  @beforeMethod(Advice.getCached)
  @onException(Advice.report)
  @afterMethod(Advice.setCached)
  @afterMethod(Advice.notify, true)
  handler() {
    console.log('Method executed')
    return fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(user => this.userName = user.name)
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
