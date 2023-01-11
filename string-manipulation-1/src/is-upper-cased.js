/* exported isUpperCased */
function isUpperCased(word) { // new function with 1 parameter
  var upperCase = word.toUpperCase(); // create a var that it will be equal to the parameter word.upperCase
  if (upperCase === word) { // create an if that will indicate that upperCase is equal to word
    return true; // return will indicate either true or false
  } else {
    return false;
  }
}
