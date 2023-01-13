/* exported initial */
function initial(array) {
  var array1 = []; // declare an empty array
  for (var i = 0; i < array.length - 1; i++) { // create a for loop to run all the elements except the last one
    array1.push(array[i]); // push array value to array 1
  } return array1; // return the value array1
}
