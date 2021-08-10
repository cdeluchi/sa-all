// exercise 1

function logType(singleArg) {
    if (typeof singleArg == "undefined") {
        return undefined;
    } else if (typeof singleArg == "string") {
        return string;
    } else if (typeof singleArg == "0,00055555444433") {
        return BigInt;
    } else if (typeof singleArg == "null") {
        return null;
    } else if (typeof singleArg == 233) {
        return Number;
    } else if (typeof singleArg == "true" || "false") {
        return Boolean;
    } else if (typeof singleArg == { home: blue, car: red }) {
        return Object;
    } else if (typeof singleArg == ["pepper"]) {
        return Array.isArray;
    } else if (typeof singleArg == "123") {
        return NaN;
    } else {
        return "I have no Idea!";
    }
}

console.log(logType);

// exercice 2
var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

var b = {};
for (var prop in a) {
    const value = a[prop];
}
console.log(b);

// exercise 3:
var forLoop = 0;
for (var i = 1; i < 10; i++);
console.log(forLoop);
