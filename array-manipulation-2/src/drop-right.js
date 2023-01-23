/* exported dropRight */
function dropRight(array, count) {
  var newArray = []; // declare an empty variable
  if (array.length === 0) { // if statement to specify if the array length is equal to 0
    return newArray; // returns newArray
  }
  for (var i = 0; i < array.length - count; i++) { // for loop statement
    newArray.push(array[i]); // newArray push the first elements of array
  } return newArray; // return newArray
}
