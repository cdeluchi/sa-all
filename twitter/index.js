const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");
app.use(express.static("../ticker"));

app.get("/data-server.json", (req, res) => {
    getToken().then((useTweets) => {
        Promise.all([
            getTweets(useTweets, "Pink"),
            getTweets(useTweets, "coldplay"),
            getTweets(useTweets, "beyonce"),
        ]).then((results) => {
            const showResults = [...results[0], ...results[1], ...results[2]];
            const showTweets = showResults.sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at);
            });
            console.log("showTweets", showTweets);

            const filteredTweets = filterTweets(showTweets);
            res.json(filteredTweets);
        });
    });
});

app.listen(8080, () => console.log("Go already and see the tweets!"));
