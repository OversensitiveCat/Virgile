import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const concerts = () => {
  ///// CONCERTS

  gsap.from('.circle-concerts', {
    scrollTrigger: {
      trigger: '.circle-concerts',
      start: 'top 95%',
      scrub: 2,
    },
    duration: 1,
    y: 200,
    scale: 0.6,
  })

  gsap.from('.concerts-photo', {
    scrollTrigger: {
      trigger: '.concerts-photo',
      start: 'top 95%',
      end: 'top 30%',
      scrub: 2,
    },
    duration: 1,
    y: 100,
  })

  const concertTitles = gsap.utils.toArray('#concertsItem')
  concertTitles.forEach(function (title) {
    let tlConcerts = gsap.timeline({ paused: true })

    tlConcerts.from(title, {
      duration: 1,
      y: 100,
      opacity: 0,
    })

    ScrollTrigger.create({
      trigger: title,
      start: 'top bottom',
      onLeaveBack: () => {
        tlConcerts.progress(0), tlConcerts.pause()
      },
    })

    ScrollTrigger.create({
      trigger: title,
      start: 'top 80%',
      onEnter: () => tlConcerts.play(),
    })
  })

  let loadButton = gsap.timeline({ paused: true })

  loadButton.from('.load-more-button', {
    duration: 1,
    y: 100,
    opacity: 0,
  })

  ScrollTrigger.create({
    trigger: '.load-more-button',
    start: '-100px bottom',
    onLeaveBack: () => {
      loadButton.progress(0), loadButton.pause()
    },
  })

  ScrollTrigger.create({
    trigger: '.load-more-button',
    start: 'top 80%',
    onEnter: () => loadButton.play(),
  })

  //// CONCERTS PASSÉS

  gsap.from('.div-year', {
    scrollTrigger: {
      trigger: '.div-year',
      start: 'top 90%',
      end: 'top 50%',
      scrub: 2,
    },
    duration: 1,
    y: 200,
    opacity: 0,
  })

  ///// ÉCOUTER
  gsap.from('.section-wrapper .blue-circle', {
    yPercent: -50,
    scrollTrigger: {
      scrub: true,
      trigger: '.section-wrapper .blue-circle',
    },
    scale: 1.5,
  })

  gsap.from('.section-wrapper .blue-circle-2', {
    xPercent: -500,
    duration: 5,
    scrollTrigger: {
      scrub: 3,
      trigger: '.section-wrapper .blue-circle-2',
      start: 'top 60%',
    },
    scale: 1.5,
  })

  gsap.from('.section-wrapper .golden-sun', {
    xPercent: -500,
    scrollTrigger: {
      scrub: 3,
      trigger: '.section-wrapper .golden-sun',
      start: '800px top',
      end: '1600px top',
    },
    duration: 5,
  })
}

export default concerts
