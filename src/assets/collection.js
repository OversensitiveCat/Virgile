import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import animButton from './anim-button'
import animItem from './anim-item'

const collection = () => {
  //
  const collections = Array.from(
    document.querySelectorAll('.collection-wrapper')
  )
  //
  function getItems(col) {
    return {
      list: col.querySelector('.collection-list'),
      items: Array.from(col.querySelectorAll('.concert-item')),
      button: col.parentNode.querySelector('.load-more'),
    }
  }
  let objs = collections.map(getItems)

  //
  function divide(obj) {
    obj.columns = Math.floor(obj.items.length / 15)
    obj.remainder = obj.items.length % 15
    if (obj.columns === 1) {
      gsap.set(obj.button, { display: 'none' })
    }
    return obj
  }
  objs = objs.map(divide)
  //
  function getArrays(obj) {
    let items = obj.items.slice()
    let arrays = []
    let i = 0
    while (i < obj.columns) {
      let arr = items.splice(0, 15)
      arrays.push(arr)
      i++
    }
    if (obj.remainder) {
      arrays.push(items)
    }
    obj.arrays = arrays
    obj.more = arrays.slice()
    obj.current = obj.more.shift()
    obj.more.forEach((arr) => {
      arr.forEach((item) => item.remove())
    })
    return obj
  }
  objs = objs.map(getArrays)

  // First collection

  animItem(objs[0].current)
  animButton(objs[0].button)

  // Past collections
  const yearsTop = gsap.utils.toArray('.div-year-top')
  const years = gsap.utils.toArray('.div-year')
  const last = Array.from(years[2].querySelectorAll('.concert-item'))
  function open(div) {
    gsap.to(div, {
      height: 'auto',
      duration: 1,
      onComplete: () => ScrollTrigger.refresh(),
    })
  }
  yearsTop[0].addEventListener(
    'click',
    () => {
      open(years[0])
      gsap.set(yearsTop[0], { cursor: 'auto' })
      animItem(objs[1].current)
      animButton(objs[1].button)
    },
    { once: true }
  )
  yearsTop[1].addEventListener(
    'click',
    () => {
      open(years[1])
      gsap.set(yearsTop[1], { cursor: 'auto' })
      animItem(objs[2].current)
      animButton(objs[2].button)
    },
    { once: true }
  )
  yearsTop[2].addEventListener(
    'click',
    () => {
      open(years[2])
      gsap.set(yearsTop[2], { cursor: 'auto' })
      animItem(last)
    },
    { once: true }
  )

  // Events
  function load(obj) {
    let next = obj.more.shift()
    next.forEach((item) => {
      obj.list.appendChild(item)
    })

    animItem(next)
    if (obj.more.length === 0) {
      obj.button.style.display = 'none'
    }
    gsap.delayedCall(1.2, () => ScrollTrigger.refresh())
  }

  objs.forEach((obj) => {
    obj.button.addEventListener('click', () => load(obj))
  })
}

export default collection
