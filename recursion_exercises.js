var exponentiate = function(base, power) {
  if (power === 0){
    return 1;
  }else if (power > 0){
    return base*exponentiate(base, power - 1);
  }else{
    return (1/exponentiate(base, -power));
  }
};

console.log(exponentiate(3,3));
console.log(exponentiate(3,1));
console.log(exponentiate(3,0));
console.log(exponentiate(3,-1));
console.log(exponentiate(3,-3));

var fibonacci = function(n){
  if (n === 1){
    return [1];
  }else if (n === 2){
    return [1,1];
  }else{
    var fibs = fibonacci(n - 1);
    var lastEl = fibs[fibs.length - 1];
    var secondLastEl = fibs[fibs.length - 2];

    fibs.push(lastEl + secondLastEl);
    return fibs;
  }
};

console.log(fibonacci(3));
console.log(fibonacci(10));

var bSearch = function(array, target) {
  if (array.length === 0) {
    return NaN;
  }

  var pivot = Math.floor(array.length / 2);

  if (array[pivot] === target) {
    return pivot;
  }

  var left = array.slice(0, pivot);
  var right = array.slice(pivot + 1, array.length);

  if (target< array[pivot]) {
    return bSearch(left, target);
  } else {
    return pivot + 1 + bSearch(right, target);
  }
};

var a = [1,2,3,4,5,6,7,8];

console.log(bSearch(a,2));
console.log(bSearch(a,7));
console.log(bSearch(a,4));
console.log(bSearch(a,0));
console.log(bSearch(a,9));
