// ex1
// Write a function that takes an array as an argument and returns
// a new array containing all of the items that are in the array
// that was passed in but in reverse order.

var reverse = [1, 2, 3];
function arrRev(first, second, third) {
    return [3, 2, 1];
}
console.log(arrRev(reverse));
//ex 2
// Write a function that takes two arrays as arguments
// and returns a new array containing all of the items in the two arrays passed to it.
const array1 = ["tree", "lake"];
const array2 = ["cat", "dog"];
function sumVar(a, b) {
    let newhouse = [...a, ...b];
    console.log(newhouse);
}
sumVar(array1, array2);

// ex3
function logInfo() {
    const city = {
        name: "Marseille",
        country: "France",
        population: 861635,
    };
    console.log(
        `${city.name} is in ${city.country} and has ${city.numPeople} inhabitants in it.`
    );
}
logInfo({ name: "Marseille", country: "France", population: 861635 });

// ex4
// Pretend that it is 2002 and rewrite the following hipster Javascript so it will work in Internet Explorer 5 and Netscape 4.
// let getNameAndCountry = ({ name, country }) => [name, country];
//  let getNameAndCountry = ({ name, country }) => [name, country];

let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
    let [, country] = getNameAndCountry(city2);
    return {
        ...city1,
        country,
    };
};

function getNameAndCountry(cityobj) {
    return [cityobj.name, cityobj.country];
}

function getRelocatedCity(city1, city2) {
    var country = getNameAndCountry(city2)[1];
    if (typeof country === "undefined") {
        country = { country: "Germany" };
    }
    return getNameAndCountry();
}
getRelocatedCity();

// check if city2 is undefined if yes set it's value (ex.. function add)
// declare a variable called country give the value of the second item in the array returned by getNameAndCountry()
//array destruc
