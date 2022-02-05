"use strict";

const one = (document.getElementsByClassName("one").value = "1");
const two = (document.getElementsByClassName("two").value = "2");
const three = (document.getElementsByClassName("three").value = "3");
const four = (document.getElementsByClassName("four").value = "4");
const five = (document.getElementsByClassName("five").value = "5");
const six = (document.getElementsByClassName("six").value = "6");
const seven = (document.getElementsByClassName("seven").value = "7");
const eight = (document.getElementsByClassName("eight").value = "8");
const nine = (document.getElementsByClassName("nine").value = "9");
let inputField = document.getElementsByClassName("inputField").value;

let addition = (numberOne, numberTwo) => {
  return numberOne + numberTwo;
};

let subtraction = (numberOne, numberTwo) => {
  return numberOne - numberTwo;
};

let division = (numberOne, numberTwo) => {
  return numberOne / numberTwo;
};

let multiplication = (numberOne, numberTwo) => {
  return numberOne * numberTwo;
};
