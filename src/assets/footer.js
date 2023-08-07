import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const footer = () => {
  // Animations
  let triOne = document.querySelector('.footer-left'),
    triTwo = document.querySelector('.footer-right'),
    triThree = document.querySelector('.footer-bottom'),
    logo = gsap.utils.toArray('.logo-footer'),
    credits = gsap.utils.toArray('.credits'),
    sun = document.querySelector('.golden-sun_footer'),
    dash = document.querySelector('.footer-dash'),
    socials = gsap.utils.toArray('.social-link')

  gsap.to(sun, {
    rotate: 360,
    duration: 7,
    repeat: -1,
    ease: 'none',
  })

  let tlOne = gsap.timeline({ paused: true })
  tlOne
    .from(logo[0], { opacity: 0, duration: 0.6, xPercent: -60 })
    .from(logo[1], { opacity: 0, duration: 0.6, xPercent: 60 }, 0)
    .from(
      socials,
      {
        opacity: 0,
        duration: 0.4,
        yPercent: 100,
        stagger: { amount: 0.56 },
      },
      0
    )

  ScrollTrigger.create({
    trigger: triOne,
    start: 'top 75%',
    onEnter: () => tlOne.play(),
  })

  ScrollTrigger.create({
    trigger: triOne,
    start: 'top bottom',
    onLeaveBack: () => tlOne.pause(0),
  })

  let tlTwo = gsap.timeline({ paused: true })
  tlTwo
    .from(
      '.nav-footer-list li',
      {
        opacity: 0,
        duration: 0.4,
        yPercent: 100,
        stagger: { amount: 0.56 },
      },
      0
    )
    .from(sun, { opacity: 0, duration: 0.6, yPercent: 60 }, 0)

  ScrollTrigger.create({
    trigger: triTwo,
    start: 'top 75%',
    onEnter: () => tlTwo.play(),
  })

  ScrollTrigger.create({
    trigger: triTwo,
    start: 'top bottom',
    onLeaveBack: () => tlTwo.pause(0),
  })

  let tlThree = gsap.timeline({ paused: true })
  tlThree
    .from(dash, { width: 0, duration: 0.6 })
    .from(credits[0], { opacity: 0, xPercent: -50, duration: 0.6 }, 0)
    .from(credits[1], { opacity: 0, xPercent: 50, duration: 0.6 }, 0)

  ScrollTrigger.create({
    trigger: triThree,
    start: 'top bottom',
    onEnter: () => tlThree.play(),
    onLeaveBack: () => tlThree.pause(0),
  })

  window.addEventListener('.resize', () => gsap.set(dash, { width: '100%' }))

  // Hover
  socials.forEach((link) => {
    let path = link.querySelectorAll('.social-path')
    link.addEventListener('mouseenter', () => {
      gsap.to(path, { fill: '#9c7118', duration: 0.2 })
    })
    link.addEventListener('mouseleave', () => {
      gsap.to(path, { fill: '#cc9932', duration: 0.2 })
    })
  })
}

export default footer
