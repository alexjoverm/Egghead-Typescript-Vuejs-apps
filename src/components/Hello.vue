<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <h3>{{ fullMessage }}</h3>
    <button @click="clicked">Click</button>
    <button @click="parentClicked">Parent click</button>
  </div>
</template>

<script lang="ts">
import Parent from './Parent'
import Component from 'vue-class-component'

@Component({})
export default class Hello extends Parent {
  message: string = 'Hello Vue'

  created() {
    console.log('child created')
  }

  get fullMessage() {
    return `${this.message} TypeScript`
  }

  clicked() {
    console.log('clicked')
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
