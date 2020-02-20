var detect = require('is-client')
var addindicators = undefined
if (detect()) {
  addindicators = require('./plugins/debug.addIndicators')
}

export default addindicators
