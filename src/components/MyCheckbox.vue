<template>
  <div class="hello">
    <input type="checkbox" :value="value" :checked="checked" @change="changed"> {{title}}
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Model } from 'vue-property-decorator'

@Component
export default class MyCheckbox extends Vue {
  @Prop() title: string
  @Prop() value: string

  @Prop()
  @Model('change') checked: boolean

  changed(ev) {
    this.$emit('change', ev.target.checked)
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
