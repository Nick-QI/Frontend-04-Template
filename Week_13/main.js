import { createElement } from './framework.js'
import { Carousel } from './carousel'
import { Timeline, Animation } from './animation'
const pic = [
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606296157206&di=f13eda1d2066a3d5574e19a89838d1dc&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F55%2F22%2F20300000929429130630222900050.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606296206076&di=05cd8ed59c0d3bc9f1739c7c9566693f&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F27%2F67%2F01300000921826141299672233506.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606296241889&di=1d48d31a5431931246548f27080f6f89&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201409%2F09%2F130415ome6e930vp99to05.jpg'
]

const c = <Carousel src={pic}>
</Carousel>

c.mountTo(document.body)


const tl = new Timeline()
tl.add(new Animation({set a(t){console.log(t)}}, 'a', 0, 100, 1000, null))
tl.start()