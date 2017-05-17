<template>
  <div class="hello">
    <h1 v-colorDirective="{ color: 'white', background: 'green'}">{{ message }}</h1>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import colorDirective from '../color-directive'

@Component({
  directives: {
    colorDirective
  }
})
export default class Hello extends Vue {
  message: string = 'Hello Vue'
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
