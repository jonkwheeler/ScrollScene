/*
 * Side-effect import registers Scene.addIndicators on ScrollMagic.
 * src/index.ts also imports the plugin directly so the binding can be tree-shaken
 * while registration still runs for package consumers.
 */
import './plugins/debug.addIndicators'

export default undefined
