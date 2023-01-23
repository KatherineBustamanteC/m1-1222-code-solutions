/* exported numVowels */
function numVowels(string) {
  if (string === '') {
    return 0;
  }
  var count = string.match(/[aeiou]/gi).length;
  return count;
}
