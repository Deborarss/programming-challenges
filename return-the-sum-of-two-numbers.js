/*
Return the Sum of Two Numbers
Create a function that takes two numbers as arguments and return their sum.

Examples
addition(3, 2) ➞ 5

addition(-3, -6) ➞ -9

addition(7, 3) ➞ 10
*/

function addition(a, b) {
  if(typeof a !== 'number' || typeof b !== 'number') {
    return "Não é um número"
  }
	return a + b;
}

console.log(addition(-3, -6))