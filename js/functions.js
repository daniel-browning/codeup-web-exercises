"use strict";

var hitMe = function() {
    return Math.floor((Math.random() *( 11)+1))
}
var count = 0;
    if (confirm("Do you want to play a game hehe?")) {

}

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name){
console.log("Hello, "+ name);
}
sayHello(prompt("What is your name?"));

/*Instructor Worked Solution
 * function sayHello(name) {
 * return "Hello, " + name + "!";
 * }
 * console.log(sayHello("codeup"));
 */


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 * console.log 'helloMessage' to check your work
 */

console.log(sayHello);
var helloMessage = "Daniel";
console.log(helloMessage);


/* sayHello("Daniel");
var helloMessage = sayHello("Daniel");
console.log(helloMessage);
 */


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = "Daniel";
console.log(myName);

/* var myName = "Daniel";
console.log(sayHello(myName));
 */

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(random) {
    var number = random;
    return number === 2;
}

console.log(random === 2);


/* function isTwo(num) {
return num == 2;
}
console.log(random);
console.log(isTwo(random));
 */

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(totalBill, tipPercentage) {
    var tip = totalBill * tipPercentage;
    return tip;
}
console.log(calculateTip(0.20, 20) + " should return 4");
console.log(calculateTip(0.25, 25.50) + " should return 6.37");
console.log(calculateTip(0.15, 33.42) + " should return 5.01");


/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */


var totalBill = parseFloat(prompt("How much was your total bill?"));
    // console.log(billTotal);
    // console.log(typeof billTotal);
var tipPercentage = parseFloat(prompt("How much would you like to tip (decimal between 0-1)?"));
alert("The recommended tip amount is $" + calculateTip(totalBill, tipPercentage).toFixed(2));



/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */



function applyDiscount(price, discountPercent) {
    var discount = price * discountPercent;
    return price - discount;

}

var originalPrice = 100;
var discountPercent = .2;
console.log(applyDiscount(originalPrice, discountPercent));
console.log(applyDiscount(45.99, 0.12));