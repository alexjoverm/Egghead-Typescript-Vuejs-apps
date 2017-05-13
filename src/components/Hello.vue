<template>
  <div class="hello">
    <h1>{{ fullMessage }}</h1>
    <button @click="clicked">Click</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class Hello extends Vue {
  message: string = 'Hello Vue'

  get fullMessage() {
    return `${this.message} from TypeScript`
  }

  created() {
    console.log('created!')
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
