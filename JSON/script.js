console.log("the JSON", $);

(function () {
    $("button").on("click", function () {
        try {
            JSON.parse($("textbox").val());
            alert("this is valid JSON");
            // try { // try to parse your input value // IF we make it to this line, we can alert("this is valid JSON") }
            // catch (e){ // IF we land in the catch block that means what the user input could not be parsed
            // so we need to alert("this is not JSON") }
        } catch (err) {
            alert("this is not JSON");
            // console.log(err);
        }
    })();

    //     try {
    //     asdfasfasf;
    // } catch (e) {
    //     console.log(e); //logs 'ReferenceError: asdfasfasf is not defined'
    // }
    // console.log(typeof e); //logs 'undefined'

    // catchText.on("input", function () {
    //     var inputVal = catchText.val();
    //     // console.log(catchText.val());
    //     var realJson = [];
    //     button.on("click", function () {
    //         if (inputVal === parseInt) {
    //             // console.log("inputVal");
    //             return "Yes, this is a JSON!";
    //         } else {
    //             return "no, you're wrong!";
    //         }
    //     });
    // });
});

// upon clicking we want to check if we can actually parse with the help of JSON.parse(),
// what the user put in, that would be our correct check for whether or not sth is valid JSON;
// when we try to parse, stuff can go wrong so we'll need to wrap that try in a try catch block:
