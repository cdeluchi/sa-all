// ex2 Write a function that takes an array as a parameter and
// returns a new array containing all of the items that are in the array that was passed in
// but in reverse order.
// Unlike the reverse method that all arrays have,
// this function should leave the original array unchanged.

function myArr(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        console.log(i);
        console.log(arr[i]);
    }
    return newArr;
}
myArr(["a", "b", "c"]);

// ex3 Write a function called getLessThanZero
// that expects an array of numbers to be passed to it and
// returns a new array containing only those numbers
// from the array that was passed in that are less than zero

// var myArray = [-5, -6, 0, -1000, 5, 0, 200];
// console.log(getLessThanZero(myArray));

function getLessThanZero(arr) {
    return arr.filter(function (arr) {
        return arr < 0;
    });
}
var lessNumber = [20, -15, 30, -25];
console.log(getLessThanZero(lessNumber));

// ex1 Write a function called each that accepts either an object or an array as its first parameter and a callback as its second parameter.
// If the first parameter is an object, it should loop over the object's properties and call the callback for each one.
// The property value should be the first parameter passed to the callback and the property name should be the second.
// If the first parameter is an array, it should loop over the array's elements and call the callback for each one. The array element should be the first parameter passed to the callback and the index should be the second.



function each(objOrArr, callback) {
    for ( var i = 0; i < objOrArr.length; i++){
        return callback(firstObj);
    }else( )
}

var firstObj = ["home", "paper", "glass", "tower"];
each(firstObj, callback);

// 1 parameter is and obj {}
// loop over the properties
// callback each one
