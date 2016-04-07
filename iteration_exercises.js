//SWAP var temp=a, a=b, b=temp;

var bubbleSort = function(array){
  var sorted = false;
  while(sorted === false){
    sorted = true;
    for(var i = 0; i < array.length - 1; i++){
      if (array[i] > array[i + 1]){
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;

        sorted = false;
      }
    }
  }

  return array;
};

var a = [5,3,2,4,1];

console.log(bubbleSort(a));
