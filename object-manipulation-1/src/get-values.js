/* exported getValues */
function getValues(object) { // define a function with two parameters
  var array = []; // declare an empty array to save the values
  for (var x in object) { // use the for in to check each key
    array.push(object[x]); // saving the values into array
  }
  return array; // return the array
}
