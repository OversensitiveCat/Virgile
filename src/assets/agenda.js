import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import collection from './collection'

gsap.registerPlugin(ScrollTrigger)

const agenda = () => {
  collection()
  //
  const circle = document.querySelector('.circle-concerts')
  gsap.set(circle, { xPercent: 50 })
  gsap.from(circle, {
    opacity: 0.8,
    scale: 1.05,
    yPercent: 150,
    scrollTrigger: {
      trigger: circle,
      start: 'top bottom',
      end: 'center center',
      scrub: true,
    },
  })
}

export default agenda
