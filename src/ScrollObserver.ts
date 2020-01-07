import { errorLog, isObject, roundOff, scrollAnimationInit } from './helpers'

const nameSpace = 'ScrollObserver'

const setClassName = function(this: any, options) {
  const toggle = {
    element: null,
    className: null,
    ...options,
  }

  if (!toggle.element) {
    errorLog(
      nameSpace,
      `Be sure to set a const toggleElement = (reactRef.current or document.querySelector) in the new ${nameSpace}({ toggle: { element: toggleElement } })`,
    )
  }

  if (!toggle.className) {
    errorLog(
      nameSpace,
      `Be sure to set the className you want to toggle in the new ${nameSpace}({ toggle: { className: "my-class" } })`,
    )
  }

  this.add = function() {
    /* add className if it's not already there */
    !toggle.element.classList.contains(toggle.className) && toggle.element.classList.add(toggle.className)
  }

  this.remove = function() {
    /* remove className if it's there */
    toggle.element.classList.contains(toggle.className) && toggle.element.classList.remove(toggle.className)
  }

  this.update = function(isIntersecting) {
    isIntersecting ? this.add() : this.remove()
  }
}

const setTween = function(this: any, options) {
  const gsap = {
    timeline: null,
    yoyo: false,
    speed: 1,
    reverseSpeed: 1,
    delay: 2,
    ...options,
  }

  if (!gsap.timeline) {
    errorLog(
      nameSpace,
      `Be sure to set a const tl = gsap.timeline({ paused: true }) in the new ${nameSpace}({ gsap: { timeline: tl } })`,
    )
  }

  const tl = gsap.timeline

  if (gsap.yoyo) {
    tl.repeat(-1)
      .yoyo(gsap.yoyo)
      .repeatDelay(gsap.delay)
  }

  this.play = function() {
    tl.timeScale(gsap.speed).play()
  }

  this.pause = function() {
    tl.pause()
  }

  this.reverse = function() {
    tl.timeScale(gsap.reverseSpeed).reverse()
  }

  this.kill = function() {
    if (tl) {
      tl.pause(0)
      tl.kill()
    }
  }

  this.update = function(isIntersecting) {
    isIntersecting ? this.play() : gsap.yoyo ? this.pause() : this.reverse()
  }

  this.scrub = function(intersectionRatio) {
    tl.progress(intersectionRatio)
  }
}

const setPlayer = function(this: any, options) {
  const video = {
    element: null,
    ...options,
  }

  if (!video.element) {
    errorLog(
      nameSpace,
      `Be sure to set a video element in the new ${nameSpace}({ video: { element: videoRef.current } })`,
    )
  }

  this.play = function() {
    video.element.play()
  }

  this.pause = function() {
    video.element.pause()
  }

  this.kill = function() {
    video.element.pause()
  }

  this.update = function(isIntersecting) {
    isIntersecting ? this.play() : this.pause()
  }
}

export interface IScrollObserverGsap {
  /**
   * timeline
   * @desc Insert your gsap.timeline object var
   * @type object
   * @example
   * const myTimeline = gsap.timeline()
   * gsap: { timeline: myTimeline }
   */
  timeline: any

  /**
   * yoyo
   * @desc Do you want gsap animation to loop back and forth?
   * @type boolean
   * @default false
   * @example
   * gsap: { yoyo: true }
   */
  yoyo?: boolean

  /**
   * speed
   * @desc The speed at which the gsap animation will play relative to it's current speed.
   * @type number
   * @default 1
   * @example
   * gsap: { speed: 2 } // = twice as fast
   */
  speed?: number

  /**
   * speed
   * @desc The speed at which the gsap animation will reverse relative to it's current speed.
   * @type number
   * @default 4
   * @example
   * gsap: { speed: 4 } // = 4x as fast
   */
  reverseSpeed?: number

  /**
   * delay
   * @desc The delay (in seconds) at which the gsap animation wait before reversing.
   * @type number
   * @default 2
   * @example
   * gsap: { delay: 3 } // = Wait 3 seconds
   */
  delay?: number
}

export interface IScrollObserverToggle {
  /**
   * className
   * @desc Specify the className you wish to toggle.
   * @type string
   * @example
   * toggle: { className: 'turn-me-blue-baby' }
   */
  className: string

  /**
   * element
   * @desc Specify the element you wish to toggle the className on.
   * @type HTMLElement | React.ReactNode | any
   * @example
   * toggle: { element: containerRef.current }
   */
  element: HTMLElement | React.ReactNode | any
}

export interface IScrollObserverVideo {
  /**
   * element
   * @desc Specify the video element you wish to interact with.
   * @type HTMLElement | React.ReactNode | any
   * @example
   * video: { element: videoRef.current }
   */
  element: HTMLElement | React.ReactNode | any
}

interface IScrollObserver {
  /**
   * breakpoints
   * @desc Use to set responsiveness of the ScrollObserver, mobile-first
   * @type object
   * @example
   * breakpoints: { 0: false, 768: true }
   */
  breakpoints?: object

  /**
   * gsap
   * @desc Use to set options for the gsap animation of the ScrollObserver.
   * @type object
   * @example
   * gsap: { timeline: myTimeline, yoyo: true, reverseSpeed: 2 }
   */
  gsap?: IScrollObserverGsap

  /**
   * observer
   * @desc Extra options to pass the IntersectionObserver, like root, rootMargin, threshold (to override the thresholds option)
   * @type object
   * @example
   * observer: { rootMargin: '-50% 0%' }
   */
  observer?: object

  /**
   * offset
   * @desc Change the offset. This uses rootMargin thus only works as a negative offset.
   * @type number | string
   * @defaultvalue '0% 0%'
   * @example
   * offset: 500 // this will be rootMargin: '-500px 0%'
   */
  offset?: number | string

  /**
   * thresholds
   * @desc Set the number of thresholds you want.
   * @returns An Array of number from 0 to 1. Add 1 to your number to account for 0.
   * @type number
   * @example
   * thresholds: 1 = [0, 1]
   * thresholds: 2 = [0, 0.5, 1]
   * thresholds: 3 = [0, 0.33, 0.67, 1]
   * thresholds: 100 = [0, 0.1, 0.2, ... 0.98, 0.99, 1]
   */
  thresholds?: number

  /**
   * toggle
   * @desc Use to set the options for the toggling of a className
   * @type object
   * @example
   * toggle: { element: containerRef.current, className: 'lets-do-this' }
   */
  toggle?: IScrollObserverToggle

  /**
   * triggerElement
   * @desc Set the element you wish to trigger events based upon, the observed element.
   * @type HTMLElement | React.ReactNode | any
   * @example
   * triggerElement: triggerRef.current
   */
  triggerElement: HTMLElement | React.ReactNode | any

  /**
   * useDuration
   * @desc Use the percentage of element visibility to scrub the gsap timeline.
   * @type boolean
   * @example
   * useDuration: true
   */
  useDuration?: boolean

  /**
   * video
   * @desc Use to set the options for playing and pausing of the video.
   * @type object
   * @example
   * video: { element: videoRef.current }
   */
  video?: IScrollObserverVideo
}

const ScrollObserver = function(
  this: any,
  { breakpoints, gsap, observer, offset, thresholds, toggle, triggerElement, useDuration, video }: IScrollObserver,
) {
  if (!triggerElement) {
    errorLog(
      nameSpace,
      'Be sure to set a const triggerElement = (reactRef.current or document.querySelector) in the new ScrollScene({ triggerElement: triggerElement })',
    )
  }

  let setToggle
  let setGsap
  let setVideo
  let setRootMargin = '0% 0%'

  if (typeof offset === 'number') {
    // protect against positive px values, for now
    setRootMargin = `-${Math.abs(offset)}px 0%`
  } else if (typeof offset === 'string') {
    // protect against positive percentage values, for now
    setRootMargin = `-${Math.abs(parseFloat(offset))}% 0%`
  }

  if (toggle && isObject(toggle)) {
    setToggle = new setClassName(toggle)
  }

  if (gsap && isObject(gsap)) {
    setGsap = new setTween(gsap)
  }

  if (video && isObject(video)) {
    setVideo = new setPlayer(video)
  }

  const observerCallback = function(entries) {
    entries.forEach(({ isIntersecting, intersectionRatio }) => {
      setToggle && setToggle.update(isIntersecting)
      setGsap && !useDuration ? setGsap.update(isIntersecting) : setGsap.scrub(intersectionRatio)
      setVideo && setVideo.update(isIntersecting)
    })
  }

  const getThresolds = () => {
    const steps = useDuration ? 199 : thresholds ? thresholds : false

    /*
     * Set performance using thresholds
     * @desc Building an array of numbers starting at 0.00 and incrementing at every 0.01
     * @example
     * thresholds = 2 [0, 0.5, 1], thresholds = 3 [0, 0.33, 0.67, 1]
     */
    return steps
      ? Array.apply(null, new Array(steps + 1))
          // @ts-ignore
          .map((n, i) => roundOff(i / steps))
      : [0, 1]
  }

  const Observer = new IntersectionObserver(observerCallback, {
    threshold: getThresolds(),
    rootMargin: setRootMargin,
    ...observer,
  })

  this.init = function() {
    Observer.observe(triggerElement)
  }

  this.destroy = function() {
    if (triggerElement && Observer) {
      if (setToggle) {
        setToggle.remove()
      }

      if (setGsap) {
        setGsap.kill()
      }

      if (setVideo) {
        setVideo.kill()
      }

      Observer.unobserve(triggerElement)
    }
  }

  scrollAnimationInit(breakpoints, this.init, this.destroy)
}

export { ScrollObserver }
