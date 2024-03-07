"use strict";

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
const coach = {
  firstName: "Ayodele",
  lastName: "Agbowuro",
  age: 2024 - 1987,
  birthYear: 2019,
  profession: "teacher",
  church: "JesusLink",
  friends: ["Afuye", "Salomon", "Tobago"],
  hasLicense: true,
  calAge: function () {
    return 2024 - this.birthYear;
  },
  getSummary: function () {
    this.summary = `${this.firstName} is a ${this.calAge()} years old ${
      this.profession
    } and he ${this.age >= 18 ? `has` : `has no`} drivers license`;
    return this.summary;
  },
};
console.log(coach.getSummary());
console.log(coach.calAge());
console.log(coach["calAge()"]);

// const what = prompt("what is your ...... age?, lastName?");
// console.log(coach[what]);
// if (coach[what]) {
//   console.log(coach[what]);
// } else {
//   console.log("you dey whine? put better value abeg");
// }
// console.log(
//   `${coach.firstName} has ${coach.friends.length} best friends, but his best friend is ${coach.friends[0]}`
// );
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 97,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
john.calcBMI();
console.log(john.bmi);
console.log(mark.calcBMI());
const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();
const result = `${
  markBMI < johnBMI
    ? `${john.fullName}'s BMI (${johnBMI} ) is higher than ${mark.fullName}'s (${markBMI})!`
    : `${mark.fullName}'s BMI (${markBMI}) is higher than ${john.fullName}'s (${johnBMI} )!`
}`;
console.log(result);
console.log(markBMI);
console.log(johnBMI);
for (let rep = 1; rep <= 20; rep++) {
  // console.log(`we can do ${rep} pushup`);
}
for (let i = 0; i <= 5; i++) {
  // console.log(`helooo ${i} times`);
}

const coachKazuki = [
  "Ayodele",
  "Agbowuro",
  2024 - 1987,
  "teacher",
  "JesusLink",
  ["Afuye", "Salomon", "Tobago"],
  true,
];
for (let i = 0; i < coachKazuki.length; i++) {
  console.log(coachKazuki[i]);
}
const years = [1987, 1984, 2004, 2015, 2021];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}
console.log(ages);
const coachKazuki2 = [
  "Ayodele",
  "Agbowuro",
  2024 - 1987,
  "teacher",
  "JesusLink",
  ["Afuye", "Salomon", "Tobago"],
  true,
];

for (let i = coachKazuki2.length - 1; i >= 0; i--) {
  console.log(i, coachKazuki2[i]);
}
