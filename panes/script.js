console.log("jQuery linked?", $);

var document = $(.container);
var bottom = $(".bottom");
var top = $(".top");
var slider = $(".slider");

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

