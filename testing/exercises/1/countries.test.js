// countries.js exports a find function to which you can pass a string and get back an array containing up to four countries that begin with that string.
//  In countries.test.js you should write tests that confirm that this function is working correctly. The important things to test are:

const countries = require("./countries");

// When find is passed an empty string, it returns an empty array
test("Passing an empty string, it returns an empty array", () => {
    expect(countries.find("")).toEqual([]);
});

// The array that it returns contains no more than four matches
test("Returns no more than 4 matches", () => {
    const countriesFour = ["Afghanistan", "Albania", "Algeria"];
    expect(countries.find(countriesFour)).toBeLessThanOrEqual(4);
});

// The search is case insensitive
test("This search is case insensitive", () => {
    const seachAll = "Fiji";
    const searchLowCase = "fiji";
    const searchUpperCase = "FIJI";
    expect(seachAll).toEqual(searchLowCase);
    expect(seachAll).toEqual(searchUpperCase);
});

// // If there are no matching countries, an empty array is returned
test("no matchs country the array is returned", () => {
    expect(countries.find("Fraiburgo")).toEqual([]);
});
