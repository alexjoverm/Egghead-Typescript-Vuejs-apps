import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class Parent extends Vue {
  message: string = "Hey from parent"

  created() {
    console.log('parent created')
  }

  get fullMessage() {
    return `${this.message} TS`
  }

  clicked() {
    console.log('click from parent')
  }

  parentClicked() {
    console.log('parent clicked')
  }
}