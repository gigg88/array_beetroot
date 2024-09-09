//Part 2: The Shopping Receipt

 //   Create the Array:
 //       Name it shoppingReceipt.
 //       Each item is an object with:
 //           name (string)
 //           amount (number)
 //           pricePerItem (number)
 //   
 





const shoppingReceipt = [
    { name: "Milk", amount: 1, pricePerItem: 1.50 + " Euro" },
    { name: "Eggs", amount: 12, pricePerItem: 2.00 + " Euro" },
    { name: "Bread", amount: 2, pricePerItem: 1.95 + " Euro" },
    { name: "Apples", amount: 5, pricePerItem: 5.00 + " Euro" },
    { name: "Pasta", amount: 1, pricePerItem: 2.00 + " Euro" }
  ];

 // Functions:
 // printReceipt():
 // Nicely formats and prints the receipt to the console.

 function printReceipt() {
    console.log("------------------------------------------------")
    console.log("Receipt for your purchase: ");

    shoppingReceipt.forEach(product => {
        console.log(`Item: ${product.name} - Amount: (${product.amount}) * ${(product.pricePerItem)} `);
    });

 }

 

  // calculateTotal():
 //  Returns the total cost of the purchase.

 function calculateTotal() {

    let totalPrice = 0;
    let totalAmount = 0;

    shoppingReceipt.forEach(product => {
         totalPrice += product.amount * parseFloat(product.pricePerItem);
         totalAmount += product.amount;
    });
    console.log("################################################")
    console.log("Total Amount: ");
    console.log("------------------------------------------------")
    console.log(`${totalPrice} Euro | ${totalAmount} Products`);
    console.log("------------------------------------------------")
    
 }



  // findMostExpensiveItem():
 //  Returns the object representing the most expensive item.

 function findMostExpensiveItem() {
    shoppingReceipt.sort((a, b) => {
      const priceA = parseFloat(a.pricePerItem.replace(" Euro", ""));
      const priceB = parseFloat(b.pricePerItem.replace(" Euro", ""));
      return priceB - priceA; 
    });
  
    const mostExpensiveItem = shoppingReceipt[0];
    console.log(`Most Expensive Item: ${mostExpensiveItem.name}`);
  }

 // calculateAveragePrice():
 // Returns the average price per item on the receipt.

 function calculateAveragePrice() {
    let totalPrice = 0;
    let totalAmount = 0;

    shoppingReceipt.forEach(product => {
         totalPrice += product.amount * parseFloat(product.pricePerItem);
         totalAmount += product.amount;
    });
    const averagePrice = totalPrice / totalAmount;
    console.log("------------------------------------------------")
    console.log(`Averge Price per Product: ${averagePrice.toFixed(2)} Euro`);
    console.log("------------------------------------------------")
 }



  printReceipt();
  calculateTotal()
  findMostExpensiveItem();
  calculateAveragePrice();

