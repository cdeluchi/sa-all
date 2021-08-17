// DOM 2
// Make a page that has a <textarea> element on it.
// As the user types visible characters into this field,
// the characters should be replaced with the characters in the corresponding position in the Gettysburg Address.
// (Note - you can get and set the text in a <textarea> through its value property.)

// console.log("I am here");
// 1 need to creat a function to call the event
//  this time I have to use queryselector

var inputArea = document.querySelector("changeType");
var newText = "";
// parte of the text
    "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.";
// console.log("right?");
    changeType.addEventListener("input", function (event) {
    var newBag = event.target.value;

    document.querySelector("changeType") = replaceText;

// ei 1:
// document.getElementById('elem').addEventListener('mousedown', function() {
//     var html = this.innerHTML;
//     this.innerHTML = 'Your mouse is down!';

//     var elem = this;
//     var revert = function() {
//         elem.innerHTML = html;
//         document.removeEventListener('mouseup', revert);
//         document.removeEventListener('mouseleave', revert);
//     };
//     document.addEventListener('mouseup', revert);
//     document.addEventListener('mouseleave', revert);