const http = require("http");
const fs = require("fs");
const path = require("path");
// const { projectOverviewHtml } = require("./generateOverview.js");
// logs the export object of generateOverview:
// console.log("projectOverviewHtml:", projectOverviewHtml);
// demo of invoke the function we required
// projectOverviewHtml();
// same as above just NOT destructured
// const projectOverviewHtml = require("./generateOverview");
// console.log("projectOverviewHtml:", projectOverviewHtml);

// approach to keeping track of our potential headers to set:✅
// properties of the extensions and values for which header should be set
const contentType = {
    ".css": "text/css",
    ".html": "text/html",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
};
// alternative for setting the correct headers for our files:
// write a funciton that gets passed an extension, and that has
// a bunch of if/else statements and returns the correct header
// for the passed in extension

http.createServer((req, res) => {
    // handle potential error on our request and response
    req.on("error", (err) => console.log("err in req:", err));
    res.on("error", (err) => console.log("err in res:", err));

    // our server only needs to be able to handle GET requests,
    // so let's make sure anything else gets shut down
    if (req.method != "GET") {
        console.log("not a GET request, not ok 🙅‍♀️");
        res.statusCode = 405; // status code: method not allowed
        return res.end(); // we return here to make sure we don't accidentally end
        // up sending mutiple responses to one incoming request!
    }
    // path to the project the user requested ✅
    console.log(req.url);
    const myPath = path.normalize(`${__dirname}/projects${req.url}`);

    console.log("myPath:", myPath);
    if (!myPath.startsWith(__dirname + "/projects")) {
        console.log(
            "🚨 INTRUDER ALERT USER WANTS TO GO SOMEWHERE THEY SHOULDN'T 🚨"
        );
        res.statusCode = 403; // forbidden;
        return res.end();
    }

    // if a request makes it to here, that means this is a legit request :D
    fs.stat(myPath, (err, stats) => {
        if (err) {
            //whatever got requested does not exist
            console.log("err in fs.stat:", err);
            res.statusCode = 404; // not found
            return res.end(`<!doctype html>
            <html><h1>PAGE NOT FOUND :(</h1></html>`);
        }
        if (stats.isDirectory()) {
            if (req.url.endsWith("/")) {
                console.log(
                    "user wants a directory, that means we should serve the index.html"
                );
                // #1 create readstream to index.html of project requested ✅
                const readStreamHtml = fs.createReadStream(
                    myPath + "index.html"
                );
                // #2 set the correct headers for what I want to send ✅
                res.setHeader("Location", "/");

                //# 3 send over our actual data chunks from the readstream above ✅
                // readStreamHtml.pipe(res);
                if (res.pipe(readStreamHtml) === true) {
                    return readStreamHtml;
                } else {
                    res.statusCode = 404; // not found
                }

                // #4 need to do some error handling for the readstream ✅
                readStreamHtml.on("error", (err) => {
                    console.log("err on readstream:", err);
                    res.statusCode = 500; // internal server error;
                    return res.end();
                });
            }
            // if (request.url === "/") {
            //     response.statusCode = 302;
            //     response.setHeader("Location", "/");
            //     response.end();
            // } else {
            //     response.setHeader("content-type", "text/html");
            //     response.statusCode = 200;
            //     response.end();
            // }
        } else {
            console.log("user is requesting a file, we should serve it");
            // to serve it we need to
            // #1 create a readstream
            // #2 set the correct headers
            // figure out what header we should set based on the file extension✅
            const readStreamHtml = fs.createReadStream(myPath);
            // const contType = contentType;
            res.setHeader("content-type", contentType[path.extname(myPath)]);
            res.statusCode = 200;
            readStreamHtml.pipe(res);
            readStreamHtml.on("error", (err) => {
                res.statusCode = 500;
                return res.end();
            });
            // console.log(
            //     "file extension of requested file:",
            //     path.extname(myPath)
            // );
            // set the correct header:
            // i.e. for .css we would want to res.setHeader("Content-Type", "text/css");
            // #3 pipe our datachunks from the readstream above and pass it the response
            // #4 handle any potential errors on the readstream
        }
    });
}).listen(8080, () => console.log("keep calm you got this!✨"));
