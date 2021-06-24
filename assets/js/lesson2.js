// JavaScript Document

document.getElementById('mainDiv').innerHTML = "Hello, World!";
document.write('This is a test');

//alert('Hello there!');
document.write('<br> Another test');

console.log('Hello from the console!');


var num1, num2, sum;
num1 = 10;
num2 = 5;
sum = num1 + num2;
console.log(sum);


var text1 = "This one doesn't have spaces";
var text2 = "This one has spaces";
var text3 = "This one has spaces          inside string literal."

console.log(text1);
console.log(text2);
console.log(text3);


document.getElementById("mainDiv")
  .innerHTML = "Text Changed!";


function someFunction() {
  console.log("This is a statement.");
  console.log('So is this one.');
}
someFunction();


for (var i = 0; i < 3; i++) {
  console.log("Inside Loop: " + i);
}

console.log("Outside Loop: " + i);

for (let j = 0; j < 3; j++) {
  console.log("Inside Loop: " + j);
}

//console.log("Outside Loop: " + j);


const PI = 3.14159;
console.log(PI);
//PI = 22/7;


let res = 8 * 90;
console.log(res);


let res2 = 91 % 3;
console.log(res2);


let user = "Joe";
let greeting = "Good Afternoon ";
let phrase = greeting + user;
let testPhrase = `${greeting} greeting ${user}`
console.log(phrase);
console.log(testPhrase);


var pName = "John";
let pName2 = "Bob";
pName = "Sue";
pName2 = "Kate";
console.log(pName);
console.log(pName2);

var pName = "Frank";
console.log(pName);
pName2 = "Dennis";
console.log(pName2);


let x = 6;
console.log(x != 8);
console.log(x === 5);
console.log(x >= 8);
console.log(x % 5 == 0 ? "Multiple of 5" : "Not Multiple of 5");


let windStrength = 4;
let temperature = 25;
if (windStrength <= 4 && temperature >= 20) {
  console.log("Perfect weather for sailing!");
} else {
  console.log("You'd better stay home!");
}


let studentAge = 25;
let numALevels = 1;
if (numALevels >= 2 || studentAge >= 25) {
  console.log("Welcome to University!");
} else {
  console.log("You do not meet entry requirements.");
}


let numFish = 20;
let gramsOfFood = numFish > 12 ? 15 : 10;
console.log(gramsOfFood);


let pizzaChoice = 3;


if (pizzaChoice == 1) {
  console.log("Margerita");
} else if (pizzaChoice == 2) {
  console.log("Funghi");
} else if (pizzaChoice == 3) {
  console.log("Pepperoni");
} else if (pizzaChoice == 4) {
  console.log("Capricciosa");
} else {
  console.log("Invalid selection")
}


switch (pizzaChoice) {
  case 1:
    console.log("Margerita");
    break;
  case 2:
    console.log("Funghi");
    break;
  case 3:
    console.log("Pepperoni");
    break;
  case 4:
    console.log("Capricciosa");
    break;
  default:
    console.log("Invalid pizza selected");
}


let channel = 111;
switch (channel) {
  case 105:
    console.log("Smash TV");
    break;
  case 110:
    console.log("TVM HD");
    break;
  case 111:
    console.log("TVM2 HD");
    break;
  case 113:
    console.log("ONE HD");
    break;
  case 114:
    console.log("Xejk");
    break;
  case 115:
    console.log("NET TV HD");
    break;
}


let spaPackage = "Platinum";
switch (spaPackage) {
  case "Platinum":
    console.log("Two free weekly full-body massages");
  case "Gold":
    console.log("24/7 access to indoor and outdoor pools");
  case "Silver":
    console.log("Use of jacuzzi and aromatherapy rooms");
  case "Bronze":
    console.log("Full access to gym facilities");
    break;
  default:
    console.log("Invalid package selected");
}


