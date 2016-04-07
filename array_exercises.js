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
