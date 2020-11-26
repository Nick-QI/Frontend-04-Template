

import { Component, createElement } from './framework.js'

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
          console.log(pos,children[pos])
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

const pic = [
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606296157206&di=f13eda1d2066a3d5574e19a89838d1dc&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F55%2F22%2F20300000929429130630222900050.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606296206076&di=05cd8ed59c0d3bc9f1739c7c9566693f&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F27%2F67%2F01300000921826141299672233506.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606296241889&di=1d48d31a5431931246548f27080f6f89&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201409%2F09%2F130415ome6e930vp99to05.jpg'
]

const c = <Carousel src={pic}>
</Carousel>

c.mountTo(document.body)