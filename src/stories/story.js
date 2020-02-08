import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ScrollScene } from '../ScrollScene'
import { ScrollObserver } from '../ScrollObserver'
import { gsap } from 'gsap'
import { addIndicators } from '../index'

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
