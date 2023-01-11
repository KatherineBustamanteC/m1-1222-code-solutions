/* exported getLastChar */
function getLastChar(string) { // create a new variable
  var array = []; // new array
  for (var i = 0; i < string.length; i++) { // for loop to get the last character
    array = string[string.length - 1]; // use the string.length to get the last character with -1
  } return array; // return value
}
