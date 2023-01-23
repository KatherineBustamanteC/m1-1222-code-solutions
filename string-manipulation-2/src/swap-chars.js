/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var chars = '';
  for (var i = 0; i < string.length; i++) {
    if (firstIndex === i) {
      chars += string[secondIndex];
    } else if (secondIndex === i) {
      chars += string[firstIndex];
    } else {
      chars += string[i];
    }
  } return chars;
}
