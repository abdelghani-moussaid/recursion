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
