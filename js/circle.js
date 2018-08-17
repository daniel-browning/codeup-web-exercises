(function() {
    "use strict";

    // create a circle object

    var circle = {
        radius: 3,

        getArea: function () {
            var areaOfCircle = Math.PI * Math.pow(circle.radius, 2);
            // TODO: complete this method
            // hint: area = pi * radius^2

            return areaOfCircle;// TODO: return the proper value
        },

        logInfo: function (doRounding) {
            var areaOfCircle = Math.PI * Math.pow(circle.radius, 2);
            if (doRounding === false) {
                console.log("Raw circle information is " + areaOfCircle);
            } else {
                (doRounding === true)
                    console.log("Circle information rounded to the nearest whole number is " + Math.round(areaOfCircle));
            }

            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(areaOfCircle));
        }
    };

    // log info about the circle
    //console.log("Raw circle information");
    circle.logInfo(false);
    //console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.


    var circle = {
        radius: 5,

        getArea: function () {
            var areaOfCircle = Math.PI * Math.pow(circle.radius, 2);
            // TODO: complete this method
            // hint: area = pi * radius^2

            return areaOfCircle; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            var areaOfCircle = Math.PI * Math.pow(circle.radius, 2);
            if (doRounding === false) {
                console.log("Raw circle information is " + areaOfCircle);
            } else {
                (doRounding === true)
                console.log("Circle information rounded to the nearest whole number is " + Math.round(areaOfCircle));
            }

            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(areaOfCircle));
        }
    };

    // log info about the circle
    //console.log("Raw circle information");
    circle.logInfo(false);
    //console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

})();
