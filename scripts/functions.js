console.log("Functions JS");

function login(){
    console.log("Welcome to the system");
}

login();

function logout(user){
    console.log("Goodbye " + user + " see you later.");
}

logout("Isaac");

function gradeExam(student, correctItems, points) {
    let totalPoints = correctItems * points;
    console.log(`${student} scored ${totalPoints} total points`);
}

gradeExam("Isaac", 10, 10);
gradeExam("Larry", 100, 2);

function doubleNumber(number) {
    return number * 2;
}

let userNumber = 3;

console.log(doubleNumber(userNumber));

function add(num1, num2) {
    return num1 + num2
}

let total = add(5, 3);
console.log(`The result is ${total}`);

function applyDiscount(price, discountPercent) {
    let discount = price * discountPercent;
    return price - discount;
}

function addDeliveryFee(total, fee) {
    return total + fee;
}

let originalPrice = 100;
let priceAfterDiscount = applyDiscount(originalPrice, .05);
let priceAfterDiscountAndFee = addDeliveryFee(priceAfterDiscount, 9.99);

console.log(`Pirce after fee and discount: $${priceAfterDiscountAndFee}.`);

function combineNames(name1 ="Unknown", name2="Unkown") {

    return (name1 + name2);
}

console.log(combineNames("Larry", "Garry"));
console.log(combineNames());

function convertToSeconds(minutes=0) {
    return minutes * 60;
}   

console.log(`30 minutes is equal to ${convertToSeconds(30)} seconds.`);
console.log(`0 minutes is equal to ${convertToSeconds()} seconds.`);
console.log(`5 minutes is equal to ${convertToSeconds(5)} seconds.`);

function addWrong(num1, num2) {
    console.log(num1 + num2);
}

let result1 = addWrong(4, 6);
console.log(result1);

function addCorrect(num1, num2) {
    return num1 + num2;
}

let result2 = addCorrect(4,6);
console.log(result2);

//Global vs local

let globalVar = "I exist everywhere";

function showScope() {
    let localVar = "I only exist inside this function";
    console.log(globalVar);
    console.log(localVar);
}

showScope();
console.log(globalVar);
//console.log(localVar);

//Write two functions: one that calculates a price with tax and one that 
// calculates a tip on that total. Call them in sequence so the result of 
// the first goes into the second. 
// Print the original price, the total with tax, and the tip amount.

function calcTax(price, tax) {
    return price + (price * tax);
}
function calcTip(price, tip) {
    return price + (price * tip);
}

let priceWithTax = calcTax(120.00, .09);
let priceWithTip = calcTip(priceWithTax, .15);

console.log(`Price with Tax: ${priceWithTax.toFixed(2)}`);
console.log(`Price with Tip: ${priceWithTip.toFixed(2)}`);

function rectArea(width, height) {
    return width * height;
}

function rectPerimeter(width, height) {
    return width * 2 + height * 2;
}

let area = rectArea(5, 3);
let perimeter = rectPerimeter(5, 3);

console.log(`Rectangle area is: ${area}\nRectangle perimeter is: ${perimeter}`);

function calculatePaycheck(hoursWorked, hourlyRate) {
    let gross = hoursWorked * hourlyRate;
    let taxes = gross * 0.20;
    return gross - taxes;
}

let paycheck = calculatePaycheck(40, 15);
console.log(`Your paycheckl is : $${paycheck}`);


//Challenge 7 --- Scope problem

let budget = 1000;
function spendMoney(amount) {
    return budget - amount;
}

budget = spendMoney(200);
console.log(`Your budget after speding $200 is $${budget}`);