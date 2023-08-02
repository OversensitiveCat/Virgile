import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const contact = () => {
  const contactInfos = document.querySelectorAll('[letters-fade-in]')

  contactInfos.forEach((info) => {
    let chars = info.querySelectorAll('.char')

    let tl = gsap.timeline({ paused: true })

    tl.from(chars, {
      autoAlpha: 0,
      opacity: 0,
      duration: 0.2,
      ease: 'power1.out',
      stagger: { amount: 0.8 },
    })

    ScrollTrigger.create({
      trigger: info,
      start: 'top bottom',
      onLeaveBack: () => {
        tl.progress(0)
        tl.pause()
      },
    })

    ScrollTrigger.create({
      trigger: info,
      start: 'top 80%',
      onEnter: () => tl.play(),
    })
  })

  gsap.from('.gold-circle_contact', {
    scrollTrigger: {
      trigger: '.gold-circle_contact',
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
