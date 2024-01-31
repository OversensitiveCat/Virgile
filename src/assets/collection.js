import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import animButton from './anim-button'
import animItem from './anim-item'

const collection = () => {
  // get collections
  const collections = Array.from(
    document.querySelectorAll('.collection-wrapper')
  )
  // build an object for each year
  function getItems(col) {
    return {
      list: col.querySelector('.collection-list'),
      items: Array.from(col.querySelectorAll('.concert-item')),
      button: col.parentNode.querySelector('.load-more'),
      hasButton: true,
    }
  }
  let objs = collections.map(getItems)

  function getArrays(obj) {
    let items = obj.items.slice()
    obj.arrays = []
    obj.columns = 0

    // divide the items by 15 and distribute the items between columns
    while (items.length) {
      let arr = items.splice(0, 15)
      obj.arrays.push(arr)
      obj.columns++
    }

    // hide button if there is only one column
    if (obj.columns === 1) {
      gsap.set(obj.button, { display: 'none' })
      obj.hasButton = false
    }

    obj.more = obj.arrays.slice()

    // items that are displayed
    obj.current = obj.more.shift()

    // items that aren't displayed
    obj.more.forEach((arr) => {
      arr.forEach((item) => item.remove())
    })
    return obj
  }
  objs = objs.map(getArrays)

  // ———— First collection - Next events —————
  // Anim displayed events
  animItem(objs[0].current)
  if (objs[0].hasButton) {
    animButton(objs[0].button)
  }

  // ———— All collections —————
  // Click events on load more button for all collections
  function load(obj) {
    // get next items to append
    let next = obj.more.shift()
    next.forEach((item) => {
      obj.list.appendChild(item)
    })

    // add scroll animations
    animItem(next)

    // remove the button if there is no more items to add
    if (obj.more.length === 0) {
      obj.button.style.display = 'none'
    }

    // refresh ScrollTrigger instance because of page's height change
    gsap.delayedCall(1.2, () => ScrollTrigger.refresh())
  }

  objs.forEach((obj) => {
    obj.button.addEventListener('click', () => load(obj))
  })

  // ————— Past collections: reveal on click —————
  const yearsTop = gsap.utils.toArray('.div-year-top')
  const years = gsap.utils.toArray('.div-year')

  // open event
  function open(div) {
    gsap.to(div, {
      height: 'auto',
      duration: 1,
      onComplete: () => ScrollTrigger.refresh(),
    })
  }

  // Add the event to each year
  yearsTop.forEach((year) => {
    let i = yearsTop.indexOf(year)
    year.addEventListener(
      'click',
      () => {
        open(years[i])
        gsap.set(yearsTop[i], { cursor: 'auto' })
        animItem(objs[i + 1].current)
        if (objs[i + 1].hasButton) {
          animButton(objs[i + 1].button)
        }
      },
      { once: true }
    )
  })
}

export default collection
