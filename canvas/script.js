console.log("here");
// function() {
var context = document.getElementById("canv").getContext("2d");

// body
context.beginPath();
context.strokeStyle = "#EF476F";
context.moveTo(100, 50);
context.lineTo(100, 150);
context.stroke();

// arms
context.beginPath();
context.strokeStyle = "#26547C";
context.moveTo(100, 50);
context.lineTo(150, 100);
context.moveTo(100, 50);
context.lineTo(50, 100);
context.moveTo(0, 0);
context.stroke();

// legs
context.beginPath();
context.strokeStyle = "#06D6A0";
// context.moveTo(200, 150);
// context.lineTo(350, 200);
// context.moveTo(80, 180);
// context.lineTo(100, 150);
// context.moveTo(200, 360);
// context.lineTo(100, 150);
context.moveTo(100, 150);
context.lineTo(50, 200);
context.moveTo(100, 150);
context.lineTo(150, 200);
context.stroke();

// head
context.beginPath();
context.strokeStyle = "#c400ff";
context.lineWidth = 20;
context.fillStyle = "#ff67e7";
context.arc(100, 30, 10, 0, 2 * Math.PI);
context.stroke();
// context.fill();

// }

// (function () {
//     var draw1 = document.getElementById("canvas").getContext("2d");

//     // head
//     draw1.beginPath();
//     draw1.strokeStyle = "#c400ff";
//     draw1.lineWidth = 10;
//     draw1.fillStyle = "#ff67e7";
//     draw1.arc(200, 150, 70, 0, 2 * Math.PI);
//     draw1.stroke();
//     draw1.fill();

//     // body
//     draw1.beginPath();
//     draw1.strokeStyle = "#EF476F";
//     draw1.moveTo(300, 300);
//     draw1.lineTo(300, 550);
//     draw1.stroke();

//     // right arm
//     draw1.beginPath();
//     draw1.moveTo(300, 300);
//     draw1.lineTo(400, 400);
//     draw1.strokeStyle = "#26547C";
//     draw1.stroke();

//     // left arm
//     draw1.beginPath();
//     draw1.moveTo(300, 300);
//     draw1.lineTo(200, 400);
//     draw1.strokeStyle = "#26547C";
//     draw1.stroke();

//     // right leg
//     draw1.beginPath();
//     draw1.moveTo(300, 300);
//     draw1.lineTo(400, 400);
//     draw1.strokeStyle = "#06D6A0";
//     draw1.stroke();

//     // left leg
//     draw1.beginPath();
//     draw1.moveTo(500, 500);
//     draw1.lineTo(400, 400);
//     draw1.strokeStyle = "#06D6A0";
//     draw1.stroke();
// })();
