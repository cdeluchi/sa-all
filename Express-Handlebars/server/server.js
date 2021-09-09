const PORT = 8080;
const express = require("express");
const hb = require("express-handlebars");
const path = require("path");
const app = express();
const projects = require("./projects.json");

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

const publicPath = path.join(__dirname, "..", "public");
console.log("PublicPath", publicPath);

app.use(express.static(publicPath));
app.use(express.static("./project"));

app.get("/", (req, res) => {
    res.render("home", {
        name: "project",
        message: "Welcome!",
        projects,
    });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));
