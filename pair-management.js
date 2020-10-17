/*
Pair Management
Given two arguments, return an array which contains these two arguments.

Examples
makePair(1, 2) ➞ [1, 2]

makePair(51, 21) ➞ [51, 21]

makePair(512124, 215) ➞ [512124, 215]
*/

function makePair(...args) {
  return [...args]
}

console.log(makePair(1, 2));