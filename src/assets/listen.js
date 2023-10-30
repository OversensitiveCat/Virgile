import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const listen = () => {
  // Refresh when concerts photo is loaded
  const photos = gsap.utils.toArray('.concerts-photo, .concerts-photo-mobile')
  photos.forEach((photo) => {
    photo.addEventListener('load', () => {
      ScrollTrigger.refresh()
    })
  })

  // Pin
  let section = document.querySelector('.videos')
  let wrapper = document.querySelector('.vid-wrapper')
  let container = document.querySelector('.vids-container')

  function translate() {
    gsap.to(wrapper, {
      xPercent: () => -100 + 100 / (wrapper.offsetWidth / window.innerWidth),
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        pin: container,
      },
    })
  }

  let mm = gsap.matchMedia()
  mm.add(
    {
      desktop: '(min-width: 992px)',
      tablet: '(max-width: 991px)',
      mobile: '(max-width: 767px)',
      smallMobile: '(max-width: 479px)',
    },
    (context) => {
      let { desktop, tablet, mobile, smallMobile } = context.conditions
      if (desktop) {
        translate()
      }

      if (tablet && !mobile && !smallMobile) {
        translate()
      }

      if (mobile && !smallMobile) {
        translate()
      }

      if (smallMobile) {
        translate()
      }
    }
  )

  // Circles
  gsap.from('.blue-circle', {
    yPercent: 400,
    scrollTrigger: {
      trigger: wrapper,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: 1,
    },
  })
  gsap.fromTo(
    '.blue-circle2',
    { xPercent: -300 },
    {
      xPercent: 300,
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    }
  )
  gsap.from('.golden-sun', {
    xPercent: 300,
    rotate: 90,
    scrollTrigger: {
      trigger: section,
      start: '40% center',
      end: 'bottom bottom',
      scrub: 1,
    },
  })

  // Header color change
  let header = document.querySelector('.nav-bar')
  let navHide = gsap.utils.toArray('.ham-line.hide')

  let blue = '#201d30',
    white = '#fefefc'

  function colorHeader(color) {
    gsap.to(header, { backgroundColor: color })
    gsap.to(navHide, { backgroundColor: color })
  }

  ScrollTrigger.create({
    trigger: '.videos',
    start: 'top 80px',
    endTrigger: '.contact',
    end: 'top 80px',
    onEnter: () => colorHeader(blue),
    onLeave: () => colorHeader(white),
    onEnterBack: () => colorHeader(blue),
    onLeaveBack: () => colorHeader(white),
  })
}

export default listen
