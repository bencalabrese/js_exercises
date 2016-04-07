var exports = module.exports = {};

  exports.uniq = function(array) {
    var seen = [];
    for (var i = 0; i < array.length; i++) {
      var el = array[i];

      if(seen.indexOf(el) === -1) {
        seen.push(el);
      }
    }
    return seen;
  };

  exports.twoSum = function(array){
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

  exports.transpose = function(array) {
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
