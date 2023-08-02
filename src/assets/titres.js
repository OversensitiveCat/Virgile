import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

const titres = () => {
  // eslint-disable-next-line no-unused-vars
  let splitChars = new SplitType('[split-chars]', {
    types: 'chars',
    tagName: 'span',
  })

  const titles = document.querySelectorAll('[letters-slide-up]')

  titles.forEach((title) => {
    let chars = title.querySelectorAll('.char')

    let tl = gsap.timeline({ paused: true })

    tl.from(chars, {
      autoAlpha: 0,
      opacity: 0,
      yPercent: 50,
      duration: 0.2,
      ease: 'power4.out',
      stagger: { amount: 0.6 },
    })

    ScrollTrigger.create({
      trigger: title,
      start: 'top bottom',
      onLeaveBack: () => {
        tl.progress(0)
        tl.pause()
      },
    })

    ScrollTrigger.create({
      trigger: title,
      start: 'top 80%',
      onEnter: () => tl.play(),
    })
  })
}

export default titres
