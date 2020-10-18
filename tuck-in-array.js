/*
Tuck in Array
Create a function that takes two arrays and insert the second array in the middle of the first array.

Examples
tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]

Notes
The first array always has two elements.
Use the spread syntax to solve this challenge.
*/

function tuckIn(arr1, arr2) {
  if(arr1.length !== 2) {
    return 'O primeiro array precisa ter somente dois elementos'
  }

	return [arr1[0], ...arr2, arr1[1]]
}

console.log(tuckIn([15,150], [45, 75, 35]));