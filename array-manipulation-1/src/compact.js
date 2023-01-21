/* exported compact */
function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if ((typeof array[i] === typeof NaN && isNaN(array[i])) || array[i] == null) {
      continue;
    }
    if ((typeof array[i] === typeof [] || typeof array[i] === typeof {}) || (array[i] !== false && array[i] !== 0 && array[i] !== undefined && array[i] !== '')) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
