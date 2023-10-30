import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const hero = () => {
  const navLogo = document.querySelector('.nav-logo')
  const navDash = document.querySelector('.nav-dash')
  const navShape = document.querySelector('.nav-link-shape')
  let tl = gsap.timeline()
  tl.to('.hero-filter', {
    delay: 1,
    opacity: 1,
    duration: 1,
  }).from(
    navLogo,
    {
      opacity: 0,
      duration: 1.5,
    },
    '<'
  )

  gsap.from(navLogo, {
    y: '-88vh',
    width: '85%',
    scrollTrigger: {
      trigger: 'header',
      start: 'top bottom',
      end: 'top top',
      scrub: 1,
    },
  })

  let nav = gsap.timeline({ paused: true })
  let mm = gsap.matchMedia()
  nav
    .from(navShape, {
      opacity: 0,
      xPercent: -300,
      duration: 1,
    })
    .from(navDash, { width: 0, duration: 1 }, 0)

  mm.add('(min-width: 992px)', () => {
    nav
      .from(
        '.nav-link',
        {
          opacity: 0,
          xPercent: 20,
          stagger: { amount: 0.7 },
        },
        0
      )
      .from(
        '.nav-list',
        {
          xPercent: 50,
          duration: 1,
        },
        0
      )
  })
  mm.add('(max-width: 991px)', () => {
    nav.from(
      '.hamburger',
      {
        opacity: 0,
        xPercent: 300,
        duration: 1,
      },
      0
    )
  })

  ScrollTrigger.create({
    trigger: 'header',
    start: 'top 70%',
    onEnter: () => nav.play(),
  })

  ScrollTrigger.create({
    trigger: 'header',
    start: 'top bottom',
    onLeaveBack: () => nav.pause(0),
  })

  gsap.to(navShape, { rotate: 360, duration: 7, repeat: -1, ease: 'none' })

  gsap.set('header', { opacity: 1 })

  window.addEventListener('resize', () => {
    gsap.to(navDash, { width: '100%', duration: 0.25 })
  })
}

export default hero
