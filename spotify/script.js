(function () {
    var nextUrl;
    $("#submit-btn").on("click", function () {
        console.log(
            "user clicked submit button wants to make reuqest for whatever they input and slected"
        );
        var userInput = $("input[name=user-input]").val();
        console.log("userInput", userInput);
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
                // var noResults = "";
                // responseData.items[i];
                // if (responseData.items[i] != 0) {
                //     noResults = responseData.items[i];
                //     alert("Try again!");
                //     // console.log("we have no results", noResults);
                // }
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
        console.log(nextUrl);
        $.ajax({
            url: nextUrl,
            method: "GET",
            success: function (data) {
                console.log("nextUrl:", nextUrl);
                data = data.albums || data.artists;
                var html2 = "";
                for (var i = 0; i < data.items.length; i++) {
                    var img = "./default.jpeg";
                    if (data.items[i].images[0]) {
                        img = data.items[i].images[0].url;
                    }
                    html2 += "<div>" + data.items[i].name + "</div>";
                }
                console.log(html2);
                $(".results-container").append(html2);
            },
        });
    });
    if (location.search.indexOf("scroll=infinite") === 1) {
        infiniteScroll = true;
        window.addEventListener("scroll", function () {
            console.log("scroll is firing");
            $(document).scrollTop() < $(document).height;
        });
})(); //closes iife

// function checkScrollPos() {
//     setTimeout(function () {
//         if (userHasReachedNearBottomOfPage) {
//             // maybe the user is like 500px away from the bottom
//             // if so, trigger 2nd ajax request (get next set of results)
//         } else {
//             // call this funciton again to check the scroll position (whether they're near the bottom)
//         }
//     }, 500);
// }

// place this querystring check in your ajax success function
// if (yourQueryStringIsInUrl) {
//     // call function to check whether the user is near the bottom of the page
// }

// $(window).scroll(function(){
//     if((window).scroll > )
// })
