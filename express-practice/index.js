const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("./projects"));
app.use((req, res, next) => {
    if (req.url !== "/cookie" && req.cookies.cookieAccepted !== "true") {
        res.cookie("requrl", `${req.url}`);
        res.redirect("/cookie");
    } else {
        next();
    }
    // console.log(`A ${req.method} request was made to the ${req.url} route`);
});
app.get("/", (req, res) => {
    res.send("<h1>This is home! 🙌</h1>");
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
        res.redirect(req.cookies.requrl);
    } else {
        res.send("<h2>It's better if you accept the cookies 🥊</h2>");
        // console.log("res", res);
    }
});
// res.send(generateOverview + "/project");

app.listen(8080, () => console.log("The server is waiting"));
