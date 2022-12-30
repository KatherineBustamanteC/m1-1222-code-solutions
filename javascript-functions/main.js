function convertMinutesToSeconds(minutes, seconds) {
  var multiply = minutes * seconds;
  return multiply;
}

var convertMinutesToSecondsResult =
convertMinutesToSeconds(5, 60);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey,' + name;
  return greeting;
}

var greetResult = greet('Beavis');
console.log('greetResult:', greetResult);

function getArea(width, height) {
  var multiply = width * height;
  return multiply;
}

var getAreaResult =
getArea(17, 42);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var getFirstNameResult =
getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}

var getLastElementResult =
getLastElement(['propane', 'and', 'propane', 'accesories']);
console.log('getLastElementResult:', getLastElementResult);
