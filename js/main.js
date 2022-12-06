var elForm = document.querySelector(".js-form");
var elArr = document.querySelector(".js-array");
var elInput1 = document.querySelector(".js-input1");
var elInput2 = document.querySelector(".js-input2");
var elStartBtn = document.querySelector(".js-start-btn");
var elEndBtn = document.querySelector(".js-end-btn");

var cars = ["KIA", " Tesla", " McLaren", " Ferrari", " Lamborghini"];

cars.length === 0
  ? (elArr.textContent = "Mashinalar tugadi:(")
  : (elArr.textContent = cars);
elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  elArr.textContent = cars;

  if (elInput1.value !== "") {
    cars.unshift(` ${elInput1.value}`);
  }
  if (elInput2.value !== "") {
    cars.push(` ${elInput2.value}`);
    return;
  }
});

elStartBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  cars.shift();

  elArr.textContent = cars;
  return;
});

elEndBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  cars.pop();

  elArr.textContent = cars;
  return;
});

// --------------------------------- EDABIT QUIZS -----------------------------------------------
// --------------------------------- MASALA 1 ---------------------------------------------------

// function addition(a, b) {
//   return a + b;
// }

// --------------------------------- MASALA 2 ---------------------------------------------------

// function convert(minutes) {
// 	return minutes * 60;
// }

// --------------------------------- MASALA 3 ---------------------------------------------------

// function addition(num) {
// 	return num + 1;
// }

// --------------------------------- MASALA 4 ---------------------------------------------------

// function triArea(base, height) {
// 	return (base * height) / 2;
// }

// --------------------------------- MASALA 5 ---------------------------------------------------

// function calcAge(age) {
// 	return age * 365;
// }

// --------------------------------- MASALA 6 ---------------------------------------------------

// function remainder(x, y) {
// 	return x % y;
// }

// --------------------------------- MASALA 7 ---------------------------------------------------

// function footballPoints(wins, draws, losses) {
//   return wins * 3 + draws * 1;
//   }

// --------------------------------- MASALA 8 ---------------------------------------------------

// function points(twoPointers, threePointers) {
// 	return twoPointers * 2 + threePointers * 3;
// }

// --------------------------------- MASALA 9 ---------------------------------------------------

// function lessThan100(a, b) {
// 	return (a + b) < 100;
// }

// --------------------------------- MASALA 10 ---------------------------------------------------

// function animals(chickens, cows, pigs) {
// 	return chickens * 2 + cows * 4 + pigs * 4;
// }
