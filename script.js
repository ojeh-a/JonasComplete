// "use strict";

// function makeJuice(a, b) {
//   const juice = `hello ${a} and ${b}`;
//   return juice;
// }
// console.log(makeJuice(14, 30));
// console.log(makeJuice(0, 9));
// console.log("hello world");
// function calAge(birthyear) {
//   return 2024 - birthyear;
// }
// const hello = calAge(1987);
// console.log(hello);
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;

//   return `${firstName} retires in  year ${birthYear + retirement} `;
// };

// const yearsleft = yearsUntilRetirement(1987, "kazuki");
// console.log(yearsleft);

// function cutFruit(fruit) {
//   return fruit ^ 3;
// }

// function makeJuice(apple, orange) {
//   const applePieces = cutFruit(apple);
//   const orangePieces = cutFruit(orange);
//   return `make juice with ${applePieces} apple and ${orangePieces} orange`;
// }
// console.log(makeJuice(20, 10));

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// let scoreDolphins = calcAverage(40, 57, 56);
// let scoreKoalas = calcAverage(40, 57, 776);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log("heolllllloooo");
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log("hsudjhj");
//   } else {
//     console.log("yu9388489030");
//   }
// };
// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(400, 350);
// const temitope = 90000;
// const moji = 545;
// checkWinner(temitope, moji);
// // const calcAverage = (a, b, c) => (a + b + c) / 3;
// // console.log(calcAverage(3, 4, 5));

// // let scoreDolphins = calcAverage(44, 23, 71);
// // let scoreKoalas = calcAverage(65, 54, 49);
// // console.log(scoreDolphins, scoreKoalas);

// // const checkWinner = function (avgDolphins, avgKoalas) {
// //   if (avgDolphins >= 2 * avgKoalas) {
// //     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
// //   } else if (avgKoalas >= 2 * avgDolphins) {
// //     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
// //   } else {
// //     console.log("No team wins...");
// //   }
// // };

// // checkWinner(scoreDolphins, scoreKoalas);
// function makeSoup(vegetable, pepper) {
//   const soup = vegetable + pepper;
//   return soup;
// }
// console.log(makeSoup(5, 8));
// const coach = {
//   firstName: "Ayodele",
//   lastName: "Agbowuro",
//   age: 2024 - 1987,
//   birthYear: 2019,
//   profession: "teacher",
//   church: "JesusLink",
//   friends: ["Afuye", "Salomon", "Tobago"],
//   hasLicense: true,
//   calAge: function () {
//     return 2024 - this.birthYear;
//   },
//   getSummary: function () {
//     this.summary = `${this.firstName} is a ${this.calAge()} years old ${
//       this.profession
//     } and he ${this.age >= 18 ? `has` : `has no`} drivers license`;
//     return this.summary;
//   },
// };
// console.log(coach.getSummary());
// console.log(coach.calAge());
// console.log(coach["calAge()"]);

// // const what = prompt("what is your ...... age?, lastName?");
// // console.log(coach[what]);
// // if (coach[what]) {
// //   console.log(coach[what]);
// // } else {
// //   console.log("you dey whine? put better value abeg");
// // }
// // console.log(
// //   `${coach.firstName} has ${coach.friends.length} best friends, but his best friend is ${coach.friends[0]}`
// // );
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// const john = {
//   fullName: "John Smith",
//   mass: 97,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// john.calcBMI();
// console.log(john.bmi);
// console.log(mark.calcBMI());
// const markBMI = mark.calcBMI();
// const johnBMI = john.calcBMI();
// const result = `${
//   markBMI < johnBMI
//     ? `${john.fullName}'s BMI (${johnBMI} ) is higher than ${mark.fullName}'s (${markBMI})!`
//     : `${mark.fullName}'s BMI (${markBMI}) is higher than ${john.fullName}'s (${johnBMI} )!`
// }`;
// console.log(result);
// console.log(markBMI);
// console.log(johnBMI);
// for (let rep = 1; rep <= 20; rep++) {
//   // console.log(`we can do ${rep} pushup`);
// }
// for (let i = 0; i <= 5; i++) {
//   // console.log(`helooo ${i} times`);
// }

// const coachKazuki = [
//   "Ayodele",
//   "Agbowuro",
//   2024 - 1987,
//   "teacher",
//   "JesusLink",
//   ["Afuye", "Salomon", "Tobago"],
//   true,
// ];
// for (let i = 0; i < coachKazuki.length; i++) {
//   console.log(coachKazuki[i]);
// }
// const years = [1987, 1984, 2004, 2015, 2021];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2023 - years[i]);
// }
// console.log(ages);
// const coachKazuki2 = [
//   "Ayodele",
//   "Agbowuro",
//   2024 - 1987,
//   "teacher",
//   "JesusLink",
//   ["Afuye", "Salomon", "Tobago"],
//   true,
// ];

// for (let i = coachKazuki2.length - 1; i >= 0; i--) {
//   console.log(i, coachKazuki2[i]);
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`you rolled ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log(`You rolled a 6.....Loop terminated`);
//   }
// }
// const calcTip = function (bill) {
//   return bill <= 50 && bill >= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 28, 77, 66, 23, 67, 65, 56, 44];
// const tips = [];
// const total = [];
// for (let i = 0; i < bills.length; i++) {
//   let tip = calcTip(bills[i]);
//   tips.push(tip);
//   total.push(tips[i] + bills[i]);
// }
// console.log(tips, bills, total);

// function getMiddleString(str) {
//   let middle = Math.floor(str.length / 2);
//   return str.length % 2 === 0
//     ? str.slice(middle - 1, middle + 1)
//     : str.charAt(middle);
// }
// console.log(getMiddleString("rice"));
// console.log(getMiddleString("testing"));
// console.log(getMiddleString("middle"));
// console.log(getMiddleString("henry"));
// console.log(getMiddleString("a"));
// // console.log(getMiddleString(true));
console.log("hello ");
const calculateAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    // sum = sum + arr[i];
  }
  return sum / arr.length;
};
const numbers = [42, 34, 34, 33, 22, 1];
console.log(calculateAverage([23, 24, 22]));
console.log(calculateAverage(numbers));
const num = Math.trunc(Math.random() * 40) + 1;
console.log(num);
const sumArray = function (arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumArray([10, 30, 40, 45]));

const btn1 = document.querySelector(".button-one");
const btn2 = document.querySelector(".button-two");
const btn3 = document.querySelector(".button-three");
const images = document.querySelectorAll(".image--class");

const textElement = document.querySelector(".one");

btn1.addEventListener("click", function () {
  textElement.textContent = "Button One Clicked";
  textElement.style.backgroundColor = "purple";
  images.forEach((img, index) => img.classList.toggle("hidden", index !== 0));
});

btn2.addEventListener("click", function () {
  textElement.textContent = "Button Two Clicked";
  textElement.style.backgroundColor = "yellow";
  images.forEach((img, index) => img.classList.toggle("hidden", index !== 1));
});

btn3.addEventListener("click", function () {
  textElement.textContent = "Button Three Clicked";
  textElement.style.backgroundColor = "red";
  images.forEach((img, index) => img.classList.toggle("hidden", index !== 2));
});
function gettingAge(birthYear) {
  const age = 2024 - birthYear;
  return age;
}
console.log(gettingAge(1990));
const shop = {
  name: "Mr seun ",
  location: " 1 jobate, ori-okuta",
  categories: ["ball", "provision", "POS"],
  starterMenu: ["chelsea", "arsenal", "barcelona"],
  mainMenu: ["London", "Paris", "Madrid"],
};
// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(gettingAge(1798));

let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2));
console.log(arr);
console.log(arr.slice(2, 4));
//the end parameter is not included
//negative takes from the end of the array
console.log(arr.slice(0, -1));

//splice mutate the original array
console.log(arr.splice(-1));

console.log(arr);

//reverse mutate the original array
const arr2 = [2, "t", 4, 6, "h"];
console.log(arr2);
console.log(arr2.reverse());
console.log(arr2);
// concat
const el = [...arr, ...arr2];
console.log(arr.concat(arr2));
console.log(el.join("+"));
const arr3 = [3, 4, 5, 6, 7, 8, 9, 36];
console.log(arr3[1]);
console.log(arr3.at(3));
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(arr3.length / 2));
const movements = [200, 389, 123, -427, 748, 23, -342, -104];
//FOR OF LOOP
for (const movement of movements) {
  if (movement > 0) {
    console.log(`you deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
//FOREACH LOOP
movements.forEach(function (el) {
  console.log(el * 2);
});
