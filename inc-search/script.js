(function (listOfCountries) {
    var searchField = $("input");
    var resultsContainer = $(".results-container");

    // #1 INPUT EVENT
    searchField.on("input", function () {
        var inputVal = searchField.val().toLowerCase();
        var getAjax;
        getAjax = [];
        if (inputVal.length == 0) {
            resultsContainer.hide();
            return;
        }

        $.ajax({
            url: "https://spicedworld.herokuapp.com/",
            data: {
                q: inputVal,
            },
            success: function (response) {
                if (inputVal === input.val().toLowerCase()) {
                    matches = response;
                    renderResults();
                } else {
                    console.log("incorrect results");
                }
            },
        });
    });

    // 💥 IF the input field is empty, don't show any results
    var matchResults = [];
    for (var i = 0; i < listOfCountries.length; i++) {
        if (listOfCountries[i].toLowerCase().indexOf(inputVal) === 0) {
            matchResults.push(listOfCountries[i]);
            if (matchResults.length === 4) {
                break;
            }
        }
    }

    var htmlForCountries = "";
    // 💥 IF the user types gibbersih or sth that doesn't match anything, we need to render "no results"
    for (var j = 0; j < matchResults.length; j++) {
        htmlForCountries += "<p class='country'>" + matchResults[j] + "</p>";
    }
    // console.log("htmlForCountries:", htmlForCountries);
    // step 2: put it on screen
    resultsContainer.html(htmlForCountries);
});

// #2 MOUSEOVER EVENT
// problem, the p tags that we want to listen on for the mouseover, are not present when the script initially loads, so we need to attach our listener to sth that IS there upon loading

resultsContainer.on("mousedown", function (event) {
    // console.log("when mousedown in a country it will fix at the input box");
    var country = $(event.target).html();
    // console.log($(event.target).html());
    searchField.val(country);
    // when the user click at the country the another country should desapear.
    resultsContainer.hide();
});
// now when the mouse hover in this country the color of the mouse should change.
resultsContainer.on("mouseover", "p", function (e) {
    $(".highlight").removeClass("highlight");
    $(e.target).addClass("highlight");
    // console.log(e.target);
});

// KEY DOWN event
resultsContainer.on("keydown", function (event) {
    if (event.keyCode === 40) {
        //arrow down
        //loop for all "p" country and apply the .class
        for (var i = 0; i < $("p").length; i++) {
            if ($("p").eq(i).hasClass("highllight")) {
                // when has no more "p" stop here
                break;
            }
        }
        if (i !== 0) {
            // use remove class before add class as we used in #2
            $("p").eq(i).removeClass("highlight");
            $("p")
                .eq(i - 1)
                .addClass("highlight");
            console.log("highlight");
        }
    }
});
var boxFocus = false;
searchField.on("click", function (e) {
    boxFocus = true;
    resultsContainer.css("boxfocus", "visible");
    searchField.addClass("bordefocus");
});
