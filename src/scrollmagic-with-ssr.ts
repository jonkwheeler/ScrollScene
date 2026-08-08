/* https://github.com/epranka/scrollmagic-with-ssr/blob/master/index.js */
import isClient from 'is-client'

/*
 * Keep scrollmagic behind a client-only require so SSR/Node never evaluates
 * its window access. Consumers can keep `import { … } from 'scrollscene'`.
 * Storybook Vite uses a static-import shim via alias instead of this file.
 */
let scrollmagic

if (isClient()) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  scrollmagic = require('scrollmagic')
}

export default scrollmagic
