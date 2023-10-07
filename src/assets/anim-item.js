import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const animItem = (items) => {
  items.forEach(function (item) {
    let tl = gsap.timeline({ paused: true })
    tl.from(item, { yPercent: 60, duration: 0.8 }).to(
      item,
      { opacity: 1, duration: 0.8 },
      0
    )
    ScrollTrigger.create({
      trigger: item,
      start: 'top 80%',
      onEnter: () => tl.play(),
    })
    ScrollTrigger.create({
      trigger: item,
      start: '-100% bottom',
      onLeaveBack: () => {
        tl.pause(0)
      },
    })
  })
}

export default animItem
