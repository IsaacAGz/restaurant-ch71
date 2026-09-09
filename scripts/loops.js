// Session 4 for loops

console.log("hello world!");

//document.write("<p> 2 x 1 = 2 </p>");
//document.write("<p> 2 x 2 = 4 </p>");
//document.write("<p> 2 x 3 = 6 </p>");

//document.write("<p>===========Using a for loop===========</p>");

/*
const NUM = 2;
for (let i = 0 ; i <= 10; i++) {
    document.write(`<p>${NUM} x ${i} = ${NUM * i}</p>`);
}
*/

// Count by 1

for (let i = 0; i < 5; i += 2) {
    console.log(i);
}

// Count by 5

for (let i = 0; i <= 25; i += 5) {
    console.log(i);
}

// Challenge 1 - Warm up
console.log("=========== Challenge 1 ===========");
const CHALLENGE = 5;

for  (let i = 0; i <= 10; i++) {
    console.log(`${CHALLENGE} x ${i} = ${CHALLENGE * i}`);
}

// Arrays

let temps = [30, 45, 60, 50];

console.log(`Temperature at index 2 is: ${temps[2]}`);
console.log(`Temperature at index 0 is: ${temps[0]}`);

for (let i = 0; i < temps.length; i++) {
    console.log(`Day ${i+1}: ${temps[i]}C`);
}

// The accumulator pattern

let total = 0;

for (let i = 0 ; i < temps.length; i ++) {
    total = total + temps[i];
}

console.log(total);

let average = total / temps.length;

console.log(average.toFixed(2));

// Two parallel arrays

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const SALES = [320, 410, 290, 505, 480, 620, 710];

if (DAYS.length == SALES.length) {
    for (let i = 0; i < DAYS.length; i++) {
        console.log(DAYS[i] + ": $" + SALES[i])
    }
}

// Challenge 2 - Array + Accumulator
console.log("=============== Challenge 2 ===============");
const MENUPRICES = [12.50, 8.00, 15.75, 6.25, 20.00];

let totalCH2 = 0;
let averageCH2 = 0;


for (let i = 0; i < MENUPRICES.length; i++) {
    totalCH2 = totalCH2 + MENUPRICES[i];
}

averageCH2 = totalCH2 / MENUPRICES.length;

console.log(`Total: ${totalCH2.toFixed(2)}`);
console.log(`Average: ${averageCH2.toFixed(2)}`);

// Chalenge 3 - Loop + If
console.log("=============== Challenge 3 ===============");

if (DAYS.length == SALES.length) {
    for (let i = 0; i < DAYS.length; i++) {
        if (SALES[i] > 400) {
            console.log(DAYS[i] + ": $" + SALES[i])
        }
    }
}

// Building output for the page
let output = "";

for (let i = 0; i < DAYS.length; i++) {
    output += `<p> ${DAYS[i]}: $${SALES[i]} </p><br/>`
}

document.getElementById("sales").innerHTML = output;








