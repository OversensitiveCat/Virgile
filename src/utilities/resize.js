const resizeX = (func, delay) => {
  if (!delay) {
    delay = 0
  }
  let timeoutId
  let previousWidth = window.innerWidth

  const onResize = () => {
    const currentWidth = window.innerWidth
    if (previousWidth !== currentWidth) {
      previousWidth = currentWidth
      func()
    }
  }

  return () => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => onResize(), delay)
  }
}

export default resizeX
