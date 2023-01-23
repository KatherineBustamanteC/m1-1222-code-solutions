/* exported includes */
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  } return false;
}
