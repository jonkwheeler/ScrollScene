/* https://github.com/epranka/scrollmagic-with-ssr/blob/master/index.js */
var detect = require('is-client')
var scrollmagic = undefined
if (detect()) {
  scrollmagic = require('scrollmagic')
}

export default scrollmagic
