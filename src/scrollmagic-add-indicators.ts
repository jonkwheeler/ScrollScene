import isClient from 'is-client'

/*
 * Historical export used by `export { addIndicators } from './scrollmagic-add-indicators'`.
 * Plugin registration is a side-effect import in `src/index.ts`.
 * Keep a client-only placeholder so the named export remains defined.
 */
const addindicators = isClient() ? {} : undefined

export default addindicators
