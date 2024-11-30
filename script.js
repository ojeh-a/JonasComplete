"use strict";
const check = document.querySelector(".hello");
console.log(check);
const breakRaw = (raw) => {
  return raw * 4;
};
const maker = (sand, water) => {
  const sandPi = breakRaw(sand);
  const waterPi = breakRaw(water);
  const man = `Man made with ${sandPi} cups of sand and ${waterPi} liters of water`;
  return man;
};
console.log(maker(20, 15));
function mixer(a, b) {
  return a + b;
}
mixer(10, 70);

const thisYear = 2024;
const ageTolu = thisYear - 1990;
console.log(ageTolu);
console.log(typeof thisYear);
let x = 20 * 5;
x *= 2;
console.log(x);
let y = 40 + 20;
y /= 2;
console.log(y);
let z = 50 * 4;
z -= 50;

console.log(z);
const age = 10;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log(`He is ${age}, so ,he can drive`);
} else {
  console.log(
    `He is ${age}, so ,he cant drive yet..... Wait till ${18 - age} years time`
  );
}
