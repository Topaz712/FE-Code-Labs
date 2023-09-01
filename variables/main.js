let i = 0;
//github tutorial above

//lesson tasks for "Dev Dreamer" hmwk vid class4

/*task 1) <--------
Create three variables in the global scope called firstName, lastName and age, and a function that logs them to the console in the following format e.g. 'John Smith is 25 years old'. 

let firstName = "John";
let lastName = "Smith";
let age = 25;

function person() {
  console.log(`${firstName} ${lastName} is ${age} years old`);
}
person();
*/


/*task 2) <--------
Move the variables into the local scope of the function and add another variable this time called country, add this to our statement '...and lives in England'.

function person() {
  let firstName = "John";
  let lastName = "Smith";
  let age = 25;
  let country = "England";  

  console.log(`${firstName} ${lastName} is ${age} years old and lives in ${country}`);
}
person();
*/


/*task 3) <-------
Outside of the function change the firstName to 'James', did you encounter a problem?
*/

//no I did not encounter a problem because the variable that james was assigned is in the global scope , while the variable for John was assigned in a local scope and is only accesible in the function it was created <--------------------
 let firstName = "James";

function person() {
  const firstName = "John";
  const lastName = "Smith";
  const age = 25;
  const country = "...and lives in England";  
  

  console.log(`${firstName} ${lastName} is ${age} years old ${country}`);
}
person();



/*task 4) <-------
What will the following code return?
*/
//It returns Mario and then Sonic

let game = 'Sonic';

if (true) {
  let game = 'Mario';
  console.log(game);
}
console.log(game);
