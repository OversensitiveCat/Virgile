import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const animButton = (button) => {
  let tl = gsap.timeline({ paused: true })
  tl.from(button, { yPercent: 150, opacity: 0, duration: 0.8 })

  ScrollTrigger.create({
    trigger: button,
    start: 'top 120%',
    onLeaveBack: () => {
      tl.pause(0)
    },
  })

  ScrollTrigger.create({
    trigger: button,
    start: 'top 80%',
    onEnter: () => tl.play(),
  })
}

export default animButton
