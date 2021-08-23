console.log("jQuery linked?", $);

var document = $(document);
var bottom = $(".bottom");
var top = $(".top").outerWidth();
var slider = $(".slider").offset().left;

$(function () {
    $(document).resizable({
        handleSelector: ".top",
        resizeHeight: false,
    });
});

var left = 0;

slider.on("mousedown", function (e) {
    e.preventDefault();

    $(document).on("mousemove", function (e) {
        slider.css({
            left: e.clickX + "px",
        });

        $(top).css({
            width: e.clientX + "px",
        });
    });

    $(document).on("mouseup", function (e) {
        $(document).unbind();
    });
});

// var document = $(document);
// var slider = $(".slider");
// var widthSize = $(".top").outerWidth();
// var rightLimit = $(".slider").offset().left;

// var left = 0;

// console.log(widthSize, rightLimit);

// slider.on("mousedown", function (e) {
//     e.preventDefault();

//     $(document).on("mousemove", function (e) {
//         slider.css({
//             left: e.clientX + "px",
//         });

//         $(".top").css({
//             width: e.clientX + "px",
//         });
//     });

//     $(document).on("mouseup", function (e) {
//         console.log("Not moving");
//         $(document).unbind();
//     });
// });
