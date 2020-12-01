
import { Component } from './framework.js'

export class Carousel extends Component {
  constructor() {
    super()
    this.attributes = Object.create(null)
  }
  setAttribute(name, value) {
    this.attributes[name] = value
  }
  render() {

    this.root = document.createElement('div')
    this.root.classList.add('carousel')
    for (const record of this.attributes.src) {
      let child = document.createElement('div')
      child.style.backgroundImage = `url(${record})`
      this.root.appendChild(child)
    }

    // -------- 拖拽逻辑 start  ---------------// 

    let position = 0
    this.root.addEventListener('mousedown', e => {
      const startX = e.clientX
      const children = this.root.children
      const width = e.target.getBoundingClientRect().width

      const move = e => {
        const { clientX } = e
        const x = clientX - startX
        const current = position - ((x - x % width) / width)
        for (let offset of [-1, 0, 1]) {
          let pos = current + offset
          pos = (pos + children.length) % children.length
          // console.log(pos, children[pos])
          children[pos].style.transition = 'none'
          children[pos].style.transform = `translateX(${- pos * width + offset * width + x % width}px)`
        }
      }

      const up = e => {
        let x = e.clientX - startX
        position = position - Math.round(x / width)

        for (let offset of [0, -Math.sign(Math.round(x / width) - x + width / 2 * Math.sign(x))]) {
          let pos = position + offset
          pos = (pos + children.length) % children.length
          children[pos].style.transition = ''
          children[pos].style.transform = `translateX(${- pos * width + offset * width}px)`
        }

        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
      }

      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', up)
    })




    // -------- 拖拽逻辑 end  ---------------// 

    // -------- 动画逻辑 start  ---------------//
    // let currentIndex = 0

    // setInterval(() => {
    //   let children = this.root.children

    //   let nextIndex = (currentIndex + 1) % children.length
    //   let current = children[currentIndex]
    //   let next = children[nextIndex]
    //   // console.log(currentIndex, nextIndex)

    //   next.style.transition = 'none'
    //   next.style.transform = `translateX(${100 - nextIndex * 100}%)` //  将next 紧贴current,但是next 都是有偏移值的. 这个时候需要减去偏移值.

    //   setTimeout(() => {
    //     next.style.transition = ''
    //     current.style.transform = `translateX(${-(100 + currentIndex * 100)}%)` // 当前图片往前过渡
    //     next.style.transform = `translateX(${-nextIndex * 100}%)` // 下一张顺势往前
    //     currentIndex = nextIndex
    //   }, 16);
    // }, 5000)
    // -------- 动画逻辑 end  ---------------//


    return this.root
  }
  mountTo(parent) {
    parent.appendChild(this.render())
  }
}
