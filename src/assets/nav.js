/* eslint-disable no-unused-vars */
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

import { lenis } from './lenis'

const nav = () => {
  const ham = document.querySelector('.hamburger'),
    lines = gsap.utils.toArray('.ham-line'),
    container = document.querySelector('.nav-mobile'),
    li = gsap.utils.toArray('.nav-mobile-list li'),
    links = gsap.utils.toArray(
      '.nav-mobile-list .nav-link, .nav-logo, .nav-link-shape'
    ),
    body = document.querySelector('body')

  let tl = gsap.timeline({ paused: true })
  tl.to(container, { height: '100%', duration: 0.8, ease: 'power2.out' })
    .from(lines[1], { xPercent: 100 }, 0)
    .from(lines[4], { xPercent: -100 }, 0)
    .to(lines[2], { width: 0 }, 0)
    .set(lines[1], { top: 30, rotate: 45 })
    .set(lines[4], { top: 30, rotate: -45 })
    .set(lines[0], { top: 31, rotate: 45 })
    .set(lines[3], { top: 31, rotate: -45 })
    .to(lines[4], { x: 34, y: -34 }, 1.25)
    .to(lines[1], { x: 34, y: 34 }, 1.5)
    .from(
      li[0],
      {
        opacity: 0,
        xPercent: -100,
        duration: 0.6,
      },
      0.7
    )
    .from(
      li[1],
      {
        opacity: 0,
        xPercent: 100,
        duration: 0.6,
      },
      1
    )
    .from(
      li[2],
      {
        opacity: 0,
        xPercent: -100,
        duration: 0.6,
      },
      1.25
    )
    .from(
      li[3],
      {
        opacity: 0,
        xPercent: 100,
        duration: 0.6,
      },
      1.4
    )

  let hero = true,
    listen = false

  ScrollTrigger.create({
    trigger: '.hero-section',
    start: 'bottom top',
    onEnter: () => {
      hero = false
    },
    onLeaveBack: () => {
      hero = true
    },
  })
  ScrollTrigger.create({
    trigger: '.videos',
    start: 'top 80px',
    endTrigger: '.contact',
    end: 'top 80px',
    onEnter: () => (listen = true),
    onLeave: () => (listen = false),
    onEnterBack: () => (listen = true),
    onLeaveBack: () => (listen = false),
  })

  function open() {
    listen
      ? gsap.set(container, { backgroundColor: '#201d30' })
      : gsap.set(container, { backgroundColor: '#fefefc' })

    tl.play()
    lenis.stop()
  }

  function close() {
    tl.reverse().then(() => lenis.start())
  }

  function nav() {
    if (tl.progress() === 0) {
      hero
        ? gsap
            .to(window, { scrollTo: '.nav-bar', duration: 0.75 })
            .then(() => open())
        : open()
    } else if (tl.progress() === 1) {
      close()
    }
  }

  ham.addEventListener('click', nav)

  links.forEach((link) => {
    link.addEventListener('click', () => close())
  })
}

export default nav
