// console.log("I am heree!");

(function () {
    var draw1 = document.getElementById("canvas").getContext("2d");

    // head
    draw1.beginPath();
    draw1.strokeStyle = "#c400ff";
    draw1.lineWidth = 10;
    draw1.fillStyle = "#ff67e7";
    draw1.arc(200, 150, 70, 0, 2 * Math.PI);
    draw1.stroke();
    draw1.fill();

    // body
    draw1.beginPath();
    draw1.strokeStyle = "#EF476F";
    draw1.moveTo(300, 300);
    draw1.lineTo(300, 550);
    draw1.stroke();

    // right arm
    draw1.beginPath();
    draw1.moveTo(300, 300);
    draw1.lineTo(400, 400);
    draw1.strokeStyle = "#26547C";
    draw1.stroke();

    // left arm
    draw1.beginPath();
    draw1.moveTo(300, 300);
    draw1.lineTo(200, 400);
    draw1.strokeStyle = "#26547C";
    draw1.stroke();

    // right leg
    draw1.beginPath();
    draw1.moveTo(300, 300);
    draw1.lineTo(400, 400);
    draw1.strokeStyle = "#06D6A0";
    draw1.stroke();

    // left leg
    draw1.beginPath();
    draw1.moveTo(500, 500);
    draw1.lineTo(400, 400);
    draw1.strokeStyle = "#06D6A0";
    draw1.stroke();
})();

// (function () {
//     var draw1 = document.getElementsById("canvas")[0];
//     var draw2 = can.getContext("2d");

//     // body
//     ctx.beginPath();
//     ctx.moveTo(100, 50);
//     ctx.lineTo(100, 200);
//     ctx.stroke();

//     ctx.beginPath();
// ctx.lineWidth = 10;
//     ctx.strokeStyle = "saddlebrown";
//     ctx.moveTo(100, 200);
//     ctx.lineTo(200, 125);
//     ctx.stroke();
// });

// can.addEventListener("dblclick", function () {
//     ctx.clearRect(0, 0, can.width / 2, can.height / 2);
// });

//     ctx.beginPath();
//     ctx.lineWidth = 20;
//     ctx.strokeStyle = "limegreen";
//     ctx.moveTo(200, 125);
//     ctx.lineTo(100, 50);
//     ctx.stroke();

//     ctx.fillStyle = "papayawhip";
//     ctx.fillRect(250, 300, 350, 400);

//     ctx.strokeRect(210, 260, 370, 380);

//     ctx.beginPath();
//     ctx.strokeStyle = "midnightblue";
//     ctx.fillStyle = "olivedrab";
//     ctx.arc(200, 200, 50, 0, 2 * Math.PI);
//     ctx.stroke();
//     ctx.fill();

// })();
