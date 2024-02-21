const dolphins = 96 + 108 + 89;
const koalas = 88 + 91 + 110;
const scoreDolphins = dolphins / 3;
const scoreKoalas = koalas / 3;
console.log(scoreKoalas, scoreDolphins);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("koalas wins the trophy");
} else {
  console.log("Both team wins");
}
const bill = 430;

let tip;
bill > 50 && bill <= 300 ? (tip = bill * 0.12) : (tip = bill * 0.2);
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
