// console.log("here");
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
