/* exported filterOutStrings */
function filterOutStrings(values) {
  var array = [];
  for (var i = 0; i < values.length; i++) {
    if (!isNaN(values[i])) {
      array.push(values[i]);
    }
  } return array;
}
