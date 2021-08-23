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


