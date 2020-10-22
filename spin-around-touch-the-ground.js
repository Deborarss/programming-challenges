/*
Spin Around, Touch the Ground
Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

Worked Example
spinAround(["right", "right", "right", "right", "left", "right"]) ➞ 1
# You spun right 4 times (90 * 4 = 360)
# You spun left once (360 - 90 = 270)
# But you spun right once more to make a full rotation (270 + 90 = 360)
Examples
spinAround(["left", "right", "left", "right"]) ➞ 0

spinAround(["right", "right", "right", "right", "right", "right", "right", "right"]) ➞ 2

spinAround([]) ➞ 1
Notes
Return a positive number.
All tests will only include the words "right" and "left".
*/

function spinAround(r) {  
  return Math.floor(Math.abs(r.reduce((a, c) => a + (c === 'left' ? 90 : - 90), 0)) / 360)
}

console.log(spinAround(["right", "right", "right", "right", "right", "right", "right", "right"]))
//r.reduce((a, b) => a + (b == 'right' ? 1 : -1), 0)/4))