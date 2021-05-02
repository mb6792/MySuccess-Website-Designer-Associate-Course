let x = 5;
console.log(x != 8); // true
console.log(x === 5); // true
console.log(x >= 8); // false
console.log(x % 5 == 0 ? "Multiple of 5" : "Not Multiple of 5"); // Multiple of 5


let age = 21;
if (age >= 18) {
    console.log("You can drive");
} else {
    console.log("You cannot drive");
}

let windStrength = 4;
let temperature = 15;
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
console.log(gramsOfFood); // 15


let hour = 10;
let greeting;
if (hour < 18) {
    greeting = "Good Day";
} else {
    greeting = "Good Evening";
}

console.log(greeting)


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

document.getElementById("btnCalc").addEventListener("click", function (e) {
    e.preventDefault();
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let op = document.getElementById("op").value;
    let result;
    if (op === "+") {
        result = num1 + num2;
    } else if (op === "-") {
        result = num1 - num2;
    } else if (op === "*") {
        result = num1 * num2;
    } else if (op === "/") {
        result = num1 / num2;
    }
    document.getElementById("result").innerHTML = result;
});


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


let spaPackage = "Silver";
switch (spaPackage) {
    case "Platinum":
        console.log("Two free weekly full-body massages");
    case "Gold":
        console.log("24/7 access to indoor and outdoor pools");
    case "Silver":
        console.log("Use of jacuzzi and aromatherapy rooms")
    case "Bronze":
        console.log("Full access to gym facilities");
        break;
    default:
        console.log("Invalid package selected");
}


for (let i = 0; i < 10; i++) {
    console.log("Iteration number " + i);
}

const names = ["Joe", "Bob", "Sue", "Kate"];
for (const name of names) {
    console.log(name);
}


const person = {name: "Joe", surname: "Doe", age: 42, gender: "M"};
for (x in person) {
    console.log(x + ": " + person[x]);
}

let j = 0;
while (j < 10) {
    console.log("while iteration number " + j);
    j++;
}


let k = 0;
do {
    console.log("do-while iteration number " + k);
    k++;
} while (k < 10);


let hoursAvailable = 6;
let catchLimit = 3;
let fishCaught = 0;
for (let h = 0; h < hoursAvailable; h++) {
    fishCaught++;
    console.log("Hour " + h + ", Fish: " + fishCaught);
    if (fishCaught === catchLimit) break;
}


const numFloors = 15;
for (let f = 0; f <= numFloors; f++) {
    if (f === 13) continue;
    console.log("Floor " + f);
}
