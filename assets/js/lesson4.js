document.getElementById('btnCalc').addEventListener("click", function (e) {
  e.preventDefault();

  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let op = document.getElementById("op").value;

  let result;

  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }


  document.getElementById("result").innerHTML = result;
  console.log(result);
});

for (let i = 11; i < 10; i++) {
  console.log("Iteration number " + i);
}


const names = ["Joe", "Bob", "Sue", "Kate"]
const person = {
  name: "Joe",
  surname: "Doe",
  age: 42,
  gender: "M"
}

for (const name of names) {
  console.log(name);
}

for (let x in person) {
  console.log(x + ": " + person[x]);
}

let j = 11;
while (j < 10) {
  console.log("while iteration number " + j);
  j++;
}


let k = 11;
do {
  console.log("do-while iteration number " + k);
  k++;
} while (k < 10);


const numFloors = 15;
for (let f = 0; f <= numFloors; f++) {
  if (f === 13) continue;
  console.log("Floor " + f);
}


let hoursAvailable = 6;
let catchLimit = 3;
let fishCaught = 0;

for (let h = 0; h < hoursAvailable; h++) {
  fishCaught++;
  console.log("Hour " + h + ", Fish: " + fishCaught);
  if (fishCaught === catchLimit) break;
}


console.log(names);
console.log(names.length);
console.log(names.sort());
console.log(names.toString());
console.log(names.join(" and "));


names.pop();
console.log(names);

names.push("Kurt");
console.log(names);


names.shift();
console.log(names);

names.unshift("Joshua");
console.log(names);

let temps =[27.1,26,27.2,25.4,23.1];
temps.forEach(myFunction)
function myFunction(value, index,array){
    console.log(index + " => " + value)
    console.log(array)
}


let doubleTemps = temps.map((value)=> {
    return value * 2
})

console.log(doubleTemps);



