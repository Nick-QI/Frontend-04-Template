
import { createElement, Component } from './framework'
class Carousel extends Component {
  constructor() {
    super()
    this.attributes = Object.create(null)
  }
  setAttribute(name, value) {
    this.attributes[name] = value
  }
  render() {
    this.root = document.createElement('div')
    for (let record of this.attributes.src) {
      let child = document.createElement('div')
      child.style.backgroundImage = `url(${record})` 
      this.root.appendChild(child)
    }
  }
  mountTo(parent) {
    parent.appendChild(this.render())
  }
}



let app = <Carousel />

app.mountTo(document.body)