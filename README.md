# ScrollScene

ScrollScene is an extra layer on top of ScrollMagic as well as using IntersectionObserver to achieve similar effects.

## Examples

View the online [Storybook](https://scrollscene.jonkwheeler.now.sh).

## Install

```js
yarn add scrollscene scrollmagic
```

or

```js
npm install scrollscene scrollmagic
```

## Import

### ScrollScene (uses ScrollMagic)

```js
import { ScrollScene } from 'scrollscene'
```

### ScrollObserver (uses IntersectionObserver)

```js
import { ScrollObserver } from 'scrollscene'
```

### ScrollMagic (with SSR catch)

```js
import { ScrollMagic } from 'scrollscene'
```

or 

```js
import { ScrollMagicSsr } from 'scrollscene'
```

`ScrollMagic` and `ScrollMagicSsr` are the exact same thing.

## Options

ScrollScene has `breakpoints, duration, gsap, scrollMagic, toggle, triggerElement`.

ScrollObserver has `breakpoints, gsap, observer, thresholds, toggle, triggerElement, video`.

See below for examples.

## Key Notes

- This project sought out to overcome the issues of using Gsap3 with ScrollMagic, as well as ESM related problems. In the end it added more features, like video playback, scene init breakpoints, scene duration breakpoints, gsap speed controls, and using an IntersectionObserver when it fits your usecase better.
- This does not include `gsap` or `scrollmagic`. If you plan to use them, you'll need to install them.
- This works with Gsap without having to import the extra `animation.gsap.js` file from ScrollMagic (though you'll have to install in yourself `yarn add gsap` or `npm install gsap`).
- It allows for scene init breakpoints, and for scene duration breakpoints. This will also will on SSR if implemented correctly.
- This will Tree Shake if your webpack is set up correctly. Next.js, for example, does this for you. Thus you can just `ScrollObserver` and not `ScrollScene` if you wanted and your build should exclude `ScrollScene` and `scrollmagic` (as long as you did import them).
- Does not work with `jQuery`.
- I'll add a `setPin` in the future. Though you can `import { ScrollMagic } from 'scrollscene'` do a `setPin` [this way](http://scrollmagic.io/docs/ScrollMagic.Scene.html#setPin). Just remember you also have to create a controller using this method and attach the scene to it.

## Usage

### ScrollScene (uses ScrollMagic)

```js
const scrollScene = new ScrollScene({
  triggerElement: domNode,
})
```

#### Toggle a className

```js
const scrollScene = new ScrollScene({
  triggerElement: domNode,
  toggle: {
    element: anotherDomNode,
    className: 'turn-blue',
  },
})
```

#### Toggle a className on a duration

```js
const scrollScene = new ScrollScene({
  triggerElement: domNode,
  toggle: {
    element: anotherDomNode,
    className: 'turn-blue',
    reverse: true,
  },
  scrollMagic: {
    triggerHook: 1,
  },
  duration: '100%',
})
```

#### Add extra options from ScrollMagic (like a TriggerHook)

```js
const scrollScene = new ScrollScene({
  triggerElement: domNode,
  toggle: {
    element: anotherDomNode,
    className: 'turn-blue',
  },
  scrollMagic: {
    triggerHook: 1,
  },
})
```

#### Using GSAP (Greensock)

```js
// create a timeline and add a tween
const myTimeline = gsap.timeline({ paused: true })

myTimeline.to(domNode, {
  x: -200,
  duration: 1,
  ease: 'power2.out',
})

const scrollScene = new ScrollScene({
  triggerElement: domNode,
  gsap: {
    timeline: myTimeline,
  },
})
```

#### Using GSAP (Greensock), and setting the reserveSpeed

```js
// create a timeline and add a tween
const myTimeline = gsap.timeline({ paused: true })

myTimeline.to(domNode, {
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
})
```

#### Using GSAP (Greensock), and tying it to the user scrolling with a duration

```js
// create a timeline and add a tween
const myTimeline = gsap.timeline({ paused: true })

myTimeline.to(domNode, {
  x: -200,
  duration: 1,
  ease: 'power2.out',
})

const scrollScene = new ScrollScene({
  triggerElement,
  gsap: {
    timeline: tl,
  },
  duration: 500,
})
```

### ScrollObserver (uses IntersectionObserver)

#### Toggle a className while element is visible on the page

```js
const scrollObserver = new ScrollObserver({
  triggerElement: domNode,
  toggle: {
    element: anotherDomNode,
    className: 'turn-blue',
  },
})
```

#### Toggle a Gsap animation while element is visible on the page

```js
// create a timeline and add a tween
const tl = gsap.timeline({ paused: true })

tl.to(squareElement, {
  x: -200,
  duration: 1,
  ease: 'power2.out',
})

const scrollObserver = new ScrollObserver({
  triggerElement: domNode,
  gsap: {
    timeline: tl,
  },
})
```

#### Toggle a Gsap animation while element is visible on the page with a yoyo effect and repeat delay of 0

```js
// create a timeline and add a tween
const tl = gsap.timeline({ paused: true })

tl.to(squareElement, {
  x: -200,
  duration: 1,
  ease: 'power2.out',
})

const scrollObserver = new ScrollObserver({
  triggerElement: domNode,
  gsap: {
    timeline: tl,
    yoyo: true,
    delay: 0,
  },
})
```

#### Start a video when an element is visible and pause the video when it's not

```js
const scrollObserver = new ScrollObserver({
  triggerElement: domNode,
  video: {
    element: videoTagDomNode,
  },
})
```

### Destroy the scene

Whatever you've named your scene, whether `const scrollScene` or `const scrollObserver`, you can destroy it with...

```js
scrollScene.destroy()
```

```js
scrollObserver.destroy()
```

### Using React?

With React it's best to do this inside either a `useEffect` hook or using the `componentDidMount` and `componentWillUnmount` lifecycle. Whatver you choose, make sure to destroy the scene on the unmount.

See the Storybook source for good examples (story.js) [found here](https://github.com/jonkwheeler/ScrollScene/blob/master/src/stories/story.js).

```js
import { ScrollScene } from 'scrollscene'

const MyComponent = () => {
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
      triggerElement: triggerElement,
      toggle: {
        element: containerElement,
        className: 'turn-blue',
      },
    })

    // destroy on unmount
    return () => {
      scrollScene.destroy()
    }
  })

  return (
    <div ref={containerRef}>
      <div style={{ height: '50vh' }} />

      <h3>Basic Example</h3>
      <h1>Scroll Down</h1>

      <div style={{ height: '150vh' }} />

      <div ref={triggerRef}>When this hits the top the page will turn blue</div>

      <div style={{ height: '150vh' }} />
    </div>
  )
}
```

### Other options

You can now set `breakpoints` so you scene is more responsive. They work mobile first. The below would set up a scene on tablet, but not mobile, and resizing will init and destroy.

```js
const scrollScene = new ScrollScene({
  breakpoints: { 0: false, 768: true },
})
```

`duration` also can be responsive, finally! The below would set up a scene that lasts 50vh on mobile, 100% after
})

```js
const scrollScene = new ScrollScene({
  duration: { 0: '50%', 768: '100%' },
})
```

## Polyfill

In order to use ScrollObserver on IE, you'll need a polyfill IntersectionObserver. You can do this with loading a polyfill script from https://polyfill.io/.

### Using Next.js or Webpack?

With Next.js you can load polyfills another way. See https://github.com/zeit/next.js/blob/canary/examples/with-polyfills/client/polyfills.js.

Add following to `client/polyfills.js`

```js
/*
 * This files runs at the very beginning (even before React and Next.js core)
 * https://github.com/zeit/next.js/blob/canary/examples/with-polyfills/client/polyfills.js
 */

// https://www.npmjs.com/package/intersection-observer
import 'intersection-observer'
```

And then modify the `next.config.js`

```js
// next.config.js

const nextConfig = {
  webpack(config) {
    /*
     * Add polyfills
     * https://github.com/zeit/next.js/blob/canary/examples/with-polyfills/next.config.js
     */

    const originalEntry = config.entry
    config.entry = async () => {
      const entries = await originalEntry()

      if (entries['main.js'] && !entries['main.js'].includes('./client/polyfills.js')) {
        entries['main.js'].unshift('./client/polyfills.js')
      }

      return entries
    }

    return config
  },
}

module.exports = nextConfig
```

For more on ScrollMagic, hit up [scrollmagic.io/](https://www.scrollmagic.io/) and [https://github.com/janpaepke/ScrollMagic](https://github.com/janpaepke/ScrollMagic)
