console.log("it's right the JSON", $);

(function () {
    var catchText = $("input");
    var button = $(".btn");

    catchText.on("input", function () {
        var inputVal = catchText.val();
        // console.log(catchText.val());
        var realJson = [];
        button.on("click", function () {
            if (inputVal === parse) {
                return "Yes, it's a JSON!";
            } else {
                return "no, you're wrong!";
            }
        });
    });
});
