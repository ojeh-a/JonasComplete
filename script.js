"use strict";

document.getElementById("btn").addEventListener("click", () => {
  const textElement = document.querySelector(".text");
  const currColour = textElement.style.backgroundColor;
  textElement.style.backgroundColor = currColour === "red" ? "blue" : "red";

  const currTextColor = textElement.style.color;
  textElement.style.color = currTextColor === "white" ? "black" : "white";
});
const head1 = document.querySelector(".header");
console.log(head1);
console.log("hello");
head1.style.color = "red";

const allItems = document.querySelectorAll(".list-item");
for (let i = 0; i < allItems.length; i++) {
  allItems[i].style.color = "green";
  allItems[i].style.backgroundColor = "black";
  allItems[i].style.border = "white 1px solid";
  allItems[i].style.borderRadius = "7px";
}
