/* exported capitalize */
function capitalize(word) { // create a new function with 1 parameter (word)
  var newWord = []; // a new variable with empty brackets
  for (var i = 0; i < word.length; i++) { // new for loop to check if i its equal to zero
    if (i === 0) { // a boolean to ask if its first character is uppercased and the rest lowercased.
      newWord = '' + newWord + word[i].toUpperCase();
    } else {
      newWord = '' + newWord + word[i].toLowerCase();
    }
  } return newWord; // return the value
}
