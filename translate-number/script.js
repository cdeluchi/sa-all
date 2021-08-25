console.log("translate Number", $);
(function () {
    function askForNumber() {
        var num = prompt("Please enter a number between 1 and 10");
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            return num;
        }
        throw new Error("Bad number");
    }
    // the function receive an array with the numbers in German. This numbers need to start with 0.
    function translateNumberToGerman() {
        var numDeutch = [
            "null",
            "eins",
            "zwei",
            "drei",
            "vier",
            "fünf",
            "sechs",
            "sieben",
            "acht",
            "neun",
            "zehn",
        ];
        try {
            // then create a alert with this array and call to the function asForNumber
            alert(numDeutch[parseInt(askForNumber())]);
        } catch (err) {
            console.log(err);
            translateNumberToGerman(err);
        }
    }
    // here we need to call this function to return our numbers in German
    translateNumberToGerman();
})();
