// Dom event 3
// Make a page that has on it an element that is 100px by 100px in size and has a solid black border.
// When the user mouses down on this box, its background should change to a randomly selected color.
// When the user mouses up on it, its background should change to another randomly selected color.

// console.log("iam here!");

// create an addEventListener and then a function.
// function + event, this event will make my background to change.
// this.style.backgroundColor has to acepted the genrateRandomColor()
// mousedowm mouseup are the action that I need to manipulate

boxColors.addEventListener("mousedown", function (event) {
    if (event) {
        this.style.backgroundColor = generateRandomColor();
    }
});

boxColors.addEventListener("mouseup", function (event) {
    if (event) {
        this.style.backgroundColor = generateRandomColor();
    }
});
console.log(boxColors);

// use DOM to get the element from my HTML this case "box"
// create a function that make the color to generate the random color.
// use the Math.flor and Math.random to generate a number who will be use in my generateRandomColorNum (rgb)
// create a new var with this rgb random create befor and concatenate in a string
// has to be return as a random color.

var boxColors = document.getElementById("box");
console.log(boxColors);
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

// ****doesn't works**** 🙄

// (ie Merle)
// document.addEventListener("keydown", function (event) {
//         if (event.keyCode === 32) {
//             console.log(
//                 "should change backgroundcolor of body to random color"
//             );
//             var r = generateRandomColorNum();
//             var g = generateRandomColorNum();
//             var b = generateRandomColorNum();
//             var randomColor = "rgb(" + r + "," + g + "," + b + ")";
//             console.log("randomColor", randomColor);
//             document.body.style.backgroundColor = randomColor;
//         }
//     });

//     function generateRandomColorNum() {
//         return Math.floor(Math.random() * 256);
//     }
// })();
