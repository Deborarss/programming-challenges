/*
O comprimento de uma matriz, como os tipos de dados que ela pode conter, não é fixo. Os arrays podem ser definidos com um comprimento de qualquer número de elementos, e os elementos podem ser adicionados ou removidos ao longo do tempo; em outras palavras, os arrays são mutáveis . Neste desafio, veremos dois métodos com os quais podemos modificar programaticamente um array: Array.push()e Array.unshift().

Ambos os métodos pegam um ou mais elementos como parâmetros e adicionam esses elementos ao array em que o método está sendo chamado; o push()método adiciona elementos ao final de uma matriz e unshift()adiciona elementos ao início.
*/

function mixedNumbers(arr) {
  arr.unshift('I', 2, 'three')
  arr.push(7, 'VIII', 9)

  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
