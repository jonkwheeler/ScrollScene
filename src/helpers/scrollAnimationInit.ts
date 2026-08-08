import throttle from 'lodash.throttle'
import { isObject } from './isObject'

export const scrollAnimationInit = function(breakpoints, init, destroy) {
  if (isObject(breakpoints)) {
    const keys = Object.keys(breakpoints).reverse()

    const fn = function() {
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

    const throttledFn = throttle(fn, 700)

    fn()

    window.addEventListener('resize', throttledFn)

    return function cleanup() {
      throttledFn.cancel()
      window.removeEventListener('resize', throttledFn)
    }
  }

  init()

  return function cleanup() {}
}
