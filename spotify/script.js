(function () {
    $("#submit-btn").on("click", function () {
        console.log(
            "user clicked submit button wants to make reuqest for whatever they input and slected"
        );
        var userInput = $("input[name=user-input]").val();
        console.log("userInput", userInput);
        var albumOrArtist = $("select").val();
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
                    console.log(
                        "find link",
                        responseData.items[i].external_urls.spotify
                    );
                    var link = responseData.items[i].external_urls.spotify;
                    if (responseData.items[i].images.length > 0) {
                        console.log("yes we got an image to set!");
                        imgUrl = responseData.items[i].images[0].url;
                    }
                    myHtml +=
                        "<div> <a href='" +
                        link +
                        "'><img src='" +
                        imgUrl +
                        "'>" +
                        responseData.items[i].name +
                        "</a></div>";
                    // <a href="someLinkWeGotFromTheApi"><img src="theSrcToTheImage" alt=""><p>TheNameWeGotFromTheApi</p></a>
                    console.log(imgUrl);
                }
                var nextUrl =
                    responseData.next &&
                    responseData.next.replace(
                        "api.spotify.com/v1/search",
                        "spicedify.herokuapp.com/spotify"
                    );
                $(".results-container").html(myHtml);
            },
        });
    }); //closes click handler for search
})(); //closes iife

// // $("#more").on("click", function () {
//     var userInput = $("input[name=user-input]").val();
//     console.log("userInput", userInput);
//     var albumOrArtist = $("select").val();
//     $.ajax({
//         url: "https://spicedify.herokuapp.com/spotify",
//         method: "GET",
//         success: function (responseData) {
//             responseData = responseData.artists || responseData.albums;
//             var myHtml = "";
//             for (var i = 0; i < responseData.items.length; i++) {
//                 myHtml += "<div>" + "<a>"+ responseData.items[i].link + "</a>" + "</div>";
//         }
//     });
