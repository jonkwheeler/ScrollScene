export { ScrollScene } from './ScrollScene'
export { ScrollObserver } from './ScrollObserver'

import scrollmagic from './scrollmagic-with-ssr'
export { scrollmagic as ScrollMagic }
export { scrollmagic as ScrollMagicSsr }

/*
 * side-effect import: the plugin self-registers on ScrollMagic.Scene when it executes,
 * so it must survive tree-shaking even when the addIndicators binding is unused
 */
import './plugins/debug.addIndicators'

import addindicators from './scrollmagic-add-indicators'
export { addindicators as addIndicators }
