import { gsap } from 'gsap'

const hero = () => {
  gsap.from('.nav_logo', {
    autoAlpha: 0,
    delay: 1.8,
    opacity: 0,
    duration: 2,
  })

  // $('.section.is--hero').each(function (index) {
  //   let triggerElement = $(this)
  //   let targetElement = $('.nav_logo')

  //   let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: triggerElement,
  //       // trigger element - viewport
  //       start: 'top top',
  //       end: 'bottom top',
  //       scrub: 1,
  //     },
  //   })
  //   tl.from(targetElement, {
  //     y: '-90vh',
  //     width: '80%',
  //     duration: 1,
  //   })
  // })
}

export default hero
