// DOM event 1

// Make a page that has on it an element that is 100px by 100px in size,
// has absolute positioning, and has a solid background color.
// Add an event handler that makes this box center itself directly under the user's
// mouse pointer as it is moved across the screen.

// console.log("i am here");

// e. i. var box = document.getElementById("box");
// box.addEventListener("click", function () {
//     console.log("you clicked on the box, and you want to make it round");
//     box.style.borderRadius = "50%";
// });

var moveBox = document.getElementById("box");
console.log(moveBox);
var positionup = 50;
var positiondown = 50;
document.addEventListener("mousemove", function (event) {
    if (event) {
        moveBox.style.left = event.pageX + "px";
        moveBox.style.top = event.pageY + "px";
    }
});

// function moveBox(e) {
//     TweenLite.to(moveBox, 0.3, {
//         css: {
//             left: e.pageX,
//             top: e.pageY,
//         },
//     });
// }
// using the css inside a function
// this is not a good idea, too many changes to make
// $(window).on("mousemove", moveBox);

// var positionUp;
// if (event.pageX || event.pageY) {
//  positionDown = event.pageX;
//  positionUp = event.pageY;
// } else {
