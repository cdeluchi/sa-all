const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");
app.use(express.static("../ticker"));

app.get("/data-server.json", (req, res) => {
    console.log("request from twitter");

    getToken((err, bearerToken) => {
        if (err) {
            console.log("err in getToken: ", err);
            return;
        }
        console.log("bearerToken in index.js!! ", bearerToken);

        getTweets(bearerToken, (err, tweets) => {
            if (err) {
                console.log("err in getTweets: ", err);
                return;
            }
            // console.log("tweets in index.js! ", tweets);
            // aqui é onde todas as informaçnoes que pegamos da ultima function que criamos no outro arquivo
            // é aqui tambem que enviamos para a página de ticker
            const filteredTweets = filterTweets(tweets);
            res.json(filteredTweets);
        });
    });
});

app.listen(8080, () => console.log("twitter  server is ready"));
