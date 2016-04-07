var uniq = function(array) {
  var seen = [];
  for (var i = 0; i < array.length; i++) {
    var el = array[i];

    if(seen.indexOf(el) === -1) {
      seen.push(el);
    }
  }
  return seen;
};

var a = [1,1,1,23,4,3,5,3,2];
console.log(uniq(a));

var twoSum = function(array){
  var twoSums = [];
  for(var i = 0; i < array.length; i++){
    for(var j=i+1; j < array.length; j++){
      if(array[i] + array[j] === 0){
        twoSums.push([i,j]);
      }
    }
  }
  return twoSums;
};
var b = [-1, 0, 2, -2, 1];
console.log(twoSum(b));

var transpose = function(array) {
  var rowLength = array[0].length;
  var transposed = [];

  for (var i = 0; i < rowLength; i++) {
    var newRow = [];

    for (var j = 0; j < array.length; j++) {
      newRow.push(array[j][i]);
    }

    transposed.push(newRow);
  }

  return transposed;
};

var c = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
];

console.log(transpose(c));
