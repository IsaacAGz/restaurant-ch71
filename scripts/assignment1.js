const RNAME = "El Pipila";
const RCUISINE = "Mexican";
const RLOCATION = "San Diego"

let specialDish = "Mole de olla";
let numTables = 8;
let rStatus = "Open";

console.log("Restaurant Report");
console.log("Restaurant: " + RNAME);
console.log(`Cuisine: ${RCUISINE}`);
console.log(`City: ${RLOCATION}`);
console.log("Today's special:", specialDish);
console.log(`Available Tables: ${numTables}\nStatus: ${rStatus}`);

rStatus = "Closed";
specialDish = "Ceviche de Pescado";

console.log(`
    Restaurant Report\n
    Restaurant: ${RNAME}\n
    Cuisine: ${RCUISINE}\n
    City: ${RLOCATION}\n
    Today's special: ${specialDish}\n
    Available Tables: ${numTables}\n
    Status: ${rStatus}`);
