/* exported capitalizeWord */
function capitalizeWord(word) { // declare a function with one parameter
  var firstWord = word[0].toUpperCase(); // declare a new variable that specify word[0] its Upper Case
  var wholeWord = ''; // declare a new variable that specify a new empty string
  if (word.toLowerCase() === 'javascript') { // declare a if statement to specify if the word is lower case equals to javascript string
    return 'JavaScript'; // returns javascript
  }
  if (word.length > 0) { // declare a if statment to specify the word.length is not empty
    wholeWord = firstWord + word.slice(1, word.length).toLowerCase();
  }
  return wholeWord; // return wholeWord
}
