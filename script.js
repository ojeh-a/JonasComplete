function maker() {
  return new Promise(function (resolve, reject) {
    reject("Good");
  });
}

function onSuccessful() {
  console.log("Its good");
}
function onFailure() {
  console.log("E don fail");
}
maker().then(onSuccessful, onFailure);
