//Part 1: The Grocery List

 //   Create the Array:
//        Start with an array named groceriesList.
 //       Each item is an object with properties:
  //          name (string)
 //           amount (number)
 //           bought (boolean, false initially)
//        Add a few sample items to your list.
//    Functions:
   //     displayGroceries():
  //          Prints the list to the console.
  //          Challenge: Sort so unbought items appear first.
  //      addItem(name, amount):
  //          Adds a new item or increases the quantity if it already exists.
 //       purchaseItem(name):
  //          Marks an item as bought.


  const groceriesList = [

  {
    name: "Milk",
    amount: 1,
    bought: false
  },

  {
    name: "Eggs",
    amount: 12,
    bought: false
  },

  {
    name: "Bread",
    amount: 1,
    bought: false
  }

 ];


 function displayGroceries() {
    console.log(groceriesList);
}



function addItem() {

    const name = prompt("Enter the grocery name: ");
    const amount = prompt("Enter the amount: ");

    const newGrocery = { name, amount, bought: false };

    groceriesList.push(newGrocery);
}

addItem();

function purchaseItem(name) {
  const itemToPurchase = groceriesList.find(function(item) {
    return item.name === name;
  });

  if (itemToPurchase) {
    itemToPurchase.bought = true;
  }
}


addItem();
displayGroceries();
purchaseItem("Bread");