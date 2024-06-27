"use strict";
function a() {
  console.log("we are good");
}
let ade = function ben() {
  console.log("function expression");
};
let d = function (param1, param2) {
  console.log(`it will throw syntax error ${param1} times`);
};
d(6);
ade();
