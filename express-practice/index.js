const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const basicAuth = require("basic-auth");

//***basicAuth ***/
const myAuth = function (req, res, next) {
    const credentials = basicAuth(req);
    if (
        !credentials ||
        credentials.name != "myproject" ||
        credentials.pass != "mypassword1"
    ) {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="You need to say who you are!"'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};
app.use("/carousel", myAuth);
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
    }
});
app.listen(8080, () => console.log("The server is waiting"));
