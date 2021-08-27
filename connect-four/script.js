(function () {
    var playerOne = "player1";
    var slots = $(".slot");
    // console.log("how many slots: ", slots);
    // every slots appear here!

    $(".column").on("click", function (event) {
        var eachColumn = $(event.currentTarget);
        var eachSlotInCol = eachColumn.children();
        // console.log("eachColumn");

        // now I need to do an for loop to go to all the columns.
        for (var i = eachSlotInCol.length - 1; i >= 0; i--);
        {
            // console.log("which collumn am I? ", eachSlotInCol[i]);

            // and we need to say what we want to do with this information. if the ficha is with another player, it will be with another player.
            // if the column is full don't have to change the player but is is empty it will be the next one to play.
            if (
                !eachSlotInCol.eq(i).hasClass("player1") &&
                !eachSlotInCol.eq(i).hasClass("player2")
            ) {
                // the eachSlotInCol will call the current player or the player who has the ficha and will play.
                eachSlotInCol.eq(i).addClass(playerOne);
                break;
            }
        }
        console.log("i: ", i);
        if (i === -1) {
            return;
        }
    });
})();
