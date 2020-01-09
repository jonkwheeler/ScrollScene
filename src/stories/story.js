import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ScrollScene } from '../ScrollScene'
import { ScrollObserver } from '../ScrollObserver'
import { gsap } from 'gsap'

import notes from '../../README.md'

storiesOf('ScrollScene|toggle (className)', module)
  .add(
    'triggerHook: 0',
    () => {
      // init ref
      const containerRef = React.useRef(null)
      const triggerRef = React.useRef(null)

      React.useEffect(() => {
        const { current: containerElement } = containerRef
        const { current: triggerElement } = triggerRef

        if (!containerElement && !triggerElement) {
          return undefined
        }

        const scrollScene = new ScrollScene({
          triggerElement,
          toggle: {
            element: containerElement,
            className: 'turn-blue',
          },
          triggerHook: 0,
        })

        return () => {
          scrollScene.destroy()
        }
      })

      return (
        <div className="bg-lightgrey transition" ref={containerRef}>
          <div style={{ height: '50vh' }} />

          <h3>triggerHook: 0</h3>
          <h1>Scroll Down</h1>

          <div style={{ height: '150vh' }} />

          <div ref={triggerRef}>When this hits the top the page will turn blue</div>

          <div style={{ height: '150vh' }} />
        </div>
      )
    },
    {
      notes: { markdown: notes },
    },
  )
  .add(
    'triggerHook: 0.5',
    () => {
      // init ref
      const containerRef = React.useRef(null)
      const triggerRef = React.useRef(null)

      React.useEffect(() => {
        const { current: containerElement } = containerRef
        const { current: triggerElement } = triggerRef

        if (!containerElement && !triggerElement) {
          return undefined
        }

        const scrollScene = new ScrollScene({
          triggerElement,
          toggle: {
            element: containerElement,
            className: 'turn-blue',
          },
          triggerHook: 0.5,
        })

        return () => {
          scrollScene.destroy()
        }
      })

      return (
        <div className="bg-lightgrey transition" ref={containerRef}>
          <div style={{ height: '50vh' }} />

          <h3>triggerHook: 0.5</h3>
          <h1>Scroll Down</h1>

          <div style={{ height: '150vh' }} />

          <div ref={triggerRef}>When this the middle of the page the page will turn blue</div>

          <div style={{ height: '150vh' }} />
        </div>
      )
    },
    {
      notes: { markdown: notes },
    },
  )
  .add(
    'triggerHook: 1',
    () => {
      // init ref
      const containerRef = React.useRef(null)
      const triggerRef = React.useRef(null)

      React.useEffect(() => {
        const { current: containerElement } = containerRef
        const { current: triggerElement } = triggerRef

        if (!containerElement && !triggerElement) {
          return undefined
        }

        const scrollScene = new ScrollScene({
          triggerElement,
          toggle: {
            element: containerElement,
            className: 'turn-blue',
          },
          triggerHook: 1,
        })

        return () => {
          scrollScene.destroy()
        }
      })

      return (
        <div className="bg-lightgrey transition" ref={containerRef}>
          <div style={{ height: '50vh' }} />

          <h3>triggerHook: 1</h3>
          <h1>Scroll Down</h1>

          <div style={{ height: '150vh' }} />

          <div ref={triggerRef} style={{ color: 'white' }}>
            When this appears on page the page will turn blue
          </div>

          <div style={{ height: '150vh' }} />
        </div>
      )
    },
    {
      notes: { markdown: notes },
    },
  )
  .add(
    'duration: "100%", reverse: true',
    () => {
      // init ref
      const containerRef = React.useRef(null)
      const triggerRef = React.useRef(null)

      React.useEffect(() => {
        const { current: containerElement } = containerRef
        const { current: triggerElement } = triggerRef

        if (!containerElement && !triggerElement) {
          return undefined
        }

        const scrollScene = new ScrollScene({
          triggerElement,
          toggle: {
            element: containerElement,
            className: 'turn-blue',
            reverse: true,
          },
          triggerHook: 1,
          duration: '100%',
        })

        return () => {
          scrollScene.destroy()
        }
      })

      return (
        <div className="bg-lightgrey transition" ref={containerRef}>
          <div style={{ height: '50vh' }} />

          <h3>duration: "100%", reverse: true</h3>
          <h1>Scroll Down</h1>

          <div style={{ height: '150vh' }} />

          <div ref={triggerRef}>
            When this hits the top of the page the page will turn blue and it will last for 100% of the viewport height
          </div>

          <div style={{ height: '100vh' }} />

          <div ref={triggerRef} style={{ color: 'white' }}>
            When this hits the top of the page the page will reverse the scene
          </div>

          <div style={{ height: '150vh' }} />
        </div>
      )
    },
    {
      notes: { markdown: notes },
    },
  )

storiesOf('ScrollScene|gsap', module)
  .add(
    'Basic Example',
    () => {
      // init ref
      const containerRef = React.useRef(null)
      const triggerRef = React.useRef(null)
      const squareRef = React.useRef(null)

      React.useEffect(() => {
        const { current: containerElement } = containerRef
        const { current: triggerElement } = triggerRef
        const { current: squareElement } = squareRef

        if (!containerElement && !triggerElement && !squareElement) {
          return undefined
        }

        // create a timeline and add a tween
        const tl = gsap.timeline({ paused: true })

        tl.to(squareElement, {
          x: -200,
          duration: 1,
          ease: 'power2.out',
        })

        const scrollScene = new ScrollScene({
          triggerElement,
          gsap: {
            timeline: tl,
          },
          triggerHook: 0,
        })

        return () => {
          scrollScene.destroy()
        }
      })

      return (
        <div className="bg-lightgrey transition" ref={containerRef}>
          <div style={{ height: '50vh' }} />

          <h3>Basic Example</h3>
          <h1>Scroll Down</h1>

          <div style={{ height: '150vh' }} />

          <div ref={triggerRef}>
            When this hits the top the page the container will move 20%, and scrolling back up will reverse it
            automatically
          </div>
          <div style={{ height: '50vh' }} />
          <div
            ref={squareRef}
            style={{ height: 50, width: 50, background: 'red', position: 'fixed', top: 0, right: 0 }}
          />

          <div style={{ height: '150vh' }} />
        </div>
      )
    },
    {
      notes: { markdown: notes },
    },
  )
  .add(
    'reverseSpeed: 4, triggerHook: 0',
    () => {
      // init ref
      const containerRef = React.useRef(null)
      const triggerRef = React.useRef(null)
      const squareRef = React.useRef(null)

      React.useEffect(() => {
        const { current: containerElement } = containerRef
        const { current: triggerElement } = triggerRef
        const { current: squareElement } = squareRef

        if (!containerElement && !triggerElement && !squareElement) {
          return undefined
        }

        // create a timeline and add a tween
        const tl = gsap.timeline({ paused: true })

        tl.to(squareElement, {
          x: -200,
          duration: 1,
          ease: 'power2.out',
        })

        const scrollScene = new ScrollScene({
          triggerElement,
          gsap: {
            timeline: tl,
            reverseSpeed: 4,
          },
          triggerHook: 0,
        })

        return () => {
          scrollScene.destroy()
        }
      })

      return (
        <div className="bg-lightgrey transition" ref={containerRef}>
          <div style={{ height: '50vh' }} />

          <h3>reverseSpeed: 4, triggerHook: 0</h3>
          <h1>Scroll Down</h1>

          <div style={{ height: '150vh' }} />

          <div ref={triggerRef}>
            When this hits the top the page the container will move 20%, and scrolling back up will reverse it 4 times
            faster
          </div>
          <div style={{ height: '50vh' }} />
          <div
            ref={squareRef}
            style={{ height: 50, width: 50, background: 'red', position: 'fixed', top: 0, right: 0 }}
          />

          <div style={{ height: '150vh' }} />
        </div>
      )
    },
    {
      notes: { markdown: notes },
    },
  )
  .add(
    'forwardSpeed: 2, reverseSpeed: 0.5',
    () => {
      // init ref
      const containerRef = React.useRef(null)
      const triggerRef = React.useRef(null)
      const squareRef = React.useRef(null)

      React.useEffect(() => {
        const { current: containerElement } = containerRef
        const { current: triggerElement } = triggerRef
        const { current: squareElement } = squareRef

        if (!containerElement && !triggerElement && !squareElement) {
          return undefined
        }

        // create a timeline and add a tween
        const tl = gsap.timeline({ paused: true })

        tl.to(squareElement, {
          x: -200,
          duration: 1,
          ease: 'power2.out',
        })

        const scrollScene = new ScrollScene({
          triggerElement,
          gsap: {
            timeline: tl,
            forwardSpeed: 2,
            reverseSpeed: 0.5,
          },
          triggerHook: 0,
        })

        return () => {
          scrollScene.destroy()
        }
      })

      return (
        <div className="bg-lightgrey transition" ref={containerRef}>
          <div style={{ height: '50vh' }} />

          <h3>forwardSpeed: 2, reverseSpeed: 1</h3>
          <h1>Scroll Down</h1>

          <div style={{ height: '150vh' }} />

          <div ref={triggerRef}>
            When this hits the top the page the container will move 20% and 2 times faster than normal, and scrolling
            back up will reverse it half it's normal speed
          </div>
          <div style={{ height: '50vh' }} />
          <div
            ref={squareRef}
            style={{ height: 50, width: 50, background: 'red', position: 'fixed', top: 0, right: 0 }}
          />

          <div style={{ height: '150vh' }} />
        </div>
      )
    },
    {
      notes: { markdown: notes },
    },
  )
  .add(
    'duration: 500',
    () => {
      // init ref
      const containerRef = React.useRef(null)
      const triggerRef = React.useRef(null)
      const squareRef = React.useRef(null)

      React.useEffect(() => {
        const { current: containerElement } = containerRef
        const { current: triggerElement } = triggerRef
        const { current: squareElement } = squareRef

        if (!containerElement && !triggerElement && !squareElement) {
          return undefined
        }

        // create a timeline and add a tween
        const tl = gsap.timeline({ paused: true })

        tl.to(squareElement, {
          x: -200,
          duration: 1,
          ease: 'none',
        })

        const scrollScene = new ScrollScene({
          triggerElement,
          gsap: {
            timeline: tl,
          },
          duration: 500,
          triggerHook: 0,
        })

        return () => {
          scrollScene.destroy()
        }
      })

      return (
        <div className="bg-lightgrey transition" ref={containerRef}>
          <div style={{ height: '50vh' }} />

          <h3>duration: 500</h3>
          <h1>Scroll Down</h1>

          <div style={{ height: '150vh' }} />

          <div ref={triggerRef}>
            When this hits the top the page the container will move 20% but attached to a 500px duration
          </div>
          <div style={{ height: '50vh' }} />
          <div
            ref={squareRef}
            style={{ height: 50, width: 50, background: 'red', position: 'fixed', top: 0, right: 0 }}
          />

          <div style={{ height: '150vh' }} />
        </div>
      )
    },
    {
      notes: { markdown: notes },
    },
  )

storiesOf('ScrollObserver|toggle (className)', module).add(
  'Basic Example',
  () => {
    // init ref
    const containerRef = React.useRef(null)
    const triggerRef = React.useRef(null)

    React.useEffect(() => {
      const { current: containerElement } = containerRef
      const { current: triggerElement } = triggerRef

      if (!containerElement && !triggerElement) {
        return undefined
      }

      const scrollObserver = new ScrollObserver({
        triggerElement,
        toggle: {
          element: containerElement,
          className: 'turn-blue',
        },
      })

      return () => {
        scrollObserver.destroy()
      }
    })

    return (
      <div className="bg-lightgrey transition" ref={containerRef}>
        <div style={{ height: '50vh' }} />

        <h3>Basic Example</h3>
        <h1>Scroll Down</h1>

        <div style={{ height: '150vh' }} />

        <div ref={triggerRef} style={{ color: 'white' }}>
          While this is visible on the page the page will turn blue
        </div>

        <div style={{ height: '150vh' }} />
      </div>
    )
  },
  {
    notes: { markdown: notes },
  },
)

storiesOf('ScrollObserver|gsap', module)
  .add(
    'Basic Example',
    () => {
      // init ref
      const containerRef = React.useRef(null)
      const triggerRef = React.useRef(null)
      const squareRef = React.useRef(null)

      React.useEffect(() => {
        const { current: containerElement } = containerRef
        const { current: triggerElement } = triggerRef
        const { current: squareElement } = squareRef

        if (!containerElement && !triggerElement && !squareElement) {
          return undefined
        }

        // create a timeline and add a tween
        const tl = gsap.timeline({ paused: true })

        tl.to(squareElement, {
          x: -200,
          duration: 1,
          ease: 'power2.out',
        })

        const scrollObserver = new ScrollObserver({
          triggerElement,
          gsap: {
            timeline: tl,
          },
        })

        return () => {
          scrollObserver.destroy()
        }
      })

      return (
        <div className="bg-lightgrey transition" ref={containerRef}>
          <div style={{ height: '50vh' }} />

          <h3>Basic Example</h3>
          <h1>Scroll Down</h1>

          <div style={{ height: '150vh' }} />

          <div ref={triggerRef}>While this is visible on the page the container will move 20%</div>
          <div style={{ height: '50vh' }} />
          <div
            ref={squareRef}
            style={{ height: 50, width: 50, background: 'red', position: 'fixed', top: 0, right: 0 }}
          />

          <div style={{ height: '150vh' }} />
        </div>
      )
    },
    {
      notes: { markdown: notes },
    },
  )
  .add(
    'offset: "-10%"',
    () => {
      // init ref
      const containerRef = React.useRef(null)
      const triggerRef = React.useRef(null)
      const squareRef = React.useRef(null)

      React.useEffect(() => {
        const { current: containerElement } = containerRef
        const { current: triggerElement } = triggerRef
        const { current: squareElement } = squareRef

        if (!containerElement && !triggerElement && !squareElement) {
          return undefined
        }

        // create a timeline and add a tween
        const tl = gsap.timeline({ paused: true })

        tl.to(squareElement, {
          x: -200,
          duration: 1,
          ease: 'power2.out',
        })

        const scrollObserver = new ScrollObserver({
          triggerElement,
          gsap: {
            timeline: tl,
          },
          offset: '-10%',
        })

        return () => {
          scrollObserver.destroy()
        }
      })

      return (
        <div className="bg-lightgrey transition" ref={containerRef}>
          <div style={{ height: '50vh' }} />

          <h3>offset: '-10%',</h3>
          <h1>Scroll Down</h1>

          <div style={{ height: '150vh' }} />

          <div ref={triggerRef} style={{ height: 500, background: 'white', padding: 50 }}>
            While this container is visible on the page the container will move 20%, but using a -10% offset of the
            container
          </div>
          <div style={{ height: '50vh' }} />
          <div
            ref={squareRef}
            style={{ height: 50, width: 50, background: 'red', position: 'fixed', top: 0, right: 0 }}
          />

          <div style={{ height: '150vh' }} />
        </div>
      )
    },
    {
      notes: { markdown: notes },
    },
  )
  .add(
    'yoyo: true, delay: 0',
    () => {
      // init ref
      const containerRef = React.useRef(null)
      const triggerRef = React.useRef(null)
      const squareRef = React.useRef(null)

      React.useEffect(() => {
        const { current: containerElement } = containerRef
        const { current: triggerElement } = triggerRef
        const { current: squareElement } = squareRef

        if (!containerElement && !triggerElement && !squareElement) {
          return undefined
        }

        // create a timeline and add a tween
        const tl = gsap.timeline({ paused: true })

        tl.to(squareElement, {
          x: -200,
          duration: 1,
          ease: 'power2.out',
        })

        const scrollObserver = new ScrollObserver({
          triggerElement,
          gsap: {
            timeline: tl,
            yoyo: true,
            delay: 0,
          },
        })

        return () => {
          scrollObserver.destroy()
        }
      })

      return (
        <div className="bg-lightgrey transition" ref={containerRef}>
          <div style={{ height: '50vh' }} />

          <h3>yoyo: true, delay: 1</h3>
          <h1>Scroll Down</h1>

          <div style={{ height: '150vh' }} />

          <div ref={triggerRef}>
            While this is visible on the page the container will move 20%, and the animation will yoyo with a delay of 0
          </div>
          <div style={{ height: '50vh' }} />
          <div
            ref={squareRef}
            style={{ height: 50, width: 50, background: 'red', position: 'fixed', top: 0, right: 0 }}
          />

          <div style={{ height: '150vh' }} />
        </div>
      )
    },
    {
      notes: { markdown: notes },
    },
  )
  .add(
    'useDuration: true',
    () => {
      // init ref
      const containerRef = React.useRef(null)
      const triggerRef = React.useRef(null)
      const squareRef = React.useRef(null)

      React.useEffect(() => {
        const { current: containerElement } = containerRef
        const { current: triggerElement } = triggerRef
        const { current: squareElement } = squareRef

        if (!containerElement && !triggerElement && !squareElement) {
          return undefined
        }

        // create a timeline and add a tween
        const tl = gsap.timeline({ paused: true })

        tl.to(squareElement, {
          x: -200,
          duration: 1,
          ease: 'none',
        })

        const scrollObserver = new ScrollObserver({
          triggerElement,
          gsap: {
            timeline: tl,
          },
          useDuration: true,
          thresholds: 100,
        })

        return () => {
          scrollObserver.destroy()
        }
      })

      return (
        <div className="bg-lightgrey transition" ref={containerRef}>
          <div style={{ height: '50vh' }} />

          <h3>useDuration: true</h3>
          <h1>Scroll Down</h1>

          <div style={{ height: '150vh' }} />

          <div ref={triggerRef} style={{ height: 500, background: 'white', padding: 50 }}>
            While this container is visible on the page the container will move 20%, but tied to the visibility of the
            container
          </div>
          <div style={{ height: '50vh' }} />
          <div
            ref={squareRef}
            style={{ height: 50, width: 50, background: 'red', position: 'fixed', top: 0, right: 0 }}
          />

          <div style={{ height: '150vh' }} />
        </div>
      )
    },
    {
      notes: { markdown: notes },
    },
  )
