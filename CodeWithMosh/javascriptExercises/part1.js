// factory function
function createAddress(street, city, zip) {
  return {
    street,
    city,
    zip,
  };
}
// construction function
function Address(street, city, zip) {
  (this.street = street), (this.city = city), (this.zip = zip);
}

const address1 = new Address("a", "b", 123);
// console.log(address1);

const address2 = new Address("a", "b", 123);
// console.log(address1);

// objects are pointing to different places in memory; returns false
function areSame(object1, object2) {
  return object1 === object2;
}

// objects individual properties are same values; returns true
function areEqual(object1, object2) {
  return (
    object1.street === object2.street &&
    object1.city === object2.city &&
    object1.zip === object2.zip
  );
}

// console.log(areSame(address1, address2));
// console.log(areEqual(address1, address2));
const address3 = address1;
// returns true because the consts are pointing to the same address in memory
// console.log(areSame(address1, address3));

// blog post object

function Blog(title, body, author) {
  (this.title = title),
    (this.body = body),
    (this.author = author),
    (this.views = 0),
    (this.comment = []),
    (this.isLive = false);
}

const blogPost = {
  title: "a",
  body: "b",
  author: "c",
  views: 123,
  comment: [
    { author: "a", body: "b" },
    { author: "b", body: "c" },
  ],
  isLive: true,
};
console.log(blogPost);

const blogPost2 = new Blog("b", "c", "d");
console.log(blogPost2);
blogPost2.comment.push({ author: "b", body: "v" });
blogPost2.comment.push({ author: "c", body: "g" });
console.log(blogPost2);

const courses = [
  { id: "x", name: "abc" },
  { id: "y", name: "def" },
];

const course = courses.findIndex((course) => course.name === "ghi");
console.log(course);

// **** ARRAY EXERCISES ****

// array from range
// takes two parameters and produces and array of numbers ascending between the two

function arrayFromRange(a, b) {
  // declare empty array
  // find the min and max of the two
  // loop through the two adding each to array
  // return array
  if (a === b) return [];
  const result = [];
  let min = Math.min(a, b);
  let max = a > b ? a : b;

  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}

// console.log(arrayFromRange(5, 10));
// console.log(arrayFromRange(4, 4));
// console.log(arrayFromRange(-10, -15));

// includes
// check to see if element in array without using includes method

function includes(array, element) {
  for (let value of array) {
    if (element === value) return true;
  }
  return false;
}

// console.log(includes([1, 2, 3, 4], 4));
// console.log(includes([1, 2, 3, 4], 12));
// console.log(includes([1, 2, 3, 4], 0));

// except
// function takes in two parameters; array and array of exceptions
// remove any exception numbers from the array

function except(array, exceptions) {
  // filter method
  // callback condition --> element not in exceptions
  return array.filter((value) => !exceptions.includes(value));
}

// console.log(except([1, 2, 3, 4, 5, 6], [1, 3, 5]))

// move
// funciton takes in an array, index of number in the array, and offset (elements right)

function move(array, index, offset) {
  // copy array
  const result = [...array];
  // define position as index + offset
  const position = index + offset;
  // log error to console if new position is greater than length of array or less than 0
  if (position >= array.length || position < 0) {
    console.error("Invalid position.");
    return;
  }
  // delete element at index
  const element = result.splice(index, 1)[0];
  // reinsert element at offset plus index using splice method
  result.splice(position, 0, element);
  // return copied array
  return result;
}

// console.log(move([1, 2, 3, 4, 5, 6], 1, 2));
// console.log(move([1, 2, 3, 4, 5, 6], 3, -2));
// console.log(move([1, 2, 3, 4, 5, 6], 1, 7));

// count occurances
// takes in an array and search element and counts times occur in array

// function occurances (array, searchElement){
//   let tally = 0;
//   for (let value of array){
//     if (value === searchElement){
//       tally++;
//     }
//   }
//   return tally;
// }
function occurances(array, searchElement) {
  return array.reduce((acc, cur) => {
    return (acc += cur === searchElement ? 1 : 0);
  }, 0);
}

// console.log(occurances([1, 1, 2, 3, 4, 4, 4, 4, 4, 5, 6, 6, 6, 7, 7], 4));
// console.log(occurances([1, 1, 2, 3, 4, 4, 4, 4, 4, 5, 6, 6, 6, 7, 7], 1));
// console.log(occurances([1, 1, 2, 3, 4, 4, 4, 4, 4, 5, 6, 6, 6, 7, 7], 8));

// getMax --> returns largest number in array using reduce

// function getMax (array){
//   if (array.length === 0) return [];
//   return array.reduce((accumulator, current)=> {
//     return (current > accumulator)? current : accumulator;
//   }, 0)
// }

function getMax(array) {
  if (array.length === 0) return [];
  return array.reduce((a, c) => (a > c ? a : c));
}

// console.log(getMax([5, 6, 78, 21, 100, 23]));
// console.log(getMax([]));

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

// all of the movies in 2018 with rating greater than 4
// sort them by their rating
// descending order
// log their title

const moviesSort = movies
  .filter((value) => value.rating >= 4 && value.year === 2018)
  .sort((a, b) => b.rating - a.rating)
  .map((value) => value.title);

// console.log(moviesSort);

// sum all of the arguments passed into the array
// allow it to also work when passing in an array

function sum(...args) {
  if (args.length === 1 && Array.isArray(args[0])) args = [...args[0]];
  return args.reduce((acc, cur) => acc + cur);
}

console.log(sum([1, 2, 3, 4]));
console.log(sum(1, 2, 3, 4));

// area of a circle object literal; syntax exercise
// radius that we can read or write to and area that is read only

const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

console.log(circle.area);
circle.radius = 2;
console.log(circle.area);

// error handling exercise
// try catch method and throwing exceptions
function countOccurances(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error("This is not an array ");
  }
  return array.reduce((acc, cur) => {
    return (acc += cur === searchElement ? 1 : 0);
  }, 0);
}

try {
  console.log(countOccurances(1, 2));
} catch (e) {
  console.log(e.message);
}
