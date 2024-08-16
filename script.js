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
