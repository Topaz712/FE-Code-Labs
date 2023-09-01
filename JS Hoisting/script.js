/* Dev Dreamer #40 understanding JS Hoisting
Lesson Tasks */

/*Task 1)
What is the expected outcome of the following:

book('The Magicians Nephew');

function book(title) {
  console.log('The book is called ${title}`);
}
---> The outcome will be 
"The book is called The Magicians Nephew"
it works becuase function declarations get hoisted
*/

/*Task 2)
What is the expected outcome of the following? How would you fix this?

console.log(book);

let book = 'The Silver Chair';

---> The expected outcome is an error, Initialisations don't get hoisted, only declarations are hoisted therefore console logging the variable book first, will result in reference error. 
---> I would fix this by creating the variable first and the using console.log(); after

let book = 'The Silver Chair';
console.log(book);
*/