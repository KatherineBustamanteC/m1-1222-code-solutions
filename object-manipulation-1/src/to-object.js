/* exported toObject */
function toObject(keyValuePair) {
  var object = { test: 'test' };
  for (var x in object) {
    x = keyValuePair[0];
    object[x] = keyValuePair[1];
  }
  delete object.test;
  return object;
}
