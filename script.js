"use strict";

// const dolphins = 96 + 108 + 89;
// const koalas = 88 + 91 + 110;
// const scoreDolphins = dolphins / 3;
// const scoreKoalas = koalas / 3;
// console.log(scoreKoalas, scoreDolphins);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("koalas wins the trophy");
// } else {
//   console.log("Both team wins");
// }
// const bill = 1400;

// let tip;
// bill >= 50 && bill <= 300 ? (tip = bill * 0.15) : (tip = bill * 0.2);
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );
function makeJuice(a, b) {
  const juice = `hello ${a} and ${b}`;
  return juice;
}
console.log(makeJuice(14, 30));
console.log(makeJuice(0, 9));
console.log("hello world");
function calAge(birthyear) {
  return 2024 - birthyear;
}
const hello = calAge(1987);
console.log(hello);
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;

  return `${firstName} retires in  year ${birthYear + retirement} `;
};

const yearsleft = yearsUntilRetirement(1987, "kazuki");
console.log(yearsleft);

function cutFruit(fruit) {
  return fruit ^ 3;
}

function makeJuice(apple, orange) {
  const applePieces = cutFruit(apple);
  const orangePieces = cutFruit(orange);
  return `make juice with ${applePieces} apple and ${orangePieces} orange`;
}
console.log(makeJuice(20, 10));

const calcAverage = (a, b, c) => (a + b + c) / 3;
let scoreDolphins = calcAverage(40, 57, 56);
let scoreKoalas = calcAverage(40, 57, 776);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log("heolllllloooo");
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log("hsudjhj");
  } else {
    console.log("yu9388489030");
  }
};
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(400, 350);
const temitope = 90000;
const moji = 545;
checkWinner(temitope, moji);
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("No team wins...");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);
function makeSoup(vegetable, pepper) {
  const soup = vegetable + pepper;
  return soup;
}
console.log(makeSoup(5, 8));
