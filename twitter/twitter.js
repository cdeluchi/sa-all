const https = require("https");
const { consumerKey, consumerSecret } = require("./secrets");

module.exports.getToken = function (callback) {
    let creds = `${consumerKey}:${consumerSecret}`;
    let encodedCreds = new Buffer.from(creds).toString("base64");

    const options = {
        host: "api.twitter.com",
        path: "/oauth2/token",
        method: "POST",
        headers: {
            Authorization: `Basic ${encodedCreds}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };
    const req = https.request(options, cb);
    req.end("grant_type=client_credentials");
    function cb(resp) {
        if (resp.statusCode != 200) {
            callback(resp.statusCode);
            return;
        }

        let body = "";
        resp.on("data", (chunk) => {
            body += chunk;
        }).on("end", () => {
            console.log("body in twitter.js: ", body);
            let parsedBody = JSON.parse(body);
            console.log("parsedBody: ", parsedBody);
            callback(null, parsedBody.access_token);
        });
    }
};

module.exports.getTweets = function (bearerToken, callback) {
    const options = {
        method: "GET",
        host: "api.twitter.com",
        path: "/1.1/statuses/user_timeline.json?screen_name=nytimes&tweet_mode=extended",
        screen_name: "Twitter",
        headers: {
            Authorization: `Bearer ${bearerToken}`,
        },
    };

    const req = https.request(options, cb);
    req.end();
    function cb(resp) {
        if (resp.statusCode != 200) {
            callback(resp.statusCode);
            return;
        }

        let body = "";
        resp.on("data", (chunk) => {
            body += chunk;
        }).on("end", () => {
            let parsedBody = JSON.parse(body);
            callback(null, parsedBody);
        });
    }
};

module.exports.filterTweets = function (twitter) {
    let twitterData = [];
    for (let i = 0; i < twitter.length; i++) {
        // twitterData += {
        //     url: twitter[i],
        //     text: twitter[i],
        // };
        const formatedTweet = {};
        if (twitter[i].entities.urls.length === 1) {
            console.log("tweets meet condition");
            // console.log(twitter[i].full_text);
            formatedTweet.text = twitter[i].full_text;
            formatedTweet.url = twitter[i].entities.urls[0].url;
            // console.log(twitter[i].entities.urls[0].url);
            // console.log(formatedTweet);
            twitterData.push(formatedTweet);
        }
    }
    console.log(twitterData);
    return twitterData;
};
