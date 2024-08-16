/*
Using recursion, write a function fibs which takes a number and returns an array 
containing that many numbers from the Fibonacci sequence. 
Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
*/
function fibs(number) {
  if (number <= 0) return [];
  if (number == 1) return [0];
  if (number == 2) return [0, 1];
  const previousArray = fibs(number - 1);
  return previousArray.concat(
    previousArray[number - 2] + previousArray[number - 3]
  );
}

/*
Build a function mergeSort that takes in an array and returns a sorted array, 
using a recursive merge sort methodology. 
*/

function mergeSort(array, low, high) {
  if (low < high) {
    const mid = Math.floor((low + high) / 2);
    mergeSort(array, low, mid);
    mergeSort(array, mid + 1, high);
    merge(array, low, mid, high);
  }
  return array;
}

function merge(array, low, mid, high) {
  let copy = array.slice();
  let i = low;
  let j = mid + 1;
  let k = low;
  while (i <= mid && j <= high) {
    if (copy[i] < copy[j]) {
      array[k] = copy[i];
      i++;
    } else {
      array[k] = copy[j];
      j++;
    }
    k++;
  }
  for (; i <= mid; i++) {
    array[k] = copy[i];
    k++;
  }
  for (; j <= high; j++) {
    array[k] = copy[j];
    k++;
  }
}
