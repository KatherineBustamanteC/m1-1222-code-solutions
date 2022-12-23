var student = {
  firstName: 'Katherine',
  lastName: 'Bustamante',
  age: 30
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = true;

student.previousOccupation = 'Teacher';

console.log('student.livesInIrvine:', student.livesInIrvine);
console.log('student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Subaru',
  model: 'Outback',
  year: 2020
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);
console.log('value of vechicle:', vehicle);

var pet = {
  name: 'Bobby',
  type: 'Labrador'
};

delete pet.name;
delete pet.type;

console.log('value of pet:');
console.log(pet);
