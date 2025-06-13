// console.log("Hello, World!");
// console.warn("Hello, World!");
// console.error("Hello, World!");
// test;
var greeting = "Hello, World!";

// console.log(greeting);

let deliveryPrice = 20.5;

// console.log(deliveryPrice);

const discount = 10;
// const discounT = 30;

// console.log(discount);

// ვამოწმებთ ჯამური ფასი არის თუ არა 200-ზე მეტი
deliveryPrice = 10;
/*
discount = 10;
console.log(deliveryPrice);
console.log(discount);
console.log()
*/

const myNumber = 100;
// const myString = 'Hello, World!';

const myString2 = "100";
const myString3 = `Hello, World!`;

const myBoolean = true;
const myBoolean2 = false;

let totalPrice;
let totalPrice1 = undefined;
// #password   ->  #Password
let passwordInputElement = null;

// console.log(typeof passwordInputElement); //object
// console.log(typeof totalPrice);

totalPrice = 100;

// passwordInputElement = document.querySelector("#password");

// NaN - Not a Number
// console.log(typeof totalPrice);

totalPrice = "test";
// console.log(typeof totalPrice);

const productPrice = 100;
const deliveryPrice1 = 20;
const discount1 = 10;

// addition
const totalPrice2 = productPrice + deliveryPrice1;
console.log(totalPrice2);
// subtraction
const discountedPrice = totalPrice2 - discount1;
console.log(discountedPrice);

const productQ = 5;
// multiplication
const productTotalPrice = productQ * productPrice;

// price = 100 * 5

console.log(productTotalPrice);

// division
const pricePerItem = productTotalPrice / productQ;
console.log(pricePerItem);

// remainder
const remainder = 100 % 9;
console.log(remainder);

//  string concatenation
const userName = "John";
const userAge = 25;
const userInfo = "User name is " + userName + " and age is " + userAge;
console.log(userInfo);
// template literals
const userInfo2 = `User name is ${userName} and age is ${userAge}`;
console.log(userInfo2);
// age === 20 ?
