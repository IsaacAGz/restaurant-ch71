function showRestaurantName() {
    console.log("Welcome to La Cantina de Smith");
}

showRestaurantName();

function greetCustomer(name) {
    console.log(`Welcome, ${name}! We are happy to have you at La Cantina`);
}

greetCustomer("Isaac");
greetCustomer("John");
greetCustomer("Jerry");

function calculateTip(total, tip) {
    let tipAmount = total * tip;
    let result = tipAmount + total;
    return result;
}

function calculateTotal(price, tax) {
    let total = calculateTip(price + (price * tax),.15);
    return total;
}

console.log("Dish: Ceviche\nPrice: 15.99");
let price = 15.99
let priceTotal = calculateTotal(price, .15);
console.log(`Total with tax (9%) and tip (15%): $${priceTotal.toFixed(2)}`);

console.log("Dish: Tacos\nPrice: 12.99");
price = 12.99
priceTotal = calculateTotal(price, .15);
console.log(`Total with tax (9%) and tip (15%): $${priceTotal.toFixed(2)}`);

console.log("Dish: Empanadas\nPrice: 9.99");
price = 9.99
priceTotal = calculateTotal(price, .18);
console.log(`Total with tax (9%) and tip (18%): $${priceTotal.toFixed(2)}`);
