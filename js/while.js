"use strict";

//One

var count= 2;
while (count < 65536) {
    console.log(count);
    count *= 2;
}

//Two - Ice Cream Cones

var allCones = Math.floor(Math.random() * 50) + 50;
var conesSold;

console.log("Good morning! I'm starting my day with " + allCones + " cones in my inventory.");

do {
    conesSold = Math.floor(Math.random() * 5) + 1;
    console.log("The next customer ordered " + conesSold + " number of cones.");
    if (conesSold <= allCones) {
        console.log("Sold " + conesSold + " number of cones.");
        allCones = allCones - conesSold;
        console.log("I now have " + allCones + " left in my inventory.");
    } else {
        console.log("I'm sorry. I don't have enough for your order.");
    }
    if (allCones > 0) {
        console.log("Next customer, please!");
    }
} while (allCones > 0);
console.log("Yay I sold all the cones! I get to go home!");

