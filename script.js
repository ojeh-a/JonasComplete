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

console.log(hoist);
var hoist = "hoisting";
