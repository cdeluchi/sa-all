(function () {
    var currentPlayer = "player1";

    var slotsInRow = $(".slot");
    console.log("all slotsInRow ===> ", slotsInRow);

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

        var slotsInRow = $(".row" + i);
        console.log("slotsInRow in row: ", slotsInRow);

        // let's check here for victories before we switch players

        if (checkForColumnVictory(slotsInCol)) {
            displayWinner();
            $(".column").trigger("reset");
        } else if (checkForRowVictory(slotsInRow)) {
            displayWinner();
        } else if (checkForDiagonalVictory(slotsInCol, slotsInRow)) {
            displayWinner();
        }
        if (i === -1) {
            // console.log("column is full - dont switch players!!!");
            return;
        }
    });
    //     // if this is truthy, then we're going to do a victory dance!
    //     console.log("you have a column victory!!!!!");
    // } else if (check for horizontal victory) {
    //     console.log('you have a horizontal victory!!!');
    // }
    switchPlayer();

    function switchPlayer() {
        if (currentPlayer === "player1") {
            currentPlayer = "player2";
        } else {
            // we get in here if the currentplayer is player2
            currentPlayer = "player1";
        }
        // console.log("nextplayer is ====> ", currentPlayer);

        // instead of an if/else, you can also use ternary operator like so:
        // currentPlayer === "player1"
        //     ? (currentPlayer = "player2")
        //     : (currentPlayer = "player1");
    }

    function displayWinner() {
        $(".column").off("click");
        $("h3").css("visibility", "visible");
        $("#current-player").html(currentPlayer);
    }

    //  COLUMN VICTORY

    function checkForColumnVictory(slots) {
        var count = 0;
        // we're going to write some logic here to check to see who won!
        // this function expects us to pass it a set of slotsInRow so it can do its check!
        for (var i = 0; i < slotsInRow.length; i++) {
            // console.log(slotsInRow.eq(i).hasClass(currentPlayer));
            if (slotsInRow.eq(i).hasClass(currentPlayer)) {
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

    //  ROW VICTORY

    function checkForRowVictory(slotsInRow) {
        var count = 0;
        // we're going to write some logic here to check to see who won!
        // this function expects us to pass it a set of slotsInRow so it can do its check!
        for (var i = 0; i < slotsInRow.length; i++) {
            // console.log(slotsInRow.eq(i).hasClass(currentPlayer));
            if (slotsInRow.eq(i).hasClass(currentPlayer)) {
                count++;
                if (count === 4) {
                    return true;
                }
            } else {
                count = 0;
            }
        }
    }

    //  DIAGONA VICTORY

    function checkForDiagonalVictory(slotsInCol, slotsInRow) {
        var count = 0;
        // we're going to write some logic here to check to see who won!
        // this function expects us to pass it a set of slotsInRow so it can do its check!
        for (var i = 0; i < slotsInRow.length; i++) {
            // console.log(slotsInRow.eq(i).hasClass(playerTurn));
            if (slotsInRow.eq(i).hasClass(currentPlayer)) {
                count++;
                for (var j = 0; j < slotsInRow.length; j++) {}
                for (var k = 0; k < slots.length; k++) {}
            }
        }
    }
})();
