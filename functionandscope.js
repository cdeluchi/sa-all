// 1 Write a function that takes any number of numbers as arguments and returns the sum of those numbers.

// This adds 10 to one number.
// We only want to add 10 to something if 10 is one of the arguments to this function.
// We want this function to be passed not just one number but any number of numbers.
// All of the numbers that are passed, however many there are, should be added together
// and the sum should be returned.

function sumNumber() {
    var newSum = [5, 10, 15, 100, 200];
    for (var i = 0; i < sumNumber.length; i++) {
        return (newSum += sumNumber[i]);
    }
    return newSum;
}
sumNumber(5, 10, 15, 100, 200);

// 2 Write a function that takes another function as an argument.
// It should wait 1.5 seconds and then run the function that was passed in

setTimeout(function () {
    console.log("log after 1.5 seconds");
}, 1500);

// after the function run it's show me a number.. 78. Why?

// 3 Write a function that expects a number as an argument.
//  If the value that is passed in is less than 0, equal to 0, or not a number,
// the function should return the string 'ERROR'.
// If the number that is passed in is greater than or equal to 1000000
// it should simply return the number.
// Otherwise it should multiply
// the number by 10 however many times it takes to get a number
// that is greater than or equal to 1000000 and return that.

function notError(number) {
    if (number < 0 || number == 0 || isNaN(number) === true) {
        return "ERROR";
    } else if (number >= 1000000) {
        return number;
    } else {
        return notError(number * 2000000);
    }
}
notError();
