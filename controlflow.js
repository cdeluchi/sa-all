// exercise 1

function logType(singleArg) {
    if (typeof singleArg == "undefined") {
        return undefined;
    } else if (typeof singleArg == "string") {
        return "string";
    } else if (typeof singleArg == "bigint") {
        return "BigInt";
    } else if (typeof singleArg === "null") {
        return "null";
    } else if (typeof singleArg == "number") {
        return "Number";
    } else if (typeof singleArg == "true") {
        return "Boolean";
    } else if (typeof singleArg == "not a number") {
        return isNaN("NaN");
    } else {
        return "I have no Idea!";
    }
}
console.log("undefined");
console.log("string");
console.log("begint");
console.log("null");
console.log("number");
console.log("true");
console.log("not a number");
console.log("I have no Idea!");

// ei 2
// function logType(singleArg){
//     switch (typeof singleArg) {
//         case "undefined":
//             console.log("undefined");
//             break;
//         case "null":
//             console.log("null");
//             break;
//     }
// ...
// }

// exercice 2
// precisa criar uma variavel vazia para poder conter os dados novos que vamos mandar
// prop statement

var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};
var b = {};
for (var prop in a) {
    var newVar = a[prop];
    var newVar2 = prop;
    b[newVar] = newVar2;
}
console.log(b);

// exercise 3:
// Can use while loop or for loop

for (var i = 10; i > 0; i--) {
    console.log(i);
}
