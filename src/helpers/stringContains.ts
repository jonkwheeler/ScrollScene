/**
 * stringContains
 * @returns boolean
 * @example
 * stringContains('yoyoyo', 'yo') => true
 * stringContains('Hello', 'World') => false
 */
export const stringContains = (doesThis: string, containThis: string) => doesThis.indexOf(containThis) !== -1
