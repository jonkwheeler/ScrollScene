import isClient from 'is-client'

/*
 * Client-only require matches 0.0.24: loading this module registers the plugin
 * and keeps `import { addIndicators } from 'scrollscene'` valid without forcing
 * SSR to evaluate ScrollMagic.
 */
let addindicators

if (isClient()) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  addindicators = require('./plugins/debug.addIndicators')
}

export default addindicators
