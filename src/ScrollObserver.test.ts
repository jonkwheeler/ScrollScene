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
  beforeEach(function() {
    function FakeIntersectionObserver(callback, options) {
      this.callback = callback
      this.options = options
      this.observe = vi.fn()
      this.unobserve = vi.fn()
      this.disconnect = vi.fn()
    }

    // @ts-ignore
    global.IntersectionObserver = FakeIntersectionObserver
  })

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
})
