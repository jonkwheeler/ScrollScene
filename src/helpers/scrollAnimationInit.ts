import throttle from 'lodash.throttle'
import { isObject } from './isObject'

export const scrollAnimationInit = (breakpoints, init, destroy) => {
  if (isObject(breakpoints)) {
    const keys = Object.keys(breakpoints).reverse()

    const fn = () => {
      for (let index = 0; index < keys.length; index += 1) {
        const breakpoint = parseFloat(keys[index])

        if (breakpoint <= window.innerWidth) {
          if (breakpoints[breakpoint]) {
            init()
          } else {
            destroy()
          }

          break
        }
      }
    }

    fn()

    window.addEventListener('resize', throttle(fn, 700))
  } else {
    init()
  }
}
