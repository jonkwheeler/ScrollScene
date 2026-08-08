import isClient from 'is-client'
import ScrollMagic from 'scrollmagic'

/*
 * Vite cannot evaluate the package's client-only require() shim.
 * Storybook demos use this static-import stand-in instead.
 */
const scrollmagic = isClient() ? ScrollMagic : undefined

export default scrollmagic
