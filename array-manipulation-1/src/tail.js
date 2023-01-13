/* exported tail */
function tail(array) { // declare a function with 1 parameter
  var array1 = []; // declare an empty array
  for (var i = 1; i < array.length; i++) { // create a for loop to run the 2nd array position through the end of the array
    array1.push(array[i]); // push array value to array 1
  } return array1; // return the value array1
}
