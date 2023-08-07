import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const bio = () => {
  // Animation
  let para = gsap.utils.toArray('.para-bio')
  let language = document.querySelector('.language-container')
  para.forEach((p) => {
    let tl = gsap.timeline({ paused: true })

    tl.from(p, {
      opacity: 0,
      yPercent: 30,
      duration: 1,
      ease: 'power2.out',
    })

    ScrollTrigger.create({
      trigger: p,
      start: 'top 80%',
      onEnter: () => tl.play(),
    })

    ScrollTrigger.create({
      trigger: p,
      start: 'top bottom',
      onLeaveBack: () => {
        tl.pause(0)
      },
    })
  })
  gsap.from('.gold-circle', {
    scrollTrigger: {
      trigger: '.gold-circle',
      start: 'top 85%',
      end: 'bottom 40%',
      scrub: 1,
    },
    opacity: 0.5,
    yPercent: 200,
    scale: 1.2,
  })
  gsap.from('.gold-circle-2', {
    scrollTrigger: {
      trigger: '.gold-circle-2',
      start: 'top 85%',
      end: 'bottom 40%',
      scrub: 1,
    },
    xPercent: 250,
    scale: 0.8,
    opacity: 0.5,
  })

  let container = gsap.timeline({ paused: true })
  container.from(language, {
    opacity: 0,
    xPercent: 100,
    duration: 0.8,
  })

  ScrollTrigger.create({
    trigger: language,
    start: 'top 85%',
    onEnter: () => container.play(),
  })

  ScrollTrigger.create({
    trigger: language,
    start: 'top bottom',
    onLeaveBack: () => {
      container.pause(0)
    },
  })

  // Language
  let columns = gsap.utils.toArray('.bio-column'),
    fr = [],
    en = []

  function toogle(remove, add) {
    let tl = gsap.timeline()
    tl.to(remove, { opacity: 0 }).to(add, { opacity: 1 })
  }

  columns.forEach((col) => {
    if (col.classList.contains('bio-en')) {
      en.push(col)
    } else {
      fr.push(col)
    }
  })

  let buttons = gsap.utils.toArray('.language-text')
  buttons.splice(1, 1)

  buttons[0].addEventListener('click', () => {
    if (!buttons[0].classList.contains('current-language')) {
      buttons[1].classList.remove('current-language')

      buttons[0].classList.add('current-language')
      toogle(en, fr)
    }
  })
  buttons[1].addEventListener('click', () => {
    if (!buttons[1].classList.contains('current-language')) {
      buttons[0].classList.remove('current-language')

      buttons[1].classList.add('current-language')
      toogle(fr, en)
    }
  })

  gsap.set('.biographie', { opacity: 1 })
}
export default bio
