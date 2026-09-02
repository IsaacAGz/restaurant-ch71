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

function calculateTotal(price, tax) {
    let total = price + (price * tax);
    return total
}

function calculateTip(total, tip) {
    let tipAmount = total * tip;
    return tipAmount;
}

console.log("Dish: Ceviche\nPrice: 9.99");

let priceWithTax = calculateTotal(9.99, .09);

console.log(`Total with tax: $${priceWithTax.toFixed(2)}`);

let priceWithTip = calculateTip(priceWithTax, .15);

console.log(`Tip (15%): $${priceWithTip.toFixed(2)}`);
