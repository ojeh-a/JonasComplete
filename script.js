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
