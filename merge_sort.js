var merge = function(left, right){
  var result = [];
  while(left.length > 0 && right.length > 0){
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }

  return result.concat(left).concat(right);
};

var a = [1,3,6];
var b = [2,4,5];

// console.log(merge(a, b));

var mergeSort = function(array) {
  if (array.length < 2) {
    return array;
  }

  var halfway = Math.floor(array.length / 2);
  var left = array.slice(0, halfway);
  var right = array.slice(halfway, array.length);

  return merge(mergeSort(left), mergeSort(right));
};

var c = [3,4,8,2,6,7,2,1,7];

console.log(mergeSort(c));
