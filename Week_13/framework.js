export class Component {
  constructor() {
    // this.root = this.render()
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value)
  }
  appendChild(child) {
    child.mountTo(this.root)
  }
  mountTo(parent) {
    parent.appendChild(this.root)
  }
}

class ElementWrapper extends Component {
  constructor(type) {
    super()
    this.root = document.createElement(type)
  }
}
class TextWrapper extends Component {
  constructor(content) {
    super()
    this.root = document.createTextNode(content)
  }
}



export function createElement(type, attributes, ...children) {
  let element
  if (typeof type === 'string') {
    element = new ElementWrapper(type)
  } else {
    element = new type
  }
  for (const name in attributes) {
    element.setAttribute(name, attributes[name])
  }
  for (let child of children) {
    if (typeof child === 'string') {
      child = new TextWrapper(child)
    }
    element.appendChild(child)
  }
  return element
}