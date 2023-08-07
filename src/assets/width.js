import { gsap } from 'gsap'

const width = () => {
  let sections = gsap.utils.toArray('.contact, .concerts-photo')

  function rectifyHeight() {
    let h = window.innerHeight - 79
    gsap.set(sections, { height: h })
  }

  rectifyHeight()

  // window.addEventListener('resize', rectifyHeight)
}

export default width
