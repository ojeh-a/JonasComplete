"use strict";
function a() {
  console.log("we are good");
}
let ade = function ben() {
  console.log("function expression");
};
let d = function () {
  console.log("it will throw syntax error");
};
d();
ade();
