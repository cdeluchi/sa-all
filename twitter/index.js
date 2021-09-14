const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");
app.use(express.static("../ticker"));

app.get("/data-server.json", (req, res) => {
    getToken()
        .then((bearerToken) => {
            getTweets(bearerToken)
                .then((tweets) => {
                    console.log("request Token", bearerToken);
                    console.log("get Tweets: ", tweets);
                    const filteredTweets = filterTweets(tweets);
                    res.json(filteredTweets);
                })
                .catch((err) => console.log("err in get Tweets", err));
        })
        .catch((err) => console.log("err in request Token", err));
});

app.listen(8080, () => console.log("Go already and see the tweets!"));
