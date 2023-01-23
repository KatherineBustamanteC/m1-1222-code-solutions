/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  var subArray = [];
  var count = 1;
  for (var i = 0; i < array.length; i++) {
    if (count === size || i === array.length - 1) {
      count = 1;
      subArray.push(array[i]);
      newArray.push(subArray);
      subArray = [];
    } else {
      subArray.push(array[i]);
      count++;
    }
  } return newArray;
}
