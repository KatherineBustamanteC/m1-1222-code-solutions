/* exported take */
function take(array, count) { // declare a new function with two parameters
  var newArray = []; // declare an empty variable
  if (array.length === 0) { // if statement to specify if the arraya length is equal to 0
    return newArray; // returns newArray
  }
  for (var i = 0; i < count; i++) { // for loop statement
    newArray.push(array[i]); // newArray push the first elements of array
  } return newArray; // return newArray
}
