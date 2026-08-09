export { createScrollScene } from './ScrollScene'
export type { IScrollScene, IScrollSceneHandle } from './ScrollScene'
export { createScrollObserver } from './ScrollObserver'
export type {
  IScrollObserver,
  IScrollObserverHandle,
  IScrollObserverGsap,
  IScrollObserverToggle,
  IScrollObserverVideo,
} from './ScrollObserver'

import scrollmagic from './scrollmagic-with-ssr'
export { scrollmagic as ScrollMagic }
export { scrollmagic as ScrollMagicSsr }

import addindicators from './scrollmagic-add-indicators'
export { addindicators as addIndicators }
