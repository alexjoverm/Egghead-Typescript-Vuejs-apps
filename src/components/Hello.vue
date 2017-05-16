<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <router-link to="hello-ts">Hello TS</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class Hello extends Vue {
  message: string = 'Hello Vue'

  created() {
    console.log('Hello Vue created!')
  }

  beforeRouteEnter(to, from, next) {
    console.log('Enter')
    next()
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
