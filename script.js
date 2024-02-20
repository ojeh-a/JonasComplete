const massMark = 78;
const heightMark = 169;
const massJohn = 92;
const heightJohn = 195;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn, BMIMark);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
