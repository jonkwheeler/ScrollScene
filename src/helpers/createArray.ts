/*
 * createArray
 * Set performance using thresholds
 * @desc Building an array of numbers starting at 0.00 and incrementing at every 0.01
 * @example
 * thresholds = 2 [0, 0.5, 1], thresholds = 3 [0, 0.33, 0.67, 1]
 */
import { roundOff } from './roundOff'

export const createArray = value =>
  Array.apply(null, new Array(value + 1))
    // @ts-ignore
    .map((n, i) => roundOff(i / value))
