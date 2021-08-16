// Ex 1

// Write a constructor called Rectangle that accepts two numbers (width and height) as parameters.
// Rectangle instances should have a method called getArea that returns the instance's width multiplied by its height.

// Write another constructor called Square that accepts one number (which will serve as both width and the height) as a parameter.
// Instances of Square should also have a getArea method but you should not rewrite the getArea function you wrote for Rectangle.
// Square instances should use the same getArea method that Rectangle instances do.

function Retangle(width, height) {
    this.width = width;
    this.height = height;
    var squarenew = new Square();
    console.log(squarenew);
    this.getArea = squarenew.getArea;
}

function Square(number) {
    this.width = number;
    this.height = number;
    this.getArea = getArea;
    function getArea() {
        return this.width * this.height;
    }
}

var retangle = new Retangle(20, 15);
var square = new Square(25);
console.log(retangle.getArea());
console.log(square.getArea());

// ex 2

// Write a function called invertCase that expects a string as a parameter.
// Uppercase characters should become lowercase and lowercase letters should become uppercase.
// Characters that are not alphabetic should not change.
// The toUpperCase and toLowerCase methods that all strings have will come in handy here.

// var switchUp = str.prototype.toUpperCase.call({
//     toString: function toString(){
//         return "Friday NIGHT";
//     }
// });
// var switchDown = str.prototype.toLowerCase.call({
//     toString: function toString(){
//         return "Friday NIGHT";
//     }
// });

function invertCase(str) {
    var switchDown = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            switchDown += str[i].toLowerCase();
        } else {
            switchDown += str[i].toUpperCase();
        }
    }
    return switchDown;
}

// // This function should return a new string with all the same characters as the string that was passed in
// // but with the cases of the alphabetic characters switched.
