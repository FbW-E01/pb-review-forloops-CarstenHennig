// # Review 4 - For loops

// NOTE! Pay close attention to creating code with good and consistent code style.

// Use the variable "i" for all your loops. That variable should *not* be accessible outside the loop. Always use a for loop.

// 1. Make a loop that prints the numbers from 0 to 10.
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// 2. Make a loop that prints the numbers from 10 to 20.
for (let i = 10; i <= 20; i++) {
  console.log(i);
}

// 3. Make a loop that prints the numbers from -10 to 10.
for (let i = -10; i <= 10; i++) {
  console.log(i);
}

// 4. Make a loop that prints the numbers from 10 to -10.
for (let i = 10; i >= -10; i--) {
  console.log(i);
}

// 5. Make a string. Then, make a loop that prints all the individual characters of that string.
let myString = "This is a string that displays every character";
for (let i = 0; i < myString.length; i++) {
  console.log(myString[i]);
}

// 6. Make an array with 5 items. Then, make a loop that prints all the individual items of that array.
let myFirstArray = ["One", "Two", "Three", "Four", "Five"];
for (let i = 0; i < myFirstArray.length; i++) {
  console.log(myFirstArray[i]);
}

// 7. Make an array with 6 items. Then, make a loop that prints every second item of that array.
let mySecondArray = ["One", "Two", "Three", "Four", "Five", "Six"];
for (let i = 0; i < mySecondArray.length; i += 2) {
  console.log(mySecondArray[i]);
}

// 8. Make an array with 6 items. Then, make a loop that prints every third item of that array.
let myThirdArray = ["One", "Two", "Three", "Four", "Five", "Six"];
for (let i = 2; i < myThirdArray.length; i += 3) {
  console.log(myThirdArray[i]);
}

// 9. Make an array with 10 items. Then, make a loop that prints every third item of that array starting from the 2nd.
let myFourthArray = [
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
];
for (let i = 1; i < myFourthArray.length; i += 3) {
  console.log(myFourthArray[i]);
}

// 10. Make an array with 7 objects. Each objects should have a property called counter.
// Create a loop that prints only the counter value of each object.
let myFifthArray = [
  { counter: 0 },
  { counter: 1 },
  { counter: 2 },
  { counter: 3 },
  { counter: 4 },
  { counter: 5 },
  { counter: 6 },
  { counter: 7 },
];
for (let i = 0; i < myFifthArray.length; i++) {
  console.log(myFifthArray[i].counter);
}

// 11. Save a random whole number between 0 and 100 to a variable.
// Then print all numbers from 0 to 100 and as soon as you reach the random number you created, stop your loop.
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
for (let i = 0; i < 100; i++) {
  if (randomNumber === i) {
    break;
  }
  console.log(i);
}
