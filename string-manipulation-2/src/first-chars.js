/* exported firstChars */
function firstChars(length, string) { // declare a function with two parameters
  var array = []; // declare a new empty variable
  if (string === '') { // declare an if statement to specify if string is strictly equals to ''
    return ''; // returns ''
  }
  for (var i = 0; i < string.length; i++) { // for loop statement
    array = string.substring(0, length); // substracting the first characters of the string
  } return array; // returns array
}
