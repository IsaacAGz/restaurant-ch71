// Part 1 - if only
console.log("==================== PART 1 ======================");

function checkDelivery (total) {
    if (total >= 30) {
        console.log(`Order total: $${total} - Free delivery!`);
        return
    } else if (total > 0 && total < 30) {
        console.log(`Order total: $${total} - Delivery fee applies`);
        return
    }

    console.log("400 - Invalid total");
}

let total = 40;
checkDelivery(total);

total = 5;
checkDelivery(total);

total = 30;
checkDelivery(total);

total = 0;
checkDelivery(total);

// Part 2 - if / else if /else
console.log("==================== PART 2 ======================");

function getMenuType (hour) {
    if (hour >= 7 && hour <= 11) {
        console.log(`Hour ${hour} -> Breakfast menu`);
    } else if (hour >= 12 && hour <= 16) {
        console.log(`Hour ${hour} -> Lunch menu`);
    } else if (hour >= 17 && hour <= 22) {
        console.log(`Hour ${hour} -> Dinner menu`);
    } else {
        console.log(`Hour ${hour} -> We are closed`);
    }
}

let hour = 11;
getMenuType(hour);

hour = 20;
getMenuType(hour);

hour = 25;
getMenuType(hour);

// Part 3 if / else inside a function that returns a value
console.log("==================== PART 3 ======================");

function applyMemberDiscount (price, isMember) {
    if (isMember) {
        return price - (price * .1);
    }
    else {
        return price;
    }
}

let price = 89.99;
console.log(`Price is ${price}`);

console.log(`Regular price: ${applyMemberDiscount(price, false)}`);
console.log(`Member price: - ${applyMemberDiscount(price, true).toFixed(2)}`);

// Part 4 Combining if with yout Assignment 2 functions
console.log("==================== PART 4 ======================");

function calculateTotal(price, tax) {
    let total = price + (price * tax);
    return total;
}

function printOrderSummary (dishName, price, isMember) {
    console.log("Order Summary");
    console.log(`Dish: ${dishName}`);
    console.log(`Original price: $${price}`);
    
    total = calculateTotal(price, .08);
    console.log(`Total with Tax: ${total.toFixed(2)}`);

    total = applyMemberDiscount(total, isMember);
    if (total < price) {
        console.log(`Member discount applied: $${total.toFixed(2)}`);
    } else {
        console.log(`No discount applied: $${total.toFixed(2)}`);
    }

    checkDelivery(total.toFixed(2));
}

printOrderSummary("Pad See ew", 40, true);
console.log();
printOrderSummary("Thai tea", 7, false);

