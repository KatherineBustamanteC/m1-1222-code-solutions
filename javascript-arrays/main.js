var colors;
colors = ['red', 'white', 'blue'];

console.log('value of colors[0]', 'red');
console.log('value of colors[1]', 'white');
console.log('value of colors[2]', 'blue');

var string = 'America is ' + colors[0] + ',' + ' ' + colors[1] + ',' + ' ' + 'and' + ' ' + colors[2] + '.';

console.log(string);

colors[2] = 'green';

var color = 'Mexico is ' + colors[0] + ',' + ' ' + colors[1] + ',' + ' ' + 'and' + ' ' + colors[2] + '.';

console.log(color);

console.log('value of the colors:', colors);

var students = ['Katherine', 'Tim', 'Brielle', 'Brayden'];

var numberOfStudents = students.length;

console.log('There are ' + students.length + ' students in the class');

var lastIndex = numberOfStudents - 1;

var lastStudent = students[lastIndex];

console.log('The last student in the array is ' + lastStudent);

console.log('value of students:', students);
