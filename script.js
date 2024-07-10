"use strict";
document.getElementById("btn").addEventListener("click", () => {
  document.querySelector(".text").style.backgroundColor = "red";
});
const head1 = document.querySelector(".header");
console.log(head1);
console.log("hello");
head1.style.color = "red";

const allItems = document.querySelectorAll(".list-item");
for (let i = 0; i < allItems.length; i++) {
  allItems[i].style.fontSize = "0.8rem";
  allItems[i].style.color = "powderblue";
  allItems[i].style.backgroundColor = "white";
}
