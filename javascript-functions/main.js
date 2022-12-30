function convertMinutesToSeconds(minutes, seconds) {
  var multiply = minutes * seconds;
  return multiply;
}

var convertMinutesToSecondsResult =
convertMinutesToSeconds(5, 60);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function name(Hey, Beavis) {
  var name = 'Hey, Beavis';
  return name;
}

var nameResult = name('Hey, Beavis');
console.log('nameResult:', nameResult);

function getArea(width, height) {
  var multiply = width * height;
  return multiply;
}

var getAreaResult =
getArea(17, 42);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  var getFirstName = person;
  return getFirstName;
}

var getFirstNameResult =
getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(Array) {
  var getLastElement = Array;
  return getLastElement;
}

var getLastElementResult =
getLastElement(['propane', 'and', 'propane', 'accesories']);
console.log('getLastElementResult:', getLastElementResult);
