(function () {
    var nextUrl;
    $("#submit-btn").on("click", function () {
        // console.log(
        //     "user clicked submit button wants to make reuqest for whatever they input and slected"
        // );
        var userInput = $("input[name=user-input]").val();
        // console.log("userInput", userInput);
        var albumOrArtist = $("select").val(); // .val() = used to get the values of form elements such as input, select and textarea
        $.ajax({
            url: "https://spicedify.herokuapp.com/spotify",
            method: "GET",
            data: {
                query: userInput,
                type: albumOrArtist,
            },
            success: function (responseData) {
                responseData = responseData.artists || responseData.albums;
                var myHtml = "";

                for (var i = 0; i < responseData.items.length; i++) {
                    var imgUrl = "./default.jpeg";
                    // console.log(
                    //     "should there be a image?",
                    //     responseData.items[i].images
                    // );
                    // console.log(
                    //     "find link",
                    //     responseData.items[i].external_urls.spotify
                    // );
                    var link = responseData.items[i].external_urls.spotify;
                    if (responseData.items[i].images.length > 0) {
                        // console.log("yes we got an image to set!");
                        imgUrl = responseData.items[i].images[0].url;
                    }
                    myHtml +=
                        "<div> <a href='" +
                        link +
                        "'><img class='imgA' src='" +
                        imgUrl +
                        "'>" +
                        responseData.items[i].name +
                        "</a></div>";
                    // <a href="someLinkWeGotFromTheApi"><img src="theSrcToTheImage" alt=""><p>TheNameWeGotFromTheApi</p></a>
                    // console.log(imgUrl);
                }
                nextUrl =
                    responseData.next &&
                    responseData.next.replace(
                        "api.spotify.com/v1/search",
                        "spicedify.herokuapp.com/spotify"
                    );
                $(".results-container").html(myHtml);
            },
        });
    }); //closes click handler for search

    // button More
    $("#more").on("click", function () {
        // console.log(nextUrl);
        $.ajax({
            url: nextUrl,
            method: "GET",
            success: function (data) {
                // console.log("nextUrl:", nextUrl);
                data = data.albums || data.artists;
                var html2 = "";
                for (var i = 0; i < data.items.length; i++) {
                    var img = "./default.jpeg";
                    if (data.items[i].images[0]) {
                        img = data.items[i].images[0].url;
                    }
                    html2 += "<div>" + data.items[i].name + "</a></div>";
                }
                // console.log(html2);
                $(".results-container").append(html2);
            },
        });
    });

    if (location.search.indexOf("scroll=infinite") != -1) {
        // infiniteScroll = true;
        checkScrollPos();

        function checkScrollPos() {
            setTimeout(function () {
                if (
                    $(window).height() ==
                    $(document).scrollTop() > $(document).height() - 500
                ) {
                    function scrollFunc(responseData) {
                        console.log("more", nextUrl);
                        checkScrollPos();
                        $.ajax({
                            url: nextUrl,
                            method: "GET",
                            success: function (responseData) {
                                // console.log("nextUrl:", nextUrl);
                                checkScrollPos();
                                var html2 = "";
                                responseData =
                                    responseData.albums || responseData.artists;

                                for (
                                    var i = 0;
                                    i < responseData.items.length;
                                    i++
                                ) {
                                    var imgUrl = "./default.jpeg";
                                    if (
                                        responseData.items[i].images.length > 0
                                    ) {
                                        imgUrl =
                                            responseData.items[i].images[0].url;
                                    }
                                    html2 +=
                                        "<div>" +
                                        responseData.items[i].name +
                                        "</div>";
                                }
                                $("#more").hide();

                                nextUrl =
                                    responseData.next &&
                                    responseData.next.replace(
                                        "api.spotify.com/v1/search",
                                        "spicedify.herokuapp.com/spotify"
                                    );
                                // console.log(html2);
                                $(".results-container").append(html2);
                            },
                        });
                    }
                }
                // checkScrollPos();
            }, 0);
        }
    }

    // if (location.search.indexOf("scroll=infinite") === 1) {
    //     infiniteScroll = true;
    //     function checkScrollPos() {
    //         $("#more").addClass(".hidden");
    //         $(".results-container").html(nextUrl);
    //     }
    // }
})(); //closes iife

// console.log($(document).height() - $(window).height());
