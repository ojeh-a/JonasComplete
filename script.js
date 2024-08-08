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
