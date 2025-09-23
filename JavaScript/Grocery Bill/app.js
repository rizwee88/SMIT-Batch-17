console.log("Grocery Bill");
console.log("-----------------");
// Write a grocery bill for 3 items

var ricePrice = 3.99;
var beansPrice = 2.99;
var eggsPrice = 1.99;

var riceQty = 2;
var beansQty = 3;
var eggsQty = 12;

var riceTotal = ricePrice * riceQty;
var beansTotal = beansPrice * beansQty;
var eggsTotal = eggsPrice * eggsQty;

console.log(`Rice: Rs.${ricePrice} x ${riceQty}: Rs.` + riceTotal);
console.log(`Beans: Rs.${beansPrice} x ${beansQty}: Rs.` + beansTotal);
console.log(`Eggs: Rs.${eggsPrice} x ${eggsQty}: Rs.` + eggsTotal);
console.log("-----------------");

var subtotal = riceTotal + beansTotal + eggsTotal;
var discount = 0;
if (subtotal > 20) {
  console.log("You qualify for Discount that is 5% off");
  discount = subtotal * 0.05;
}
var tax = subtotal * 0.13;

var total = subtotal + tax - discount;
console.log("-----------------");

console.log("Subtotal: Rs." + subtotal);
console.log("Tax: Rs." + tax);
if (discount > 0) {
  console.log("Discount: Rs." + discount);
}
console.log("-----------------");

console.log("Total: Rs." + total);
console.log("-----------------");
