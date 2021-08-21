(function () {
    var headlines = document.getElementById("headlines");
    var a = headlines.getElementsByTagName("a");

    var left = headlines.offsetLeft;

    /* function moveHeadlines() {
        left--;
        setTimeout(moveHeadlines, 16.666);
    }
    moveHeadlines(); */

    function moveHeadlines() {
        left--;
        if (left <= -a[0].offsetWidth) {
            left += a[0].offsetWidth;
            headlines.appendChild(a[0]);
        }
        headlines.style.left = `${left}px`;
        console.log(left);
        requestAnimationFrame(moveHeadlines);
    }
    moveHeadlines();
})();
