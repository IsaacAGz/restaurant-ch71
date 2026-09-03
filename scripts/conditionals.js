console.log("Conditionals");

let result = 60;

if(result >= 60){
    console.log("You passed the course");
}

let points = 100;

if(points > 60) {
    console.log("You won!");
} else {
    console.log("You lose!");
}

/*
//let temp = 100;

if(temp >= 100) {
    console.log("Water is boiling!");
} else if (temp <= 0) {
    console.log("Water is frozen");
} else {
    console.log("Water is not boiling.");
}

//let age = 150;

if (age < 13) {
console.log("You are a Child");
} else if (age < 21) {
    console.log("You are a teenager");
} else if (age < 64) {
    console.log("YOu are an adult");
} else if (age < 120) {
    console.log("You are a senior");
} else {
    console.log("You are very old.");
}



function calcPrice(age) {

    if (age < 12){
        price = 5;
    }
    else if (age > 12 && age < 18) {
        price = 8;
    }
    else if (age > 18) {
        price = 10;
    } 
    
    return price;
}

//let age = prompt("Enter your age");
//price = calcPrice(age);

//console.log(`Ticket will cost: $${price}`);

function wear(temp) {
    let attire;
    if (temp <= 15) {
        attire = "jacket";
    } else if (temp > 15 && temp < 25) {
        attire = "sweater";
    } else if (temp >= 25) {
        attire = "shirt";
    }

    return attire;
}

let temp = prompt("What is the temperature");

let attire = wear(temp);

console.log(`The temperature is ${temp}, this means you should wear a ${attire}`);
    */
let hour = 13;

if (hour >= 12 && hour <= 16) {
    console.log("Lunch time");
}

let isWeekend = false;
let isHoliday = false;

if (isWeekend || isHoliday) {
    console.log("Resutaurant is closed today");
} else {
    console.log("Restaurant is open");
}

function getGreeting(isVIP) {
    if (isVIP) {
        return "Welcome back, valued member";
    } else {
        return "Welcome, consider joining our membership";
    }
}

console.log(getGreeting(true));
console.log(getGreeting(false));

// Challenge 2

function verify(role) {
    if (role == "Admin") {
        console.log("Full access");
    } else if (role == "Editor") {
        console.log("Access but limited actions");
    } else {
        console.log("You do not have access.");
    }
}

let userType = "Admin";

verify(userType);



function getDiscount(totalAmount) {
    if (totalAmount > 50) {
        return .15;
    } else if (totalAmount > 30) {
        return .1;
    } else if (totalAmount > 15) {
        return .05
    }

    return 0;
}

function calculateDiscount(total, discount) {
    return total - (total * discount);
}   

let price = 60;
let discount = getDiscount(price);
let total = calculateDiscount(price, discount);
console.log(`Total after discount ${discount * 100}% is $${total}`);