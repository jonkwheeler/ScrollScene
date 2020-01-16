/**
 * isFunc
 * @returns boolean
 * @example
 * isFunc(function(){}) => true
 * isFunc('hi') => false
 */
export const isFunc = value => typeof value === 'function'
