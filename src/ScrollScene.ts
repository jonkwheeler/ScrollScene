import ScrollMagic from './scrollmagic-with-ssr'
import throttle from 'lodash.throttle'
import { errorLog, isObject, scrollAnimationInit } from './helpers'
import { IScrollObserverToggle, IScrollObserverGsap } from './ScrollObserver'

const nameSpace = 'ScrollScene'

const updateTweenProgress = function(Scene, Tween, gsapForwardSpeed, gsapReverseSpeed) {
  if (Tween) {
    const progress = Scene.progress()
    const state = Scene.state()
    if (Tween.repeat && Tween.repeat() === -1) {
      // infinite loop, so not in relation to progress
      if (state === 'DURING' && Tween.paused()) {
        Tween.timeScale(gsapForwardSpeed).play()
      } else if (state !== 'DURING' && !Tween.paused()) {
        Tween.pause()
      }
    } else if (progress != Tween.progress()) {
      // do we even need to update the progress?
      // no infinite loop - so should we just play or go to a specific point in time?
      if (Scene.duration() === 0) {
        // play the animation
        if (progress > 0) {
          // play from 0 to 1
          Tween.timeScale(gsapForwardSpeed).play()
        } else {
          // play from 1 to 0
          Tween.timeScale(gsapReverseSpeed).reverse()
        }
      } else {
        // go to a specific point in time
        // just hard set it
        Tween.progress(progress).pause()
      }
    }
  }
}

const removeTween = function(Tween) {
  if (Tween) {
    Tween.pause(0)
    Tween.kill()
  }
}

const setDuration = (Scene, duration) => {
  if (isObject(duration)) {
    const keys = Object.keys(duration).reverse()

    const fn = () => {
      for (let index = 0; index < keys.length; index++) {
        const breakpoint = parseFloat(keys[index])

        if (breakpoint <= window.innerWidth) {
          Scene.duration(duration[breakpoint])
          break
        }
      }
    }

    fn()

    window.addEventListener('resize', throttle(fn, 700))
  } else {
    Scene.duration(duration)
  }
}

const setClassName = (Scene, options, duration) => {
  const toggle = {
    className: null,
    element: null,
    reverse: false,
    ...options,
  }

  if (!toggle.className) {
    errorLog(nameSpace, `Be sure to set a className in the new ${nameSpace}({ toggle: { className: "my-class" } })`)
  }

  if (!toggle.element) {
    errorLog(
      nameSpace,
      `Be sure to set a const toggleElement = (reactRef.current or document.querySelector) in the new ${nameSpace}({ toggle: { element: toggleElement } })`,
    )
  }

  const addClassName = () =>
    !toggle.element.classList.contains(toggle.className) && toggle.element.classList.add(toggle.className)

  const removeClassName = () =>
    toggle.element.classList.contains(toggle.className) && toggle.element.classList.remove(toggle.className)

  Scene.on('enter', function() {
    addClassName()
  })

  Scene.on('add', function() {
    if (Scene.state() === 'DURING') {
      addClassName()
    }
  })

  Scene.on('leave', function(event) {
    if (!toggle.reverse && duration) {
      // needs to be based on whether or not we have a duration
      event.scrollDirection === 'REVERSE' && removeClassName()
    } else {
      removeClassName()
    }
  })

  Scene.on('remove', function() {
    removeClassName()
  })
}

const setTween = (Scene, options) => {
  const gsap = {
    forwardSpeed: 1,
    reverseSpeed: 1,
    timeline: null,
    ...options,
  }

  if (!gsap.timeline) {
    errorLog(
      nameSpace,
      `Be sure to set a const tl = gsap.timeline({ paused: true }) in the new ${nameSpace}({ gsap: { timeline: tl } })`,
    )
  }

  Scene.on('progress', function() {
    updateTweenProgress(Scene, gsap.timeline, gsap.forwardSpeed, gsap.reverseSpeed)
  })

  Scene.on('remove', function() {
    removeTween(gsap.timeline)
  })
}

interface IScrollSceneToggle extends IScrollObserverToggle {
  /**
   * reverse
   * @desc Specify the className should be removed after the duration of scene is met. Only applies if scene has duration.
   * @type boolean
   * @default false
   * @example
   * toggle: { reverse: true }
   */
  reverse?: boolean
}

interface IScrollScene {
  /**
   * breakpoints
   * @desc Use to set responsiveness of the new ScrollMagic.Scene, mobile-first
   * @type object
   * @example
   * breakpoints: { 0: false, 768: true }
   */
  breakpoints?: object

  /**
   * duration
   * @desc Use to set responsiveness of the new ScrollMagic.Scene, mobile-first (if setting breakpoints)
   * Must be string for percentage, and number for pixel.
   * @type object
   * @example
   * duration: '100%' = 100vh
   * duration: 100 = 100px
   * duration: { 0: '50%', 768: '100% } // = ScrollScene lasts 50vh on mobile, 100% after
   */
  duration?: string | number | object

  /**
   * gsap
   * @desc Use to set options for the gsap animation of the ScrollObserver.
   * @type object
   * @example
   * gsap: { timeline: myTimeline, yoyo: true, reverseSpeed: 2 }
   */
  gsap?: IScrollObserverGsap

  /**
   * triggerHook
   * @desc Set the offset of the ScrollMagic scene.
   * @type  number | string
   * @defaultvalue 0
   * @example
   * offset: 100
   * offset: '10%'
   */
  offset?: number | string

  /**
   * scrollMagic
   * @desc Extra options to pass the new ScrollMagic.Scene, like logLevel, etc.
   * @type object
   * @example
   * scrollMagic: { logLevel: 2 }
   */
  scrollMagic?: object

  /**
   * toggle
   * @desc Use to set the options for the toggling of a className
   * @type object
   * @example
   * toggle: { element: containerRef.current, className: 'lets-do-this' }
   */
  toggle?: IScrollSceneToggle

  /**
   * triggerElement
   * @desc Set the element you wish to trigger events based upon, the observed element.
   * @type  HTMLElement | React.ReactNode | any
   * @example
   * triggerElement: triggerRef.current
   */
  triggerElement: HTMLElement | React.ReactNode | any

  /**
   * triggerHook
   * @desc Set the triggerHook of the ScrollMagic scene.
   * @type  number
   * @defaultvalue 'onEnter'
   * @example
   * triggerHook: 0.5
   */
  triggerHook?: number | string
}

// add controller var
let controller

const ScrollScene = function(
  this: any,
  {
    breakpoints,
    duration,
    gsap,
    offset = 0,
    scrollMagic,
    toggle,
    triggerElement,
    triggerHook = 'onEnter',
  }: IScrollScene,
) {
  // mount controller
  if (!controller) {
    controller = new ScrollMagic.Controller()
  }

  if (!triggerElement) {
    errorLog(
      nameSpace,
      `Be sure to set a const triggerElement = (reactRef.current or document.querySelector) in the new ${nameSpace}({ triggerElement: triggerElement })`,
    )
  }

  const Scene = new ScrollMagic.Scene({
    triggerElement,
    triggerHook,
    offset,
    ...scrollMagic,
  })

  if (duration) {
    setDuration(Scene, duration)
  }

  if (toggle && isObject(toggle)) {
    setClassName(Scene, toggle, duration)
  }

  if (gsap && isObject(gsap)) {
    setTween(Scene, gsap)
  }

  this.init = function() {
    controller && Scene.addTo(controller)
  }

  this.destroy = function() {
    Scene.remove()
  }

  scrollAnimationInit(breakpoints, this.init, this.destroy)
}

export { ScrollScene }
