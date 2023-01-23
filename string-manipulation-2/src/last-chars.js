/* exported lastChars */
function lastChars(length, string) { // declares a new variable
  var array = []; // new empty array variable
  if (string === '') { // if statement to declare if string is strictly equals to ''
    return ''; // returns ''
  }
  for (var i = 0; i < string.length; i++) { // for loops statement
    array = string.substring(string.length - length, string.length); // get the last characters of the string
  } return array; // return array
}
