(function (diags) {
    var currentPlayer = "player1";
    var slots = $(".slot");
    // console.log("all slots ===> ", slots);

    $(".column").on("click", function (e) {
        // console.log("column is clicked!!!!! ", e);
        var col = $(e.currentTarget);
        // console.log("col clicked is ===> ", col);
        var slotsInCol = col.children();
        // console.log("slotsInCol: ", slotsInCol);

        for (var i = slotsInCol.length - 1; i >= 0; i--) {
            // console.log("each slot in this column ===> ", slotsInCol[i]);

            if (
                !slotsInCol.eq(i).hasClass("player1") &&
                !slotsInCol.eq(i).hasClass("player2")
            ) {
                slotsInCol.eq(i).addClass(currentPlayer);
                break;
            }
        }

        // console.log("i: ", i);
        if (i === -1) {
            // console.log("column is full - dont switch players!!!");
            return;
        }

        var slotsInRow = $(".row" + i);
        // console.log("slots in row: ", slotsInRow);

        // let's check here for victories before we switch players
        if (checkForVictoryColumn(slotsInCol)) {
            console.log("you have a column victory!!!!!");
            alert("You're the winner!🤸 🎉");
            $("#restart").on("click", function (alert) {
                playAgain.css("visibility", hidden);
            });
            console.log("playAgain");
            window.location.reload();
        } else if (checkForVictoryRow(slotsInRow)) {
            console.log("you have a row victory!!!");

            alert("You're the winner!🤸 🎉");

            window.location.reload();

            // console.log("nextplayer is ====> ", currentPlayer);
        }

        //  button restart
        function displayWinner() {
            alert.on("click");
            $("#restart").css("visibility", "visible");
            $("#restart").html(currentPlayer);
        }

        // function restart() {
        //     playAgain.innerHTML = "";
        //     loadDOM();
        //     (restart.style.display = "visibility"), "visible";
        // }

        function switchPlayer() {
            if (currentPlayer === "player1") {
                currentPlayer = "player2";
            } else {
                // we get in here if the currentplayer is player2
                currentPlayer = "player1";
            }
        }
        switchPlayer();

        function checkForVictoryColumn(slots) {
            var count = 0;
            // we're going to write some logic here to check to see who won!
            // this function expects us to pass it a set of slots so it can do its check!
            for (var i = 0; i < slots.length; i++) {
                // console.log(slots.eq(i).hasClass(currentPlayer));
                if (slots.eq(i).hasClass(currentPlayer)) {
                    count++;
                    if (count === 4) {
                        return true;
                    }
                } else {
                    count = 0;
                }
            }
            // console.log("count outside loop: ", count);
        }

        function checkForVictoryRow(slots) {
            var count = 0;
            for (var i = 0; i < slots.length; i++) {
                console.log(slots.eq(i).hasClass(currentPlayer));
                if (slots.eq(i).hasClass(currentPlayer)) {
                    count++;
                    if (count === 4) {
                        return true;
                    }
                } else {
                    count = 0;
                }
            }
            return false;
            // console.log("count outside loop: ", count);
        }
    });
})([
    [0, 7, 14, 21],
    [1, 8, 15, 22],
    [2, 9, 16, 23],
    [3, 8, 13, 18],
    [4, 9, 14, 19],
    [5, 10, 15, 20],
    [6, 13, 20, 27],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 14, 19, 24],
    [10, 15, 20, 25],
    [11, 16, 21, 26],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
    [14, 21, 28, 35],
    [15, 20, 25, 30],
    [16, 21, 26, 31],
    [17, 22, 27, 32],
    [18, 25, 32, 39],
    [19, 26, 33, 40],
    [20, 27, 34, 41],
    [21, 26, 31, 36],
    [22, 27, 32, 37],
    [23, 28, 33, 38],
]);

// animation
(function () {
    var text = document.querySelector(".four");
    var strText = text.textContent;
    var splitText = strText.split();
    text.textContent = "";
    console.log("splitText");

    for (var i = 0; i < splitText.length; i++) {
        text.innerHTML += "<span>" + splitText[i] + "</span>";
    }

    var char = 0;
    var timer = setInterval(onTick, 50);
    // function onTick() {
    var span = text.querySelectorAll("span")[char];
    span.classList.add(".fade");
    // char++;
    console.log("this is a function ", setInterval(onTick, 50));
    if (char === splitText.length) {
        complete();
        return;
    }

    function complete() {
        console.log(complete);
        clearInterval(timer);
        timer = null;
    }
})();
