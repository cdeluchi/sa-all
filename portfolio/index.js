const http = require("http");
const fs = require("fs");
const path = require("path");
const contentType = {
    ".css": "text/css",
    ".html": "text/html",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
};
const generateOverview = require("./generateOverview");

http.createServer((req, res) => {
    req.on("error", (err) => console.log("err in req:", err));
    res.on("error", (err) => console.log("err in res:", err));

    if (req.method != "GET") {
        console.log("not a GET request, not ok 🙅‍♀️");
        res.statusCode = 405;
        return res.end();
    }
    console.log(req.url);
    if (req.url === "/") {
        const homePage = generateOverview.projectOverviewHtml();
        console.log(homePage);
        res.end(homePage);
        return;
    }

    const myPath = `${__dirname}/projects${req.url}`;
    console.log("myPath:", myPath);
    if (!myPath.startsWith(__dirname + "/projects")) {
        console.log(
            "🚨 INTRUDER ALERT USER WANTS TO GO SOMEWHERE THEY SHOULDN'T 🚨"
        );
        res.statusCode = 403;
        return res.end();
    }
    let readStreamHtml;
    fs.stat(myPath, (err, stats) => {
        if (err) {
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

                readStreamHtml = fs.createReadStream(myPath + "index.html");
                readStreamHtml.on("error", (err) => {
                    console.log("err on readstream:", err);
                    res.statusCode = 500;

                    return res.end();
                });
            } else {
                res.setHeader("Location", req.url + "/");
                res.statusCode = 302;
                return res.end();
            }
        } else {
            console.log("user is requesting a file, we should serve it");
            readStreamHtml = fs.createReadStream(myPath);
            res.setHeader("content-type", contentType[path.extname(myPath)]);
            res.statusCode = 200;
            readStreamHtml.on("error", (err) => {
                res.statusCode = 500;
                return res.end();
            });
        }
        readStreamHtml.pipe(res);
    });
}).listen(8080, () => console.log("keep calm you got this!✨"));
