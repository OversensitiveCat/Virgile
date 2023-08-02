import bio from './assets/bio'
import concerts from './assets/concerts'
import contact from './assets/contact'
import ham from './assets/ham'
import hero from './assets/hero'
import { setLenis } from './assets/lenis'
import titres from './assets/titres'

window.addEventListener('DOMContentLoaded', () => {
  setLenis()
  hero()
  bio()
  ham()
  titres()
  concerts()
  contact()
})
