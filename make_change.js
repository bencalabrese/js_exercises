
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
console.log(makeChange(14, [10,7,1]));
console.log(makeChange(75, [25,3,5,1]));
console.log(makeChange(76, [1,10,5,25]));
console.log(makeChange(3, [25,10,5]));
