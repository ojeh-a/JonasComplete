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
const age = 12;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log(`He is ${age}, so ,he can drive🚘`);
} else if (!isOldEnough) {
  console.log(
    `He is ${age}, so ,he cant drive yet ❌..... Wait till ${
      18 - age
    } years time 😢`
  );
} else if (age > 75) {
  console.log(`baba is ${age},he cannot drive`);
}

const hasLicense = true;
const hasEye = false;
const knowRoad = true;
if (hasEye && hasLicense && knowRoad) {
  console.log("Caleb can drive");
} else {
  console.log("Let another person drive");
}

const isNigerian = false;
const isGhanian = false;
if (isGhanian || isNigerian) {
  console.log("He is African");
} else {
  console.log("we no sabi your papa");
}
hasEye && knowRoad
  ? console.log("hi")
  : isGhanian
  ? console.log("na Ghanian")
  : console.log("whats up");
const bill = 60;
const tip = bill >= 200 && bill <= 600 ? bill * 0.1 : bill * 0.25;
console.log(tip);
