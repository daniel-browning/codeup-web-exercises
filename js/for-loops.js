function showMultiplicationTable(number) {
    for(var i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}
showMultiplicationTable(3);


var number;
var message;

for(var i = 0; i < 10; i++) {
    number = Math.floor(Math.random() * (200 - 20)) + 20;
    message = "";
    if(number % 2 === 0) {
        message = " is even";
    } else {
        message = " is odd";
    }
    console.log(number + message);
}

var output;
for(var i = 1; i <= 9; i++) {
    output = "";
    for(var j = 1; j <= i; j++) {
        output += i;
    }
    console.log(output);
}

var output;
for(var i = 100; i > 5; i-=5) {
    output = i;
    }
    console.log(output -5);