var combSort = function(arr){

  var gap = arr.length;
  var shrink = 1.3;
  var swapped = true;

  while(gap === 1 && swapped === false){
    swapped = false;
    gap = parseInt(gap/shrink);
    for(var  i=0; i < arr.length; i++){
      if(gap < 1){
        gap = 1;
      }
      if(arr[i] < arr[gap]){
        swapped = true;
        arr = swap(arr, i, gap);
      }
    }
  }
  return arr;


};

var swap = function(array, i, j){
  first = array[i];
  array[i] = array[j];
  array[j] = first;
  return array;
};
