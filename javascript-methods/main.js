var a = 96;
var b = 97;
var c = 98;

var maximunValue = Math.max(a, b, c);

console.log('maximunValue:', maximunValue);

var heroes = ['Iron Man', 'Hulk', 'Captain America'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Nineteen Eighty-Four',
    author: 'George Orwell'
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley'
  },
  {
    title: '1984',
    author: 'George Orwell'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

var fullName = 'Katherine Bustamante';

var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
