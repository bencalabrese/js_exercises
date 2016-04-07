var functions = require("./array_exercises.js");

console.log("testing uniq");
var a = [1,1,1,23,4,3,5,3,2];
console.log(functions.uniq(a));

console.log("testing twoSum");
var b = [-1, 0, 2, -2, 1];
console.log(functions.twoSum(b));

var c = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
];

console.log("testing transpose");
console.log(functions.transpose(c));
