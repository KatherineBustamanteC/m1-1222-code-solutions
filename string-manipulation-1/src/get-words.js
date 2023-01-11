/* exported getWords */
function getWords(string) {
  var array = [];
  var word = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      array.push(word);
      word = '';
    } else {
      if (i === string.length - 1) {
        word = '' + word + string[i];
        array.push(word);
      }
      word = '' + word + string[i];
    }
  } return array;
}
