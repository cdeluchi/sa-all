console.log("translate Number", $);
(function () {
    function askForNumber() {
        var num = prompt("Please enter a number between 1 and 10");
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            return num;
        }
        throw new Error("Bad number");
    }
    function translateNumberToGerman() {
        var numDeutch = [
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
            alert(numDeutch[parseInt("translateNumberToGerman")]);
            askForNumber();
        } catch (err) {
            console.log(err);
            translateNumberToGerman(err);
        }
    }
    translateNumberToGerman();
});
