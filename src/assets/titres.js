import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

const titres = () => {
  // eslint-disable-next-line no-unused-vars
  let arr = new SplitType('.section-heading', {
    types: 'chars',
    tagName: 'span',
  })

  function getChars(t) {
    return (t = Array.from(t.querySelectorAll('.char')))
  }

  let titles = arr.elements.map(getChars)
  titles[0] = titles[0].concat(titles[1])
  titles.splice(1, 1)

  titles.forEach((chars) => {
    let tl = gsap.timeline({ paused: true })

    tl.from(chars, {
      opacity: 0,
      xPercent: -100,
      duration: 0.4,
      scale: 0.8,
      yPercent: 40,
      rotate: -10,
      ease: 'power4.out',
      stagger: { amount: 0.5 },
    })

    ScrollTrigger.create({
      trigger: chars,
      start: 'top bottom',
      onLeaveBack: () => {
        tl.progress(0)
        tl.pause()
      },
    })

    ScrollTrigger.create({
      trigger: chars,
      start: 'top 80%',
      onEnter: () => tl.play(),
    })
  })
}

export default titres
