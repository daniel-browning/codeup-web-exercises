"use strict";

var message = "Hello from external JS.";
console.log(message);

var welcome = "Welcome to my Website";
alert(welcome);

var favoriteColor = prompt("What is your favorite color?");

var sameColor = "Ahhh! " + favoriteColor + " is my favorite color too!!";
alert(sameColor);

var nextMovie = prompt("What is the next movie you would like to rent from Movies 'r' Not?");

var howManyDays = prompt("If a rental costs $3 a day, how many days would you want to rent " + nextMovie + " for?");

var totalCost = 3*howManyDays;

var totalCostCustomer = "You owe us $" + totalCost + " for your rental.";
alert(totalCostCustomer);