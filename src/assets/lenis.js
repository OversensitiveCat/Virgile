import Lenis from '@studio-freight/lenis'
;('use strict')

const lenis = new Lenis({
  ease: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  lerp: 0.9,
  wheelMultiplier: 0.8,
})

const setLenis = () => {
  'use strict'
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
}

export { lenis, setLenis }
