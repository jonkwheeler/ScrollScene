/**
 * isObject
 * @returns boolean
 * @example
 * isObject({foo: 'bar'}) => true
 * isObject('yo') => false
 */
export const isObject = x => typeof x === 'object' && !Array.isArray(x) && x !== null
