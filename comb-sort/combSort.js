var combSort = function(arr){
  //return array
  retArr = arr;
  //this is the gap between tested items
  var gap = arr.length;
  //this is the rate at which the gap is shortened
  var shrink = 1.3;
  //this is the condition to break out of the loop (when no swaps happen)
  var swapped = true;

  while(gap === 1 && swapped === false){
    swapped = false;
    gap = parseInt(gap/shrink);
    for(var  i=0; i < arr.length; i++){
      //this prevents there being a gap smaller then one index
      if(gap < 1){
        gap = 1;
      }
      //this compares the current index with the index of the current gap length and swaps if necessary
      if(arr[i] > arr[gap]){
        swapped = true;
        retArr = swap(retArr, i, gap);
      }
    }
  }
  return retArr;


};

//this is a simple swapping function
var swap = function(array, i, j){
  first = array[i];
  array[i] = array[j];
  array[j] = first;
  return array;
};
