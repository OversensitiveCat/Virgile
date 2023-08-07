import { gsap } from 'gsap'

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
