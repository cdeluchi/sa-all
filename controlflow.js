// exercise 1

function logType(singleArg) {
    if (typeof singleArg == "undefined") {
        return undefined;
    } else if (typeof singleArg == "string") {
        return "string";
    } else if (typeof singleArg == "bigint") {
        return BigInt;
    } else if (typeof singleArg === "null") {
        return null;
    } else if (typeof singleArg == "number") {
        return Number;
    } else if (typeof singleArg == "boolean") {
        return Boolean;
    } else if (typeof singleArg == {}) {
        return Object;
    } else if (typeof singleArg == []) {
        return Array.isArray;
    } else if (typeof singleArg == "NaN") {
        return isNaN(NaN);
    } else {
        return "I have no Idea!";
    }
}

console.log(logType(undefined));
console.log(logType(null));
console.log(logType(1));
console.log(logType(NaN));
console.log(logType("hey"));
console.log(logType(true));
console.log(logType(2n));
console.log(logType(function () {}));
console.log(logType([1, 2, 3]));
console.log(logType({}));

// exercice 2
var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

var b = {};
for (var prop in a) {
    console.log("property of a", prop);
    console.log("value of a", a[prop]);
    var valueA = a[prop];
    var propertyA = prop;
    b[valueA] = propertyA;
}
console.log(b);

// exercise 3:
var forLoop = 0;
for (var i = 1; i < 10; i++);
console.log(forLoop);
