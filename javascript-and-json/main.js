var books = [
  {
    isbn: '12345',
    title: 'Javascript & JQuery',
    author: 'Jon Duckett'
  },
  {
    isbn: '12346',
    title: 'html & css',
    author: 'Jon Duckett'
  },
  {
    isbn: '12347',
    title: 'programming language explorations',
    author: 'Ray Toal'
  }
];

console.log(JSON.stringify(books));
console.log(typeof JSON.stringify(books));
console.log(books);
console.log(typeof books);

var student = '{"id": 1, "name": "Katherine" }';

console.log(student);
console.log(typeof student);
console.log(JSON.parse(student));
console.log(typeof JSON.parse(student));
