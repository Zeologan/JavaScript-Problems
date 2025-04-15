// Common Js 

// const prompt = require('prompt-sync')();  // Notice the extra parentheses ()
// const userInput = prompt('Enter Your Wish: ');
// console.log(userInput);

// Es Module 
import PromptSync from "prompt-sync";
const prompt = PromptSync();

const userInput = prompt('Enter Your Wish..');
console.log(userInput);