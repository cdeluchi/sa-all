// DOM event 4

// When the user clicks on the outer element its background color should change to a randomly selected color.
// However, if the user clicks on the inner element, the inner element's background color should change to
// a randomly selected background color but the outer element's background color should not change at all.

// console.log("Iam here!");

// create 2 bags with my boxs (var) boxOutside and (var) boxInside
// function has to contain the color generate randonly
// continue to use the Math.floor and Math.random to criate the numbers for my color rgb

var boxOutside = document.getElementById("boxoutside");
var boxInside = document.getElementById("boxinside");
console.log("I am right?");
function generateRandomColorNum() {
    return Math.floor(Math.random() * 256);
}
var generateRandomColor = () => {
    var r = generateRandomColorNum();
    var g = generateRandomColorNum();
    var b = generateRandomColorNum();
    var randomColor = "rgb(" + r + "," + g + "," + b + ")";
    return randomColor;
};
console.log("and now?");
boxOutside.addEventListener("click", function () {
    boxOutside.style.backgroundColor = generateRandomColor();
});

boxInside.addEventListener("click", function () {
    boxInside.style.backgroundColor = generateRandomColor();
});

// has to stop the "outsideBox" and changes "insideBox"
// need to use stop bubbling or stop propagation

var boxoutside = document.getElementById("boxoutside");
boxoutside.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("it's right?");
    boxinside += generateRandomNum();
    color.style.left = boxinside + "px";
});
