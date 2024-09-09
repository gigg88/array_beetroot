"use strict";

//Part 2: The Shopping Receipt
//   Create the Array:
//       Name it shoppingReceipt.
//       Each item is an object with:
//           name (string)
//           amount (number)
//           pricePerItem (number)
//   
var shoppingReceipt = [{
  name: "Milk",
  amount: 1,
  pricePerItem: 1.50 + " Euro"
}, {
  name: "Eggs",
  amount: 12,
  pricePerItem: 2.00 + " Euro"
}, {
  name: "Bread",
  amount: 2,
  pricePerItem: 1.95 + " Euro"
}, {
  name: "Apples",
  amount: 5,
  pricePerItem: 5.00 + " Euro"
}, {
  name: "Pasta",
  amount: 1,
  pricePerItem: 2.00 + " Euro"
}]; // Functions:
// printReceipt():
// Nicely formats and prints the receipt to the console.

function printReceipt() {
  console.log("------------------------------------------------");
  console.log("Receipt for your purchase: ");
  shoppingReceipt.forEach(function (product) {
    console.log("Item: ".concat(product.name, " - Amount: (").concat(product.amount, ") * ").concat(product.pricePerItem, " "));
  });
} // calculateTotal():
//  Returns the total cost of the purchase.


function calculateTotal() {
  var totalPrice = 0;
  var totalAmount = 0;
  shoppingReceipt.forEach(function (product) {
    totalPrice += product.amount * parseFloat(product.pricePerItem);
    totalAmount += product.amount;
  });
  console.log("################################################");
  console.log("Total Amount: ");
  console.log("------------------------------------------------");
  console.log("".concat(totalPrice, " Euro | ").concat(totalAmount, " Products"));
  console.log("------------------------------------------------");
} // findMostExpensiveItem():
//  Returns the object representing the most expensive item.


function findMostExpensiveItem() {
  shoppingReceipt.sort(function (a, b) {
    var priceA = parseFloat(a.pricePerItem.replace(" Euro", ""));
    var priceB = parseFloat(b.pricePerItem.replace(" Euro", ""));
    return priceB - priceA;
  });
  var mostExpensiveItem = shoppingReceipt[0];
  console.log("Most Expensive Item: ".concat(mostExpensiveItem.name));
} // calculateAveragePrice():
// Returns the average price per item on the receipt.


function calculateAveragePrice() {
  var totalPrice = 0;
  var totalAmount = 0;
  shoppingReceipt.forEach(function (product) {
    totalPrice += product.amount * parseFloat(product.pricePerItem);
    totalAmount += product.amount;
  });
  var averagePrice = totalPrice / totalAmount;
  console.log("------------------------------------------------");
  console.log("Averge Price per Product: ".concat(averagePrice.toFixed(2), " Euro"));
  console.log("------------------------------------------------");
}

printReceipt();
calculateTotal();
findMostExpensiveItem();
calculateAveragePrice();