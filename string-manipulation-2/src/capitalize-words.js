/* exported capitalizeWords */
function capitalizeWords(string) { // declare a new variable
  var newWord = ''; // declare a new variable with a empty string
  for (var i = 0; i < string.length; i++) { // use a for loop statement
    if (i === 0 || string[i - 1] === ' ') { // if statement to validate every begin of the words are capitalized
      newWord += string[i].toUpperCase(); // concatenate a upper case
    } else { // else statement
      newWord += string[i].toLowerCase(); // concatenate a lower case for everything else
    }
  } return newWord; // returns newWord
}
