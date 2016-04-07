var myEach = function(array, f) {
  for (var i = 0; i < array.length; i++) {
    f(array[i]);
  }
};

var a = [1, 2, 3, 4, 5];
var doubler = function(num) {
  // console.log(num * 2);
  return num * 2;
};

myEach(a, doubler);

var myMap = function(array, f){
  var result = [];

  myEach(array, function(el){
    result.push(f(el));
  });
  return result;
};

console.log(myMap(a, doubler));

var myInject = function(array, f, accum){
  myEach(array, function(el){
    if (accum === undefined) {
      accum = el;
    } else {
      accum = f(accum, el);
    }
  });

  return accum;
};

var add = function(x, y) {
  return x + y;
};

console.log(myInject(a, add));
console.log(myInject(a, add, 8));
