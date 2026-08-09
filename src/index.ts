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

import ScrollMagic from 'scrollmagic'
export { ScrollMagic }

/*
 * Importing addIndicators registers the ScrollMagic plugin (side effect).
 * Prefer scrollScene.scene.addIndicators(...) after import.
 */
import './plugins/debug.addIndicators'
export const addIndicators = true
