(function () {
    // console.log("yup all the logic runs, also jQuery is linked up:", $)

    // #1st Step: add a clickhandler to our submit btn
    $("#submit-btn").on("click", function () {
        console.log(
            "user clicked submit button wants to make reuqest for whatever they input and slected"
        );
        var userInput = $("input[name=user-input]").val(); //retrieving user input upon clicking
        console.log("userInput", userInput);
        var albumOrArtist = $("select").val(); // retrieveing dropdown select value cupon clicking
        // console.log("albumOrArtist", albumOrArtist);
        // time to make our request to the spotify API, aka our poxy :)
        $.ajax({
            url: "https://spicedify.herokuapp.com/spotify",
            method: "GET",
            data: {
                query: userInput,
                type: albumOrArtist,
            },
            success: function (responseData) {
                responseData = responseData.artists || responseData.albums;
                // console.log("response fro spotify API:", responseData);

                // we'll need to obtain three things to start with: artist/album
                // name's, external_urls, and images
                var myHtml = "";
                for (var i = 0; i < responseData.items.length; i++) {
                    // console.log(
                    //     "responsesData.items[i]",
                    //     responseData.items[i]
                    // );
                    // make sure there is always an image to render
                    //img URL
                    var imgUrl = "./default.jpg";
                    // does my aritists or albums object have images?
                    if (responseData.items[i].images.length > 0) {
                        console.log("yes we got an image to set!");
                        var imgUrl = responseData.items[i].images[0].url;
                        imgUrl +=
                            "<div>" +
                            "<a>" +
                            responseData.items[i].images +
                            "</a>" +
                            "</div>";
                    }
                    $(".results-container").html(imgUrl);
                    console.log(
                        "should there be a image?",
                        responseData.images
                    );

                    // console.log("imgUrl:", imgUrl);
                    // myHtml ultimately needs to generate an image and a link to the
                    // aritst or album page
                    myHtml += "<div>" + responseData.items[i].name + "</div>";
                }
                // console.log(
                //     "should there be a more button?",
                //     responseData.next
                // );
                var nextUrl =
                    responseData.next &&
                    responseData.next.replace(
                        "api.spotify.com/v1/search",
                        "spicedify.herokuapp.com/spotify"
                    );
                // console.log("nextUrl:", nextUrl);
                // if nextUrl is null we want to hide the more button,
                // as there is no more results to obtain

                // inject our html we composed in the for loop into our html page:
                $(".results-container").html(myHtml);
            },
        });
    }); //closes click handler for search

    // When your search returns results, you should render a message that reads:
    // "Results for whateverTheUserWasSearchingFor"
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
