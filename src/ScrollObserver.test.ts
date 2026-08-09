import { describe, expect, it, vi, beforeEach } from 'vitest'
import { createArray } from './helpers/createArray'
import { createScrollObserver } from './ScrollObserver'

describe('createArray', function() {
  it('builds inclusive 0..1 steps for the requested count', function() {
    expect(createArray(2)).toEqual([0, 0.5, 1])
    expect(createArray(20).length).toBe(21)
  })
})

describe('createScrollObserver', function() {
  let latestCallback

  beforeEach(function() {
    latestCallback = null

    function FakeIntersectionObserver(callback, options) {
      latestCallback = callback
      this.callback = callback
      this.options = options
      this.observe = vi.fn()
      this.unobserve = vi.fn()
      this.disconnect = vi.fn()
    }

    // @ts-ignore
    global.IntersectionObserver = FakeIntersectionObserver
  })

  function fireEntry(partial) {
    latestCallback([
      Object.assign(
        {
          isIntersecting: false,
          intersectionRatio: 0,
          boundingClientRect: { top: 0, bottom: 100, height: 100, width: 100, left: 0, right: 100, x: 0, y: 0 },
          rootBounds: { top: 0, bottom: 800, height: 800, width: 800, left: 0, right: 800, x: 0, y: 0 },
          time: 0,
          target: null,
        },
        partial,
      ),
    ])
  }

  it('returns a handle with destroy and observer', function() {
    const el = document.createElement('div')
    document.body.appendChild(el)

    const handle = createScrollObserver({
      triggerElement: el,
    })

    expect(typeof handle.destroy).toBe('function')
    expect(handle.observer).toBeTruthy()
    expect(typeof handle.observer.observe).toBe('function')

    handle.destroy()
  })

  it('uses a smaller threshold array for useDuration than the legacy 200 steps', function() {
    const el = document.createElement('div')
    document.body.appendChild(el)

    const handle = createScrollObserver({
      triggerElement: el,
      useDuration: true,
    })

    const threshold = (handle.observer as any).options.threshold
    expect(Array.isArray(threshold)).toBe(true)
    expect(threshold.length).toBe(21)
    expect(threshold.length).toBeLessThan(200)

    handle.destroy()
  })

  it('with persistWhenPast keeps active after scrolling past, clears when below again', function() {
    const trigger = document.createElement('div')
    const toggleEl = document.createElement('div')
    document.body.appendChild(trigger)
    document.body.appendChild(toggleEl)

    const handle = createScrollObserver({
      triggerElement: trigger,
      persistWhenPast: true,
      toggle: {
        element: toggleEl,
        className: 'is-on',
      },
    })

    fireEntry({
      isIntersecting: true,
      intersectionRatio: 1,
      boundingClientRect: { top: 100, bottom: 200, height: 100, width: 100, left: 0, right: 100, x: 0, y: 100 },
    })
    expect(toggleEl.classList.contains('is-on')).toBe(true)

    fireEntry({
      isIntersecting: false,
      intersectionRatio: 0,
      boundingClientRect: { top: -200, bottom: -100, height: 100, width: 100, left: 0, right: 100, x: 0, y: -200 },
    })
    expect(toggleEl.classList.contains('is-on')).toBe(true)

    fireEntry({
      isIntersecting: false,
      intersectionRatio: 0,
      boundingClientRect: { top: 900, bottom: 1000, height: 100, width: 100, left: 0, right: 100, x: 0, y: 900 },
    })
    expect(toggleEl.classList.contains('is-on')).toBe(false)

    handle.destroy()
  })

  it('without persistWhenPast turns inactive when leaving the viewport upward', function() {
    const trigger = document.createElement('div')
    const toggleEl = document.createElement('div')
    document.body.appendChild(trigger)
    document.body.appendChild(toggleEl)

    const handle = createScrollObserver({
      triggerElement: trigger,
      toggle: {
        element: toggleEl,
        className: 'is-on',
      },
    })

    fireEntry({
      isIntersecting: true,
      intersectionRatio: 1,
      boundingClientRect: { top: 100, bottom: 200, height: 100, width: 100, left: 0, right: 100, x: 0, y: 100 },
    })
    expect(toggleEl.classList.contains('is-on')).toBe(true)

    fireEntry({
      isIntersecting: false,
      intersectionRatio: 0,
      boundingClientRect: { top: -200, bottom: -100, height: 100, width: 100, left: 0, right: 100, x: 0, y: -200 },
    })
    expect(toggleEl.classList.contains('is-on')).toBe(false)

    handle.destroy()
  })
})
