const restaurantName = "Mos Eiley Cantina";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const sales = [320, 410, 290, 505, 480, 620, 710];

function calculateTip(total, tip) {
    let tipAmount = total * tip;
    let result = tipAmount + total;
    return result;
}

function calculateTotal(price, tax) {
    let total = calculateTip(price + (price * tax),.15);
    return total;
}

function applyMemberDiscount (price, isMember) {
    if (isMember) {
        return price - (price * .1);
    }
    else {
        return price;
    }
}

function checkDelivery (total) {
    if (total >= 30) {
        return `<p>Order total: $${total} - Free delivery!</p>`;
    } else if (total > 0 && total < 30) {
        return `<p>Order total: $${total} - Delivery fee applies</p>`;
    }
    console.log("400 - Invalid total");
}

function getDaysLabel (sales) {

    if (sales > 600) {
        return "Excellent day";
    } else if (sales > 400) {
        return "Good day";
    } else if (sales > 250) {
        return "Average day";
    } else {
        return "Slow day";
    }
}

function generateReport() {
    let output = "";
    let total = 0;

    for (let i = 0; i < days.length; i++) {
        daySales = sales[i];
        total += sales[i];
        output += `<p>${days[i]}: $${daySales} ${getDaysLabel(daySales)}<br></p?>`;
    }

    average = total / days.length;
    output += `<p>Weekly total: $${total}</p>`;
    output += `<p>Weekly average: $${average.toFixed(2)}</p>`;

    return output;
}

document.getElementById("sales").innerHTML = generateReport();

function enterOrders() {

    let item = 0;
    let output = "";

    for (let i = 0; i < 3; i++) {
        item = prompt("Enter an order amount:");
        let itemPrice = parseFloat(item);
        

        let orderTotal = calculateTotal(itemPrice, 0.09);
        output += `<p>${checkDelivery(orderTotal)}</p>`;
    }
    return output;
}

document.getElementById("orders").innerHTML = enterOrders();
