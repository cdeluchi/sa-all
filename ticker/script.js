$.ajax({
    method: "GET",
    url: "data.json",
    success: function (arrayOfHeadlines) {
        console.log(arrayOfHeadlines);
        for (var i = 0; i < arrayOfHeadlines.length; i++) {
            $("body").html("<div id=>" + "</div>");
            console.log("body");
        }
        moveHeadlines();
    },
});
(function () {
    var headlines = document.getElementById("headlines");
    var a = headlines.getElementsByTagName("a");
    var left = headlines.offsetLeft;
    var stopRun;

    function moveHeadlines() {
        left--;
        if (-left === a[0].offsetWidth) {
            headlines.appendChild(a[0]);
            left = 0;
        }
        headlines.style.left = left + "px";
        stopRun = requestAnimationFrame(moveHeadlines);
    }
    moveHeadlines();

    function stopHeadlines(stopRun) {
        window.cancelAnimationFrame(stopRun);
    }

    for (var i = 0; i < a.length; i++) {
        a[i].addEventListener("mouseenter", function () {
            this.classList.add("hover");
            stopHeadlines(stopRun);
        });
        a[i].addEventListener("mouseleave", function () {
            this.classList.remove("hover");
            moveHeadlines();
        });
    }
})();

// (function () {
//     // var headlines = document.getElementById("headlines"); Vanilla JS
//     var jQHeadlines = $("#headlines"); //jQuery
//     // var left = headlines.offsetLeft; Vanilla JS
//     var jQLeft = $("#headlines");

//     /* function moveHeadlines() {
//         left--;
//         setTimeout(moveHeadlines, 16.666);
//     }
//     moveHeadlines(); */

//     function moveHeadlines() {
//         left--;
//         if (left <= -a[0].offsetWidth) {
//             left += a[0].offsetWidth;
//             headlines.appendChild(a[0]);
//         }
//         $("#headlines").style.left = `${left}px`;
//         console.log(left);
//         requestAnimationFrame(moveHeadlines);
//     }
//     moveHeadlines();
// })();
