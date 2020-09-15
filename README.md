[![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/jonkwheeler/ScrollScene?label=latest%20release)](https://img.shields.io/github/v/tag/jonkwheeler/ScrollScene?color=forest&label=latest%20release)

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

If plan to use only the ScrollObserver, currently you can

```js
yarn add scrollscene && yarn add -D scrollmagic
```

to avoid import errors.

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

### ScrollScene Options (uses ScrollMagic)

| option           | Description / Example                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `breakpoints`    | `breakpoints: { 0: false, 768: true }` is used to set responsiveness of the new ScrollMagic.Scene, mobile-first.                                                                                                                                                                                                                                                                                            |
| `controller`     | `controller: { vertical: false }`. Add anything from [new ScrollMagic.Controller(options)](http://scrollmagic.io/docs/ScrollMagic.Controller.html#constructor).                                                                                                                                                                                                                                             |
| `duration`       | `duration: '100%'` OR `duration: { 0: '50%', 768: '100% }` is used to set responsiveness of the new ScrollMagic.Scene, mobile-first. OR set as a dom node (HTMLElement) `duration: triggerElement` and the scene will last as long as the height of the element.                                                                                                                                            |
| `gsap`           | Init a Gsap timeline with `gsap: { timeline: myTimeline, reverseSpeed: 2, yoyo: true, delay: 2 }`.                                                                                                                                                                                                                                                                                                          |
| `offset`         | Used to change the ScrollMagic `offset`.                                                                                                                                                                                                                                                                                                                                                                    |
| `scene`          | `scene: { loglevel: 1 }`. Add anything from [new ScrollMagic.Scene(options)](http://scrollmagic.io/docs/ScrollMagic.Scene.html#constructor).                                                                                                                                                                                                                                                                |
| `toggle`         | Toggle a className on an element with `toggle: { element: containerRef.current, className: 'lets-do-this' }`. The `element` key does _not_ accept string; eg: `.className`. Use a dom node selector instead.                                                                                                                                                                                                |
| `triggerElement` | `triggerElement: document.querySelector('#element')` is used to set the element you wish to trigger events based upon. Does _not_ accept string; eg: `.className`. Use a dom node selector instead. Optional: If left blank, will use top of page.                                                                                                                                                          |
| `triggerHook`    | Used to change the ScrollMagic `triggerHook`.                                                                                                                                                                                                                                                                                                                                                               |
| methods          | You can actually apply all the ScrollMagic.Scene methods to `ScrollScene`, like `const scrollScene = new ScrollScene({...}); scrollScene.Scene.on('enter', ())` or `setPin`. See all the options here: http://scrollmagic.io/docs/ScrollMagic.Scene.html. The same goes for ScrollMagic.Controller, `scrollScene.Controller.destroy(true)`, but be careful if you're using the built-in `globalController`. |

### ScrollObserver Options (uses IntersectionObserver)

| option               | Description / Example                                                                                                                                                                                                                                                                                                      |
| -------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `breakpoints`        | `breakpoints: { 0: false, 768: true }` is used to set responsiveness of the new ScrollMagic.Scene, mobile-first.                                                                                                                                                                                                           |  |
| `gsap`               | Init a Gsap timeline with `gsap: { timeline: myTimeline, reverseSpeed: 2, yoyo: true, delay: 2 }`.                                                                                                                                                                                                                         |
| `observer`           | `observer: { rootMargin: '-50% 0%' }` is used to pass extra options to pass the IntersectionObserver, like `root`, `rootMargin`, or `threshold` (to override the thresholds option). `observer: { rootMargin: '0px', threshold: 1.0 }`                                                                                     |
| `offset`             | Used to change the `rootMargin` easy. `offset: '-10%` will be `rootMargin: '-10% 0%'`. This is a bit wonky and needs more testing.                                                                                                                                                                                         |
| `thresholds`         | `thresholds: 1` is to set the number of thresholds you want. `thresholds: 100 = [0, 0.1, 0.2, ... 0.98, 0.99, 1]`. It's easy to use `whenVisible`.                                                                                                                                                                         |
| `toggle`             | Toggle a className on an element with `toggle: { element: containerRef.current, className: 'lets-do-this' }`. The `element` key does _not_ accept string; eg: `.className`. Use a dom node selector instead.                                                                                                               |
| `triggerElement`     | `triggerElement: document.querySelector('#element')` is used to set the element you wish to trigger events based upon. Does _not_ accept string; eg: `.className`. Use a dom node selector instead.                                                                                                                        |
| `useDuration`        | `useDuration: true` to use the percentage of element visibility to scrub the gsap timeline. Similar to ScrollMagic Duration on a Gsap timeline, but not quite the same if the element is longer than the viewport height, thus the element visibility will never reach 100%, thus the gsap timeline will never reach 100%. |
| `destroyImmediately` | `destroyImmediately: true` to destroy the scene immediately after firing once the element is visible.                                                                                                                                                                                                                      |
| `whenVisible`        | `whenVisible: '50%'` make the scene active when the triggerElement is visible whatever percentage you set. "50%" means to fire the event when the element is 50% in the viewport. This will override `thresholds`.                                                                                                         |
| `callback`           | For adding callback functions. Make sure you pass functions. You can supply one or both callbacks. `callback: { active: () => (), notActive: () => () }`                                                                                                                                                                   |

See below for examples.

## Key Notes

- This project sought out to overcome the issues of using Gsap3 with ScrollMagic, as well as ESM related problems. In the end it added more features, like video playback, scene init breakpoints, scene duration breakpoints, gsap speed controls, and using an IntersectionObserver when it fits your usecase better.
- Is written in TypeScript so you have access to the types.
- This does not include `gsap` or `scrollmagic`. If you plan to use them, you'll need to install them in addition to `scrollscene`. If you don't plan to use ScrollScene, you currently still have to install `scrollmagic`, but can so as a dev dependency. `yarn add -D scrollmagic`,
- This works with Gsap without having to import the extra `animation.gsap.js` file from ScrollMagic (though you'll have to install in yourself `yarn add gsap` or `npm install gsap`). In turn this is smaller than using ScrollMagic and animation.gsap.js.
- It allows for scene init breakpoints, and for scene duration breakpoints. This will also will on SSR if implemented correctly.
- You do not need to create a ScrollMagic controller. It is done for you.
- This will Tree Shake if your webpack is set up correctly. Next.js, for example, does this for you. Thus you can just `ScrollObserver` and not `ScrollScene` if you wanted and your build should exclude `ScrollScene` and `scrollmagic` (as long as you did import them).
- Does not work with `jQuery`. You need to provide a domNodeSelector. Whether a `document.querySelector('#element')` or React ref `myRef.current`.
- You can add all the methods from ScrollMagic.Scene directly onto the `scrollScene`. See options here http://scrollmagic.io/docs/ScrollMagic.Scene.html. You can do a `setPin`, or `on` event handler.

## Next Steps

- Add native setPin functionality using ScrollObserver to deprecate using it with ScrollMagic.
- Add out-of-the-box split text animations, svg line draw, etc...
- Move ScrollObserver to a separate package.

## Usage

### ScrollScene (uses ScrollMagic)

```js
import { ScrollScene } from 'scrollscene'

const myElement = document.querySelector('#element')

const scrollScene = new ScrollScene({
  triggerElement: myElement,
})
```

#### Toggle a className

```js
import { ScrollScene } from 'scrollscene'

const domNode = document.querySelector('#element')
const anotherDomNode = document.querySelector('#element2')

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
import { ScrollScene } from 'scrollscene'

const domNode = document.querySelector('#element')
const anotherDomNode = document.querySelector('#element2')

const scrollScene = new ScrollScene({
  triggerElement: domNode,
  toggle: {
    element: anotherDomNode,
    className: 'turn-blue',
    reverse: true,
  },
  triggerHook: 1,
  duration: '100%',
})
```

#### Add extra options from ScrollMagic (like a triggerHook or offset)

```js
import { ScrollScene } from 'scrollscene'

const domNode = document.querySelector('#element')
const anotherDomNode = document.querySelector('#element2')

const scrollScene = new ScrollScene({
  triggerElement: domNode,
  toggle: {
    element: anotherDomNode,
    className: 'turn-blue',
  },
  offset: 50,
  triggerHook: 0.5,
})
```

or anything from [new ScrollMagic.Scene(options)](http://scrollmagic.io/docs/ScrollMagic.Scene.html#constructor) under the `scene` key to contain those options.

```js
import { ScrollScene } from 'scrollscene'

const domNode = document.querySelector('#element')
const anotherDomNode = document.querySelector('#element2')

const scrollScene = new ScrollScene({
  triggerElement: domNode,
  toggle: {
    element: anotherDomNode,
    className: 'turn-blue',
  },
  scene: {
    logLevel: 1,
  },
})
```

Same for [new ScrollMagic.Controller(options)](http://scrollmagic.io/docs/ScrollMagic.Controller.html#constructor) under the `controller` key to contain those options.

```js
import { ScrollScene } from 'scrollscene'

const domNode = document.querySelector('#element')
const anotherDomNode = document.querySelector('#element2')

const scrollScene = new ScrollScene({
  triggerElement: domNode,
  toggle: {
    element: anotherDomNode,
    className: 'turn-blue',
  },
  controller: {
    logLevel: 3,
  },
})
```

Use a new local controller

```js
import { ScrollScene } from 'scrollscene'

const domNode = document.querySelector('#element')
const anotherDomNode = document.querySelector('#element2')

const scrollScene = new ScrollScene({
  triggerElement: domNode,
  toggle: {
    element: anotherDomNode,
    className: 'turn-blue',
  },
  useGlobalController: false,
})
```

Add event handlers (`on`) or `setPin`. See options here http://scrollmagic.io/docs/ScrollMagic.Scene.html.

```js
import { ScrollScene } from 'scrollscene'

const domNode = document.querySelector('#element')

const scrollScene = new ScrollScene({
  triggerElement: domNode,
})

scrollScene.Scene.on('enter', function(event) {
  console.log('Scene entered.')
})
```

Add methods to the controller. See options here http://scrollmagic.io/docs/ScrollMagic.Controller.html. But be careful if you're using the built-in `globalController`, as it'll impact all the scenes you have.

```js
import { ScrollScene } from 'scrollscene'

const domNode = document.querySelector('#element')

const scrollScene = new ScrollScene({
  triggerElement: domNode,
})

scrollScene.Controller.destroy(true)
```

#### Using GSAP (Greensock)

```js
import { ScrollScene } from 'scrollscene'
import { gsap } from 'gsap'

// create a timeline and add a tween
const myTimeline = gsap.timeline({ paused: true })
const domNode = document.querySelector('#element')
const scrollTrigger = document.querySelector('.scroll-trigger-01')

myTimeline.to(domNode, {
  x: -200,
  duration: 1,
  ease: 'power2.out',
})

const scrollScene = new ScrollScene({
  triggerElement: scrollTrigger,
  gsap: {
    timeline: myTimeline,
  },
})
```

#### Using GSAP (Greensock), and setting the reserveSpeed

```js
import { ScrollScene } from 'scrollscene'
import { gsap } from 'gsap'

// create a timeline and add a tween
const myTimeline = gsap.timeline({ paused: true })
const domNode = document.querySelector('#element')
const scrollTrigger = document.querySelector('.scroll-trigger-01')

myTimeline.to(domNode, {
  x: -200,
  duration: 1,
  ease: 'power2.out',
})

const scrollScene = new ScrollScene({
  triggerElement: scrollTrigger,
  gsap: {
    timeline: tl,
    reverseSpeed: 4,
  },
})
```

#### Using GSAP (Greensock), and tying it to the user scrolling with a duration

```js
import { ScrollScene } from 'scrollscene'
import { gsap } from 'gsap'

// create a timeline and add a tween
const myTimeline = gsap.timeline({ paused: true })
const domNode = document.querySelector('#element')
const scrollTrigger = document.querySelector('.scroll-trigger-01')

myTimeline.to(domNode, {
  x: -200,
  duration: 1,
  ease: 'power2.out',
})

const scrollScene = new ScrollScene({
  triggerElement: scrollTrigger,
  gsap: {
    timeline: tl,
  },
  duration: 500,
})
```

#### Add Indicators (Using the addIndicators plugin from ScrollMagic)

I added to this package a modified version of the addIndicators plugin. It's easy to use. Just remember to remove it after you're done testing so it doesn't go into production.

```js
import { ScrollScene, addIndicators } from 'scrollscene'

const domNode = document.querySelector('#element')
const anotherDomNode = document.querySelector('#element2')

const scrollScene = new ScrollScene({
  triggerElement: domNode,
  toggle: {
    element: anotherDomNode,
    className: 'turn-blue',
    reverse: true,
  },
  triggerHook: 1,
  duration: '100%',
})

scrollScene.Scene.addIndicators({ name: 'pin scene', colorEnd: '#FFFFFF' })
```

_Note_: Notice that it's `scrollScene.Scene`. `scrollScene` actually returns `Scene` and `Controller` methods, which you can then modify. `scrollScene.addIndicators` will not work.

Alternatively you could do this and it'll apply to the built-in globalController...

```js
import { ScrollScene, addIndicators } from 'scrollscene'

const scrollScene = new ScrollScene({
  controller: {
    addIndicators: true,
  },
})
```

or

```js
import { ScrollScene, addIndicators } from 'scrollscene'

const scrollScene = new ScrollScene({
  ...options,
})

scrollScene.Controller({ addIndicators: true })
```

### ScrollObserver (uses IntersectionObserver)

#### Toggle a className while element is visible on the page

```js
import { ScrollObserver } from 'scrollscene'
import { gsap } from 'gsap'

const domNode = document.querySelector('#element')
const anotherDomNode = document.querySelector('#element2')

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
import { ScrollObserver } from 'scrollscene'
import { gsap } from 'gsap'

// create a timeline and add a tween
const tl = gsap.timeline({ paused: true })
const domNode = document.querySelector('#element')
const squareElement = document.querySelector('#square')

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
import { ScrollObserver } from 'scrollscene'
import { gsap } from 'gsap'

// create a timeline and add a tween
const tl = gsap.timeline({ paused: true })
const domNode = document.querySelector('#element')
const squareElement = document.querySelector('#square')

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

#### Scrub a Gsap timeline based on element visibility

```js
import { ScrollObserver } from 'scrollscene'
import { gsap } from 'gsap'

// create a timeline and add a tween
const tl = gsap.timeline({ paused: true })
const domNode = document.querySelector('#element')
const squareElement = document.querySelector('#square')

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
  useDuration: true,
})
```

#### Start a video when an element is visible and pause the video when it's not

```js
import { ScrollObserver } from 'scrollscene'

const domNode = document.querySelector('#element')
const videoTagDomNode = document.querySelector('#video')

const scrollObserver = new ScrollObserver({
  triggerElement: domNode,
  video: {
    element: videoTagDomNode,
    playingClassName: 'is-playing',
    pausedClassName: 'is-paused',
  },
})
```

#### Using a scene once

```js
import { ScrollObserver } from 'scrollscene'

const domNode = document.querySelector('#element')

const scrollObserver = new ScrollObserver({
  triggerElement: domNode,
  destroyImmediately: true,
})
```

#### Set a percentage for the visibility threshold

```js
import { ScrollObserver } from 'scrollscene'

const domNode = document.querySelector('#element')

const scrollObserver = new ScrollObserver({
  triggerElement: domNode,
  whenVisible: '50%',
})
```

#### Set a different threshold

The below would create an array of 100 thresholds ([0, 0.1, 0.2, ... 0.98, 0.99, 1]), effectively says any percent from 1 to 100 of the element intersecting the viewport should trigger the scene.

```js
import { ScrollObserver } from 'scrollscene'

const domNode = document.querySelector('#element')

const scrollObserver = new ScrollObserver({
  triggerElement: domNode,
  thresholds: 100,
})
```

#### Extra observer options

The below adds extra options to the IntersectionObserver. See others properities you could add [here](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver).

```js
import { ScrollObserver } from 'scrollscene'

const domNode = document.querySelector('#element')

const scrollObserver = new ScrollObserver({
  triggerElement: domNode,
  observer: { rootMargin: '-50% 0%' },
})
```

or

```js
import { ScrollObserver } from 'scrollscene'

const domNode = document.querySelector('#element')

const scrollObserver = new ScrollObserver({
  triggerElement: domNode,
  observer: {
    rootMargin: '0px',
    threshold: 1.0,
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

With React it's best to do this inside either a `useEffect` hook or using the `componentDidMount` and `componentWillUnmount` lifecycle. Whatever you choose, make sure to destroy the scene on the unmount.

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

`duration` also can be responsive, finally! The below would set up a scene that lasts 50vh on mobile, 100% after.

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
