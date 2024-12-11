console.log("mary the lover girl");
console.log("hellloooooo");
console.log(89);
console.log("60");
const loverGirlName = "mary";
console.log(loverGirlName);

const wife = "Mary";
console.log(wife);
let myAddress = "25 lawani street idi araba";
console.log(myAddress);
let firstName = "Ayodele";
const bestFriend = `Sule Maito`;
console.log(bestFriend);
console.log(
  `My name is ${firstName}, the name of my best friend is ${bestFriend} and we stay at ${myAddress}`
);
console.log(11 % 7);
console.log(2 === "2");

let now = 2024;
let yearOfBirth = 2006;
let age = now - yearOfBirth;
// let canDrive = age >= 18;
if (age > 18) {
  const validSince = age - 18;
  console.log(
    `She is ready to get her licence......... She's been ready since ${validSince} years ago `
  );
} else if (age === 18) {
  console.log(
    "Happy birthday ........She is ready to get her licence........."
  );
} else {
  const yearsRemain = 18 - age;
  console.log(
    `You're too young darling, wait for another ${yearsRemain} years`
  );
}
console.log(age);

let currentAge = 0;
// if (currentAge <= 14 || currentAge >= 65) {
//   console.log("drink water");
// } else if (currentAge > 14 && currentAge < 22) {
//   console.log("drink juice");
// } else if (currentAge > 21 && currentAge < 46) {
//   console.log("Drink alcohol");
// } else {
//   console.log("we no send you");
// }
currentAge <= 14 || currentAge >= 65
  ? console.log("drink water")
  : currentAge > 14 && currentAge < 22
  ? console.log("drink juice")
  : console.log("hello");

church = "cms";
church === "rccg"
  ? console.log("She is from redeem")
  : church === "cac"
  ? console.log("she is from cac")
  : console.log("baga lizard");
