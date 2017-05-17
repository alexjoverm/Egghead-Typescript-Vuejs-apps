import { DirectiveOptions } from 'vue'

const directive: DirectiveOptions = {
  inserted(el, node) {
    el.style.color = node.value.color
    el.style.backgroundColor = node.value.background
  }
}

export default directive