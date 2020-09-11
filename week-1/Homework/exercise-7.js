/* Challenge Famous Writers
Did you know you can also have an array of objects? We've created one for you here. Loop through the array, 
and for each object, `console.log()` out the sentence:

"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."

Here is the array:

*/

// const people = [
//   { name: 'John', age: 23 },
//   { name: 'Andrew', age: 3 },
//   { name: 'Peter', age: 8 },
//   { name: 'Hanna', age: 14 },
//   { name: 'Adam', age: 37 }];

// const anyAdult = people
//   .filter(person => person.age >= 18)
//   .map(person => person.name);
// console.log(anyAdult)

var writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  },
];


/*
If you want an extra challenge, only `console.log()` the writers that are alive.
*/
// Did you know you can also have an array of objects? We've created one for you here. Loop through the array, 
// and for each object, `console.log()` out the sentence:

const mappingWriters = writers.map(writer => console.log(`"Hi, my name is ${writer.firstName} ${writer.lastName}. I am ${writer.age} years old, and work as a ${writer.occupation}."`))

console.log(mappingWriters);