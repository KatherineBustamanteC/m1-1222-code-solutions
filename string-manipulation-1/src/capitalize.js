/* exported capitalize */
function capitalize(word) {
  var firstWord = word[0].toUpperCase();
  var wholeWord = '';
  if (word.length > 0) {
    wholeWord = firstWord + word.slice(1, word.length).toLowerCase();
  }
  return wholeWord;
}
