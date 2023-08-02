import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const bio = () => {
  const paraBio = document.querySelectorAll('.bio .paragraph-bio')
  let tlPara = gsap.timeline({ paused: true })

  tlPara.from(paraBio, {
    opacity: 0,
    y: 300,
    duration: 2,
    stagger: 0.2,
    ease: 'power2.out',
  })

  ScrollTrigger.create({
    trigger: '.bio',
    start: 'top bottom',
    onLeaveBack: () => {
      tlPara.progress(0), tlPara.pause()
    },
  })

  ScrollTrigger.create({
    trigger: '.bio',
    start: 'top 70%',
    onEnter: () => tlPara.play(),
  })

  gsap.from('.gold-circle', {
    scrollTrigger: {
      trigger: '.gold-circle',
      start: 'top 80%',
      end: 'center center',
      scrub: 2,
    },
    duration: 1.5,
    opacity: 0.5,
    y: 350,
    scale: 1.2,
    delay: 1,
  })

  gsap.from('.gold-circle-2', {
    scrollTrigger: {
      trigger: '.gold-circle-2',
      start: 'top 80%',
      end: 'center center',
      scrub: 2,
    },
    duration: 1.5,
    x: 350,
    scale: 0.8,
    opacity: 0.5,
  })
}

export default bio
