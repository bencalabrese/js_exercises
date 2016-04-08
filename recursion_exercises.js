// var exponentiate = function(base, power) {
//   if (power === 0){
//     return 1;
//   }else if (power > 0){
//     return base*exponentiate(base, power - 1);
//   }else{
//     return (1/exponentiate(base, -power));
//   }
// };
//
// console.log(exponentiate(3,3));
// console.log(exponentiate(3,1));
// console.log(exponentiate(3,0));
// console.log(exponentiate(3,-1));
// console.log(exponentiate(3,-3));
//
// var fibonacci = function(n){
//   if (n === 1){
//     return [1];
//   }else if (n === 2){
//     return [1,1];
//   }else{
//     var fibs = fibonacci(n - 1);
//     var lastEl = fibs[fibs.length - 1];
//     var secondLastEl = fibs[fibs.length - 2];
//
//     fibs.push(lastEl + secondLastEl);
//     return fibs;
//   }
// };
//
// console.log(fibonacci(3));
// console.log(fibonacci(10));
//
// var bSearch = function(array, target) {
//   if (array.length === 0) {
//     return NaN;
//   }
//
//   var pivot = Math.floor(array.length / 2);
//
//   if (array[pivot] === target) {
//     return pivot;
//   }
//
//   var left = array.slice(0, pivot);
//   var right = array.slice(pivot + 1, array.length);
//
//   if (target< array[pivot]) {
//     return bSearch(left, target);
//   } else {
//     return pivot + 1 + bSearch(right, target);
//   }
// };
//
// var a = [1,2,3,4,5,6,7,8];
//
// console.log(bSearch(a,2));
// console.log(bSearch(a,7));
// console.log(bSearch(a,4));
// console.log(bSearch(a,0));
// console.log(bSearch(a,9));

var makeChange = function(total, coins) {
  coins.sort().reverse();
  if(coins[0] == null){
    return NaN;
  }
  if(total === 0){
    return [];
  }
  var bigC = coins[0];
  var numBigC = Math.floor(total/bigC);

  if (coins.length === 1){
    if (total % bigC === 0){
      var temp = [];
      for(var x = 0; x < (total/bigC); x++){
        temp.push(bigC);
      }
      return temp;
    }
    else{
      return NaN;
    }
  }

  var smallerCoins = coins.slice(1, coins.length);

  var bestChange = null;

  for(var i = 0; i <= numBigC; i++){
    var bigChange = [];

    for(var x = 0; x < i; x++){
      bigChange.push(bigC);
    }

    var smallerChange = makeChange(total - (i * bigC), smallerCoins);
    var currentChange = bigChange.concat(smallerChange);

    var shouldChange =
      (bestChange === null || currentChange.length < bestChange.length) &&
        currentChange;

    if (shouldChange){
      bestChange = currentChange;
    }
  }
  return bestChange;
};
debugger;
console.log(makeChange(14, [10,7,1]));
console.log(makeChange(75, [25,3,5,1]));
console.log(makeChange(76, [1,10,5,25]));
console.log(makeChange(3, [25,10,5]));
