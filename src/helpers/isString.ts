/**
 * isString
 * @returns boolean
 * @example
 * isString('yo') => true
 * isString({foo: 'bar'}) => false
 */
export const isString = x => typeof x === 'string'
