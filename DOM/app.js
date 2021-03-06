//  ex1
// Write a function that expects a string representing a selector to be passed as a parameter.
// The function should find all the elements in the document that match the selector
// and change their style so that the text they contain is italic, underlined, and bold.
function changeParameter(selector) {
    var parameter1 = document.querySelectorAll(selector);
    console.log(parameter1);
    for (var i = 0; i < parameter1.length; i++) {
        parameter1[i].style.fontWeight = "bold";
        parameter1[i].style.fontStyle = "italic";
        parameter1[i].style.textDecoration = "underline";
    }
    console.log(changeParameter);
}

// ex 2
// Write a function that expects a string representing a class name to be passed as a parameter.
// The function should return an array containing all the elements in the document that have the class that was passed in.
function classToCall(container) {
    var emptyArr = [];
    var allMyClassH1 = document.getElementsByClassName("container");
    console.log(allMyClassH1);
    for (var i = 0; i < allMyClassH1.length; i++) {
        emptyArr.push(allMyClassH1[i]);
    }
    return emptyArr;
}
classToCall("calleveryone");

//  ex 3
// Write a function that inserts an element into the body of the currently loaded page.
// That element should have fixed position, z-index of 2147483647, left of 20px, top of 100px, font-size of 200px, and contain the text 'AWESOME'.
var newList = document.createElement("body");
var elements = document.createTextNode(
    (style =
        "position:fixed,z-index:2147483647;left:20px;top:100px;font-size:200px" >
        "AWESOME")
);
newList.appendChild(elements);
