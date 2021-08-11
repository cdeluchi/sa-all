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
    } else if (typeof singleArg == "not a number") {
        return isNaN(NaN);
    } else {
        return "I have no Idea!";
    }
}
logType();

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
for (var i = 10; i > 1; i--);
console.log(i);
