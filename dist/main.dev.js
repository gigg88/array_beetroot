"use strict";

// Part 1: The Grocery List
// Create the Array:
var groceriesList = [{
  name: "Milk",
  amount: 1,
  bought: false
}, {
  name: "Eggs",
  amount: 12,
  bought: false
}, {
  name: "Bread",
  amount: 2,
  bought: false
}, {
  name: "Apples",
  amount: 5,
  bought: false
}, {
  name: "Pasta",
  amount: 1,
  bought: false
}]; //displayGroceries():
//Prints the list to the console.
//Challenge: Sort so unbought items appear first.

function displayGroceries() {
  groceriesList.sort(function (a, b) {
    return (a.bought ? 1 : 0) - (b.bought ? 1 : 0);
  });
  groceriesList.forEach(function (product) {
    console.log("".concat(product.name, " (").concat(product.amount, ") - ").concat(product.bought ? "Bought" : "Not bought"));
  });
} //      addItem(name, amount):
//    Adds a new item or increases the quantity if it already exists.


function addItem(name, amount) {
  var existingProduct = groceriesList.find(function (product) {
    return product.name === name;
  });

  if (existingProduct) {
    existingProduct.amount += amount;
  } else {
    groceriesList.push({
      name: name,
      amount: amount,
      bought: false
    });
  }
} //  purchaseItem(name):
//  Marks an item as bought.


function purchaseItem(name) {
  var productIndex = groceriesList.findIndex(function (product) {
    return product.name === name;
  });

  if (productIndex !== -1) {
    groceriesList[productIndex].bought = true;
  }
}

displayGroceries();
addItem("Bananas", 3);
addItem("Pizza", 2);
purchaseItem("Pasta");
displayGroceries();