import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

const contact = () => {
  // Infos fade in
  const infos = new SplitType('.contact-link-text', {
    type: 'chars',
    tagName: 'span',
  })
  infos.elements.forEach((info) => {
    let chars = info.querySelectorAll('.char')
    let tl = gsap.timeline({ paused: true })

    tl.from(chars, {
      opacity: 0,
      duration: 0.2,
      ease: 'power1.out',
      stagger: { amount: 0.5 },
    })

    ScrollTrigger.create({
      trigger: info,
      start: 'top 80%',
      onEnter: () => tl.play(),
    })

    ScrollTrigger.create({
      trigger: info,
      start: 'top bottom',
      onLeaveBack: () => tl.pause(0),
    })
  })

  // Infos hover
  const links = gsap.utils.toArray('.link-contact')
  links.forEach((link) => {
    let dash = link.querySelector('.contact-dash')
    let tl = gsap.timeline({ paused: true })
    tl.from(dash, { width: 0, duration: 0.6, ease: 'power4.out' })
    link.addEventListener('mouseenter', () => tl.play())
    link.addEventListener('mouseleave', () => tl.reverse())
  })

  // Circle
  let circle = document.querySelector('.gold-circle_contact')
  gsap.from(circle, {
    scrollTrigger: {
      trigger: circle,
      start: 'top 90%',
      end: 'top 30%',
      scrub: 2,
    },
    duration: 1,
    yPercent: 200,
    scale: 0.8,
  })
}

export default contact
