"use strict";
const check = document.querySelector(".hello");
console.log(check);
const maker = (sand, water) => {
  const man = `Man made with ${sand} cups of sand and ${water} liters of water`;
  return man;
};
console.log(maker(20, 15));
