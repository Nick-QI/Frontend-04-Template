import { Component, STATE, ATTRIBUTE, createElement } from './frameWork';
import { enabbleGesture } from './gesture'

export { STATE, ATTRIBUTE } from './frameWork';

export default class List extends Component {
  constructor() {
    super()
  }
  render() {
    this.children = this[ATTRIBUTE].data.map(this.template);
    this.root = (<div>{this.children}</div>).render()
    return this.root
  }
  appendChild(child) {
    this.template = (child)
    this.render()
  }
}