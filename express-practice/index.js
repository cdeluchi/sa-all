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

app.get("/carousel", (req, res) => {
    res.sendFile(__dirname + "/index.html");
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
    } else {
        res.redirect("/");
    }
});

app.listen(8080, () => console.log("The server is waiting"));
