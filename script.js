"use strict";
let age = 12;
if (age >= 18) {
  console.log("Tope is old enough to drive");
} else {
  const underAge = 18 - age;
  console.log(`
    Ouch!
    Too young. 
    Wait for next ${underAge} years`);
}
let globalScope = "global";
function funSco() {
  let funScope = "funct";
  if (funScope) {
    let blcScop = "block";
    console.log(globalScope);
    console.log(blcScop);
  }
  console.log(funScope);
}
funSco();
console.log(globalScope);
// console.log(blcScop);

let count = 0;
function handleIncrease() {
  ++count;
  document.querySelector(".counter").innerText = count;
}
function handleDecrease() {
  --count;
  document.querySelector(".counter").innerHTML = count;
}
function handleReset() {
  count = 0;
  document.querySelector(".counter").innerHTML = count;
}
let className = count > 0 ? "positive" : count < 0 ? "negative" : "counter";

document.querySelector(".counter").className = className;

console.log(x);
console.log(hoist);
var x = 9;
var hoist = () => {
  let ans = a + b;
  return ans;
};
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const binary = arr.map((x) => x.toString(2));
console.log(binary);

const triple = arr.map((x) => x * 3);
console.log(triple);

const doubleArr = arr.map((x) => x * 2);
console.log(doubleArr);

const morethan5 = arr.filter((x) => x > 5);
console.log(morethan5);

const even = arr.filter((x) => x % 2 === 0);
console.log(even);

const odd = arr.filter((x) => x % 2 === 1);
console.log(odd);

const squareOdd = odd.map((x) => x ** 2);
console.log(squareOdd);
const yeild = 86;

const someNumbers = [2, 3, 4, 1, 5];

console.log(someNumbers.filter((x) => x > 4));

const fruits = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "kiwi", color: "green" },
  { name: "orange", color: "orange" },
  { name: "pineapple", color: "yellow" },
];

const findYellowFruit = fruits.filter((fruit) => fruit.color === "yellow");
console.log(findYellowFruit);

function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = " ";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

const senten = "am a Coach";
console.log(findLongestWord(senten));
