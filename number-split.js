/*
Number Split
Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

Examples
numberSplit(4) ➞ [2, 2]

numberSplit(10) ➞ [5, 5]

numberSplit(11) ➞ [5, 6]

numberSplit(-9) ➞ [-5, -4]
Notes
All numbers will be integers.
You can expect negative numbers too
*/



function numberSplit(number) {
  const result = number / 2
	if(number % 2 !== 0) {
    return [Math.floor(result), Math.round(result)]
  }
  return [result, result]
}

console.log(numberSplit(-9));