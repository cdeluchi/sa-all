console.log("the JSON", $);

$("button").on("click", function () {
    // catchText.on("input", function () {
    var inputVal = $("textarea").val();
    // console.log(catchText.val());
    // button.on("click", function () {
    try {
        // var realJson = []; can not acepted an empty []
        var realJson = JSON.parse(inputVal);
        alert("this is valid JSON", realJson);
    } catch (erro) {
        alert("this is not JSON", erro);
    }
});

// if (inputVal === parseInt) {
//         // console.log("inputVal");
//         return "Yes, this is a JSON!";
//     } else {
//         return "no, you're wrong!";
//     }
// });
// });

// $("button").on("click", function () {
//     var
//     console.log("this button works?", "click");
//     try {
//         JSON.parse($("textvalidation").val());
//         window.alert("this is valid JSON");
//         // try { // try to parse your input value // IF we make it to this line, we can alert("this is valid JSON") }
//         // catch (e){ // IF we land in the catch block that means what the user input could not be parsed
//         // so we need to alert("this is not JSON") }
//     } catch (err) {
//         window.alert("this is not JSON");
//         console.log("this is not an err", err);
//     }

//     try {
//     asdfasfasf;
// } catch (e) {
//     console.log(e); //logs 'ReferenceError: asdfasfasf is not defined'
// }
// console.log(typeof e); //logs 'undefined'

// upon clicking we want to check if we can actually parse with the help of JSON.parse(),
// what the user put in, that would be our correct check for whether or not sth is valid JSON;
// when we try to parse, stuff can go wrong so we'll need to wrap that try in a try catch block:
