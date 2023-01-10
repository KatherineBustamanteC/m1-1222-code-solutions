/* exported addSuffixToAll */
function addSuffixToAll(word, suffix) {
  for (var i = 0; i < word.length; i++) {
    word[i] = word[i] + suffix;
  } return word;
}
