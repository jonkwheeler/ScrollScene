/* https://github.com/epranka/scrollmagic-with-ssr/blob/master/index.js */
import isClient from 'is-client'
import ScrollMagic from 'scrollmagic'

const scrollmagic = isClient() ? ScrollMagic : undefined

export default scrollmagic
