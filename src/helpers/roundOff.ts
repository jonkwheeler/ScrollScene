/**
 * roundOff
 * @desc round a number off to nearest 2 decimal places
 * roundOff(5) => 5
 * roundOff(100) => 100
 * roundOff(0.23432) => 0.23
 * roundOff(0.897) => 0.9
 */

export const roundOff = value => Math.round(value * 100) / 100
