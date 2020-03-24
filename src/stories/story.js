import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ScrollScene } from '../ScrollScene'
import { ScrollObserver } from '../ScrollObserver'
import { gsap } from 'gsap'
import { addIndicators } from '../index'
import { Stylesheet } from './Stylesheet'

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

        scrollScene.Scene.addIndicators({ name: 'pin scene', colorEnd: '#FFFFFF' })

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

        scrollScene.Scene.addIndicators({ name: 'pin scene', colorEnd: '#FFFFFF' })

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
  .add(
    'offset: 100, triggerHook: 0.5',
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
          controller: {
            loglevel: 3,
          },
          triggerElement: triggerElement,
          toggle: {
            element: containerElement,
            className: 'turn-blue',
          },
          offset: 100,
          triggerHook: 0.5,
        })

        scrollScene.Scene.addIndicators({ name: 'pin scene', colorEnd: '#FFFFFF' })

        return () => {
          scrollScene.destroy()
        }
      })

      return (
        <div className="bg-lightgrey transition" ref={containerRef}>
          <div style={{ height: '50vh' }} />

          <h3>offset: 100, triggerHook: 0.5</h3>
          <h1>Scroll Down</h1>

          <div style={{ height: '150vh' }} />

          <div ref={triggerRef}>When this hits the middle of the page plus 100 pixels, the page with turn blue.</div>

          <div style={{ height: '100px' }} />

          <div>offset: 100, triggerHook: 0.5,</div>

          <div style={{ height: '100vh' }} />

          <div style={{ height: '150vh' }} />
        </div>
      )
    },
    {
      notes: { markdown: notes },
    },
  )

storiesOf('ScrollScene|events', module)
  .add(
    'on enter, on leave',
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

        scrollScene.Scene.on('enter', function(event) {
          console.log('Scene entered.')
        })

        scrollScene.Scene.on('leave', function(event) {
          console.log('Scene left.')
        })

        return () => {
          scrollScene.destroy()
        }
      })

      return (
        <div className="bg-lightgrey transition" ref={containerRef}>
          <div style={{ height: '50vh' }} />

          <h3>{`scrollScene.Scene.on('enter', function(event) {console.log('Scene entered.')})`.toString()}</h3>
          <h3>{`scrollScene.Scene.on('leave', function(event) {console.log('Scene left.')})`.toString()}</h3>
          <h1>Scroll Down</h1>

          <div style={{ height: '150vh' }} />

          <div ref={triggerRef}>When this hits the top of the page, console.log('Scene entered.')</div>

          <div style={{ height: '100vh' }} />

          <div ref={triggerRef} style={{ color: 'white' }}>
            When this hits the top of the page, console.log("Scene left.");
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
    'on progress',
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

        scrollScene.Scene.on('progress', function(event) {
          console.log('Scene progress changed to ' + event.progress)
        })

        return () => {
          scrollScene.destroy()
        }
      })

      return (
        <div className="bg-lightgrey transition" ref={containerRef}>
          <div style={{ height: '50vh' }} />

          <h3>
            {`scrollScene.Scene.on('progress', function(event) {
          console.log('Scene progress changed to ' + event.progress)
        })`.toString()}
          </h3>
          <h1>Scroll Down</h1>

          <div style={{ height: '150vh' }} />

          <div ref={triggerRef}>
            When this hits the top of the page, console.log the progress duration the active scene
          </div>

          <div style={{ height: '100vh' }} />

          <div style={{ color: 'white' }}>
            When this hits the top of the page, the progress will stop console logging
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

storiesOf('ScrollScene|controller', module).add(
  'add options',
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
        controller: { loglevel: 3 },
        useGlobalController: false,
      })

      console.log(scrollScene.Controller.info())

      return () => {
        scrollScene.destroy()
      }
    })

    return (
      <div className="bg-lightgrey transition" ref={containerRef}>
        <div style={{ height: '50vh' }} />

        <h3>{`controller: { loglevel: 3 } will log all the goods`.toString()}</h3>
        <h1>Scroll and refresh page after leaving.</h1>
        <h4>Otherwise you'll get annoyed with the amount of console.logging</h4>

        <div style={{ height: '150vh' }} />

        <div ref={triggerRef}>Scroll and the console.logging will begin.</div>
        <div>This page is using a local controller. Refresh page after leaving.</div>

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

storiesOf('ScrollObserver|video', module)
  .add(
    'whenVisible: "50%"',
    () => {
      // init ref
      const videoRef = React.useRef(null)

      React.useEffect(() => {
        const { current: videoElement } = videoRef

        if (!videoElement) {
          return undefined
        }

        const scrollObserver = new ScrollObserver({
          triggerElement: videoElement,
          video: {
            element: videoElement,
          },
          whenVisible: '50%',
        })

        return () => {
          scrollObserver.destroy()
        }
      })

      return (
        <div className="bg-lightgrey transition">
          <div style={{ height: '50vh' }} />

          <h3>whenVisible: '50%'</h3>
          <h1>Scroll Down</h1>

          <div style={{ height: '150vh' }} />

          <div>While the video is 50% visible on the page the video will play, and pause when not 50%</div>
          <div style={{ height: '50vh' }} />
          <video
            ref={videoRef}
            style={{ width: '40%' }}
            poster="https://s3.amazonaws.com/www.invisionapp.com/images/poster.jpg"
            src="https://s3.amazonaws.com/www.invisionapp.com-studio/689bcee4dbc4cb806445e0dbc87154aa607dff6d/static/video/dsm-repo.mp4"
            playsInline
            muted
            loop
            controls={false}
            preload="none"
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
    'whenVisible: "80%"',
    () => {
      // init ref
      const videoRef = React.useRef(null)

      React.useEffect(() => {
        const { current: videoElement } = videoRef

        if (!videoElement) {
          return undefined
        }

        const scrollObserver = new ScrollObserver({
          triggerElement: videoElement,
          video: {
            element: videoElement,
          },
          whenVisible: '80%',
        })

        return () => {
          scrollObserver.destroy()
        }
      })

      return (
        <div className="bg-lightgrey transition">
          <div style={{ height: '50vh' }} />

          <h3>whenVisible: '80%'</h3>
          <h1>Scroll Down</h1>

          <div style={{ height: '150vh' }} />

          <div>While the video is 80% visible on the page the video will play, and pause when not 80%</div>
          <div style={{ height: '50vh' }} />
          <video
            ref={videoRef}
            style={{ width: '40%' }}
            poster="https://s3.amazonaws.com/www.invisionapp.com/images/poster.jpg"
            src="https://s3.amazonaws.com/www.invisionapp.com-studio/689bcee4dbc4cb806445e0dbc87154aa607dff6d/static/video/dsm-repo.mp4"
            playsInline
            muted
            loop
            controls={false}
            preload="none"
          />

          <div style={{ height: '150vh' }} />
        </div>
      )
    },
    {
      notes: { markdown: notes },
    },
  )

storiesOf('ScrollObserver|callback', module)
  .add(
    'console.log("active")',
    () => {
      // init ref
      const triggerRef = React.useRef(null)

      React.useEffect(() => {
        const { current: triggerElement } = triggerRef

        if (!triggerElement) {
          return undefined
        }

        const scrollObserver = new ScrollObserver({
          triggerElement,
          callback: {
            active: () => console.log('active'),
            notActive: () => console.log('notActive'),
          },
        })

        return () => {
          scrollObserver.destroy()
        }
      })

      return (
        <div className="bg-lightgrey transition">
          <div style={{ height: '50vh' }} />

          <h3>{`callback: {
            active: () => console.log('active'),
            notActive: () => console.log('notActive'),
          }`}</h3>

          <h1>Scroll Down</h1>

          <div style={{ height: '150vh' }} />

          <div ref={triggerRef}>
            While this is visible on the page, the console.log("active") will fire, and while it's not,
            console.log("notActive") will fire
          </div>
          <div style={{ height: '50vh' }} />

          <div style={{ height: '150vh' }} />
        </div>
      )
    },
    {
      notes: { markdown: notes },
    },
  )
  .add(
    'destroyImmediately: true',
    () => {
      // init ref
      const triggerRef = React.useRef(null)

      React.useEffect(() => {
        const { current: triggerElement } = triggerRef

        if (!triggerElement) {
          return undefined
        }

        const scrollObserver = new ScrollObserver({
          triggerElement,
          callback: {
            active: () => console.log('active'),
          },
          destroyImmediately: true,
        })

        return () => {
          scrollObserver.destroy()
        }
      })

      return (
        <div className="bg-lightgrey transition">
          <div style={{ height: '50vh' }} />

          <h3>console.log("hello-world")</h3>
          <h1>Scroll Down</h1>

          <div style={{ height: '150vh' }} />

          <div ref={triggerRef}>
            While this is visible on the page, the console.log("hello-world") will fire once, and then the scene will
            destory itself
          </div>
          <div style={{ height: '50vh' }} />

          <div style={{ height: '150vh' }} />
        </div>
      )
    },
    {
      notes: { markdown: notes },
    },
  )
  .add(
    'whenVisible: "50%"',
    () => {
      // init ref
      const triggerRef = React.useRef(null)

      React.useEffect(() => {
        const { current: triggerElement } = triggerRef

        if (!triggerElement) {
          return undefined
        }

        const scrollObserver = new ScrollObserver({
          triggerElement,
          callback: {
            active: () => console.log('active'),
            notActive: () => console.log('notActive'),
          },
          whenVisible: '50%',
        })

        return () => {
          scrollObserver.destroy()
        }
      })

      return (
        <div className="bg-lightgrey transition">
          <div style={{ height: '50vh' }} />

          <h3>whenVisible: "50%"</h3>
          <h1>Scroll Down</h1>

          <div style={{ height: '150vh' }} />

          <div ref={triggerRef} style={{ height: 200, background: 'red' }}>
            While this is visible on the page, the console.log("hello-world") will fire once, and then the scene will
            destory itself
          </div>
          <div style={{ height: '50vh' }} />

          <div style={{ height: '150vh' }} />
        </div>
      )
    },
    {
      notes: { markdown: notes },
    },
  )
  .add(
    'multiple triggers',
    () => {
      // init ref
      const triggerRef1 = React.useRef(null)
      const triggerRef2 = React.useRef(null)

      React.useEffect(() => {
        const { current: triggerElement1 } = triggerRef1
        const { current: triggerElement2 } = triggerRef2

        if (!triggerElement1 && !triggerElement2) {
          return undefined
        }

        const scrollObserver1 = new ScrollObserver({
          triggerElement: triggerElement1,
          callback: {
            active: () => console.log('trigger 1 active'),
            notActive: () => console.log('trigger 1 notActive'),
          },
        })

        const scrollObserver2 = new ScrollObserver({
          triggerElement: triggerElement2,
          callback: {
            active: () => console.log('trigger 2 active'),
            notActive: () => console.log('trigger 2 notActive'),
          },
        })

        return () => {
          scrollObserver1.destroy()
          scrollObserver2.destroy()
        }
      })

      return (
        <div className="bg-lightgrey transition">
          <div style={{ height: '50vh' }} />

          <h3>multiple triggers</h3>

          <h1>Scroll Down</h1>

          <div style={{ height: '150vh' }} />

          <div ref={triggerRef1}>
            While this is visible on the page, the console.log("trigger 1 active") will fire, and while it's not,
            console.log("trigger 1 notActive") will fire
          </div>
          <div style={{ height: '75vh' }} />
          <div ref={triggerRef2}>
            While this is visible on the page, the console.log("trigger 2 active") will fire, and while it's not,
            console.log("trigger 2 notActive") will fire
          </div>

          <div style={{ height: '150vh' }} />
        </div>
      )
    },
    {
      notes: { markdown: notes },
    },
  )

storiesOf('ScrollObserver|multiple events', module).add(
  'toggle + video + callback',
  () => {
    // init ref
    const triggerRef = React.useRef(null)
    const containerRef = React.useRef(null)
    const videoRef = React.useRef(null)

    React.useEffect(() => {
      const { current: triggerElement } = triggerRef
      const { current: containerElement } = containerRef
      const { current: videoElement } = videoRef

      if (!triggerElement) {
        return undefined
      }

      const scrollObserver = new ScrollObserver({
        triggerElement,
        toggle: {
          element: containerElement,
          className: 'turn-blue',
        },
        callback: {
          active: () => console.log('active'),
          notActive: () => console.log('notActive'),
        },
        video: {
          element: videoElement,
        },
      })

      return () => {
        scrollObserver.destroy()
      }
    })

    return (
      <div className="bg-lightgrey transition" ref={containerRef}>
        <div style={{ height: '50vh' }} />

        <h3>{`callback: {
            active: () => console.log('active'),
            notActive: () => console.log('notActive'),
          }`}</h3>

        <h1>Scroll Down</h1>

        <div style={{ height: '150vh' }} />

        <div ref={triggerRef}>
          While this is visible on the page, the console.log("active") will fire, and while it's not,
          console.log("notActive") will fire
        </div>
        <video
          ref={videoRef}
          style={{ width: '40%' }}
          poster="https://s3.amazonaws.com/www.invisionapp.com/images/poster.jpg"
          src="https://s3.amazonaws.com/www.invisionapp.com-studio/689bcee4dbc4cb806445e0dbc87154aa607dff6d/static/video/dsm-repo.mp4"
          playsInline
          muted
          loop
          controls={false}
          preload="none"
        />
        <div style={{ height: '50vh' }} />

        <div style={{ height: '150vh' }} />
      </div>
    )
  },
  {
    notes: { markdown: notes },
  },
)

storiesOf('ScrollScene|Examples', module).add(
  'mimic pinning',
  () => {
    // init ref
    const screen02trigger = React.useRef(null)
    const scaledBox = React.useRef(null)
    const screen03trigger = React.useRef(null)
    const heroScreen = React.useRef(null)

    const [LOADED, SET_LOADED] = React.useState(false)

    React.useEffect(() => {
      const scaleBoxTimeline = gsap.timeline({ paused: true })

      scaleBoxTimeline.fromTo(
        scaledBox.current,
        {
          scale: 4,
        },
        { scale: 1, ease: 'power4.out' },
      )

      const scaleBoxScene = new ScrollScene({
        triggerElement: screen02trigger.current,
        gsap: {
          timeline: scaleBoxTimeline,
        },
        useDuration: true,
        duration: '100%',
        triggerHook: 1,
      })

      const moveOutTimeline = gsap.timeline({ paused: true })

      moveOutTimeline.fromTo(
        heroScreen.current,
        {
          y: 0,
        },
        { y: '-100%', ease: 'none' },
      )

      const moveOutScene = new ScrollScene({
        triggerElement: screen03trigger.current,
        gsap: {
          timeline: moveOutTimeline,
        },
        useDuration: true,
        duration: '100%',
        triggerHook: 1,
      })

      SET_LOADED(true)

      return () => {
        scaleBoxScene.destroy()
        moveOutScene.destroy()
      }
    })

    return (
      <>
        <Stylesheet />
        <div className="bg-lightgrey pos-r">
          <div className="actual-page">
            <div className={`fullscreen-scene pos-f loaded--${LOADED}`} ref={heroScreen}>
              <div className="text-block">
                <h1>Scroll Down</h1>
                <figure className="scaled-box" ref={scaledBox}>
                  imagine a computer screen here
                </figure>
              </div>
            </div>
            <div className="fullscreen-scene scene-spacer" />
            <div className="fullscreen-scene scene-spacer" />
            <div className="rest-of-the-page pos-r w100">
              <div className="page-padding">
                <h1>
                  I can't get involved! I've got work to do! It's not that I like the Empire, I hate it, but there's
                  nothing I can do about it right now. It's such a long way from here.
                </h1>
                <p>
                  The Force is strong with this one. I have you now. Remember, a Jedi can feel the Force flowing through
                  him. Red Five standing by. I call it luck. What good is a reward if you ain't around to use it?
                  Besides, attacking that battle station ain't my idea of courage. It's more like…suicide.
                </p>
                <p>
                  Look, I can take you as far as Anchorhead.{' '}
                  <strong> You can get a transport there to Mos Eisley or wherever you're going.</strong>{' '}
                  <em> I suggest you try it again, Luke.</em> This time, let go your conscious self and act on instinct.
                </p>
                <h2>You are a part of the Rebel Alliance and a traitor! Take her away!</h2>
                <p>
                  You are a part of the Rebel Alliance and a traitor! Take her away! I call it luck. Don't underestimate
                  the Force. Still, she's got a lot of spirit. I don't know, what do you think?
                </p>
                <ol>
                  <li>Ye-ha!</li>
                  <li>As you wish.</li>
                  <li>What?!</li>
                </ol>

                <h3>I find your lack of faith disturbing.</h3>
                <p>
                  I'm surprised you had the courage to take the responsibility yourself. As you wish. What?! Look, I can
                  take you as far as Anchorhead. You can get a transport there to Mos Eisley or wherever you're going.
                </p>
                <ul>
                  <li>
                    Leave that to me. Send a distress signal, and inform the Senate that all on board were killed.
                  </li>
                  <li>I suggest you try it again, Luke. This time, let go your conscious self and act on instinct.</li>
                  <li>Hey, Luke! May the Force be with you.</li>
                </ul>

                <p>
                  What!? I need your help, Luke. She needs your help. I'm getting too old for this sort of thing. Hokey
                  religions and ancient weapons are no match for a good blaster at your side, kid. I can't get involved!
                  I've got work to do! It's not that I like the Empire, I hate it, but there's nothing I can do about it
                  right now. It's such a long way from here.
                </p>
                <p>
                  Still, she's got a lot of spirit. I don't know, what do you think? You don't believe in the Force, do
                  you? I want to come with you to Alderaan. There's nothing for me here now. I want to learn the ways of
                  the Force and be a Jedi, like my father before me.
                </p>
                <p>
                  You don't believe in the Force, do you? You mean it controls your actions? I find your lack of faith
                  disturbing. Look, I can take you as far as Anchorhead. You can get a transport there to Mos Eisley or
                  wherever you're going.
                </p>
                <p>
                  Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is
                  insignificant next to the power of the Force. Look, I can take you as far as Anchorhead. You can get a
                  transport there to Mos Eisley or wherever you're going.
                </p>
                <p>
                  I can't get involved! I've got work to do! It's not that I like the Empire, I hate it, but there's
                  nothing I can do about it right now. It's such a long way from here. Don't act so surprised, Your
                  Highness. You weren't on any mercy mission this time. Several transmissions were beamed to this ship
                  by Rebel spies. I want to know what happened to the plans they sent you.
                </p>
                <p>
                  The plans you refer to will soon be back in our hands. What!? I'm trying not to, kid. Leave that to
                  me. Send a distress signal, and inform the Senate that all on board were killed.
                </p>
                <p>
                  You don't believe in the Force, do you? The more you tighten your grip, Tarkin, the more star systems
                  will slip through your fingers. He is here. Remember, a Jedi can feel the Force flowing through him.
                </p>
                <p>
                  You don't believe in the Force, do you? I suggest you try it again, Luke. This time, let go your
                  conscious self and act on instinct. I suggest you try it again, Luke. This time, let go your conscious
                  self and act on instinct.
                </p>
                <p>
                  Leave that to me. Send a distress signal, and inform the Senate that all on board were killed. I need
                  your help, Luke. She needs your help. I'm getting too old for this sort of thing. No! Alderaan is
                  peaceful. We have no weapons. You can't possibly…
                </p>
                <p>
                  The more you tighten your grip, Tarkin, the more star systems will slip through your fingers. Hey,
                  Luke! May the Force be with you. Leave that to me. Send a distress signal, and inform the Senate that
                  all on board were killed.
                </p>
                <p>
                  I need your help, Luke. She needs your help. I'm getting too old for this sort of thing. I have traced
                  the Rebel spies to her. Now she is my only link to finding their secret base. She must have hidden the
                  plans in the escape pod. Send a detachment down to retrieve them, and see to it personally, Commander.
                  There'll be no one to stop us this time!
                </p>
              </div>
            </div>
          </div>

          <div className="scene-length pos-a w100 top">
            <div className="fullscreen-scene screen01">
              <div className="mini-trigger middle" />
            </div>
            <div className="fullscreen-scene screen02">
              <div className="mini-trigger top active screen02-trigger" ref={screen02trigger} />
              <div className="mini-trigger middle" />
            </div>
            <div className="fullscreen-scene screen03">
              <div className="mini-trigger top active screen03-trigger" ref={screen03trigger} />
              <div className="mini-trigger middle" />
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    notes: { markdown: notes },
  },
)
