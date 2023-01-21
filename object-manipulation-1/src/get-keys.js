/* exported getKeys */
function getKeys(object) {
  var array = [];
  for (var x in object) {
    array.push(x);
  }
  return array;
}
