import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import agenda from './assets/agenda'
import bio from './assets/bio'
import contact from './assets/contact'
import footer from './assets/footer'
import hero from './assets/hero'
import { setLenis } from './assets/lenis'
import listen from './assets/listen'
import nav from './assets/nav'
import titres from './assets/titres'
import width from './assets/width'

if (document.readyState !== 'loading') {
  ScrollTrigger.refresh()
} else {
  document.addEventListener('DOMContentLoaded', () => ScrollTrigger.refresh())
  window.addEventListener('load', () => ScrollTrigger.refresh())
}

setLenis()
hero()
bio()
titres()
agenda()
width()
listen()
contact()
footer()

let mm = gsap.matchMedia()
mm.add('(max-width: 991px)', () => nav())

window.addEventListener('unload', () => window.scrollTo(0, 0))
