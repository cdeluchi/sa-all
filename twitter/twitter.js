const { rejects } = require("assert");
const { response } = require("express");
const https = require("https");
const { resolve } = require("path");
const { consumerKey, consumerSecret } = require("./secrets");

module.exports.getToken = function () {
    return new Promise(function (resolve, reject) {
        let creds = `${consumerKey}:${consumerSecret}`;
        let encodedCreds = new Buffer.from(creds).toString("base64");

        const options = {
            host: "api.twitter.com",
            path: "/oauth2/token",
            method: "POST",
            headers: {
                Authorization: `Basic ${encodedCreds}`,
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
            },
        };
        const req = https.request(options, cb);
        req.end("grant_type=client_credentials");
        function cb(resp) {
            if (resp.statusCode != 200) {
                rejects(resp.statusCode);
            }
            let body = "";
            resp.on("data", (chunk) => {
                body += chunk;
            }).on("end", () => {
                let parsedBody = JSON.parse(body);
                resolve(parsedBody.access_token);
            });
        }
    });
};

module.exports.getTweets = function (bearerToken, useTweets) {
    return new Promise(function (resolve, reject) {
        const options = {
            method: "GET",
            host: "api.twitter.com",
            path: `/1.1/statuses/user_timeline.json?screen_name=${useTweets}&tweet_mode=extended`,
            screen_name: "Twitter",
            headers: {
                Authorization: `Bearer ${bearerToken}`,
            },
        };
        const req = https.request(options, cb);
        req.end("grant_type=client_credentials");
        function cb(resp) {
            if (resp.statusCode != 200) {
                rejects(resp.statusCode);
            }
            let body = "";
            resp.on("data", (chunk) => {
                body += chunk;
            }).on("end", () => {
                let parsedBody = JSON.parse(body);
                resolve(parsedBody);
            });
        }
    });
};

module.exports.filterTweets = function (twitter) {
    let twitterData = [];
    for (let i = 0; i < twitter.length; i++) {
        const formatedTweet = {};
        if (twitter[i].entities.urls.length === 1) {
            // console.log("tweets meet condition");
            formatedTweet.name = twitter[i].user["screen_name"];
            formatedTweet.text = twitter[i].display_text_range[(0, 25)];
            formatedTweet.text = twitter[i].full_text;
            formatedTweet.url = twitter[i].entities.urls[0].url;
            twitterData.push(formatedTweet);
        }
    }
    console.log(twitterData);
    return twitterData;
};
