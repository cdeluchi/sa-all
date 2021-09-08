const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("./projects"));

app.use((req, res, next) => {
    // console.log(`A ${req.method} request was made to the ${req.url} route`);
    // console.log("req.cookies: ", req.cookies);
    next();
});

app.get("/cookie", (req, res) => {
    res.send(
        `<h1>Accept cookies? 🎠</h1><h2><form method='POST'> <input type="checkbox" name="subscribe"></div> <button> submit </submit> </form>`
    );
});

app.post("/cookie", (req, res) => {
    const { subscribe } = req.body;
    console.log("subscribe: ", subscribe);
    if (subscribe) {
        res.cookie("cookieAccepted", "true");
        res.send("<h2>You are the best 🤸</h2>");
    } else {
        res.send("<h2>You need to accept the cookies 🥊</h2>");
        // console.log("res", res);
        app.get("/", (req, res) => {
            res.send(__dirname + "/index.html");
        });
    }
});

app.listen(8080, () => console.log("The server is waiting"));
