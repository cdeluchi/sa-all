console.log("local Storage", $);

(function () {
    var str = [];
    // created an ampty string, who will receive all the text/info that was pass in a text box
    // function to give the text to the ampty str.
    $("textarea").val(localStorage.getItem("text"));
    $("textarea").on("input", function () {
        //    that text will return to the empty str []
        return str;
    });
    // will set the info, when the user text something, will fixed here
    localStorage.setItem("text", $("textarea").val());
})();
