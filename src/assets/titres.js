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
  let triggers = arr.elements.splice(1.1)

  titles.forEach((title) => {
    let i = titles.indexOf(title)

    let tl = gsap.timeline({ paused: true })
    tl.from(title, {
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
      trigger: triggers[i],
      start: '-100% bottom',
      onLeaveBack: () => {
        tl.progress(0)
        tl.pause()
      },
    })
    ScrollTrigger.create({
      trigger: triggers[i],
      start: 'top 80%',
      onEnter: () => tl.play(),
    })
  })
}

export default titres
