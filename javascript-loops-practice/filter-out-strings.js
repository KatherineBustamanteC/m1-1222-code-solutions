/* exported filterOutStrings */
function filterOutStrings(values) {
  var array = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] === null) {
      array.push(values[i]);
    }
    if (!isNaN(values[i])) {
      var x = values[i] + 0;
      if (x === values[i]) {
        array.push(values[i]);
      }
    }
  } return array;
}
