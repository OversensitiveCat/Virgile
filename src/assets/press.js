import { gsap } from 'gsap'
import SplitType from 'split-type'

const press = () => {
  const items = gsap.utils.toArray('.press-item')
  const circleContainers = gsap.utils.toArray('.press-circle-container')
  const circles = gsap.utils.toArray('.press-circle')

  new SplitType('.press-para', {
    types: 'words',
    tagName: 'span',
  })

  // Create a timeline for each item
  const timelines = items.map((item) => {
    const i = items.indexOf(item)
    const arrow = item.querySelector('svg')
    const top = item.querySelector('.press-link-top')
    const bottom = item.querySelector('.press-link-bottom')
    const words = Array.from(item.querySelectorAll('.word'))

    const tl = gsap.timeline({
      paused: true,
      yoyo: true,
      repeat: 1,
      repeatDelay: 10,
    })
    tl.from(
      bottom,
      {
        autoAlpha: 0,
        xPercent: -10,
        yPercent: 50,
      },
      0
    )
      .from(
        top,
        {
          autoAlpha: 0,
          xPercent: -10,
          yPercent: 50,
        },
        0
      )
      .from(
        arrow,
        {
          autoAlpha: 0,
          xPercent: 50,
          yPercent: -50,
        },
        0
      )
      .to(
        circles[i],
        {
          backgroundColor: '#cc9932',
        },
        0
      )

    words.forEach((w) => {
      tl.from(
        w,
        {
          autoAlpha: 0,
          yPercent: gsap.utils.random(-100, 100, 1),
        },
        0
      )
    })

    return tl
  })

  // Animation instance
  const flow = {
    isActive: false,
    current: 0,
    loop: (i = 0) => {
      if (i === items.length) {
        i = 0
      }
      flow.current = i
      gsap.set(items[i], { zIndex: 1 })
      timelines[i]
        .repeat(1)
        .play(0)
        .eventCallback('onRepeat', () => {
          gsap.delayedCall(0.5, () => {
            gsap.set(items[i], { zIndex: 0 })
            flow.loop(i + 1)
          })
        })
    },
    goTo: (i) => {
      if (!flow.isActive) {
        flow.isActive = true
        timelines[flow.current]
          .repeat(0)
          .reverse(0.5)
          .eventCallback('onRepeat', null)
        gsap.set(items[flow.current], { zIndex: 0 })
        gsap.delayedCall(0.5, () => {
          flow.loop(i)
          flow.isActive = false
        })
      }
    },
  }
  flow.loop()

  // Click events
  function handleClick(circle) {
    flow.goTo(circleContainers.indexOf(circle))
  }
  circleContainers.forEach((circle) =>
    circle.addEventListener('click', () => handleClick(circle))
  )
}

export default press
