[![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/jonkwheeler/ScrollScene?label=latest%20release)](https://img.shields.io/github/v/tag/jonkwheeler/ScrollScene?color=forest&label=latest%20release)

# ScrollScene

Factory helpers for scroll-driven scenes: **ScrollScene** (ScrollMagic) and **ScrollObserver** (IntersectionObserver). Same lifecycle vocabulary (`create*` + `destroy`), with advanced engine escape hatches on the handles.

## Examples

[Live Storybook](https://scrollscene.jonkwheeler.vercel.app/)

## Install

### Observer only (SSR-safe, no ScrollMagic)

```bash
pnpm add scrollscene
```

```js
import { createScrollObserver } from 'scrollscene/observer'
```

`scrollscene/observer` never loads ScrollMagic. Use this path for SSR and for apps that do not need ScrollMagic.

### ScrollScene (needs ScrollMagic)

The main entry is **client/browser-oriented** — it statically imports ScrollMagic. Install the peer and use it in client code (or behind a client-only boundary in Next/Nuxt/etc.):

```bash
pnpm add scrollscene scrollmagic
```

```js
import { createScrollScene } from 'scrollscene'
```

### Migrating to 1.0

**1.0 is a breaking release.** Use `createScrollScene` / `createScrollObserver` instead of `new ScrollScene` / `new ScrollObserver`. The obsolete `ScrollMagicSsr` alias is gone — use `ScrollMagic`. Run the migrator:

```bash
pnpm exec scrollscene-codemod path/to/src
# or: npx scrollscene-codemod path/to/src
```

If you are still on `0.0.25`, bump at least to `0.0.26` first (npm `^0.0.25` does not float to `0.0.26`), then upgrade to `1.0.0` and run the codemod.

## Import map

| What you need | Install | Import |
| --- | --- | --- |
| Observer only / SSR | `scrollscene` | `import { createScrollObserver } from 'scrollscene/observer'` |
| ScrollMagic scenes (client) | `scrollscene` + `scrollmagic` | `import { createScrollScene } from 'scrollscene'` |
| Re-export ScrollMagic (client) | `scrollscene` + `scrollmagic` | `import { ScrollMagic } from 'scrollscene'` |

Importing `createScrollObserver` from `'scrollscene'` (main) still works, but that entry also loads ScrollMagic — prefer `/observer` when you want a ScrollMagic-free install.

## Which should you use?

**ScrollObserver** is based on whether the trigger is **in the viewport** (IntersectionObserver). Use it for visibility toggles, play-when-visible, and similar “is this element on screen?” work. It stays off the scroll-event path. When the element leaves the viewport, Observer only knows it is no longer intersecting — not a ScrollMagic-style “you have scrolled past this waypoint” progress model — unless you opt into `persistWhenPast` (active while in view or scrolled past; inactive only when still below).

**ScrollScene** is **waypoint / scroll-position** based (ScrollMagic). Scenes track where you are relative to a trigger (`BEFORE` / `DURING` / `AFTER`), so an action can fire because you reached or passed a point even when that element is no longer on screen. Use it for `setPin`, `triggerHook`, pixel `duration` scrubbing, and anything that depends on scroll progress past a point — not just current visibility.

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
| methods          | Apply ScrollMagic.Scene methods via the handle escape hatch: `const scrollScene = createScrollScene({...}); scrollScene.scene.on('enter', …)` or `setPin`. See [ScrollMagic.Scene](http://scrollmagic.io/docs/ScrollMagic.Scene.html). Same for Controller via `scrollScene.controller` — be careful with the built-in `globalController`. |

### ScrollObserver Options (uses IntersectionObserver)

| option               | Description / Example                                                                                                                                                                                                                                                                                                      |
| -------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `breakpoints`        | `breakpoints: { 0: false, 768: true }` is used to set responsiveness of the scene, mobile-first.                                                                                                                                                                                                           |  |
| `gsap`               | Init a Gsap timeline with `gsap: { timeline: myTimeline, reverseSpeed: 2, yoyo: true, delay: 2 }`.                                                                                                                                                                                                                         |
| `observer`           | `observer: { rootMargin: '-50% 0%' }` is used to pass extra options to pass the IntersectionObserver, like `root`, `rootMargin`, or `threshold` (to override the thresholds option). `observer: { rootMargin: '0px', threshold: 1.0 }`                                                                                     |
| `offset`             | Used to change the `rootMargin` easy. `offset: '-10%` will be `rootMargin: '-10% 0%'`. This is a bit wonky and needs more testing.                                                                                                                                                                                         |
| `persistWhenPast`    | `persistWhenPast: true` keeps the scene active after the trigger scrolls past the top of the viewport (fade in and stay). It deactivates only when the trigger is entirely below again (scroll back up). Default `false` turns inactive whenever the trigger leaves the viewport either way. |
| `thresholds`         | `thresholds: 1` is to set the number of thresholds you want. `thresholds: 100 = [0, 0.1, 0.2, ... 0.98, 0.99, 1]`. It's easy to use `whenVisible`.                                                                                                                                                                         |
| `toggle`             | Toggle a className on an element with `toggle: { element: containerRef.current, className: 'lets-do-this' }`. The `element` key does _not_ accept string; eg: `.className`. Use a dom node selector instead.                                                                                                               |
| `triggerElement`     | `triggerElement: document.querySelector('#element')` is used to set the element you wish to trigger events based upon. Does _not_ accept string; eg: `.className`. Use a dom node selector instead.                                                                                                                        |
| `useDuration`        | `useDuration: true` to use the percentage of element visibility to scrub the gsap timeline. Similar to ScrollMagic Duration on a Gsap timeline, but not quite the same if the element is longer than the viewport height, thus the element visibility will never reach 100%, thus the gsap timeline will never reach 100%. |
| `destroyImmediately` | `destroyImmediately: true` to destroy the scene immediately after firing once the element is visible.                                                                                                                                                                                                                      |
| `whenVisible`        | `whenVisible: '50%'` make the scene active when the triggerElement is visible whatever percentage you set. "50%" means to fire the event when the element is 50% in the viewport. This will override `thresholds`.                                                                                                         |
| `callback`           | For adding callback functions. Make sure you pass functions. You can supply one or both callbacks. `callback: { active: () => (), notActive: () => () }`                                                                                                                                                                   |

See below for examples.

## Key Notes

- TypeScript types ship with the package.
- `gsap` and `scrollmagic` are not bundled. Observer-only: install `scrollscene` and import from `scrollscene/observer`. ScrollMagic scenes: also install `scrollmagic` and use the main entry on the client.
- Works with GSAP without ScrollMagic’s `animation.gsap.js` plugin (`pnpm add gsap`).
- Scene init and duration breakpoints are built in; controllers are created for you.
- Pass DOM nodes (or refs like `myRef.current`), not CSS selector strings or jQuery.
- Advanced: use `scrollScene.scene` / `scrollScene.controller` for ScrollMagic APIs (`setPin`, `on`, …). Use `scrollObserver.observer` for the underlying IntersectionObserver.

## Usage

### ScrollScene (uses ScrollMagic)

```js
import { createScrollScene } from 'scrollscene'

const myElement = document.querySelector('#element')

const scrollScene = createScrollScene({
  triggerElement: myElement,
})
```

#### Toggle a className

```js
import { createScrollScene } from 'scrollscene'

const domNode = document.querySelector('#element')
const anotherDomNode = document.querySelector('#element2')

const scrollScene = createScrollScene({
  triggerElement: domNode,
  toggle: {
    element: anotherDomNode,
    className: 'turn-blue',
  },
})
```

#### Toggle a className on a duration

```js
import { createScrollScene } from 'scrollscene'

const domNode = document.querySelector('#element')
const anotherDomNode = document.querySelector('#element2')

const scrollScene = createScrollScene({
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
import { createScrollScene } from 'scrollscene'

const domNode = document.querySelector('#element')
const anotherDomNode = document.querySelector('#element2')

const scrollScene = createScrollScene({
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
import { createScrollScene } from 'scrollscene'

const domNode = document.querySelector('#element')
const anotherDomNode = document.querySelector('#element2')

const scrollScene = createScrollScene({
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
import { createScrollScene } from 'scrollscene'

const domNode = document.querySelector('#element')
const anotherDomNode = document.querySelector('#element2')

const scrollScene = createScrollScene({
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
import { createScrollScene } from 'scrollscene'

const domNode = document.querySelector('#element')
const anotherDomNode = document.querySelector('#element2')

const scrollScene = createScrollScene({
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
import { createScrollScene } from 'scrollscene'

const domNode = document.querySelector('#element')

const scrollScene = createScrollScene({
  triggerElement: domNode,
})

scrollScene.scene.on('enter', function(event) {
  console.log('Scene entered.')
})
```

Add methods to the controller. See options here http://scrollmagic.io/docs/ScrollMagic.Controller.html. But be careful if you're using the built-in `globalController`, as it'll impact all the scenes you have.

```js
import { createScrollScene } from 'scrollscene'

const domNode = document.querySelector('#element')

const scrollScene = createScrollScene({
  triggerElement: domNode,
})

scrollScene.controller.destroy(true)
```

#### Using GSAP (Greensock)

```js
import { createScrollScene } from 'scrollscene'
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

const scrollScene = createScrollScene({
  triggerElement: scrollTrigger,
  gsap: {
    timeline: myTimeline,
  },
})
```

#### Using GSAP (Greensock), and setting the reserveSpeed

```js
import { createScrollScene } from 'scrollscene'
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

const scrollScene = createScrollScene({
  triggerElement: scrollTrigger,
  gsap: {
    timeline: tl,
    reverseSpeed: 4,
  },
})
```

#### Using GSAP (Greensock), and tying it to the user scrolling with a duration

```js
import { createScrollScene } from 'scrollscene'
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

const scrollScene = createScrollScene({
  triggerElement: scrollTrigger,
  gsap: {
    timeline: tl,
  },
  duration: 500,
})
```

#### Add Indicators (ScrollMagic debug plugin)

This package includes a modified `addIndicators` plugin. Import `addIndicators` from the main entry so the plugin registers (side effect). Remove it before shipping production.

```js
import { createScrollScene, addIndicators } from 'scrollscene'

const domNode = document.querySelector('#element')
const anotherDomNode = document.querySelector('#element2')

const scrollScene = createScrollScene({
  triggerElement: domNode,
  toggle: {
    element: anotherDomNode,
    className: 'turn-blue',
    reverse: true,
  },
  triggerHook: 1,
  duration: '100%',
})

scrollScene.scene.addIndicators({ name: 'pin scene', colorEnd: '#FFFFFF' })
```

_Note_: Notice that it's `scrollScene.scene`. `scrollScene` is a handle with `scene` and `controller` (advanced escape hatch). `scrollScene.addIndicators` will not work.

Alternatively you could do this and it'll apply to the built-in globalController...

```js
import { createScrollScene, addIndicators } from 'scrollscene'

const scrollScene = createScrollScene({
  controller: {
    addIndicators: true,
  },
})
```

or

```js
import { createScrollScene, addIndicators } from 'scrollscene'

const scrollScene = createScrollScene({
  ...options,
})

// advanced: reach the ScrollMagic controller on the handle
scrollScene.controller
```

### ScrollObserver (uses IntersectionObserver)

#### Toggle a className while element is visible on the page

```js
import { createScrollObserver } from 'scrollscene/observer'
import { gsap } from 'gsap'

const domNode = document.querySelector('#element')
const anotherDomNode = document.querySelector('#element2')

const scrollObserver = createScrollObserver({
  triggerElement: domNode,
  toggle: {
    element: anotherDomNode,
    className: 'turn-blue',
  },
})
```

#### Keep active after scrolling past (fade in and stay)

```js
import { createScrollObserver } from 'scrollscene/observer'

const domNode = document.querySelector('#element')
const anotherDomNode = document.querySelector('#element2')

const scrollObserver = createScrollObserver({
  triggerElement: domNode,
  persistWhenPast: true,
  toggle: {
    element: anotherDomNode,
    className: 'is-visible',
  },
})
```

With `persistWhenPast: true`, the scene stays active after the trigger leaves the top of the viewport. It turns inactive again only when the trigger is entirely below (scroll back up past it). Same rule applies to `gsap`, `video`, and `callback`.

#### Toggle a Gsap animation while element is visible on the page

```js
import { createScrollObserver } from 'scrollscene/observer'
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

const scrollObserver = createScrollObserver({
  triggerElement: domNode,
  gsap: {
    timeline: tl,
  },
})
```

#### Toggle a Gsap animation while element is visible on the page with a yoyo effect and repeat delay of 0

```js
import { createScrollObserver } from 'scrollscene/observer'
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

const scrollObserver = createScrollObserver({
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
import { createScrollObserver } from 'scrollscene/observer'
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

const scrollObserver = createScrollObserver({
  triggerElement: domNode,
  gsap: {
    timeline: tl,
  },
  useDuration: true,
})
```

#### Start a video when an element is visible and pause the video when it's not

```js
import { createScrollObserver } from 'scrollscene/observer'

const domNode = document.querySelector('#element')
const videoTagDomNode = document.querySelector('#video')

const scrollObserver = createScrollObserver({
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
import { createScrollObserver } from 'scrollscene/observer'

const domNode = document.querySelector('#element')

const scrollObserver = createScrollObserver({
  triggerElement: domNode,
  destroyImmediately: true,
})
```

#### Set a percentage for the visibility threshold

```js
import { createScrollObserver } from 'scrollscene/observer'

const domNode = document.querySelector('#element')

const scrollObserver = createScrollObserver({
  triggerElement: domNode,
  whenVisible: '50%',
})
```

#### Set a different threshold

The below would create an array of 100 thresholds ([0, 0.1, 0.2, ... 0.98, 0.99, 1]), effectively says any percent from 1 to 100 of the element intersecting the viewport should trigger the scene.

```js
import { createScrollObserver } from 'scrollscene/observer'

const domNode = document.querySelector('#element')

const scrollObserver = createScrollObserver({
  triggerElement: domNode,
  thresholds: 100,
})
```

#### Extra observer options

The below adds extra options to the IntersectionObserver. See others properities you could add [here](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver).

```js
import { createScrollObserver } from 'scrollscene/observer'

const domNode = document.querySelector('#element')

const scrollObserver = createScrollObserver({
  triggerElement: domNode,
  observer: { rootMargin: '-50% 0%' },
})
```

or

```js
import { createScrollObserver } from 'scrollscene/observer'

const domNode = document.querySelector('#element')

const scrollObserver = createScrollObserver({
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
import { createScrollScene } from 'scrollscene'

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

    const scrollScene = createScrollScene({
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
const scrollScene = createScrollScene({
  breakpoints: { 0: false, 768: true },
})
```

`duration` also can be responsive. The below would set up a scene that lasts 50vh on mobile, 100% after.

```js
const scrollScene = createScrollScene({
  duration: { 0: '50%', 768: '100%' },
})
```

For more on ScrollMagic, see [scrollmagic.io](https://www.scrollmagic.io/) and [janpaepke/ScrollMagic](https://github.com/janpaepke/ScrollMagic).
