
import { Timeline, Animation } from './animation.js'
let tl = new Timeline()
tl.start()
const el = document.querySelector('div')
tl.add(new Animation(el.style, 'transform', 0, 500, 5000, 0, null, v => `translateX(${v}px)`))


const pauseBtn = document.querySelector('#pause')
const resumeBtn = document.querySelector('#resume')

pauseBtn.addEventListener('click', () => tl.pause())
resumeBtn.addEventListener('click', () => tl.resume())
