/*
Burglary Series (01): Calculate Total Losses
You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

Examples
const stolenItems = {
  tv: 30,
  skate: 20,
  stereo: 50,
} ➞ 100

const stolenItems = {
  painting: 20000,
} ➞ 20000

const stolenItems = {} ➞ "Lucky you!"
Notes
The item value is always positive.
*/

function calculateLosses(obj) {
  return (
    Object.values(obj).reduce((total, num) => total + num, 0) || "Lucky you!"
  );
}

console.log(
  calculateLosses(
    (stolenItems = {
      tv: 30,
      skate: 20,
      stereo: 50,
    })
  )
);
