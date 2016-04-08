var subsets = function(array) {
  if (array.length < 1) {
    return [array];
  }
  var firstNum = array[0];
  var prevSubsets = subsets(array.slice(1, array.length));
  var newSubsets = [];

  for(var i=0; i < prevSubsets.length; i++){
    var currentSet = [firstNum].concat(prevSubsets[i]);
    newSubsets.push(currentSet);
  }

  return newSubsets.concat(prevSubsets);
};

console.log(subsets([5,4]));
