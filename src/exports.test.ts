import { describe, expect, it } from 'vitest'
import { createScrollScene } from './ScrollScene'
import { createScrollObserver } from './ScrollObserver'
import * as observerEntry from './observer'

describe('public factory exports', function() {
  it('exports factories from engine modules', function() {
    expect(typeof createScrollScene).toBe('function')
    expect(typeof createScrollObserver).toBe('function')
  })

  it('exports createScrollObserver from the observer entry', function() {
    expect(typeof observerEntry.createScrollObserver).toBe('function')
    expect((observerEntry as any).ScrollObserver).toBeUndefined()
  })

  it('keeps the observer entry free of ScrollMagic exports', function() {
    expect((observerEntry as any).ScrollMagic).toBeUndefined()
    expect((observerEntry as any).addIndicators).toBeUndefined()
    expect((observerEntry as any).createScrollScene).toBeUndefined()
  })
})
